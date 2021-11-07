import React, {PureComponent} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ComponentsPage from './pages/components-page';
import ApiPage from './pages/api-page';
import Index from './pages/index';

// 创建 堆栈nav导航
const {Navigator, Screen} = createNativeStackNavigator();

export default class App extends PureComponent {
  render() {
    return (
      <NavigationContainer>
        <Navigator initialRouteName="Index">
          <Screen name="Index" component={Index} />
          <Screen name="ComponentsPage" component={ComponentsPage} />
          <Screen name="ApiPage" component={ApiPage} />
        </Navigator>
      </NavigationContainer>
    );
  }
}
