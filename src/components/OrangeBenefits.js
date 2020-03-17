import React, { Component } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

import Header from './Header';
import Footer from './BottomNavBar';
import TopBar from './TopBar';
import { OrangeBenefitsInject } from '../assets/html/htmlHandler';


class OrangeBenefits extends Component {

  static get options() {
    return TopBar('Orange Benefits');
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <Header/>
        <WebView
            source={{uri: 'https://www.orange-benefits.com'}}
            injectedJavaScript={OrangeBenefitsInject}
          />
        <Footer/>
      </View>
    );
  }
}


export default OrangeBenefits;
