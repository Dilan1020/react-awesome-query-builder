"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _PlusOutlined = _interopRequireDefault(require("@ant-design/icons/PlusOutlined"));

var _PlusCircleOutlined = _interopRequireDefault(require("@ant-design/icons/PlusCircleOutlined"));

var _DeleteFilled = _interopRequireDefault(require("@ant-design/icons/DeleteFilled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable react/display-name */
// import { Button } from "antd";
var _default = function _default(_ref) {
  var type = _ref.type,
      onClick = _ref.onClick,
      label = _ref.label,
      settings = _ref.config.settings;
  var typeToIcon = {
    "addRule": /*#__PURE__*/_react["default"].createElement(_PlusOutlined["default"], null),
    "addGroup": /*#__PURE__*/_react["default"].createElement(_PlusCircleOutlined["default"], null),
    "delRule": /*#__PURE__*/_react["default"].createElement(_DeleteFilled["default"], null),
    //?
    "delGroup": /*#__PURE__*/_react["default"].createElement(_DeleteFilled["default"], null),
    "addRuleGroup": /*#__PURE__*/_react["default"].createElement(_PlusOutlined["default"], null),
    "delRuleGroup": /*#__PURE__*/_react["default"].createElement(_DeleteFilled["default"], null)
  };
  var typeToClass = {
    "addRule": "action action--ADD-RULE",
    "addGroup": "action action--ADD-GROUP",
    "delRule": "action action--DELETE",
    //?
    "delGroup": "action action--DELETE",
    "addRuleGroup": /*#__PURE__*/_react["default"].createElement(_PlusOutlined["default"], null),
    "delRuleGroup": /*#__PURE__*/_react["default"].createElement(_DeleteFilled["default"], null)
  };
  var typeToType = {
    "delRule": "danger",
    "delGroup": "danger",
    "delRuleGroup": "danger"
  };
  var renderSize = settings.renderSize;
  var btnLabel = type == "addRuleGroup" ? "" : label;
  return /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    key: type // type={typeToType[type] || "default"}
    // icon={typeToIcon[type]}
    ,
    variant: typeToType[type] || "default",
    startIcon: typeToIcon[type],
    className: typeToClass[type],
    onClick: onClick,
    size: renderSize
  }, btnLabel);
};

exports["default"] = _default;