import React,{Component} from 'react';
import {Text,Dimensions,TouchableOpacity,Linking, View} from 'react-native';
import Image from 'react-native-scalable-image';

import MainContainer from './MainContainer';
import locationImage from '../assets/images/locationIcon.png';
import TopBar from './TopBar';


class OurLocationPage extends Component {

    static get options() {
        return TopBar('Our Location');
    }

    render(){
        return (
            <MainContainer>
                <Text style={styles.titleStyle}>OUR LOCATION</Text>
                <Text style={styles.textStyle}>Equant City Stars, Tower 8 Heliopolis, Cairo Governorate, Egypt</Text>
                <View style={styles.InnerView}>
               <TouchableOpacity onPress={() => Linking.openURL('geo:30.0735848,31.3415962?q=Makrem Ebeid Ext, Masaken Al Mohandesin, Nasr City, Cairo Governorate, Egypt')}>
                    <Image style={styles.imageStyle}
                    source={locationImage}
                    />
                </TouchableOpacity>
                </View>
            </MainContainer>
        );
    }
}
const styles = {
    titleStyle:{
        marginTop:10,
        marginLeft:20,
        fontSize:20,
        fontWeight:'bold',
        color:'rgb(255,220,0)',
    },
    InnerView: {
        flex: 2,
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems:'center',
         },
    textStyle:{
        marginTop:10,
        marginLeft:30,
        fontWeight:'bold',
        fontSize:15,
        color:'white',
    },
    imageStyle:{
        width:'50',
        height:'50',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems:'center',
       // marginLeft:100,
      //  marginTop:'20%',
    },
};

export default OurLocationPage;
