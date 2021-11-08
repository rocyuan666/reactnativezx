import React, {PureComponent} from 'react';
import {View, Button} from 'react-native';

export default class Index extends PureComponent {
  toComponentsPage() {
    this.props.navigation.navigate('ComponentsPage');
  }
  toApiPage() {
    this.props.navigation.navigate('ApiPage');
  }
  render() {
    return (
      <View>
        <Button
          title="组件部分"
          onPress={() => {
            this.toComponentsPage();
          }}
        />
        <Button
          title="API部分"
          onPress={() => {
            this.toApiPage();
          }}
        />
      </View>
    );
  }
}
