import React,{Component} from 'react';
import {View,Text} from 'react-native';

import MainContainer from './MainContainer';
import TopBar from './TopBar';

class CiscoIPPhonePage extends Component{
    static get options() {
        return TopBar('Cisco IP Phone');
    }
    
    render(){
        return(
            <MainContainer>
                <Text style={styles.titlePinkStyle}>CISCO IP PHONE</Text>
                <Text style={styles.textStyle}>How to use the Cisco IP phones in the offices and meeting rooms?</Text>
                <Text style={styles.titleOrangeStyle}>Call anyone in Egypt Site</Text>
                <Text style={styles.textStyle}>Dial their extension (last 4 digits of their direct number)</Text>
                <View style={styles.horizontalLineStyle}/>
                <Text style={styles.titleBlueStyle}>Outside Local Calls</Text>
                <Text style={styles.textStyle}>Dial '0' and then the full 8 digit number for land lines or 11 digit number for mobiles</Text>
                <View style={styles.horizontalLineStyle}/>
                <Text style={styles.titleGreenStyle}>International Calls</Text>
                <Text style={styles.textStyle}>Dial '000' plus the country code, plus the number you want to call</Text>
                <View style={styles.horizontalLineStyle}/>
                <Text style={styles.titleYellowStyle}>Join Conference Bridge</Text>
                <Text style={styles.textStyle}>Press the 'Audio Conference Bridge' button which is the buttom one of
                 the two round buttons on the top right hand
                     side of the phone, or dial 78 02 31 94, then enter your passcode and follow the instructions</Text>
            </MainContainer>
        );
    }
}
const styles={
    horizontalLineStyle:{
        marginTop:5,
        borderBottomColor:'rgb(89,89,89)',
        borderBottomWidth:1,
        width:'100%',
    },
    titlePinkStyle:{
        color:'rgb(255,180,230)',
        fontSize:20,
        marginLeft:10,
        fontWeight:'bold',
    },
    titleOrangeStyle:{
        color:'rgb(255,102,0)',
        fontSize:20,
        marginLeft:10,
        fontWeight:'bold',
    },
    titleBlueStyle:{
        color:'rgb(75,180,230)',
        fontSize:20,
        marginLeft:10,
        fontWeight:'bold',
    },
    titleGreenStyle:{
        color:'rgb(80,190,135)',
        fontSize:20,
        marginLeft:10,
        fontWeight:'bold',
    },
    titleYellowStyle:{
        color:'rgb(255,220,0)',
        fontSize:20,
        marginLeft:10,
        fontWeight:'bold',
    },
    textStyle:{
        color:'white',
        fontWeight:'bold',
        marginLeft:20,
        fontSize:15,
    },
};
export default CiscoIPPhonePage;
