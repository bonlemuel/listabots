import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {LogBox} from 'react-native';
import LoadingNavigation from './LoadingNavigation';

LogBox.ignoreAllLogs(false);

const Navigation = () => {
  return (
    <NavigationContainer>
      <LoadingNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
