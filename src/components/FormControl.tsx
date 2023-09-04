import React from "react";
import MuiFormControl from "@mui/material/FormControl";

export default function FormControl(props: any) {
  return <MuiFormControl {...props}>{props?.children}</MuiFormControl>;
}
