import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

import HeaderView from './Header';
import FooterView from './BottomNavBar';
import TopBar from './TopBar';
import { managersTips, disableZoom } from '../assets/html/htmlHandler';


class ManagersTips extends Component {

  static get options() {
    return TopBar('Managers\' Tips'); // Changed from "Managers' Tips & Tricks" to fit TopBar
  }

  render() {
    return (
      <View style={styles.mainView}>
        <HeaderView/>
        <WebView
          source={{uri: managersTips}}
          injectedJavaScript={disableZoom}
        />
        <FooterView/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center',
    backgroundColor: '#000000',
  },
});

export default ManagersTips;
