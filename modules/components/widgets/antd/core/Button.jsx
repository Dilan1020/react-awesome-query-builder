/* eslint-disable react/display-name */
import React from "react";
// import { Button } from "antd";
import Button from '@material-ui/core/Button'
import PlusOutlined from "@ant-design/icons/PlusOutlined";
import PlusCircleOutlined from "@ant-design/icons/PlusCircleOutlined";
import DeleteFilled from "@ant-design/icons/DeleteFilled";

export default ({type, onClick, label, config: {settings}}) => {
  const typeToIcon = {
    "addRule": <PlusOutlined />,
    "addGroup": <PlusCircleOutlined />,
    "delRule": <DeleteFilled />, //?
    "delGroup": <DeleteFilled />,

    "addRuleGroup": <PlusOutlined />,
    "delRuleGroup": <DeleteFilled />,
  };

  const typeToClass = {
    "addRule": "action action--ADD-RULE",
    "addGroup": "action action--ADD-GROUP",
    "delRule": "action action--DELETE", //?
    "delGroup": "action action--DELETE",

    "addRuleGroup": <PlusOutlined />,
    "delRuleGroup": <DeleteFilled />,
  };

  const typeToType = {
    "delRule": "danger",
    "delGroup": "danger",
    "delRuleGroup": "danger",
  };

  const {renderSize} = settings;

  const btnLabel = type == "addRuleGroup" ? "" : label;

  return (
    <Button
      key={type}
      // type={typeToType[type] || "default"}
      // icon={typeToIcon[type]}
      variant={typeToType[type] || "default"}
      startIcon={typeToIcon[type]}
      className={typeToClass[type]}
      onClick={onClick}
      size={renderSize}
    >{btnLabel}</Button>
  );
};
