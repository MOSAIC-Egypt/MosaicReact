import React, { Component } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

import HeaderView from './Header';
import FooterView from './BottomNavBar';
import TopBar from './TopBar';
import { reviewSteps, disableZoom } from '../assets/html/htmlHandler';


class ReviewSteps extends Component {

  static get options() {
    
    return TopBar('Review Steps');    
  }

  render() {
  
    return (
    
      <View style={styles.mainView}>
        <HeaderView/>
          <WebView
          originWhitelist={['*']}
            source={{html:'<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0"> <head> <style> .white li { color: #FFFFFF } .white ul { padding: 0px 0px 0px 0px; } .wrap { display: flex; align-items: center; } /* td { border:2px solid orange; } */ </style> </head> <body bgcolor = "#000000"> <h2 style = "color: #FF7900; text-align: center; font-size: 1.5em;"> Steps of the year/semester review process </h2> <table width = "100%" style = "border-collapse: collapse;"> <tr> <td style = "border-bottom: 1px solid lightgray;"> <h2 style = "color: #FFFFFF; text-align: center; font-size: 1.2em;"> Step / Responsibility </h2> </td> <td style = "border-left: 1px solid lightgray; border-bottom: 1px solid lightgray;" align = "center"> <img src = "file:///android_asset/imgCalendar.png" width = "75" height = "75"> </td> </tr> <tr> <td style = "border-bottom: 1px solid lightgray; padding-top: 5%;"> <span style = "color: #A885D8; font-size: 1.2em; font-weight: bolder; padding-left: 2%;"> Preparation </span> <span style = "color: white; font-size:1.2em; margin-left: 0.5%;"> Employee & Manager </span> <div class = "wrap"> <span style = "margin-top: 0%; margin-left: 3%; font-size: 1.2em; font-weight: bolder; color: #A885D8; font-family: sans-serif;"> 1 </span> <h4 style = "margin-right: 2%; margin-top: 0%; font-weight: normal; font-size: 1em; margin-left: 2%; color:#FFFFFF;"> <ul> <li> Define the job. </li> <li> Define the objectives. </li> <li> Record the main competencies observed and those to strengthen. </li> <li> Define development needs. </li> </ul> </h4> </div> </td> <td style = "padding-left: 1%; width: 23.5%; border-left: 1px solid lightgray; border-bottom: 1px solid lightgray;" align = "center"> <p style = "color: white; font-size: 1em; font-weight: 800;"> Beginning of semester </p> </td> </tr> <tr> <td style = "border-bottom: 1px solid lightgray; padding-top: 5%; margin-right: 2%;"> <span style = "padding-left: 2%; color: #FFD200; font-size: 1.2em; font-weight: bolder"> Self-assessment </span> <span style = "color: white; font-size:1.2em; margin-left: 0.5%;"> Employee </span> <div class = "wrap"> <span style = "margin-top: 0%; margin-left: 3%; font-size: 1.2em; font-weight: bolder; color: #FFD200; font-family: sans-serif;"> 2 </span> <h4 style = "margin-right: 1%; margin-top: 0%; font-weight: normal; font-size: 1em; margin-left: 2%; color: #FFFFFF;"> <ul> <li> Assess yourself with respect to your objectives and competencies. </li> <li> You may also include information about your training and career plan. </li> </ul> </h4> </div> </td> <td style = "padding-left: 1%; border-left: 1px solid lightgray; border-bottom: 1px solid lightgray;" align = "center"> <p style = "color: white; font-size: 1em; font-weight: 800;"> During the semester </p> </td> </tr> <tr> <td style = "border-bottom: 1px solid lightgray; padding-top: 5%;"> <span style = "padding-left: 2%; color: #50BE87; font-size: 1.2em; font-weight: bolder;"> Evaluation </span> <span style = "color: white; font-size:1.2em; margin-left: 0.5%;"> Manager </span> <div class = "wrap"> <span style = "margin-top: 0%; margin-left: 3%; font-size: 1.2em; font-weight: bolder; color: #50BE87; font-family: sans-serif;"> 3 </span> <h4 style = "margin-right: 2%; margin-top: 3%; font-weight: normal; font-size: 1em; margin-left: 7%; margin-bottom: 10%; color: #FFFFFF;"> Opportunity to discuss the previous period. Your manager completes the “evaluation” of objectives set at the beginning of the semester. </h4> </div> </td> <td rowspan = "3" style = "padding-left: 1%; border-left: 1px solid lightgray;" align = "center"> <p style = "color: white; font-size: 1em; font-weight: 800;"> End of semester </p> </td> </tr> <tr> <td style = "border-bottom: 1px solid lightgray; padding-top: 5%;"> <span style = "margin-left: 2%; color: #39B4E6; font-size: 1.2em; font-weight: bolder;"> Acknowledgement </span> <span style = "color: white; font-size:1.2em; margin-left: 0.5%;"> Employee </span> <div class = "wrap"> <span style = "margin-top: 0%; margin-left: 3%; font-size: 1.2em; font-weight: bolder; color: #39B4E6; font-family: sans-serif;"> 4 </span> <h4 style = "margin-right: 2%; margin-top: 0%; font-weight: normal; font-size: 1em; margin-left: 3%; color: #FFFFFF;"> <ul> <li> Take time to read the evaluation. If desired, add your own comments and then acknowledge the review. </li> <li> Your acknowledgement does not necessarily mean agreement, but confirms that the review has taken place and been discussed. </li> </ul> </h4> </div> </td> </tr> <tr> <td style = "padding-top: 5%;"> <span style = "margin-left: 2%; color: #FF7900; font-size: 1.2em; font-weight: bolder"> Completion </span> <span style = "color: white; font-size:1.2em; margin-left: 0.5%;"> Manager </span> <div class = "wrap"> <span style = "margin-top: 0%; margin-left: 3%; font-size: 1.2em; font-weight: bolder; color: #FF7900; font-family: sans-serif;"> 5 </span> <h4 style = "margin-right: 2%; margin-top: 0%; font-weight: normal; font-size: 1em; margin-left: 3%; color: #FFFFFF;"> <ul> <li> Once you have acknowledged the review, your manager will validate and close the document. </li> <li> Your closed documents are available via the menu “View my historical documents”. </li> </ul> </h4> </div> </td> </tr> </table> </body>'}}
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

export default ReviewSteps;
