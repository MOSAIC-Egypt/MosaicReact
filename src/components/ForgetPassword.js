import React, { Component } from 'react';
import {Navigation} from 'react-native-navigation';
import {StyleSheet,View,Text,TextInput,TouchableOpacity,AsyncStorage} from 'react-native';

import OuterPagesContainer from './OuterPagesContainer';
import TopBar from './TopBar';
import MainContainer from './MainContainer';


export default class ForgetPassword extends Component {

    static get options() {
        return TopBar('Forgot Password');
    }

      state = { email: ''};
      
      SetEmail = async (key , info) => {
        try {
          await AsyncStorage.setItem(key, info);
        } catch (e) {
          // saving error
          console.log(e);
        }
      };
      render() {
          return (
            <OuterPagesContainer> 
              
                <View
                    style={styles.InnerView}>
                    <TextInput
                    //email field
                    style={styles.textInput}
                    underlineColorAndroid="#ffffff"
                    placeholder="First.last@orange.com"
                    placeholderTextColor="white"
                    value={this.email}
                    onChangeText={text => this.setState({ email: text })}
                />
                  <Text style={styles.text}> </Text>
                    <TouchableOpacity
                        //Submit button
                        style={styles.button}
                            onPress={() => {
                                if ( this.state.email === ''  )
                                { 
                                alert('Please enter your E-mail') ;
                                }
                                else {
                                    fetch('https://tt-gateway.equant.com/emmaws/APItest/api/users/forgetpassword/' + this.state.email ,
                                    {
                                      method: 'PUT',
                                      headers: {
                                          'Accept': 'application/json',
                                          'Content-Type': 'application/json',
                                          'Authorization': 'Basic Q2hyaXN0b3BoZTpzc10kIWRMO3U=',
                                      }}).then((response)  => 
                                                            
                                      { 
                                          console.log(response)
                                          console.log(typeof response)
                                          console.log(response.status === 200);
                                          console.log(response.status === 500);
                                          if (response.status === 200)
                                            {
                                              this.SetEmail('email',this.state.email);
                                            Navigation.push(this.props.componentId, {
                                            component: {
                                            name: 'SendOTP',
                                                        }
                                                                                    })
                                               }
                                          
                                          else {
                                              if(response.status === 500)
          
                                              
                                          {
                                            alert("Error while trying to send OTP")
          
                                          }
          
                                              
                                              
                                            
                                          }
                                          
                                      } 
                                          ).catch((error) => {
                                              alert("Please check your internet connection and try again.")
                                                  //  this.setState({loading: false});
                                          })
                                }
                                
                                }}
                        >
                        <Text style={styles.buttonText}> Send OTP </Text>
                    </TouchableOpacity>
                    </View>
           </OuterPagesContainer>
          );
       }
}
const styles = StyleSheet.create({
  InnerView: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignContent: 'center',
    paddingLeft:'20%',
    paddingRight:'20%',
    paddingBottom:'20%',
    paddingTop:'10%',
    alignItems:'center',
    justifyContent:'center'
     },
    textInput: {
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
