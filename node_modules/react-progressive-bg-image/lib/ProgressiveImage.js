'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DELAY = undefined;
exports.ownerPropsToChildProps = ownerPropsToChildProps;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _setDisplayName = require('recompose/setDisplayName');

var _setDisplayName2 = _interopRequireDefault(_setDisplayName);

var _defaultProps = require('recompose/defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _setPropTypes = require('recompose/setPropTypes');

var _setPropTypes2 = _interopRequireDefault(_setPropTypes);

var _mapPropsStream = require('recompose/mapPropsStream');

var _mapPropsStream2 = _interopRequireDefault(_mapPropsStream);

var _Observable = require('rxjs/Observable');

var _async = require('rxjs/scheduler/async');

require('rxjs/add/operator/combineLatest');

require('rxjs/add/operator/pluck');

require('rxjs/add/operator/startWith');

require('rxjs/add/operator/switchMapTo');

require('rxjs/add/operator/delay');

require('rxjs/add/operator/merge');

require('rxjs/add/operator/filter');

require('rxjs/add/operator/switchMap');

require('rxjs/add/operator/mapTo');

require('rxjs/add/operator/switch');

require('rxjs/add/operator/map');

require('rxjs/add/operator/distinctUntilChanged');

require('rxjs/add/observable/from');

require('rxjs/add/observable/of');

require('rxjs/add/observable/merge');

var _Img = require('./Img');

var _Img2 = _interopRequireDefault(_Img);

var _loadImage = require('./loadImage');

var _loadImage2 = _interopRequireDefault(_loadImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DELAY = exports.DELAY = 200;

function ownerPropsToChildProps(propStream) // rx scheduler
{
  var imagePromise = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _loadImage2.default;
  var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DELAY;
  var scheduler = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _async.async;

  var props$ = _Observable.Observable.from(propStream);
  var placeholder$ = props$.pluck('placeholder');
  var imagePromise$ = props$.pluck('src').switchMap(imagePromise).startWith({ src: '', isCached: false });

  var src$ = imagePromise$.pluck('src').filter(function (src) {
    return !!src;
  });
  var isCached$ = imagePromise$.pluck('isCached').distinctUntilChanged();

  var isLoaded$ = _Observable.Observable.merge(placeholder$.mapTo(_Observable.Observable.of(false)), imagePromise$.map(function (_ref) {
    var isCached = _ref.isCached;
    return _Observable.Observable.of(true).delay(isCached ? 0 : t, scheduler);
  })).switch().startWith(false).distinctUntilChanged();

  var image$ = placeholder$.merge(src$).distinctUntilChanged();

  return props$.combineLatest(image$, isCached$, isLoaded$, function (props, image, isCached, isLoaded) {
    return Object.assign({}, props, {
      image: image,
      isCached: isCached,
      isLoaded: isLoaded
    });
  });
}

exports.default = (0, _compose2.default)((0, _setDisplayName2.default)('ProgressiveImage'), (0, _setPropTypes2.default)({
  src: _propTypes2.default.string.isRequired,
  placeholder: _propTypes2.default.string.isRequired,
  opacity: _propTypes2.default.number,
  blur: _propTypes2.default.number,
  scale: _propTypes2.default.number,
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func])
}), (0, _defaultProps2.default)({
  opacity: 0.5,
  blur: 20,
  scale: 1,
  transition: 'opacity 0.3s linear',
  component: 'div'
}), (0, _mapPropsStream2.default)(ownerPropsToChildProps))(_Img2.default);