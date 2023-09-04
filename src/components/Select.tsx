import React from "react";
import MuiSelect from "@mui/material/Select";

export default function Select(props: any) {
  return <MuiSelect {...props}>{props?.children}</MuiSelect>;
}
