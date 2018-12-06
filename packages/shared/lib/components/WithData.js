"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WithData;

var _react = _interopRequireWildcard(require("react"));

var _WithState = _interopRequireDefault(require("./WithState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function WithData(TargetComponent) {
  var WithData =
  /*#__PURE__*/
  function (_Component) {
    _inherits(WithData, _Component);

    function WithData() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, WithData);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WithData)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        data: null,
        errors: null
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "fetchData",
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                alert("Hey!!!!");
                /* const { apiState, fetcher, mapper } = this.props;
                 try {
                    apiState.pending();
                    const result = await fetcher();
                    const data = mapper(result);
                    this.setState({ data });
                    apiState.success();
                } catch (errors) {
                    apiState.error();
                    this.setState({ errors });
                } */

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      })));

      return _this;
    }

    _createClass(WithData, [{
      key: "componentDidMount",
      value: function componentDidMount() {//this.fetchData();
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            mapper = _this$props.mapper,
            fetcher = _this$props.fetcher,
            rest = _objectWithoutProperties(_this$props, ["mapper", "fetcher"]);

        return _react.default.createElement(TargetComponent, _extends({}, rest, {
          data: this.state.data,
          errors: this.state.errors,
          refetchData: this.fetchData
        }));
      }
    }]);

    return WithData;
  }(_react.Component);

  _defineProperty(WithData, "defaultProps", {
    mapper: function mapper(f) {
      return f;
    }
  });

  return (0, _WithState.default)(WithData);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpdGhEYXRhLmpzIl0sIm5hbWVzIjpbIldpdGhEYXRhIiwiVGFyZ2V0Q29tcG9uZW50IiwiZGF0YSIsImVycm9ycyIsImFsZXJ0IiwicHJvcHMiLCJtYXBwZXIiLCJmZXRjaGVyIiwicmVzdCIsInN0YXRlIiwiZmV0Y2hEYXRhIiwiQ29tcG9uZW50IiwiZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZSxTQUFTQSxRQUFULENBQWtCQyxlQUFsQixFQUFtQztBQUFBLE1BQ3hDRCxRQUR3QztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQSxzRkFJbEM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFLElBQVI7QUFBY0MsUUFBQUEsTUFBTSxFQUFFO0FBQXRCLE9BSmtDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBVTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUkMsZ0JBQUFBLEtBQUssQ0FBQyxTQUFELENBQUw7QUFDQTs7Ozs7Ozs7Ozs7O0FBRlE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FWOEI7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsMENBTXRCLENBQ2hCO0FBQ0g7QUFSeUM7QUFBQTtBQUFBLCtCQTBCakM7QUFBQSwwQkFDZ0MsS0FBS0MsS0FEckM7QUFBQSxZQUNHQyxNQURILGVBQ0dBLE1BREg7QUFBQSxZQUNXQyxPQURYLGVBQ1dBLE9BRFg7QUFBQSxZQUN1QkMsSUFEdkI7O0FBRUwsZUFDSSw2QkFBQyxlQUFELGVBQ1FBLElBRFI7QUFFSSxVQUFBLElBQUksRUFBRSxLQUFLQyxLQUFMLENBQVdQLElBRnJCO0FBR0ksVUFBQSxNQUFNLEVBQUUsS0FBS08sS0FBTCxDQUFXTixNQUh2QjtBQUlJLFVBQUEsV0FBVyxFQUFFLEtBQUtPO0FBSnRCLFdBREo7QUFRSDtBQXBDeUM7O0FBQUE7QUFBQSxJQUN2QkMsZ0JBRHVCOztBQUFBLGtCQUN4Q1gsUUFEd0Msa0JBRXBCO0FBQUVNLElBQUFBLE1BQU0sRUFBRSxnQkFBQU0sQ0FBQztBQUFBLGFBQUlBLENBQUo7QUFBQTtBQUFYLEdBRm9COztBQXVDOUMsU0FBTyx3QkFBVVosUUFBVixDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgV2l0aFN0YXRlIGZyb20gXCIuL1dpdGhTdGF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaXRoRGF0YShUYXJnZXRDb21wb25lbnQpIHtcbiAgICBjbGFzcyBXaXRoRGF0YSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7IG1hcHBlcjogZiA9PiBmIH07XG5cbiAgICAgICAgc3RhdGUgPSB7IGRhdGE6IG51bGwsIGVycm9yczogbnVsbCB9O1xuXG4gICAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgLy90aGlzLmZldGNoRGF0YSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgYWxlcnQoXCJIZXkhISEhXCIpO1xuICAgICAgICAgICAgLyogY29uc3QgeyBhcGlTdGF0ZSwgZmV0Y2hlciwgbWFwcGVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGFwaVN0YXRlLnBlbmRpbmcoKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaGVyKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IG1hcHBlcihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhIH0pO1xuICAgICAgICAgICAgICAgIGFwaVN0YXRlLnN1Y2Nlc3MoKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9ycykge1xuICAgICAgICAgICAgICAgIGFwaVN0YXRlLmVycm9yKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9ycyB9KTtcbiAgICAgICAgICAgIH0gKi9cbiAgICAgICAgfVxuXG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgbWFwcGVyLCBmZXRjaGVyLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8VGFyZ2V0Q29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgICAgICAgICBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9XG4gICAgICAgICAgICAgICAgICAgIGVycm9ycz17dGhpcy5zdGF0ZS5lcnJvcnN9XG4gICAgICAgICAgICAgICAgICAgIHJlZmV0Y2hEYXRhPXt0aGlzLmZldGNoRGF0YX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBXaXRoU3RhdGUoV2l0aERhdGEpO1xufVxuIl19