/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent, useState} from 'react';
import {
  Alert,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  Button,
  Switch,
  ActivityIndicator,
  ImageBackground,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  RefreshControl,
  StatusBar,
  TouchableHighlight,
} from 'react-native';

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

function SwitchCpn() {
  const [isEnabled, setIsEnabled] = useState(true);
  return (
    <>
      <Text>Switch</Text>
      {/*
        trackColor 打开关闭的颜色
        thumbColor 圆点的颜色，在iOS上设置此颜色会丢失按钮的投影
        onValueChange 值改变的回调 参数是新的值
        value 开关的值
      */}
      <View style={{alignItems: 'flex-start'}}>
        <Switch
          trackColor={{false: '#f00', true: '#0f0'}}
          thumbColor={isEnabled ? '#f99' : '#00f'}
          onValueChange={() => setIsEnabled(!isEnabled)}
          value={isEnabled}
        />
      </View>
    </>
  );
}

function ActivityIndicatorCpn() {
  return (
    <>
      <Text>ActivityIndicator</Text>
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="small" color="#f99" />
      <ActivityIndicator size="large" color="#ff0" />
    </>
  );
}

function ImageBackgroundCpn() {
  return (
    <>
      <Text>ImageBackground</Text>
      <ImageBackground
        style={{
          width: 120,
          height: 120,
        }}
        source={{
          uri: 'https://portrait.gitee.com/uploads/avatars/user/1764/5292253_rocyuan666_1634692226.png',
        }}>
        <Text style={{color: '#f00'}}>
          内容下面是背景图,内容下面是背景图,内容下面是背景图
        </Text>
      </ImageBackground>
    </>
  );
}

function KeyboardAvoidingViewCpn() {
  return (
    <>
      <Text>KeyboardAvoidingView</Text>
      <Text>
        本组件用于解决一个常见的尴尬问题：手机上弹出的键盘常常会挡住当前的视图。本组件可以自动根据键盘的高度，调整自身的
        height 或底部的 padding，以避免被遮挡。
      </Text>
      <KeyboardAvoidingView>
        <TextInput placeholder="username" />
      </KeyboardAvoidingView>
    </>
  );
}

function ModalCpn() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Text>Modal</Text>
      <Text>Modal 组件是一种简单的覆盖在其他视图之上显示内容的方式。</Text>
      {/*
        animationType:  slide 从底部滑入滑出    fade 淡入淡出    none 没有动画，直接蹦出来
        transparent:  属性是指背景是否透明，默认为白色，将这个属性设为：true 的时候弹出一个透明背景层的 modal
        visible:  属性决定 modal 是否显示
        onRequestClose:  回调会在用户按下 Android 设备上的后退按键或是 Apple TV 上的菜单键时触发。请务必注意本属性在 Android 平台上为必需，且会在 modal 处于开启状态时阻止BackHandler事件
      */}
      <Button
        title="点击展示Modal"
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#fff',
          }}>
          <Button
            title="点击关闭Modal"
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          />
          <Text>Modal内容</Text>
          <Text>Modal内容</Text>
          <Text>Modal内容</Text>
          <Text>Modal内容</Text>
        </View>
      </Modal>
    </>
  );
}

function PressableCpn() {
  const [text, setText] = useState('长按我试试');
  return (
    <>
      <Text>Pressable</Text>
      <Text>
        Pressable
        是一个核心组件的封装，它可以检测到任意子组件的不同阶段的按压交互情况。
      </Text>
      {/*
        disabled:  是否禁用按压行为
        delayLongPress:  从 onPressIn 触发到 onLongPress 被调用的时间间隔（毫秒）
        onLongPress: 在 onPressIn 持续超过 500 毫秒后调用。此持续时间可以通过 delayLongPress 自定义
        onPress:  onPressOut 之后调用
        onPressIn:  在 onPressOut 和 onPress 之前， 按压后立即调用
        onPressOut:  松开手后调用
      */}
      <Pressable
        onLongPress={() => {
          setText('真听话');
        }}
        onPressOut={() => {
          setText('长按我试试');
        }}>
        <Text style={{height: 60, lineHeight: 60, backgroundColor: '#f99'}}>
          {text}
        </Text>
      </Pressable>
    </>
  );
}

function StatusBarCpn() {
  return (
    <>
      {/*
        hidden: 是否显示状态栏
        barStyle:  default默认  light-content亮色  dark-content暗色
        backgroundColor: 状态栏背景色（安卓支持）
      */}
      <StatusBar barStyle="dark-content" backgroundColor="#f99" />
    </>
  );
}

function TouchableHighlightCpn() {
  function handleClick() {
    Alert.alert('还是很听话');
  }
  return (
    <>
      <Text>TouchableHighlight</Text>
      <Text>本组件用于封装视图，使其可以正确响应触摸操作。当按下的时候，封装的视图的不透明度会降低，同时会有一个底层的颜色透过而被用户看到，使得视图变暗或变亮。</Text>
      <Text>在底层实现上，实际会创建一个新的视图到视图层级中，如果使用的方法不正确，有时候会导致一些不希望出现的视觉效果。譬如没有给视图的 backgroundColor 显式声明一个不透明的颜色。</Text>
      <Text>注意TouchableHighlight只支持一个子节点（不能没有子节点也不能多于一个）。如果你希望包含多个子组件，可以用一个 View 来包装它们。</Text>
      <TouchableHighlight onPress={handleClick}>
        <View
          style={{
            padding: 20,
            alignItems: 'center',
            backgroundColor: '#DDDDDD',
          }}>
          <Text>点击</Text>
        </View>
      </TouchableHighlight>
    </>
  );
}

export default class ComponentsPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      refreshState: false,
    };
  }
  handleOnRefresh() {
    const that = this;
    this.setState({
      refreshState: true,
    });
    setTimeout(() => {
      Alert.alert('刷新成功！');
      that.setState({
        refreshState: false,
      });
    }, 2000);
  }
  render() {
    return (
      <ScrollView
        refreshControl={
          // 下拉刷新组件 RefreshControl
          <RefreshControl
            refreshing={this.state.refreshState}
            onRefresh={() => {
              this.handleOnRefresh();
            }}
          />
        }>
        <StatusBarCpn />
        <ViewCpn />
        <TextCpn />
        <ImageCpn />
        <TextInputCpn />
        <ButtonCpn />
        <SwitchCpn />
        <ActivityIndicatorCpn />
        <ImageBackgroundCpn />
        <KeyboardAvoidingViewCpn />
        <ModalCpn />
        <PressableCpn />
        <TouchableHighlightCpn />
      </ScrollView>
    );
  }
}
