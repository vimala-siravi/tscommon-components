import React from "react";
import MuiButton from "@mui/material/Button";

const Button = (props: any) => {
  return <MuiButton {...props}>{props?.children}</MuiButton>;
};

export default Button;
