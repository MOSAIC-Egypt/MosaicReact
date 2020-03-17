import React, {Component} from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import HeaderView from './Header';
import FooterView from './BottomNavBar';
import TopBar from './TopBar';
import { Linking } from 'react-native';
import { Alert } from 'react-native';

class VisitorsSafety extends Component {

  static get options() {
    return TopBar("Visitors' Safety"); // Changed from "Visitors' Safety Guidelines" to fit bar
  }

  render() {
    return (
      <View style={styles.mainView}>
        <HeaderView/>
        <WebView
         originWhitelist={['*']}
          source={{html: '<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0"> <head> <style> .white li { color: #FFFFFF } .white ul { padding: 0px 0px 0px 0px; } </style> </head> <body bgcolor="#000000" style="font-size: 1em; margin: 1.5%;"> <h2 style="color: #FF8AD4; font-size: 1.5em;"> Security guidelines </h2> <ul style="list-style-type: none;" class="white"> <li> &#9744; &nbsp; ID badge should be visible at all times and no tailgating is allowed <br /> <br /> </li> <li> &#9744; &nbsp; All NON-OBS visitors to be accompanied by their hosts at all times <br /> <br /> </li> <li> &#9744; &nbsp; Visitor’s Laptop must be declared at the receptio <br /> <br /> </li> <li> &#9744; &nbsp; NON-OBS visitors are not allowed to connect their laptop/mobile device to Orange network without prior approval from IT team and CSO <br /> <br /> </li> <li> &#9744; &nbsp; Apply the operational standard procedures for business travel. <br /> <br /> </li> <li style="color: #FF7900;"> &#9744; &nbsp; Visitors are not allowed to carry external/storage media and must be declared and deposited at reception <br /> <br /> </li> <li> &#9744; &nbsp; Photography is prohibited on site <br /> <br /> </li> <li> &#9744; &nbsp; Visitors are responsible for their personal belongings <br /> <br/> </li> </ul> <h2 style="color: #50BE87; font-size: 1.5em;"> Health and Safety </h2> <ul style="list-style-type: none;" class="white"> <li> &#9744; &nbsp; All accidents and incidents should be reported to your host and via them to security team. <br /> <br /> </li> <li> &#9744; &nbsp; Our premises is a non smoking area. <br /> <br /> </li> <li> &#9744; &nbsp; Drugs and alcohol and people under their influence are not allowed to enter our premises. <br /> <br /> </li> <li> &#9744; &nbsp; Dangerous goods and substances as defined by building/security/local laws are not allowed within our premises. <br /> <br /> </li> <li> &#9744; &nbsp; We have a medical room and first aid facilities –inform your host or contact reception or nearest security guard to direct you. <br /> <br /> </li> <li> &#9744; &nbsp; Entry/Exit and emergency exits are marked and display signs are put up to assist when required. <br /> <br/> </li> </ul> <h2 style="color: #FFD200; font-size: 1.5em;" > Fire / Emergency / Evacuation </h2> <ul style="list-style-type: none;" class="white"> <li> &#9744; &nbsp; If you hear the emergency alarm, stay calm and await for instructions. <br /> <br /> </li> <li> &#9744; &nbsp; Your host/designated security / Fire Warden will reach out and escort you to nearest emergency exit. <br /> <br /> </li> <li> &#9744; &nbsp; Do not stop for personal belongings – secure yourself first. <br /> <br /> </li> <li> &#9744; &nbsp; Do not use elevators and do not block emergency exits. <br /> <br /> </li> <li> &#9744; &nbsp; Upon leaving the building your host/fire warden will escort you to the assembly point. <br /> <br /> </li> </ul> <h2 style="color: #39B4E6; font-size: 1.5em;" > Emergency contact numbers </h2> <ul style="list-style-type: none;" class="white"> <li> &#9744; &nbsp; Reception : 2010 /2000 <br /> <br /> </li> <li> &#9744; &nbsp; Security : 382-2783 <br /> <br /> </li> <li> &#9744; &nbsp; Emergency : 33 OR ( 01271113804 ) <br /> <br /> </li> </ul> <h2 style="color: #FF6600; font-size: 1.5em;"> In case of evacuation </h2> <p> <img src="../assets/images/assemblyPoint.png" alt="" style="float: right; width: 80px; height: 80px;"> <ul style="list-style-type: none;" class="white"> <li> Assembly point location </li> <li style="color: #FF7900;"> Orange Pyramid </li> <li> In front of the capital entrance </li> <li style="color: #FF7900;"> Tower 5 </li> <li> Area in front of tower (T4 and T5) <br /> <br /> </li> </ul> </p> <p  style="background-color: #000000; color: OrangeRed; border: 4px solid OrangeRed; width: 80%; text-align: center; margin-left: 7%; overflow: hidden; font-size: 1.2em; font-weight: bold;"> Kindly wear your Visitors Badge at all times during your visit </p> </body> '}} // Needs IOS condition
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

export default VisitorsSafety;
