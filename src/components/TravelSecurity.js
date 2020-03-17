import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import { Linking } from "react-native";
import { Alert } from "react-native";
import HeaderView from "./Header";
import FooterView from "./BottomNavBar";
import TopBar from "./TopBar";
import { travelSecurity, disableZoom } from "../assets/html/htmlHandler";

class TravelSecurity extends Component {
  static get options() {
    return TopBar("Travel Security");
  }

  render() {
    return (
      <View style={styles.mainView}>
        <HeaderView />
        <WebView
          originWhitelist={["*"]}
          source={{
            html:
              '<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0"><head> <style> .white li { color: #FFFFFF } .white ul { padding: 0px 0px 0px 0px; } </style> </head> <body bgcolor="#000000" style="font-size:1em; margin: 3%;"> <h2 style="color: #FF8AD4; font-size:1.5em; text-align: center; "> Prepare for your trip </h2> <p style="margin-left: 3%; color: #FFFFFF;"> Check: </p> <ul style="list-style-type: none; margin-left: 2%;" class="white"> <li> &#9744; &nbsp; Your passport validation. </li> <li> &#9744; &nbsp; If a visa is needed. </li> <li> &#9744; &nbsp; if you need any mandatory vaccines before travelling. </li> <li> &#9744; &nbsp; If there is a mandatory airport tax. </li> <li> &#9744; &nbsp; Apply the operational standard procedures for business travel.<br /> <br /> </li> </ul> <p align="center" style="color: #FF7900;"> Check the level of risk for your destination.<br /> Read, print and always keep with you the country security pocket guide.<br /> <br /> </p> <h2 style="color: #50BE87; font-size:1em; "> Transport </h2> <ul style="list-style-type: none;" class="white"> <li> &#9744; &nbsp; If there is no specific security arrangements, use only official taxis or hotel cars.<br /> <br /> </li> <li style="color: #FF7900;"> Recommendation taxis: </li> <li> &#9744; &nbsp; London cab – Egypt- 0020-19670 <br /> <br /> </li> <li> Lock your door and roll up windows all times.<br /> <br /> </li> </ul> <h2 style="color: #FFD200; font-size:1em; "> Accomodation </h2> <ul style="list-style-type: none;" class="white"> <li> Recommended hotels in the country : </li> <li style="font-size: 0.925em; margin-left: 1.5%; margin-top: 1%;"> &#9744; &nbsp; InterContinental – City stars. </li> <li style="font-size: 0.925em; margin-left: 1.5%;"> &#9744; &nbsp; Holidays inn – City stars.<br /> <br /> </li> </ul> <h2 style="color: #39B4E6; font-size:1em; "> Money </h2> <ul style="list-style-type:none;" class="white"> <li> &#9744; &nbsp; Always keep 100 USD/EUR/local currency cash in small bills Do not use street ATM machines / use hotel , airport, mall<br /> <br/> </li> </ul> <h2 style="color: #FF8AD4; font-size:1em; "> Most frequent risks </h2> <ul style="list-style-type: none;" class="white"> <li> <span style="color: #FF7900; font-size: 1.25em;"> Criminality: </span> <span style="color: #FFFFFF;"> Stay on lighted streets, avoid high crime areas, keep a low profile and avoid exposing signs of wealth, never provide information on the street or answer to people in a car </span> <br /> <br /> </li> <li> <span style="color: #FF7900; font-size: 1.25em;"> Drug practices: </span> Keep your drink with you, do not accept suspicious drinks<br /> <br /> </li> <li> <span style="color: #FF7900; font-size: 1.25em;"> Social engineering: </span> Beware of people you just met, don’t share your information with others unless know and trustworthy for you <br /> <br/> </li> <li style="color: #FF7900; font-size: 1.25em;"> Country specific security risks: </li> <li style="margin-top: 0.5%; margin-left: 1%;"> &#9744; &nbsp; Avoid any rally or demonstrations </li> <li style="margin-left: 1%;"> &#9744; &nbsp; Avoid governmental buildings (police/army…etc.)<br /> <br /> <li> </ul> <h2 style="color: #50BE87; font-size:1em; "> Medicine </h2> <ul style="list-style-type: none;" class="white"> <li> &#9744; &nbsp; Take with you the quantity of drugs you need for the length of the trip </li> <li> &#9744; &nbsp; See a doctor if you have a health problem before you buy any drugs<br /> <br /> </li> </ul> <h2 style="color: #FFD200; font-size:1em; "> Information Protection </h2> <ul style="list-style-type: none;" class="white"> <li> <span style="color: #FF7900; font-size: 1.25em;"> Travel light: </span> Reduce the quantity of information you travel with<br /> <br /> </li> <li> <span style="color: #FF7900; font-size: 1.25em;"> Theft of information: </span> Carry your confidential information on an encrypted USB key and leave all other sensitive document in a safe place, travel with the minimum amount of confidential information<br /> <br /> </li> <li> <span style="color: #FF7900; font-size: 1.25em;"> Do not consider the hotel a secured place for your information: </span> prefer the affiliate safe box to store confidential information<br /> <br /> </li> <li> <span style="color: #FF7900; font-size: 1.25em;"> Avoid confidential business conversations </span> in public areas (airports, taxis, restaurants…etc)<br /> <br/> </li> <li> <span style="color: #FF7900; font-size: 1.25em;"> Do not accept ((Alien)) devices: </span> Use your own device. If asked to connect to a non-Orange system/network store your presentation on an empty USB key and do not connect it after on your personal device.<br /> <br /> </li> </ul> <h2 style="color: #4bb4e6; font-size:1em; "> Security Links </h2> <ul style="list-style-type: none;" class="white"> <li> <a href="http://securityonline.sg.francetelecom.fr/spip.php?page=ts.fiche_pays&id_ts_pays=7&lang=en" style="color: #FF7900; font-weight: bold;" > EGYPT country risk </a> <br /> <br /> </li> <li> <a href="http://securityonline.sg.francetelecom.fr/spip.php?page=documents_fiches&id_ts_fiche_trad=54&lang=en" style="color: #FF7900; font-weight: bold;" > Security risk assessment MEA Region </a> <br /> <br /> </li> </ul> </body>'
          }}
          scalesPageToFit={false}
          allowFileAccess={true}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          renderLoading={this.ActivityIndicatorLoadingView}
          startInLoadingState={true}
          onShouldStartLoadWithRequest={this.openExternalLink}
          onNavigationStateChange ={this.openExternalLink}
        />
        <FooterView />
      </View>
    );
  }
  openExternalLink = req => {
    console.log(req);
    Linking.openURL("req");
  };
}
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "center",
    backgroundColor: "#000000"
  }
});

export default TravelSecurity;
