import React,{Component} from 'react';
import {Text,View,Dimensions, Linking, Alert,TouchableOpacity} from 'react-native';
import Image from 'react-native-scalable-image';

import MainContainer from './MainContainer';
import TopBar from './TopBar';
import ahmedNaguibImage from '../assets/images/AhmedNaguib.png';
import telephoneImage from '../assets/images/telephone.png';
import messageImage from '../assets/images/msg.png';
import mobileImage from '../assets/images/mobile.png';
import francesImage from '../assets/images/Frances.png';
import hatemImage from '../assets/images/Hatem.png';
import websiteImage from '../assets/images/orangewebsite.png';
import intercontinentalImage from '../assets/images/intercontinental.png';
import holidayInnImage from '../assets/images/holidayin.png';
import timeImage from '../assets/images/time.png';


class ImportantContactsPage extends Component {

  static get options() {
    return TopBar('Contacts');
  }

    render(){
        return (
            <MainContainer>
                <Text style={styles.titleStyle}>Important Contacts</Text>
                <View style={styles.innerContainer}>
                    <Image
                    source={ahmedNaguibImage}
                    width={Dimensions.get('window').width * 0.13}
                    />
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameStyle}>Ahmad Naguib</Text>
                        <Text style={styles.jobStyle}>Site Leader</Text>
                    </View>
                </View>
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
                    <View style={styles.infoContainer}>
                        <Image
                        width={Dimensions.get('window').width * 0.05}
                        source={telephoneImage}
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
                    <View style={styles.infoContainer}>
                        <Image
                        width={Dimensions.get('window').width * 0.05}
                        source={mobileImage}
                        />
                        <Text style={styles.infoStyle}>+2 0122 212 7650</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('mailto:ahmad.naguib@orange.com') }>
                    <View style={styles.infoContainer}>
                        <Image
                        width={Dimensions.get('window').width * 0.05}
                        source={messageImage}
                        />
                        <Text style={styles.mailStyle} numberOfLines={1}>ahmad.naguib@orange.com</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.horizontalLineStyle}/>
                <View style={styles.innerContainer}>
                    <Image
                    source={francesImage}
                    width={Dimensions.get('window').width * 0.13}
                    />
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameStyle}>Frances WoodWorth</Text>
                        <Text style={styles.jobStyle}>Deputy Site Leader</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={()=>{
                        Alert.alert(
                            'Alert',
                            'Are you sure you want call +20224636600?',
                            [
                              {text: 'Yes', onPress: () => Linking.openURL('tel:$(+20224636600)'),
                            },
                              {
                                text: 'No',
                              },
                            ],
                          );
                          }}>
                    <View style={styles.infoContainer}>
                        <Image
                        width={Dimensions.get('window').width * 0.05}
                        source={telephoneImage}
                        />
                        <Text style={styles.infoStyle}>+20 2 24 63 66 00</Text>
                    </View>
                </TouchableOpacity>
                
                <View style={styles.infoContainer}>
                    <Image
                    width={Dimensions.get('window').width * 0.05}
                    source={mobileImage}
                    />
                    <Text style={styles.infoStyle}>+2 0122 014 9977</Text>
                </View>
                <TouchableOpacity onPress={() => Linking.openURL('mailto:frances.woodworth@orange.com') }>
                    <View style={styles.infoContainer}>
                        <Image
                        width={Dimensions.get('window').width * 0.05}
                        source={messageImage}
                        />
                        <Text style={styles.mailStyle} numberOfLines={1}>frances.woodworth@orange.com</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.horizontalLineStyle}/>
                <View style={styles.innerContainer}>
                    <Image
                    source={hatemImage}
                    width={Dimensions.get('window').width * 0.13}
                    />
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameStyle}>Hatem Kadry</Text>
                        <Text style={styles.jobStyle}>Chief Security Officer</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={()=>{
                        Alert.alert(
                            'Alert',
                            'Are you sure you want call +20222922123?',
                            [
                              {text: 'Yes', onPress: () => Linking.openURL('tel:$(+20222922123)'),
                            },
                              {
                                text: 'No',
                              },
                            ],
                          );
                          }}>
                    <View style={styles.infoContainer}>
                        <Image
                        width={Dimensions.get('window').width * 0.05}
                        source={telephoneImage}
                        />
                        <Text style={styles.infoStyle}>+20 2 22 92 21 23</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                        Alert.alert(
                            'Alert',
                            'Are you sure you want call +201208500009?',
                            [
                              {text: 'Yes', onPress: () => Linking.openURL('tel:$(+201208500009)'),
                            },
                              {
                                text: 'No',
                              },
                            ],
                          );
                          }}>
                    <View style={styles.infoContainer}>
                        <Image
                        width={Dimensions.get('window').width * 0.05}
                        source={mobileImage}
                        />
                        <Text style={styles.infoStyle}>+2 0120 850 0009</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('mailto:frances.woodworth@orange.com') }>
                    <View style={styles.infoContainer}>
                        <Image
                        width={Dimensions.get('window').width * 0.05}
                        source={messageImage}
                        />
                        <Text style={styles.mailStyle} numberOfLines={1}>hatem.kadry@orange.com</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.horizontalLineStyle}/>
                <Text style={styles.otherTitleStyle}>Other Useful Contacts</Text>
                <Text style={styles.subTitleStyle}>Orange Business Services website</Text>
                <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://www.orange-business.com');}}>
                    <View style={styles.infoContainer}>
                        <Image
                        width={Dimensions.get('window').width * 0.05}
                        source={websiteImage}
                        />
                        <Text style={styles.mailStyle}>www.orange-business.com</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.horizontalLineStyle}/>
                <View style={styles.innerContainer}>
                    <View>
                        <Text style={styles.subTitleStyle}>InterContinental Cairo CityStars</Text>
                        <TouchableOpacity onPress={()=>{
                        Alert.alert(
                            'Alert',
                            'Are you sure you want call +20224800100?',
                            [
                              {text: 'Yes', onPress: () => Linking.openURL('tel:$(+20224800100)'),
                            },
                              {
                                text: 'No',
                              },
                            ],
                          );
                          }}>
                            <View style={styles.infoContainer}>
                                <Image
                                width={Dimensions.get('window').width * 0.05}
                                source={telephoneImage}
                                />
                                <Text style={styles.mailStyle}>+20 2 24 80 01 00</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Image
                    source={intercontinentalImage}
                    width={Dimensions.get('window').width * 0.3}
                    />
                </View>
                <View style={styles.horizontalLineStyle}/>
                <View style={styles.innerContainer}>
                    <View>
                        <Text style={styles.subTitleStyle}>Holiday Inn CityStars</Text>
                        <TouchableOpacity onPress={()=>{
                        Alert.alert(
                            'Alert',
                            'Are you sure you want call +20224803000?',
                            [
                              {text: 'Yes', onPress: () => Linking.openURL('tel:$(+20224803000)'),
                            },
                              {
                                text: 'No',
                              },
                            ],
                          );
                          }}>
                            <View style={styles.infoContainer}>
                                <Image
                                width={Dimensions.get('window').width * 0.05}
                                source={telephoneImage}
                                />
                                <Text style={styles.mailStyle}>+20 2 24 80 30 00</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Image
                    source={holidayInnImage}
                    width={Dimensions.get('window').width * 0.3}
                    style={styles.imageStyle}
                    />
                </View>
                <View style={styles.horizontalLineStyle}/>
                <Text style={styles.subTitleStyle}>CityStars Mall</Text>
                <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://www.citystars-heliopolis.com.eg');}}>
                    <View style={styles.infoContainer}>
                        <Image
                        width={Dimensions.get('window').width * 0.05}
                        source={websiteImage}
                        />
                        <Text style={styles.mailStyle}>www.citystars-heliopolis.com.eg</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.infoContainer}>
                    <Image
                    width={Dimensions.get('window').width * 0.05}
                    source={timeImage}
                    />
                    <Text style={styles.mailStyle}>10:00 AM - 12:00 AM</Text>
                </View>
                <View style={styles.horizontalLineStyle}/>
                <Text style={styles.subTitleStyle}>Cairo Airport Shuttle {'&'} Limosine Service</Text>
                <TouchableOpacity onPress={()=>{
                        Alert.alert(
                            'Alert',
                            'Are you sure you want call 19970?',
                            [
                              {text: 'Yes', onPress: () => Linking.openURL('tel:$(+2019970)'),
                            },
                              {
                                text: 'No',
                              },
                            ],
                          );
                          }}>
                    <View style={styles.infoContainer}>
                        <Image
                        width={Dimensions.get('window').width * 0.05}
                        source={telephoneImage}
                        />
                        <Text style={styles.mailStyle}>19970</Text>
                    </View>
                </TouchableOpacity>
            </MainContainer>
        );
    }
}
const styles = {
    horizontalLineStyle:{
        marginTop:20,
        marginBottom:20,
        borderBottomColor:'rgb(89,89,89)',
        borderBottomWidth:1,
        width:'100%',
    },
    innerContainer:{
        flexDirection:'row',
        marginTop:20,
        marginLeft:10,
    },
    infoContainer:{
        flexDirection:'row',
        marginTop:20,
        marginLeft:50,
        // backgroundColor:'white',
    },
    nameContainer:{
        flexDirection:'column',
        marginLeft:20,
    },
    titleStyle:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        color:'rgb(80,190,135)',
    },
    nameStyle:{
        textAlign:'center',
        fontSize:15,
        color:'white',
        fontWeight:'bold',
    },
    jobStyle:{
        color:'rgb(255,102,0)',
        fontSize:13,
        textAlign:'center',
    },
    infoStyle:{
        fontSize:15,
        color:'white',
        marginLeft:20,
    },
    mailStyle:{
        color:'white',
        fontSize:15,
        fontWeight:'bold',
        marginLeft:20,
    },
    otherTitleStyle:{
        fontSize:20,
        marginBottom:20,
        fontWeight:'bold',
        textAlign:'center',
        color:'rgb(75,180,230)',
    },
    subTitleStyle:{
        color:'white',
        marginLeft:10,
        fontWeight:'bold',
        fontSize:15,
    },
    imageStyle:{
        marginLeft:10,
    },
};

export default ImportantContactsPage;
