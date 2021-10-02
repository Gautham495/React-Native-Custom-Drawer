import * as React from 'react';
import {View, Text} from 'react-native';

const TutorialScreen = ({navigation}) => {
  return (
    <View>
      <Text>React Native Tutorial from Educative io</Text>
      <Text onPress={() => navigation.toggleDrawer()}>Toggle Drawer</Text>
    </View>
  );
};
export default TutorialScreen;
