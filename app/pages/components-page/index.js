/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent, useState} from 'react';
import {ScrollView, View, Text, Image, TextInput, Button} from 'react-native';

function ViewCpn() {
  return (
    <>
      <Text>View</Text>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: 60,
            height: 60,
            backgroundColor: '#f99',
          }}
        />
        <View
          style={{
            width: 60,
            height: 60,
            backgroundColor: '#f00',
          }}
        />
      </View>
    </>
  );
}

function TextCpn() {
  return (
    <>
      <Text>Text</Text>
      <Text
        style={{
          color: '#000',
        }}>
        I am bold{' '}
        <Text
          style={{
            color: '#f00',
          }}>
          and red
        </Text>
      </Text>
    </>
  );
}

function ImageCpn() {
  return (
    <>
      <Text>Image</Text>
      {/* 加载本地图片 */}
      <Image
        style={{width: 120, height: 120}}
        source={require('../../assets/images/codeboy.jpg')}
      />
      {/* 加载网络图片 */}
      <Image
        style={{width: 120, height: 120}}
        source={{
          uri: 'https://portrait.gitee.com/uploads/avatars/user/1764/5292253_rocyuan666_1634692226.png',
        }}
      />
    </>
  );
}

function TextInputCpn() {
  const [value, setValue] = useState('rocyuan');
  return (
    <>
      <Text>TextInput</Text>
      <Text>{value}</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#000',
          padding: 0,
        }}
        value={value}
        onChangeText={text => setValue(text)}
        maxLength={40}
      />
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#000',
          padding: 0,
        }}
        value={value}
        onChangeText={text => setValue(text)}
        maxLength={40}
      />
    </>
  );
}

function ButtonCpn() {
  const [msg, setMsg] = useState(' ');
  function handleBtnClick() {
    setMsg('点击了按钮');
    setTimeout(() => {
      setMsg(' ');
    }, 1000);
  }
  return (
    <>
      <Text>Button</Text>
      <Button onPress={handleBtnClick} title="我是按钮" />
      <Text>{msg}</Text>
    </>
  );
}
export default class ComponentsPage extends PureComponent {
  render() {
    return (
      <ScrollView>
        <ViewCpn />
        <TextCpn />
        <ImageCpn />
        <TextInputCpn />
        <ButtonCpn />
      </ScrollView>
    );
  }
}
