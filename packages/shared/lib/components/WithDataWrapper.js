"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _WithState = _interopRequireDefault(require("./WithState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var WithDataWrapper =
/*#__PURE__*/
function (_Component) {
  _inherits(WithDataWrapper, _Component);

  function WithDataWrapper() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, WithDataWrapper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WithDataWrapper)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      data: null,
      errors: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "fetchData",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var _this$props, apiState, fetcher, mapper, result, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = _this.props, apiState = _this$props.apiState, fetcher = _this$props.fetcher, mapper = _this$props.mapper;
              _context.prev = 1;
              apiState.pending();
              _context.next = 5;
              return fetcher();

            case 5:
              result = _context.sent;
              data = mapper(result);

              _this.setState({
                data: data
              });

              apiState.success();
              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              apiState.error();

              _this.setState({
                errors: _context.t0
              });

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[1, 11]]);
    })));

    return _this;
  }

  _createClass(WithDataWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchData();
    }
  }, {
    key: "render",
    value: function render() {
      var apiState = this.props.apiState;
      console.log('apiState => ', apiState);
      return this.props.render({
        apiState: apiState,
        fetchData: this.fetchData,
        data: this.state.data,
        errors: this.state.errors
      });
    }
  }]);

  return WithDataWrapper;
}(_react.Component);

_defineProperty(WithDataWrapper, "defaultProps", {
  mapper: function mapper(f) {
    return f;
  }
});

var _default = (0, _WithState.default)(WithDataWrapper);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpdGhEYXRhV3JhcHBlci5qcyJdLCJuYW1lcyI6WyJXaXRoRGF0YVdyYXBwZXIiLCJkYXRhIiwiZXJyb3JzIiwicHJvcHMiLCJhcGlTdGF0ZSIsImZldGNoZXIiLCJtYXBwZXIiLCJwZW5kaW5nIiwicmVzdWx0Iiwic2V0U3RhdGUiLCJzdWNjZXNzIiwiZXJyb3IiLCJmZXRjaERhdGEiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIiwic3RhdGUiLCJDb21wb25lbnQiLCJmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O29GQUdNO0FBQUVDLE1BQUFBLElBQUksRUFBRSxJQUFSO0FBQWNDLE1BQUFBLE1BQU0sRUFBRTtBQUF0QixLOzs7Ozs7NEJBTUk7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUM4QixNQUFLQyxLQURuQyxFQUNBQyxRQURBLGVBQ0FBLFFBREEsRUFDVUMsT0FEVixlQUNVQSxPQURWLEVBQ21CQyxNQURuQixlQUNtQkEsTUFEbkI7QUFBQTtBQUlKRixjQUFBQSxRQUFRLENBQUNHLE9BQVQ7QUFKSTtBQUFBLHFCQUtpQkYsT0FBTyxFQUx4Qjs7QUFBQTtBQUtFRyxjQUFBQSxNQUxGO0FBTUVQLGNBQUFBLElBTkYsR0FNU0ssTUFBTSxDQUFDRSxNQUFELENBTmY7O0FBT0osb0JBQUtDLFFBQUwsQ0FBYztBQUFFUixnQkFBQUEsSUFBSSxFQUFKQTtBQUFGLGVBQWQ7O0FBQ0FHLGNBQUFBLFFBQVEsQ0FBQ00sT0FBVDtBQVJJO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBVUpOLGNBQUFBLFFBQVEsQ0FBQ08sS0FBVDs7QUFDQSxvQkFBS0YsUUFBTCxDQUFjO0FBQUVQLGdCQUFBQSxNQUFNO0FBQVIsZUFBZDs7QUFYSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLOzs7Ozs7O3dDQUpRO0FBQ2hCLFdBQUtVLFNBQUw7QUFDSDs7OzZCQWlCUTtBQUFBLFVBQ0dSLFFBREgsR0FDZ0IsS0FBS0QsS0FEckIsQ0FDR0MsUUFESDtBQUVMUyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCVixRQUE1QjtBQUNBLGFBQU8sS0FBS0QsS0FBTCxDQUFXWSxNQUFYLENBQWtCO0FBQ3JCWCxRQUFBQSxRQUFRLEVBQVJBLFFBRHFCO0FBRXJCUSxRQUFBQSxTQUFTLEVBQUUsS0FBS0EsU0FGSztBQUdyQlgsUUFBQUEsSUFBSSxFQUFFLEtBQUtlLEtBQUwsQ0FBV2YsSUFISTtBQUlyQkMsUUFBQUEsTUFBTSxFQUFFLEtBQUtjLEtBQUwsQ0FBV2Q7QUFKRSxPQUFsQixDQUFQO0FBTUg7Ozs7RUFqQ3lCZSxnQjs7Z0JBQXhCakIsZSxrQkFDb0I7QUFBRU0sRUFBQUEsTUFBTSxFQUFFLGdCQUFBWSxDQUFDO0FBQUEsV0FBSUEsQ0FBSjtBQUFBO0FBQVgsQzs7ZUFvQ1gsd0JBQVVsQixlQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICBXaXRoU3RhdGUgZnJvbSBcIi4vV2l0aFN0YXRlXCI7XG5cbmNsYXNzIFdpdGhEYXRhV3JhcHBlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHsgbWFwcGVyOiBmID0+IGYgfTtcblxuICAgIHN0YXRlID0geyBkYXRhOiBudWxsLCBlcnJvcnM6IG51bGwgfTtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmZldGNoRGF0YSgpO1xuICAgIH1cblxuICAgIGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBhcGlTdGF0ZSwgZmV0Y2hlciwgbWFwcGVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhcGlTdGF0ZS5wZW5kaW5nKCk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaGVyKCk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gbWFwcGVyKHJlc3VsdCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YSB9KTtcbiAgICAgICAgICAgIGFwaVN0YXRlLnN1Y2Nlc3MoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3JzKSB7XG4gICAgICAgICAgICBhcGlTdGF0ZS5lcnJvcigpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9ycyB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBhcGlTdGF0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc29sZS5sb2coJ2FwaVN0YXRlID0+ICcsIGFwaVN0YXRlKVxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5yZW5kZXIoe1xuICAgICAgICAgICAgYXBpU3RhdGUsXG4gICAgICAgICAgICBmZXRjaERhdGE6IHRoaXMuZmV0Y2hEYXRhLFxuICAgICAgICAgICAgZGF0YTogdGhpcy5zdGF0ZS5kYXRhLFxuICAgICAgICAgICAgZXJyb3JzOiB0aGlzLnN0YXRlLmVycm9yc1xuICAgICAgICB9KVxuICAgIH1cbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2l0aFN0YXRlKFdpdGhEYXRhV3JhcHBlcik7XG4iXX0=