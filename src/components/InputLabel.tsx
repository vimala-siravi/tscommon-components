import React from "react";
import MuiInputLabel from "@mui/material/InputLabel";

function InputLabel(props: any) {
  return <MuiInputLabel {...props}>{props?.children}</MuiInputLabel>;
}

export default InputLabel;
