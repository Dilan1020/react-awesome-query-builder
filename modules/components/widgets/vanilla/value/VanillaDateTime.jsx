import React from "react";
import dayjs from "dayjs";

export default (props) => {
  const {value, setValue, config, valueFormat, use12Hours, readonly} = props;

  const onChange = e => {
    let value = e.target.value;
    if (value == "")
      value = undefined;
    else
      value = dayjs(new Date(value)).format(valueFormat);
    setValue(value);
  };

  let dtValue = value;
  if (!value)
    dtValue = "";
  else
    dtValue = dayjs(value).format("YYYY-MM-DDTHH:mm");
  
  return (
    <input type="datetime-local"  value={dtValue}  disabled={readonly} onChange={onChange} />
  );
};
