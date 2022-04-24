import React from "react";
import {Button as NBButton} from "native-base";

type ButtonProps = {
  label: String;
  onPress: any;
  size: "xs" | "md" | "lg" | "xl" | "2xl";
  colorScheme: any;
  isLoading?: boolean;
  isDisabled?: boolean;
};

const Button = (props: ButtonProps) => {
  const {label, isLoading, onPress, size, colorScheme} = props;
  return (
    <NBButton
      {...props}
      w={"100%"}
      borderRadius={10}
      h={60}
      size={size}
      colorScheme={colorScheme}
      onPress={onPress}
      isLoading={isLoading}>
      {label}
    </NBButton>
  );
};

export default Button;
