import React from "react";
import {Text as NBText} from "native-base";

type TextProps = {
  label: String;
  textAlign?: "center" | "left" | "right" | "justify";
  fontSize: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  fontWeight?: any;
  color?: any;
};

const Text = (props: TextProps) => {
  const {label, color = "lightText", textAlign, fontSize, fontWeight} = props;
  return (
    <NBText
      {...props}
      color={color}
      textAlign={textAlign}
      fontSize={fontSize}
      fontWeight={fontWeight}>
      {label}
    </NBText>
  );
};

export default Text;
