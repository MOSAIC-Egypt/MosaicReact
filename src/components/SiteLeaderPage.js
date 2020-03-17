import React, {Component} from 'react';
import {Text,View,Dimensions,TouchableOpacity,Linking,Alert} from 'react-native';
import Image from 'react-native-scalable-image';

import MainContainer from './MainContainer';
import ahmedNaguibImage from '../assets/images/AhmedNaguib.png';
import telephoneImage from '../assets/images/telephone.png';
import messageImage from '../assets/images/msg.png';
import mobileImage from '../assets/images/mobile.png';
import TopBar from './TopBar';


class SiteLeaderPage extends Component {

    static get options() {
        return TopBar('Site Leader');
    }

    render(){
        return (
         <MainContainer>
             <Text style={styles.titleStyle}>Where to Find Site Leader</Text>
             <Image
             width={Dimensions.get('window').width * 0.3}
             style={styles.imageStyle}
             source={ahmedNaguibImage}
             />
             <Text style={styles.subtitleStyle}>Ahmed Naguib</Text>
             <Text style={styles.textStyle}>Ahmad's Office is in the office situated directly adjacent to the doorway entrance of the Reception area
                  on the 5th floor of Stars Capital 8.
             </Text>
             <TouchableOpacity onPress={()=>{
                        Alert.alert(
                            'Alert',
                            'Are you sure you want call +20224636666?',
                            [
                              {text: 'Yes', onPress: () => Linking.openURL('tel:$(+20224636666)'),
                            },
                              {
                                text: 'No',
                              },
                            ],
                          );
                    }}>
                <View style={styles.innerContainerStyle}>
                    <Image
                    source={telephoneImage}
                    width={Dimensions.get('window').width * 0.1}
                    />
                    <Text style={styles.infoStyle}>+20 2 24 63 66 66</Text>
                </View>
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>{
                        Alert.alert(
                            'Alert',
                            'Are you sure you want call +201222127650?',
                            [
                              {text: 'Yes', onPress: () => Linking.openURL('tel:$(+201222127650)'),
                            },
                              {
                                text: 'No',
                              },
                            ],
                          );
                    }}>
                <View style={styles.innerContainerStyle}>
                    <Image
                    source={mobileImage}
                    width={Dimensions.get('window').width * 0.1}
                    />
                    <Text style={styles.infoStyle}>+2 0122 212 7650</Text>
                </View>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => Linking.openURL('mailto:ahmad.naguib@orange.com') }>
                <View style={styles.innerContainerStyle}>
                    <Image
                    source={messageImage}
                    width={Dimensions.get('window').width * 0.1}
                    />
                    <Text style={styles.mailStyle} numberOfLines={1}>ahmad.naguib@orange.com</Text>
                </View>
             </TouchableOpacity>
         </MainContainer>
        );
    }
}
const styles = {
    innerContainerStyle:{
        flexDirection:'row',
        marginLeft:'10%',
        marginTop:20,
    },
    titleStyle:{
        color:'rgb(255,102,0)',
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center',
    },
    imageStyle:{
        marginLeft:'35%',
        marginTop:20,
    },
    subtitleStyle:{
        color:'white',
        fontSize:20,
        marginTop:20,
        textAlign:'center',
    },
    textStyle:{
        textAlign:'center',
        fontSize:15,
        color:'white',
        marginTop:20,
        marginHorizontal:5,
    },
    infoStyle:{
        color:'white',
        marginLeft:'5%',
        fontSize:20,
        marginTop:5,
    },
    mailStyle:{
        fontSize:15,
        fontWeight:'bold',
        marginLeft:20,
        marginTop:5,
        color:'white',
    }
};
export default SiteLeaderPage;
