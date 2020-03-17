import React, { Component } from 'react';
import { View, StatusBar, Dimensions, Text, TouchableOpacity, Alert, AsyncStorage, Linking } from 'react-native';
import Image from 'react-native-scalable-image';
import { Navigation } from 'react-native-navigation';

import { goToAuth } from '../navigation/navigation';
import TopBar from './TopBar';
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { firstName: '' , lastName: '',country:''};
        this.getData('firstName');
        this.getData('lastName');
        this.getData('country');
    }

    getData = async (info) => {
        try {
          const value = await AsyncStorage.getItem(info);
          if (value !== null) {
         switch (info){
             case 'firstName':this.setState({firstName: value}); break;
             case 'lastName':this.setState({lastName: value}); break;
             case 'country':this.setState({country: value}); break;
         }
         await this.getCountry();
          }
        } catch (e) {
            console.log(e);
        }
    }

    static get options() {
        return TopBar('Menu', true);
    }

    async logout() {
        try {
            // await AsyncStorage.multiRemove('firstName', 'lastName', 'email', 'mobileNumber', 'extension', 'password');
            await AsyncStorage.removeItem('firstName');
            await AsyncStorage.removeItem('lastName');
            await AsyncStorage.removeItem('password');
            goToAuth();
        }
        catch (err) {
            console.log('error: ', err);
      }
    }
    async changeCountry(value){
        this.setState({country:value});
    }
    async getCountry(){
        if(this.state.country === 'Egypt MSC'){
            await this.changeCountry('homeEgypt');
        } else {
            await this.changeCountry('homeBrazil');
        }
    }
    render(){
        return (
            <View style={styles.container}>
                {/* black status bar as required */}
                <StatusBar backgroundColor="black" barStyle="light-content"/>
                {/* the upper part of the page which contain the profile picture, name, view profile*/}
                {/* <View style={styles.upperContainerRow}> */}
                    {/* <Image
                        width={Dimensions.get('window').width * 0.15}
                        source={require('../assets/images/whiteUserIcon.png')}
                    /> */}
                    <View style={styles.upperContainerCol}>
                    <Text style={styles.textStyleBig}>{this.state.firstName} {this.state.lastName}</Text>
                    <TouchableOpacity  onPress={() =>{ Navigation.push(this.state.country, {
                       component: {
                         name: 'UpdateProfile',
                       }});
                       Navigation.mergeOptions('menuSideMenu', {
                        sideMenu: {
                            right: {
                                visible: false,
                            },
                        },
                    });
                }
                   }>
                        <Text style={styles.textStyleSmall}>View your profile</Text>
                        </TouchableOpacity>
                    </View>
                {/* </View> */}
                {/*horizontal line drawn*/}
                <View style={styles.horizontalLineStyle}/>
                {/*each next section for each picture and option available the user can use*/}
                <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://plazza.orange.com/community/it-support/obs-it-support');}}>
                <View style={styles.innerContainer}>
                    <Image
                        width={Dimensions.get('window').width * 0.13}
                        source={require('../assets/images/obsITMenuIcon.png')}
                    />
                      <Text style={styles.textStyle}>OBS IT Support</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://plazza.orange.com/community/cso/services/brazil');}}>
                <View style={styles.innerContainer}>
                    <Image
                        width={Dimensions.get('window').width * 0.13}
                        source={require('../assets/images/brazilMSCMenuIcon.png')}
                    />
                    <Text style={styles.textStyle}>Brazil MSC</Text>
                </View>
                </TouchableOpacity>
                <View style={styles.horizontalLineStyle}/>
                <TouchableOpacity onPress={() =>{ Navigation.push(this.state.country, {
                       component: {
                         name: 'Calendar',
                       }});
                       Navigation.mergeOptions('menuSideMenu', {
                        sideMenu: {
                            right: {
                                visible: false,
                            },
                        },
                    });
                }
                    }>
                <View style={styles.innerContainer}>
                    <Image
                        width={Dimensions.get('window').width * 0.13}
                        source={require('../assets/images/calendarMenuIcon.png')}
                    />
                        <Text style={styles.textStyle}>Calendar</Text>
                </View>
                </TouchableOpacity>
                <View style={styles.horizontalLineStyle}/>
                <TouchableOpacity onPress={() => { Navigation.push(this.state.country, {
                       component: {
                         name: 'About',
                       }});
                       Navigation.mergeOptions('menuSideMenu', {
                        sideMenu: {
                            right: {
                                visible: false,
                            },
                        },
                    });
                }}
                  >
                <View style={styles.innerContainer}>
                    <Image
                        width={Dimensions.get('window').width * 0.13}
                        source={require('../assets/images/aboutMenuIcon.png')}
                    />
                  <Text style={styles.textStyle}>About</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={
                       ()=>{
                            AsyncStorage.setItem('info', '');
                            Alert.alert(
                               '',
                               'Are you sure you want to log out?',
                               [
                                 {text: 'Yes', onPress: () => this.logout()},
                                 {
                                   text: 'No',
                                 },
                               ],
                             );
                       }
                   }>
                <View style={styles.innerContainer}>
                    <Image
                        width={Dimensions.get('window').width * 0.13}
                        source={require('../assets/images/logoutMenuIcon.png')}
                    />
                   <Text style={styles.textStyle}>Log out</Text>
                </View>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = {
    //container of the whole screen
    container:{
        flex:1,
        backgroundColor:'black',
    },
    //the upper part of the user picture part
    upperContainerRow:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
    },
    //container style used for each part
    innerContainer:{
        flexDirection:'row',
        marginTop:20,
        marginLeft:30,
    },
    //container style for the upper part of the username and view profile
    upperContainerCol:{
        marginLeft:20,
        paddingTop:20,
        flexDirection:'column',
    },
    //text style for the user name
    textStyleBig:{
        fontSize:20,
        color:'white',
    },
    //text style for view profile
    textStyleSmall:{
        fontSize:15,
        color:'rgb(143,143,143)',
    },
    //horizontal line style
    horizontalLineStyle:{
        marginTop:20,
        borderBottomColor:'rgb(89,89,89)',
        borderBottomWidth:1,
        width:'95%',
        marginLeft:10,
    },
    //text style for anyother text used
    textStyle:{
        marginTop:15,
        marginLeft:5,
        fontSize:15,
        color:'white',
    },
};
//exporting the class to the index to be viewed
export default Menu;
