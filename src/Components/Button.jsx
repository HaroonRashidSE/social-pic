import React from "react";
import { Button } from "@material-ui/core";
export default function ButtonComponent({ variant, color, className, title }) {
  return (
    <Button variant={variant} color={color} className={className}>
      {title}
    </Button>
  );
}
