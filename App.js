import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import TutorialScreen from './TutorialScreen';
import CustomDrawer from './CustomDrawer';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Tutorial" component={TutorialScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
