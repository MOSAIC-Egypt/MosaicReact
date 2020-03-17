import React, { Component } from 'react';
import BackgroundImage from '../assets/images/backgroundImage.png';
import UserIcon from '../assets/images/userIcon.png';
import { Navigation } from 'react-native-navigation';
import { sha512 } from 'react-native-sha512';
import {Buffer} from 'buffer';
import { goHomeEgypt } from '../navigation/navigation';
const {NativeModules} = require('react-native');
const sha512lib = NativeModules.sha512lib;
const SHA512 = require('crypto-js/sha512');
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  AsyncStorage,
  Keyboard
} from 'react-native';

import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
class Login extends Component {
  constructor(props) {
    super(props);
  }

  static get options() {
    return {
      topBar: {
        visible: false,
      },
    };
  }

  storeData = async (key, info) => {
    try {
      await AsyncStorage.setItem(key, info);
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  state = { username: '', password: '', loading: false };
  render() {
    return (
    <ImageBackground
      style={styles.mainView}
      source={BackgroundImage}
    >
      <View style={styles.loginInfo}>
        <Image source={UserIcon} />
        <Input
            //username field
            containerStyle={styles.textInput}
            placeholder="First.last@orange.com"
            onChangeText={text => this.setState({ username: text })}
          />
          <Input
            //password field
            containerStyle={styles.textInput}
            placeholder="Password"
            onChangeText={text => this.setState({ password: text })}
            secureTextEntry={true}
          />
          <Text />
          <View style={styles.buttonsView}>
              <Button
                //sign in button
                title='Sign in'
                containerStyle={{width:'30%'}}
                buttonStyle={styles.buttonSignIn}
                onPress={() => {
                  if (
                    //username or password empty
                    this.state.username === ''
                    || this.state.password === ''
                  ) {
                    // eslint-disable-next-line no-alert
                    alert('Username or password is empty');
                  } else {
                    var v = SHA512(this.state.password);
                    const s = Buffer.from(v.toString(), 'hex').toString('base64');
                    console.log(s);
                    console.log("hashed" +  SHA512(this.state.password));
                   //   console.log( sha512lib.sha512(this.state.password));
                      sha512lib.sha512(this.state.password).then(hash => {
                      const Passwordinbase64 = Buffer.from(hash, 'hex').toString('base64');
                      console.log(Passwordinbase64);
                      
                      var url =
                        'https://tt-gateway.equant.com/emmaws/APItest/api/users/' + this.state.username;

                      if (this.state.loading === false) {
                        this.setState({ loading: true });

                        fetch(url, {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Basic Q2hyaXN0b3BoZTpzc10kIWRMO3U=',
                          },
                          body: JSON.stringify({
                            password: s,
                          }),
                        })
                          .then(response => response.json())
                          .then(responseJson => {
                            console.log(responseJson);
                            if (responseJson[0] === undefined) {
                              // eslint-disable-next-line no-alert
                              alert('Incorrect username or password');
                              console.log('here');
                            }
                            else {
                              try {
                                this.storeData('firstName', responseJson[0].first_name);
                                this.storeData('lastName', responseJson[0].last_name);
                                this.storeData('email', responseJson[0].email);
                                this.storeData('mobileNumber', responseJson[0].mob_num);
                                this.storeData('extension', responseJson[0].ext);
                                this.storeData('password', responseJson[0].password);
                                Keyboard.dismiss();
                                goHomeEgypt();
                              }
                              catch (err) {
                                alert('error:', err);

                              }
                              // Navigation.push(this.props.componentId, {
                              //   component: {
                              //     name: 'HomeScreen',
                              //   }
                              // });
                            }
                          })
                          .catch(error => {
                            // eslint-disable-next-line no-alert
                            alert(error);
                            alert('Please check your internet connection and try again.');

                          });

                        this.setState({ loading: false });
                      }
                    })

                  }


                }
                }
              
              >
                <Text style={styles.buttonText}> Sign In </Text>
              </Button>
              <Button
                //sign up button
                title='Sign Up'
                containerStyle={{width:'30%'}}
                buttonStyle={styles.buttonSignIn}
                //navigation to register page here
                onPress={() => Navigation.push(this.props.componentId, {
                  component: {
                    name: 'Register',
                  }
                })
                }
              >
                <Text style={styles.buttonText}> Sign Up </Text>
              </Button>
          </View>
          <Text />
          <Text style={styles.text}
            onPress={() => Navigation.push(this.props.componentId, {
              component: {
                name: 'ForgetPassword',
              }
            })
            }>
            Forgot your password?
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  loginInfo: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '70%',
  },
  buttonsView: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '10%',
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
  },
  buttonSignIn: {
    // width: '60%',
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
    backgroundColor:'#000'
  },
  buttonSignUp: {
    width: '45%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#000000',
    height: '100%',
    width: '35%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    textAlignVertical: 'center',
    justifyContent: 'center',
  },
});

export default Login;
