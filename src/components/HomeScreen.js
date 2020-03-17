import React, {Component} from 'react';
import {Text,View, Dimensions, TouchableOpacity, AsyncStorage, BackHandler, Alert} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Image from 'react-native-scalable-image';

import directoryImg from '../assets/images/directory.png';
import securityImg from '../assets/images/security.png';
import calendarImg from '../assets/images/calendar.png';
import emergencyImg from '../assets/images/emergency.png';
import MainContainer from '../components/MainContainer';
import Header from '../components/Header';

import TopBar from './TopBar';
import Egypt from './HomeScreenEgypt';


class HomeScreen extends Component {

    constructor() {
        super();
        this.state = {
          textInputData: '',
          isEgyptImage: false,
        };
        this.getData();
    }

    static get options() {
        global.img = 'Brazil';
        return TopBar('Home', true, false); // Not tested
    }

      getData = async () => {
        try {
        //  const value = await AsyncStorage.getItem('info');
          AsyncStorage.getItem('firstName').then(value => {
            //AsyncStorage returns a promise so adding a callback to get the value
            this.setState({ textInputData: value });
          }
            //Setting the value in Text 
          );
          }
          catch (e) {
            console.log(e);
        }
      };

      getImage = async () => {
        var country = await AsyncStorage.getItem('country');
      console.log(country);
        if (country  === 'Egypt MSC') {
            this.setState({
                isEgyptImage: true,
            });
        }
        else{
            this.setState({
                isEgyptImage: false,
            });
        }
        console.log(this.state.isEgyptImage);
    }
    render(){
        return (
            <MainContainer header='Brazil'>
                {/* To make the status bar color black */}
                {/* <StatusBar backgroundColor="black" barStyle="light-content"/> */}
                {/* Putting the main image in the page */}
              {/* <HeaderView/> */}
                {/* Hello Luiz text part but later can be edited
                    to be any username depending on the user who
                    sign in */}
                <Text style={styles.textStyle}>Hello {this.state.textInputData.replace('"', '')}</Text>
                {/*The next part is another view to change the
                    flow of the images rather than column wise
                    to be row wise through appropriate styles
                    applied*/}
                <View style={styles.innerContainer}>
                    {/*Images have been put in buttons as a
                        background image to have the effect of
                        button clicked later on to see the actions
                        in addition to scaling of the images with the
                        screen width*/}
                    <TouchableOpacity style={styles.buttonStyleTop}
                     onPress={() => Navigation.push(this.props.componentId, {
                        component: {
                          name: 'Directory',
                        }})
                    }>
                        <Image
                        width={Dimensions.get('window').width * 0.5}
                        source={directoryImg}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyleTop}
                     onPress={() => Navigation.push(this.props.componentId, {
                        component: {
                          name: 'SecurityMenu',
                        }})
                    }>
                        <Image
                        width={Dimensions.get('window').width * 0.5}
                        source={securityImg}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.innerContainer}>
                    <TouchableOpacity style={styles.buttonStyleDown}
                     onPress={() => Navigation.push(this.props.componentId, {
                        component: {
                          name: 'Calendar',
                        }})
                    }>
                        <Image
                        width={Dimensions.get('window').width * 0.5}
                        source={calendarImg}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyleDown}
                    onPress={() => Navigation.push(this.props.componentId, {
                        component: {
                          name: 'EmergencyMenu',
                        }})
                    }>
                        <Image
                        width={Dimensions.get('window').width * 0.5}
                        source={emergencyImg}/>
                    </TouchableOpacity>
                </View>
            </MainContainer>
        );
    }
}

const styles = {
    // special container for the button images
    innerContainer:{
        flexDirection:'row',
    },
    //style for the text
    textStyle:{
        color:'#fff',
        fontSize:20,
        marginTop:10,
        textAlign:'center',
    },
    //style for the main image
    imageStyle:{
        marginTop:20,
        justifyContent:'flex-start',
    },
    //style of the upper button images
    buttonStyleTop:{
        marginRight:10,
        marginTop:40,
    },
    //style of the lower button images
    buttonStyleDown:{
        marginTop:5,
        marginRight:10,
    },
};

export default HomeScreen;
