import React from "react";
import MuiButton from "@mui/material/Button";

export interface ButtonProps {
  children: any;
}

const Button = (props: ButtonProps) => {
  return <MuiButton {...props}>{props?.children}</MuiButton>;
};

export default Button;
