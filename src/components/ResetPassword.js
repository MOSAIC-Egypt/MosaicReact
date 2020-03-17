import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, AsyncStorage} from 'react-native';

import OuterPagesContainer from './OuterPagesContainer';
import { goToAuth } from '../navigation/navigation';
import TopBar from './TopBar';
import {Buffer} from 'buffer';
import { sha512 } from 'react-native-sha512';

export default class ResetPassword extends Component {

    static get options() {
        return TopBar('Reset Password');
    }

    state = {
        password: '',
        newPassword:'',
        rePassword:'',
    }
    constructor(props) {
        super(props)
        this.state = {
            // oldPassword : '',
            Email: '',
            otp:''
        };
        // this.getData('password');
        this.getData('email');
        this.getData('otp');
    }
    getData = async (info) => {
        try {
          const value = await AsyncStorage.getItem(info);
          if (value !== null) {
            console.log(value);
            switch (info){
                // case 'password':this.setState({oldPassword: value});break;
                case 'email':this.setState({Email: value}); console.log(this.state.Email);break;
                case 'otp':this.setState({otp: value}); break;

                
            }
            
          }
        } catch (e) {
            console.log(e);
        }
      };
    Submit = () => {
        
        if ( this.state.newPassword !== '' && this.state.rePassword !== '' && this.state.Email !==''){
            
                if (pass.test(this.state.newPassword)){
                    if (this.state.newPassword === this.state.rePassword){
                        return sha512(this.state.newPassword).then( hash => { 
                            const Passwordinbase64 = Buffer.from(hash, 'hex').toString('base64');
                      this.state.newPassword = Passwordinbase64;
                      console.log(this.state.newPassword)
                        fetch('https://tt-gateway.equant.com/emmaws/APItest/api/users/',
                        {
                            method: 'PUT',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                                'Authorization': 'Basic Q2hyaXN0b3BoZTpzc10kIWRMO3U=',
                            },
                            body: JSON.stringify({
                                email: this.state.Email,
                                password:this.state.newPassword,
                                otp:this.state.otp,
                            }),
                            } ).then((response)  => 
                                                            
                            { 
                                console.log(response)
                                console.log(typeof response)
                                console.log(response.status === 200);
                                console.log(response.status === 500);
                                if (response.status === 200){
                                    goToAuth();
                                     }
                                else {
                                    if(response.status === 500)
                                {
                                    alert("Error while resetting the password");

                                }
                                }
                            } 
                                ).catch((error) => {
                                    alert("Please check your internet connection and try again.")
                                        //  this.setState({loading: false});
                                })
                       })    
                    }

                    else{
                        alert('Passwords do not match')
                    }
                    
                } 
                else {
                    alert('Password is invalid :\nPassword must be more than 6 digits and contain at least one uppercase letter, one numeric digit, and one special character')
                }
        }
        else {alert('Please fill all required data');}
    }
    
  

    render(){
        return (
            <OuterPagesContainer>
                <View style={styles.mainView}>
                    <TextInput
                    placeholder="Enter your new password"
                    placeholderTextColor="white"
                    underlineColorAndroid="white"
                    style={styles.textinput}
                    secureTextEntry={true}
                    value={this.state.newPassword}
                    onChangeText={(newPassword) => this.setState({newPassword})}
                    />
                    <TextInput
                    placeholder="Re-Enter your new password"
                    placeholderTextColor="white"
                    underlineColorAndroid="white"
                    style={styles.textinput}
                    secureTextEntry={true}
                    value={this.state.rePassword}
                    onChangeText={(rePassword) => this.setState({rePassword})}
                    />
                    <Text></Text>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={this.Submit}>
                        <Text style={{fontWeight:'bold'}}>
                            Submit
                        </Text>
                    </TouchableOpacity>
                </View>
            </OuterPagesContainer>
        );
    }
};

const pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,50}$/

const styles = {
    text:{
        fontSize:15,
        color:'white',
        marginBottom: 10,
    },
    textinput: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        width: '100%',

      },
    button: {
      backgroundColor: 'rgb(255,102,0)',
      height: '30%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    
    },
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
      },
};
