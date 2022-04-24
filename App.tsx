import React from "react";
import {LogBox} from "react-native";
import {NativeBaseProvider} from "native-base";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {store, persistor} from "./src/store/Store";

import Navigation from "./src/navigation";
import {theme} from "./src/theme/Theme";
import "react-native-gesture-handler";

const App = () => {
  LogBox.ignoreLogs(["Warning: ..."]);
  LogBox.ignoreAllLogs();
  return (
    <NativeBaseProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    </NativeBaseProvider>
  );
};
export default App;
