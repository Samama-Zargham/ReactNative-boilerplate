import React from 'react';
import { MenuProvider } from "react-native-popup-menu";
import MainStack from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';
import navServices from './src/others/utils/navServices';
import CustomSnackBar from './src/components/reusables/CustomSnackBar';

const App = () => {
  return (
    <MenuProvider>
      <NavigationContainer ref={navServices.setTopLevelNavigator}>
        <CustomSnackBar />
        <MainStack />
      </NavigationContainer>
    </MenuProvider>
  );
};

export default App;
