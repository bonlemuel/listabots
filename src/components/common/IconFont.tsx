import React from "react";
import Icon from "react-native-vector-icons/dist/MaterialIcons";
Icon.loadFont();

type IconProps = {
  name: any;
  color?: any;
  style?: any;
};

const IconFont = (props: IconProps) => {
  const {name, color} = props;
  return (
    <Icon {...props} name={name} size={30} color={color ? color : "#FFF"} />
  );
};

export default IconFont;
