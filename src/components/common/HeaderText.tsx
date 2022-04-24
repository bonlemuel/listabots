import React from "react";
import {Heading as NBHeaderText} from "native-base";

type HeaderTextProps = {
  label: String;
  textAlign?: "center" | "left" | "right" | "justify";
  fontSize: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  fontWeight?: any;
  color?: any;
};

const HeaderText = (props: HeaderTextProps) => {
  const {label, color, textAlign, fontSize, fontWeight} = props;
  return (
    <NBHeaderText
      {...props}
      color={color}
      textAlign={textAlign}
      fontSize={fontSize}
      fontWeight={fontWeight}>
      {label}
    </NBHeaderText>
  );
};

export default HeaderText;
