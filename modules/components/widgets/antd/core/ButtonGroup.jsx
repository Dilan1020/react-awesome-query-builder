import React from "react";
// import { Button } from "antd";
import ButtonGroup from '@material-ui/core/ButtonGroup'

export default ({children, config: {settings}}) => {
  const {renderSize} = settings;
  return <ButtonGroup
    size={renderSize}
    color="primary"
    variant="outlined"
  >{children}</ButtonGroup>;
};
