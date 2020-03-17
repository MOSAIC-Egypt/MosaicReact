import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

import HeaderView from './Header';
import FooterView from './BottomNavBar';
import TopBar from './TopBar';
import { objectiveDoc, disableZoom } from '../assets/html/htmlHandler';


class ObjectiveDocument extends Component {

  static get options() {
    return TopBar('Document');
  }

  render(){
    return (
      <View style={styles.mainView}>
        <HeaderView/>
        <WebView
            originWhitelist={['*']}
          source={{html: '<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0"><body bgcolor = #000 > <h2 style="text-align: center;color: #39b5e6; text-align: center; font-size: 1.5em;"> Create Objective Document</h2> <ul style = "margin-left: 3%;font-weight: normal; font-size: 1.2em;"> <li style = "color: #39b5e6; margin-bottom: 4%;"> <span style = "color: #39b5e6;font-weight: normal; "> Mytools </span> </li> <li style = "color: #39b5e6; margin-bottom: 4%;font-weight: normal;"> <span style = "color: #39b5e6;"> Performance </span> </li> <li style = "color: #39b5e6; margin-bottom: 4%;"> <span style = "color: #39b5e6;"> Create documents </span> </li> <li style = "color: #39b5e6; margin-bottom: 4%;"> <span style = "color: #39b5e6;"> Ok </span> </li> <li style = "color: #39b5e6; margin-bottom: 4%;"> <span style = "color: #39b5e6;"> Select review period </span> </li> <li style = "color: #39b5e6; margin-bottom: 4%;"> <span style = "color: #39b5e6;"> Continue </span> </li> <li style = "color: #39b5e6; margin-bottom: 5%;"> <span style = "color: #39b5e6;"> Select team member(s) </span> <ul style="list-style-type: square;"> <li style = "color: #fff; margin-top: 2%;" > <span style = "color: #fff; font-size: 0.75em;"> Click on &ldquo;If you do not find an employee in this list&rdquo;. You will be brought to a panel that says "select effective date."&nbsp; Use today\'s date,&nbsp;and&nbsp;you will see new hires since the end of the cycle&nbsp;and you may select them and continue with creating the document(s) </span> </li> </ul> </li> <li style = "color: #39b5e6; margin-bottom: 4%;"> <span style = "color: #39b5e6;"> Continue </span> </li> <li style = "color: #39b5e6; margin-bottom: 17.5%;"> <span style = "color: #39b5e6;"> Create a document </span> <ul style="list-style-type: square;"> <li style = "color: #fff; margin-top: 2%;"> <span style = "color: #ffffff; font-size: 0.75em;"> Fill in the other tabs as applicable, then when finished, click &ldquo;Complete preparation step&rdquo;&nbsp; (the Only manager can finalize step 1) </span> </li> </ul> </li> </ul> <p style = "text-align: center; font-size: 1em;"> <span style = "color: #fff;"> Check </span> </p> <p style = "text-align: center; font-size: 1em;"> <span style = "color: #ff6600;"> Steps of the year/semester review process </span> </p> <p style = "text-align: center; font-size: 1em;"> <span style = "color: #fff;"> for the rest of the process </span> </p> </body>'}}
          scalesPageToFit = {false}
          allowFileAccess={true}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              renderLoading={this.ActivityIndicatorLoadingView}
              startInLoadingState={true}
        />
        <FooterView />
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

export default ObjectiveDocument;
