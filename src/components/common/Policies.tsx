import React from "react";
import {WebView} from "react-native-webview";

type PoliciesProps = {
  url: any;
};

const Policies = (props: PoliciesProps) => {
  const {url} = props;
  return (
    <WebView
      source={{uri: url}}
      scrollEnabled={true}
      startInLoadingState={true}
      containerStyle={{
        flex: 0,
        height: "100%",
        width: "100%",
      }}
    />
  );
};

export default Policies;
