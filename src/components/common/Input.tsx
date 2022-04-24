import React from "react";
import {StyleSheet} from "react-native";
import {Input as NBInput, FormControl} from "native-base";
import Icon from "react-native-vector-icons/dist/MaterialIcons";
Icon.loadFont();

type InputProps = {
  type: "text" | "password" | "tel" | "email" | "cc-number";
  placeholder?: any;
  keyboardType?: any;
  size?:
    | "px"
    | "full"
    | "sm"
    | "6"
    | "2xs"
    | "8"
    | "xs"
    | "12"
    | "md"
    | "16"
    | "xl"
    | "24"
    | "32"
    | "2"
    | "0.5"
    | "4"
    | "3"
    | "lg"
    | "1"
    | "2xl"
    | "10"
    | "20"
    | "64"
    | "0";
  maxLength?: any;
  InputLeftElement?: any;
  InputRightElement?: any;
};

const Input = (props: InputProps) => {
  const {type, placeholder, InputLeftElement, InputRightElement} = props;
  return (
    <FormControl>
      <NBInput
        {...props}
        returnKeyLabel={"Close"}
        returnKeyType={"done"}
        px={5}
        borderRadius={5}
        w={{
          base: "100%",
        }}
        h={{
          base: "55px",
        }}
        type={type}
        placeholder={placeholder}
        variant={"filled"}
        size={"lg"}
        InputLeftElement={InputLeftElement}
        InputRightElement={InputRightElement}
      />
    </FormControl>
  );
};

const styles = StyleSheet.create({
  input: {fontFamily: "Roboto-Regular"},
});

export default Input;
