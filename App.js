import React, { Component } from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,} from 'react-native';
import {Colors,DebugInstructions,Header,LearnMoreLinks,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import 'localstorage-polyfill';
import List from "./src/list";
export default class App extends Component{
  render() {
  return (
    <View style={styles.container}>
    <List />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container:{
  flex:1
}
});