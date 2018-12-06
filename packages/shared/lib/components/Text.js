"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Test =
/*#__PURE__*/
function (_Component) {
  _inherits(Test, _Component);

  function Test() {
    _classCallCheck(this, Test);

    return _possibleConstructorReturn(this, _getPrototypeOf(Test).apply(this, arguments));
  }

  _createClass(Test, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "main-container"
      }, _react.default.createElement("div", {
        className: "container"
      }, _react.default.createElement("h1", null, "Monorepo Demo1111"), _react.default.createElement("p", {
        style: {
          marginBottom: "10px"
        }
      }, "This text is coming from shared component:", " ", _react.default.createElement("span", {
        style: {
          color: "red"
        }
      }, "Test")), _react.default.createElement("button", {
        style: {
          marginBottom: "10px",
          backgroundColor: "#4CAF50",
          border: "none",
          color: "white",
          padding: "15px 32px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px"
        }
      }, "Trigger shared alert")));
    }
  }]);

  return Test;
}(_react.Component);

var _default = Test;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1RleHQuanMiXSwibmFtZXMiOlsiVGVzdCIsIm1hcmdpbkJvdHRvbSIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwicGFkZGluZyIsInRleHRBbGlnbiIsInRleHREZWNvcmF0aW9uIiwiZGlzcGxheSIsImZvbnRTaXplIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsSTs7Ozs7Ozs7Ozs7Ozs2QkFDSztBQUNQLGFBQ0U7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0UsNkRBREYsRUFFRTtBQUFHLFFBQUEsS0FBSyxFQUFFO0FBQUVDLFVBQUFBLFlBQVksRUFBRTtBQUFoQjtBQUFWLHVEQUM2QyxHQUQ3QyxFQUVFO0FBQU0sUUFBQSxLQUFLLEVBQUU7QUFBRUMsVUFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBYixnQkFGRixDQUZGLEVBTUU7QUFDRSxRQUFBLEtBQUssRUFBRTtBQUNMRCxVQUFBQSxZQUFZLEVBQUUsTUFEVDtBQUVMRSxVQUFBQSxlQUFlLEVBQUUsU0FGWjtBQUdMQyxVQUFBQSxNQUFNLEVBQUUsTUFISDtBQUlMRixVQUFBQSxLQUFLLEVBQUUsT0FKRjtBQUtMRyxVQUFBQSxPQUFPLEVBQUUsV0FMSjtBQU1MQyxVQUFBQSxTQUFTLEVBQUUsUUFOTjtBQU9MQyxVQUFBQSxjQUFjLEVBQUUsTUFQWDtBQVFMQyxVQUFBQSxPQUFPLEVBQUUsY0FSSjtBQVNMQyxVQUFBQSxRQUFRLEVBQUU7QUFUTDtBQURULGdDQU5GLENBREYsQ0FERjtBQTBCRDs7OztFQTVCZ0JDLGdCOztlQStCSlYsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgVGVzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxoMT5Nb25vcmVwbyBEZW1vMTExMTwvaDE+XG4gICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5cbiAgICAgICAgICAgIFRoaXMgdGV4dCBpcyBjb21pbmcgZnJvbSBzaGFyZWQgY29tcG9uZW50OntcIiBcIn1cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PlRlc3Q8L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNENBRjUwXCIsXG4gICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTVweCAzMnB4XCIsXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNnB4XCJcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVHJpZ2dlciBzaGFyZWQgYWxlcnRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3Q7XG4iXX0=