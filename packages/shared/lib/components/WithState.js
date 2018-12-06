"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WithState;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var State = {
  IDLE: 1,
  PENDING: 2,
  SUCCESS: 3,
  ERROR: 4
};

function WithState(TargetComponent) {
  return (
    /*#__PURE__*/
    function (_Component) {
      _inherits(StateMachineWrapper, _Component);

      function StateMachineWrapper() {
        var _getPrototypeOf2;

        var _this;

        _classCallCheck(this, StateMachineWrapper);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StateMachineWrapper)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
          current: State.IDLE
        });

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "apiState", {
          pending: function pending() {
            return _this.setState(function (prevState) {
              return _objectSpread({}, prevState, {
                current: State.PENDING
              });
            });
          },
          success: function success() {
            return _this.setState(function (prevState) {
              return _objectSpread({}, prevState, {
                current: State.SUCCESS
              });
            });
          },
          error: function error() {
            return _this.setState(function (prevState) {
              return _objectSpread({}, prevState, {
                current: State.ERROR
              });
            });
          },
          idle: function idle() {
            return _this.setState(function (prevState) {
              return _objectSpread({}, prevState, {
                current: State.IDLE
              });
            });
          },
          isPending: function isPending() {
            return _this.state.current === State.PENDING;
          },
          isSuccess: function isSuccess() {
            return _this.state.current === State.SUCCESS;
          },
          isError: function isError() {
            return _this.state.current === State.ERROR;
          },
          isIdle: function isIdle() {
            return _this.state.current === State.IDLE;
          }
        });

        return _this;
      }

      _createClass(StateMachineWrapper, [{
        key: "render",
        value: function render() {
          return _react.default.createElement(TargetComponent, _extends({}, this.props, {
            apiState: this.apiState
          }));
        }
      }]);

      return StateMachineWrapper;
    }(_react.Component)
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpdGhTdGF0ZS5qcyJdLCJuYW1lcyI6WyJTdGF0ZSIsIklETEUiLCJQRU5ESU5HIiwiU1VDQ0VTUyIsIkVSUk9SIiwiV2l0aFN0YXRlIiwiVGFyZ2V0Q29tcG9uZW50IiwiY3VycmVudCIsInBlbmRpbmciLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsInN1Y2Nlc3MiLCJlcnJvciIsImlkbGUiLCJpc1BlbmRpbmciLCJzdGF0ZSIsImlzU3VjY2VzcyIsImlzRXJyb3IiLCJpc0lkbGUiLCJwcm9wcyIsImFwaVN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxLQUFLLEdBQUc7QUFDVkMsRUFBQUEsSUFBSSxFQUFFLENBREk7QUFFVkMsRUFBQUEsT0FBTyxFQUFFLENBRkM7QUFHVkMsRUFBQUEsT0FBTyxFQUFFLENBSEM7QUFJVkMsRUFBQUEsS0FBSyxFQUFFO0FBSkcsQ0FBZDs7QUFPZSxTQUFTQyxTQUFULENBQW1CQyxlQUFuQixFQUFvQztBQUMvQztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQSx3RkFDWTtBQUNKQyxVQUFBQSxPQUFPLEVBQUVQLEtBQUssQ0FBQ0M7QUFEWCxTQURaOztBQUFBLDJGQUtlO0FBQ1BPLFVBQUFBLE9BQU8sRUFBRTtBQUFBLG1CQUFNLE1BQUtDLFFBQUwsQ0FBYyxVQUFBQyxTQUFTO0FBQUEsdUNBQy9CQSxTQUQrQjtBQUVsQ0gsZ0JBQUFBLE9BQU8sRUFBRVAsS0FBSyxDQUFDRTtBQUZtQjtBQUFBLGFBQXZCLENBQU47QUFBQSxXQURGO0FBS1BTLFVBQUFBLE9BQU8sRUFBRTtBQUFBLG1CQUFNLE1BQUtGLFFBQUwsQ0FBYyxVQUFBQyxTQUFTO0FBQUEsdUNBQy9CQSxTQUQrQjtBQUVsQ0gsZ0JBQUFBLE9BQU8sRUFBRVAsS0FBSyxDQUFDRztBQUZtQjtBQUFBLGFBQXZCLENBQU47QUFBQSxXQUxGO0FBU1BTLFVBQUFBLEtBQUssRUFBRTtBQUFBLG1CQUFNLE1BQUtILFFBQUwsQ0FBYyxVQUFBQyxTQUFTO0FBQUEsdUNBQzdCQSxTQUQ2QjtBQUVoQ0gsZ0JBQUFBLE9BQU8sRUFBRVAsS0FBSyxDQUFDSTtBQUZpQjtBQUFBLGFBQXZCLENBQU47QUFBQSxXQVRBO0FBYVBTLFVBQUFBLElBQUksRUFBRTtBQUFBLG1CQUFNLE1BQUtKLFFBQUwsQ0FBYyxVQUFBQyxTQUFTO0FBQUEsdUNBQzVCQSxTQUQ0QjtBQUUvQkgsZ0JBQUFBLE9BQU8sRUFBRVAsS0FBSyxDQUFDQztBQUZnQjtBQUFBLGFBQXZCLENBQU47QUFBQSxXQWJDO0FBaUJQYSxVQUFBQSxTQUFTLEVBQUU7QUFBQSxtQkFBTSxNQUFLQyxLQUFMLENBQVdSLE9BQVgsS0FBdUJQLEtBQUssQ0FBQ0UsT0FBbkM7QUFBQSxXQWpCSjtBQWtCUGMsVUFBQUEsU0FBUyxFQUFFO0FBQUEsbUJBQU0sTUFBS0QsS0FBTCxDQUFXUixPQUFYLEtBQXVCUCxLQUFLLENBQUNHLE9BQW5DO0FBQUEsV0FsQko7QUFtQlBjLFVBQUFBLE9BQU8sRUFBRTtBQUFBLG1CQUFNLE1BQUtGLEtBQUwsQ0FBV1IsT0FBWCxLQUF1QlAsS0FBSyxDQUFDSSxLQUFuQztBQUFBLFdBbkJGO0FBb0JQYyxVQUFBQSxNQUFNLEVBQUU7QUFBQSxtQkFBTSxNQUFLSCxLQUFMLENBQVdSLE9BQVgsS0FBdUJQLEtBQUssQ0FBQ0MsSUFBbkM7QUFBQTtBQXBCRCxTQUxmOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLGlDQTRCYTtBQUNMLGlCQUFPLDZCQUFDLGVBQUQsZUFBcUIsS0FBS2tCLEtBQTFCO0FBQWlDLFlBQUEsUUFBUSxFQUFFLEtBQUtDO0FBQWhELGFBQVA7QUFDSDtBQTlCTDs7QUFBQTtBQUFBLE1BQXlDQyxnQkFBekM7QUFBQTtBQWdDSCIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFN0YXRlID0ge1xuICAgIElETEU6IDEsXG4gICAgUEVORElORzogMixcbiAgICBTVUNDRVNTOiAzLFxuICAgIEVSUk9SOiA0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2l0aFN0YXRlKFRhcmdldENvbXBvbmVudCkge1xuICAgIHJldHVybiBjbGFzcyBTdGF0ZU1hY2hpbmVXcmFwcGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICBjdXJyZW50OiBTdGF0ZS5JRExFXG4gICAgICAgIH1cblxuICAgICAgICBhcGlTdGF0ZSA9IHtcbiAgICAgICAgICAgIHBlbmRpbmc6ICgpID0+IHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICAgICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IFN0YXRlLlBFTkRJTkcsXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICAgICAgICBjdXJyZW50OiBTdGF0ZS5TVUNDRVNTXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICBlcnJvcjogKCkgPT4gdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgICAgICAgICAgY3VycmVudDogU3RhdGUuRVJST1IsXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICBpZGxlOiAoKSA9PiB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICAgICAgICBjdXJyZW50OiBTdGF0ZS5JRExFLFxuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgaXNQZW5kaW5nOiAoKSA9PiB0aGlzLnN0YXRlLmN1cnJlbnQgPT09IFN0YXRlLlBFTkRJTkcsXG4gICAgICAgICAgICBpc1N1Y2Nlc3M6ICgpID0+IHRoaXMuc3RhdGUuY3VycmVudCA9PT0gU3RhdGUuU1VDQ0VTUyxcbiAgICAgICAgICAgIGlzRXJyb3I6ICgpID0+IHRoaXMuc3RhdGUuY3VycmVudCA9PT0gU3RhdGUuRVJST1IsXG4gICAgICAgICAgICBpc0lkbGU6ICgpID0+IHRoaXMuc3RhdGUuY3VycmVudCA9PT0gU3RhdGUuSURMRVxuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIDxUYXJnZXRDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IGFwaVN0YXRlPXt0aGlzLmFwaVN0YXRlfSAvPjtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=