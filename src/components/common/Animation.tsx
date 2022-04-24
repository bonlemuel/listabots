import React from "react";
import LottieView from "lottie-react-native";

type AnimationProps = {
  source: any;
  autoPlay: boolean;
  loop: boolean;
};

const Animation = ({source, autoPlay, loop}: AnimationProps) => (
  <LottieView source={source} autoPlay={autoPlay} loop={loop} />
);

export default Animation;
