import React, { Component } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import WebView from 'react-native-webview';
import HeaderView from './Header';
import FooterView from './BottomNavBar';
import TopBar from './TopBar';


class RatingsDefinition extends Component {

  static get options() {
    return TopBar('Ratings');
  }

  render() {
    return (
    <View style={styles.mainView}>
    <HeaderView/>
      <WebView
        originWhitelist={['*']}
        source={{html: '<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0"> <html> <head> <style> .white li { color: #FFFFFF } .white ul { padding: 0px 0px 0px 0px; } .wrap { display: flex; align-items: center; } </style> </head> <body bgcolor = "#000000" style="margin: 0.9em;"> <h2 style="color: #FF8AD4; text-align: center; font-size: 1.5em;"> Performance ratings </h2> <p style="color: #FFFFFF; margin-left: 3%; font-size: 1em;"> Definition of our 5 performance ratings </p> <h2 style="color: #FF7900; margin-top: 5%; margin-left: 6%; font-size: 1.5em;"> Outstanding </h2> <div class="wrap"> <span style="margin-top: -10px; font-weight: 700; font-size: 1.5em; color: #FF7900; font-family: sans-serif;"> 5 </span> <h4 style="margin-top: 2px; font-weight: normal; font-size: 0.9em; margin-left: 6%; color: #FFFFFF;"> Consistently exceeded all performance objectives & demonstrated role model behavior against core competencies. Top level performance & high potential. </h4> </div> <hr> <h3 style="color: #4BB4E6; margin-left: 6%; font-size: 1.5em;"> Exceeds expectations </h3> <div class="wrap"> <span style="margin-top: -10px; font-weight: 700; font-size: 1.5em; color: #4BB4E6; font-family: sans-serif;"> 4 </span> <h4 style="margin-top: 2px; font-weight: normal; font-size: 0.9em; margin-left: 6%; color: #FFFFFF;"> Met all & exceeded a majority of performance objectives. Has consistently demonstrated all core competencies. Strong performance can be expected at all times. </h4> </div> <hr> <h3 style="color: #50BE87; margin-left: 6%; font-size: 1.5em;;"> Fully successful </h3> <div class="wrap"> <span style="margin-top: -10px; font-weight: 700; font-size: 1.5em; color: #50BE87; font-family: sans-serif;"> 3 </span> <h4 style="margin-top: 2px; font-weight: normal; font-size: 0.9em; margin-left: 6%; color: #FFFFFF;"> Consistently met all performance objectives. Has demonstrated behaviors in line with expectation for the position. Is a solid performance. </h4> </div> <hr> <h3 style="color: #FFB400; margin-left: 6%; font-size: 1.5em;;"> Improvement needed </h3> <div class="wrap"> <span style="margin-top: -10px; font-weight: 700; font-size: 1.5em; color: #FFB400; font-family: sans-serif;"> 2 </span> <h4 style="margin-top: 2px; font-weight: normal; font-size: 0.9em; margin-left: 6%; color: #FFFFFF;"> Experiences difficulties in meeting some of the performance objectives and/or in demonstrating core competencies. To be fully successful, performance/ demonstration of competencies needs to be more consistent. Could be a result of being relatively new in the position. A performance improvement plan needs to be developed and monitored. </h4> </div> <hr> <h3 style="color:#A885D8; margin-left:6%; font-size: 1.5em;;"> Unsatisfactory </h3> <div class="wrap"> <span style="margin-top: -10px; font-weight: 700; font-size: 1.5em; color: #A885D8; font-family: sans-serif;"> 1 </span> <h4 style="margin-top: 2px; font-weight: normal; font-size: 0.9em; margin-left: 6%; color: #FFFFFF;"> Failed to meet minimum requirements for the position. A significant number of performance objectives have been missed and/or the individual has failed in demonstrating core competencies. A formal performance improvement plan needs to be developed and monitored. </h4> </div> </body> </html>'}}
        scalesPageToFit = {false}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        renderLoading={this.ActivityIndicatorLoadingView}
        startInLoadingState={true}
      />
    <FooterView/>
  </View>
    )
}
}

const styles = StyleSheet.create({

  mainView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center',
    backgroundColor: 'black',
  },

});

export default RatingsDefinition;
