import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, AsyncStorage, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';

import MainContainer from './MainContainer';
import { goHome } from '../navigation/navigation';
import OuterPagesContainer from './OuterPagesContainer';
import TopBar from './TopBar';


export default class SendOtp extends Component {

  static get options() {
    return TopBar('Send OTP');
  }

    constructor() {
        super();
        this.state = {
          email: '',
          otp:'',
        };
        this.getData();
     


      }
      getData = async () => {
        try {
          const value = await AsyncStorage.getItem('email');
          if (value !== null) {
         this.setState({email: value});
         }
          }
         catch (e) {
            console.log(e);
        }
      };
      storeData = async (key , info) => {
        try {
          await AsyncStorage.setItem(key, info);
        } catch (e) {
          // saving error
          console.log(e);
        }
      };
    // componentDidMount(){
    //     try {
    //       AsyncStorage.getItem('email').then(value => {
    //         this.setState({ email: value });
    //       });
    //       console.log(this.state.email)
    //       }
    //       catch (e) {
    //         console.log(e);
    //     }
    //   };

    render(){
        return (
            <OuterPagesContainer>
                <View style={styles.mainView}>
                    <TextInput
                    placeholder="Enter your OTP"
                    placeholderTextColor="white"
                    underlineColorAndroid="#ffffff"
                    style={styles.textinput}
                    value={this.state.otp}
                    onChangeText={(otp) => this.setState({otp})}
                    />
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        if ( this.state.otp === ''  )
                        { 
                        alert('Please enter your otp') ;
                        }
                        else {
                            console.log("here");
                            console.log(this.state.email);

                            fetch('https://tt-gateway.equant.com/emmaws/APItest/api/users/confirmotp/' + this.state.email ,
                            {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json',
                                    'Authorization': 'Basic Q2hyaXN0b3BoZTpzc10kIWRMO3U=',
                                },
                                body: JSON.stringify({
                                    otp: this.state.otp,
                                   
                                }),
                                } ).then((response)  => 
                                                            
                                { 
                                    console.log(response)
                                    console.log(typeof response)
                                    console.log(response.status === 200);
                                    console.log(response.status === 500);
                                    if (response.status === 200){
                                        // this.storeData('firstName',this.state.Name);
                                        // this.storeData('lastName',this.state.Last);
                                        // this.storeData('email',this.state.Email);
                                        // this.storeData('mobileNumber',this.state.Mobile);
                                        // this.storeData('extension',this.state.Ext);
                                        this.storeData('otp', this.state.otp);
                                        Navigation.push(this.props.componentId, {
                                            component: {
                                              name: 'ResetPassword',
                                            }})
                                         }
                                    
                                    else {
                                        if(response.status === 500)

                                            alert('Please check otp and re-enter.');
                                            // this.setState({
                                            //     loading: false
                                            // });
                                        
                                      
                                    }
                                    
                                } 
                                    ).catch((error) => {
                                        alert("Please check your internet connection and try again.")
                                            //  this.setState({loading: false});
                                    })
                              
                        
                     } }}>
                        <Text style={{fontWeight:'bold'}}>
                            Submit
                        </Text>
                    </TouchableOpacity>
           
                </View>
            </OuterPagesContainer>
        );
    }
};


const styles = StyleSheet.create({
    mainView: {
      flex: 1,
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      alignContent: 'center',
      paddingLeft:'20%',
      paddingRight:'20%',
      paddingBottom:'20%',
      paddingTop:'10%',
      alignItems: 'center',
      justifyContent:'center'
       },
      textinput: {
          alignItems: 'center',
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 15,
        width: '100%',
      },
      button: {
        backgroundColor: '#ffffff',
        height: '42%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      
      },
      buttonText: {
        textAlign: 'center',
        color: 'black',
        textAlignVertical: 'center',
        justifyContent: 'center',
  
      },
      text:{
          fontSize: 5,
      }
    });