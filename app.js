/// <reference types="@argonjs/argon" />
/// <reference types="three" />
/// <reference types="dat-gui" />
/// <reference types="stats" />
// set up Argon
var app = Argon.init();
// set up THREE.  Create a scene, a perspective camera and an object
// for the user's location
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera();
var userLocation = new THREE.Object3D();
scene.add(camera);
scene.add(userLocation);
// We use the standard WebGLRenderer when we only need WebGL-based content
var renderer = new THREE.WebGLRenderer({
    alpha: true,
    logarithmicDepthBuffer: true
});
// account for the pixel density of the device
renderer.setPixelRatio(window.devicePixelRatio);
app.view.element.appendChild(renderer.domElement);
// to easily control stuff on the display
var hud = new THREE.CSS3DArgonHUD();
// We put some elements in the index.html, for convenience.
// Here, we retrieve the description box and move it to the
// the CSS3DArgonHUD hudElements[0].  We only put it in the left
// hud since we'll be hiding it in stereo
var description = document.getElementById('description');
hud.hudElements[0].appendChild(description);
app.view.element.appendChild(hud.domElement);
// let's show the rendering stats
var stats = new Stats();
hud.hudElements[0].appendChild(stats.dom);
// Tell argon what local coordinate system you want.  The default coordinate
// frame used by Argon is Cesium's FIXED frame, which is centered at the center
// of the earth and oriented with the earth's axes.
// The FIXED frame is inconvenient for a number of reasons: the numbers used are
// large and cause issues with rendering, and the orientation of the user's "local
// view of the world" is different that the FIXED orientation (my perception of "up"
// does not correspond to one of the FIXED axes).
// Therefore, Argon uses a local coordinate frame that sits on a plane tangent to
// the earth near the user's current location.  This frame automatically changes if the
// user moves more than a few kilometers.
// The EUS frame cooresponds to the typical 3D computer graphics coordinate frame, so we use
// that here.  The other option Argon supports is localOriginEastNorthUp, which is
// more similar to what is used in the geospatial industry
app.context.setDefaultReferenceFrame(app.context.localOriginEastUpSouth);
// create a bit of animated 3D text that says "argon.js" to display
var uniforms = {
    amplitude: { type: "f", value: 0.0 }
};

var argonTextObject = new THREE.Object3D();
argonTextObject.position.z = -0.50;
userLocation.add(argonTextObject);
var loader = new THREE.FontLoader();
loader.load('resources/fonts/helvetiker_bold.typeface.js', function (font) {
    var textGeometry = new THREE.TextGeometry("FIREWALL", {
        font: font,
        size: 40,
        height: 5,
        curveSegments: 3,
        bevelThickness: 2,
        bevelSize: 1,
        bevelEnabled: true
    });
    textGeometry.center();
    var tessellateModifier = new THREE.TessellateModifier(8);
    for (var i = 0; i < 6; i++) {
        tessellateModifier.modify(textGeometry);
    }
    var explodeModifier = new THREE.ExplodeModifier();
    explodeModifier.modify(textGeometry);
    var numFaces = textGeometry.faces.length;
    var bufferGeometry = new THREE.BufferGeometry().fromGeometry(textGeometry);
    var colors = new Float32Array(numFaces * 3 * 3);
    var displacement = new Float32Array(numFaces * 3 * 3);
    var color = new THREE.Color();
    for (var f = 0; f < numFaces; f++) {
        var index = 9 * f;
        var h = 0.07 + 0.1 * Math.random();
        var s = 0.5 + 0.5 * Math.random();
        var l = 0.6 + 0.4 * Math.random();
        color.setHSL(h, s, l);
        var d = 5 + 20 * (0.5 - Math.random());
        for (var i = 0; i < 3; i++) {
            colors[index + (3 * i)] = color.r;
            colors[index + (3 * i) + 1] = color.g;
            colors[index + (3 * i) + 2] = color.b;
            displacement[index + (3 * i)] = d;
            displacement[index + (3 * i) + 1] = d;
            displacement[index + (3 * i) + 2] = d;
        }
    }
    bufferGeometry.addAttribute('customColor', new THREE.BufferAttribute(colors, 3));
    bufferGeometry.addAttribute('displacement', new THREE.BufferAttribute(displacement, 3));
    var shaderMaterial = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: "\n            uniform float amplitude;\n            attribute vec3 customColor;\n            attribute vec3 displacement;\n            varying vec3 vNormal;\n            varying vec3 vColor;\n            void main() {\n                vNormal = normal;\n                vColor = customColor;\n                vec3 newPosition = position + normal * amplitude * displacement;\n                gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );\n            }\n        ",
        fragmentShader: "\n            varying vec3 vNormal;\n            varying vec3 vColor;\n            void main() {\n                const float ambient = 0.4;\n                vec3 light = vec3( 1.0 );\n                light = normalize( light );\n                float directional = max( dot( vNormal, light ), 0.0 );\n                gl_FragColor = vec4( ( directional + ambient ) * vColor, 1.0 );\n            }\n        "
    });
    var textMesh = new THREE.Mesh(bufferGeometry, shaderMaterial);
    argonTextObject.add(textMesh);
    argonTextObject.scale.set(0.001, 0.001, 0.001);
    // add an argon updateEvent listener to slowly change the text over time.
    // we don't have to pack all our logic into one listener.
    app.context.updateEvent.addEventListener(function () {
        uniforms.amplitude.value = 1.0 + Math.sin(Date.now() * 0.001 * 0.5);
    });
});

//loading 3d model
var loader = new THREE.ColladaLoader();
var model_fire = new THREE.Object3D();
loader.options.convertUpAxis = true;

loader.load( 'model.dae', function ( collada ) {
 //dummy1.dae

    var dae = collada.scene;

    var skin = collada.skins[ 0 ];

    dae.position.set(0,0,0);//x,z,y- if you think in blender dimensions ;)
    dae.scale.set(0.001,0.001,0.001);

    model_fire.add(dae);

    //scene.add(dae);

});



app.vuforia.isAvailable().then(function (available) {
    // vuforia not available on this platform
    if (!available) {
        console.warn("vuforia not available on this platform.");
        return;
    }
    // tell argon to initialize vuforia for our app, using our license information.
    app.vuforia.init({
        encryptedLicenseData:
`-----BEGIN PGP MESSAGE-----
Version: OpenPGP.js v2.3.2
Comment: http://openpgpjs.org

wcFMA+gV6pi+O8zeAQ/6A92lRqB7lllXGk9qa/b2ZxzRL5JX6+5cD6n0jyc7
9wgWz5R9OS+rlaqqo9d03ge3ky/OnsvwV9MpOyiXsZSfcW4Yao04Qyh0erMb
RVl3ecoGPZ5c/7IZrgp1JLwW7200ErWVSRTYAnFtFD1w2JXS58oxa4Aax7Ht
Q8vjOaFi0bmEQaXY/LnFWpQQtswt+6+OLKbOti7Q1+BKk2YZ6dC7/DGLt+D6
LtB3k6/fwMUaZfqzCYHMv/WMVeGCyEiEh4Ht46N72/k2JymoHcf4hqw5gHHL
F8bRMiCkQNR5hLjzIzuAkm6YIR5FvxUq8inPxlzTkrFx1uVFNPvYk5m+rZ0r
svY7A3NAn1mKOTi/zddo5GKQupkz0jw+TtUj+uWDQIXpF4Xb0dPUHGowcDAY
imctvnH9uROHFZE9dUxxgaJuoIdavx6pK6YLz5bW3vJJ8tlMHREzHLYKIzXD
VHwdYkY1P8wfXnNqVEy5DNp8bQ199brpTt2SXIPjYfJU2o6UoeJIg/towE6j
Uxqt3V3wT2eXHMhlXNbr5dv2Km65fweYPDnWYrYSCJuKj5Kz8W3m8U7mwe0h
S44HYlKJkvQ8U2gZQ2f3sjsmP9XzzyAg7/70fKGljk0QK9rKHAbNSINe+XPM
k5AYdOemheoK3wkr6oUa+xAyP01l0hRnidzsM3ArVsvBwU4DAGn1enGTza0Q
B/9XkrJtuK1vIK2++E/tduNK37fgFGxtMsgR4ryUFRqDy3dIiatWBGgjy32X
CFviR5Erev8fs3YdIASVj8DxbFeZ8ouC6bMT5SEbMo6OTI86P6KnxOApEGft
1jpmrbu4s5SRJJsTAMBiZn9d8O7GypNikg3w3MwLdGTunWciI6OkOwtB2cJg
adljPW7isFP4DvsufVStTMoVv6UybOwW+x4pX0XSZBgzJdKyziiqzkWj5w4Q
+3ZQM+OE28n2xpW/AZ7abUtQTEG0cG+vxYDS8Z+Mqaam7BF+6s6feBVuG2Rj
54XmujhN7DBM6eSpBZH8jRk3++AsKYkngxY0k+TPZza9B/4n8NPYwJ8u8bdg
sAsvlDeU5MWXHhIXKiOBFtrJxJ6khIm9jZ5Ni3O0ubbP2n6qrXVLQCRo6f36
QLgA1Z2NdvPQ/vhfywIg87cxY2w2hrTfeXS9M9RN2UnQsx1W5oFXAsR9bNxn
mL91elISFDEh6g8ZE7w1yPGLHjOZLsgfckxrjVe3mAeDOvoVyttoT73/B7D9
JwwX4Hq4BERG5ptdToMYbHAAKKiw/BUTI8zt66yecc+8tbXShlrKQLN9fDoe
FZEL34yuYKxsKpdoMELjHMZ3Dz8SelFvaV9HAYAI+GCyt4sw39vENBQcECJs
Otep1YsCK70UNkC4ij6VY/oA61vMwcFMA47tt+RhMWHyARAAyJJmnC9AgvlU
oWDMpc+lMU9aFM3ktw9LiJIiykI2LfjSJ2BOQ9aTvLkjilEpyDYPSaRdNs/f
97vu8a+LpyyZZqLBX6dnlgtG2gtzQLjJ+1DWmzSBsOX3PUJBpO8UrLaXiblY
oBCcuZPa7cRSVjUm06vc7YANJV2/YT5jYDdt+q56yK+Z5eLIq8QVmQ+KqQdK
/p3BjoAqEfl6RmgZcU99gTzEX2rO5P33dVmlx090QccFo8zBYIif4YIn6DX7
pve5TaNSiXo8PuyS4foAWD9r61AilftROT3PjDRY5tq5aUxd2j33oFrYOABG
t+qOD/HuNOtGsbMszz53wysfK3ajYH2CeK7S5dbEWrismlH2nqGryI9um0GE
JKJV+bZOMHQHQUVr6sBE1Pu2/6JRsCBDcU1F4XWpt/NvQWlPGtHnFT8A9myl
MH52z9YXLpC4BIjMUEAMgCjQOreYtpibIUCT3Fj+gmHZize9IBYapME9bZse
/KkBRpyzmZ+y1cwo+yZhM5g+E3I/F8tmMgMj6VUG/MKs4G4Bx4ypv+6N3uOe
ljcPz6h2822z1Q1mQ7CKsl3r7znbrJ4hvGkvP92m0kvmGe1TucGUB7zTPswS
05DJ9abWVKovEpMAA720H2u+tTSaPj87UysxyIrDZToEv/firyHYdbFgEmII
zDj2rBYYymzSwTIB90olxKY/V2wp87mV6gNTyhBZHKJ5xNkoXlPhgrpIo0Qz
F10+rycjwZiAHrp2Q15O/jTmp1CjU6V6e99dkFWmdNRJr+EVqU+L97jRuLlc
AuX8ukeBaoSC3UScn0JnElU31g/BC6sVOzdXx0ddxeg4KmHuPHQS2ZTHzj1z
6DaRH+pMQWkeLFzuAEaSUPHSZp22vRi0juhmQUSuyAJ5Hox1gK0PwgpQy/7X
GUB//fnCbn208yQX9IhToJgz4Ey10ZI1ZmVSGSSiZFlc42ilbo8FLI2x7apO
hCe8gTCt6LpyCqFdT8Ke0Qsa3K7fWxyX3aEsJLwGHG8eE1GmvNUk9xK8iN6a
1f7saOuYgh4MEKJqpqCHLCdx6GCL5GfW5ObCP8RS6l5zx/9pEMZyk1DmXZEw
nvPjv50w6gPJLwU7CTyjJ2pgw0fn5YcmGKCx7Ae54IAI0gbCvgplpvSE5L6O
+COl2EFf44YoZTALQTLzlA5MmMVC0w90tGI26ia6TLXjR2BA5OA1q29a1Ec3
ARm9pIyZ7fpu16cdmBAG8Jki1/JdTGjBRYD/PXw6gKOIU85aFrMWfn9lUJI1
IGCNj2HdHViYWFsF2j2f44B7CZG1RQDPZ6uWO5jkUmz9EFJD+kYzO1axEi2n
2A28+/Par8y1hno/7p0=
=1uwv
-----END PGP MESSAGE-----`
    }).then(function (api) {
        // the vuforia API is ready, so we can start using it.
        // tell argon to download a vuforia dataset.  The .xml and .dat file must be together
        // in the web directory, even though we just provide the .xml file url here
        api.objectTracker.createDataSet("resources/datasets/CyberBoardgame.xml").then(function (dataSet) {
            // the data set has been succesfully downloaded
            // tell vuforia to load the dataset.
            dataSet.load().then(function () {
                // when it is loaded, we retrieve a list of trackables defined in the
                // dataset and set up the content for the target
                var trackables = dataSet.getTrackables();
                // tell argon we want to track a specific trackable.  Each trackable
                // has a Cesium entity associated with it, and is expressed in a
                // coordinate frame relative to the camera.  Because they are Cesium
                // entities, we can ask for their pose in any coordinate frame we know
                // about.
                var gvuBrochureEntity = app.context.subscribeToEntityById(trackables["geo"].id);
                // create a THREE object to put on the trackable
                var gvuBrochureObject = new THREE.Object3D;
                scene.add(gvuBrochureObject);
                // the updateEvent is called each time the 3D world should be
                // rendered, before the renderEvent.  The state of your application
                // should be updated here.

                //add 3d model!!!

                app.context.updateEvent.addEventListener(function () {
                    // get the pose (in local coordinates) of the gvuBrochure target
                    var gvuBrochurePose = app.context.getEntityPose(gvuBrochureEntity);
                    // if the pose is known the target is visible, so set the
                    // THREE object to the location and orientation
                    if (gvuBrochurePose.poseStatus & Argon.PoseStatus.KNOWN) {
                        gvuBrochureObject.position.copy(gvuBrochurePose.position);
                        gvuBrochureObject.quaternion.copy(gvuBrochurePose.orientation);

                    }
                    // when the target is first seen after not being seen, the
                    // status is FOUND.  Here, we move the 3D text object from the
                    // world to the target.
                    // when the target is first lost after being seen, the status
                    // is LOST.  Here, we move the 3D text object back to the world
                    if (gvuBrochurePose.poseStatus & Argon.PoseStatus.FOUND) {
                        gvuBrochureObject.add(argonTextObject);
                        gvuBrochureObject.add(model_fire);
                        argonTextObject.position.z = 0;
                    }
                    else if (gvuBrochurePose.poseStatus & Argon.PoseStatus.LOST) {
                        argonTextObject.position.z = -0.50;
                        userLocation.add(argonTextObject);
                    }
                });
            }).catch(function (err) {
                console.log("could not load dataset: " + err.message);
            });
            // activate the dataset.
            api.objectTracker.activateDataSet(dataSet);
        });
    }).catch(function (err) {
        console.log("vuforia failed to initialize: " + err.message);
    });
});
// the updateEvent is called each time the 3D world should be
// rendered, before the renderEvent.  The state of your application
// should be updated here.
app.context.updateEvent.addEventListener(function () {
    // get the position and orientation (the "pose") of the user
    // in the local coordinate frame.
    var userPose = app.context.getEntityPose(app.context.user);
    // assuming we know the user pose, set the position of our
    // THREE user object to match it
    if (userPose.poseStatus & Argon.PoseStatus.KNOWN) {
        userLocation.position.copy(userPose.position);
    }
});
// renderEvent is fired whenever argon wants the app to update its display
app.renderEvent.addEventListener(function () {
    // update the rendering stats
    stats.update();
    // if we have 1 subView, we're in mono mode.  If more, stereo.
    var monoMode = (app.view.getSubviews()).length == 1;
    // set the renderer to know the current size of the viewport.
    // This is the full size of the viewport, which would include
    // both views if we are in stereo viewing mode
    var viewport = app.view.getViewport();
    renderer.setSize(viewport.width, viewport.height);
    hud.setSize(viewport.width, viewport.height);
    // there is 1 subview in monocular mode, 2 in stereo mode
    for (var _i = 0, _a = app.view.getSubviews(); _i < _a.length; _i++) {
        var subview = _a[_i];
        // set the position and orientation of the camera for
        // this subview
        camera.position.copy(subview.pose.position);
        camera.quaternion.copy(subview.pose.orientation);
        // the underlying system provide a full projection matrix
        // for the camera.
        camera.projectionMatrix.fromArray(subview.projectionMatrix);
        // set the viewport for this view
        var _b = subview.viewport, x = _b.x, y = _b.y, width = _b.width, height = _b.height;
        renderer.setViewport(x, y, width, height);
        // set the webGL rendering parameters and render this view
        renderer.setScissor(x, y, width, height);
        renderer.setScissorTest(true);
        renderer.render(scene, camera);
        // adjust the hud, but only in mono
        if (monoMode) {
            hud.setViewport(x, y, width, height, subview.index);
            hud.render(subview.index);
        }
    }
});
