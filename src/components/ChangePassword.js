import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, AsyncStorage, keya} from 'react-native';

import MainContainer from '../components/MainContainer';
import TopBar from './TopBar';

export default class ChangePassword extends Component{
    static get options() {
        return TopBar('Change Password');
    }

    state = {
        Password: '',
        newPassword:'',
        rePassword:'',
    }
    constructor(props) {
        super(props);
        this.state = {
            oldPassword : '',
            Email: '',
        };
        this.getData('password');
        this.getData('email');
    }
    getData = async (info) => {
        try {
          const value = await AsyncStorage.getItem(info);
          if (value !== null) {
            console.log(value);
            switch (info){
               case 'password':this.setState({oldPassword: value});break;
                case 'email':this.setState({Email: value}); break;
            }
          }
        } catch (e) {
            console.log(e);
        }
      };
    Submit = () => {
        if (this.state.Password !== '' && this.state.newPassword !== '' && this.state.rePassword !== ''){
            if (this.state.Password === this.state.oldPassword){
                if (pass.test(this.state.newPassword)){
                    if (this.state.newPassword === this.state.rePassword){                    
                        // console.log("success")
                        return fetch('https://tt-gateway.equant.com/emmaws/APItest/api/users/' + this.state.Email,
                        {
                            method: 'PUT',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                                'Authorization': 'Basic Q2hyaXN0b3BoZTpzc10kIWRMO3U=',
                            },
                            body: JSON.stringify({
                                password:this.state.newPassword,
                            }),
                            } )
                            .then((response) => response.json())
                            .then((responseJson) => {
                                this.setState({
                                    data: responseJson.data,
                                });
                                console.log('register success');
                            })
                            .catch((error) => {
                                alert('Error while trying to register');
                                console.error(error);
                            });
                    }
                    else {
                        alert('Passwords do not match');
                    }
                }
                else {
                    alert('Password is invalid :\nPassword must be more than 6 digits and contain at least one uppercase letter, one numeric digit, and one special character');
                }
            }
            else {alert('Wrong password');}
        }
        else {alert('Please fill all required data');}
    }

    render(){
        return (
            <MainContainer>
                <View style={styles.mainView}>
                    <TextInput
                    placeholder="Enter your old password"
                    placeholderTextColor="white"
                    underlineColorAndroid="white"
                    style={styles.textinput}
                    secureTextEntry={true}
                    value={this.state.Password}
                    onChangeText={(Password) => this.setState({Password})}
                    />
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
                    <Text/>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={this.Submit}>
                        <Text style={{fontWeight:'bold'}}>
                            Submit
                        </Text>
                    </TouchableOpacity>
                </View>
            </MainContainer>
        );
    }
}

const pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,50}$/;

const styles = {
    text:{
        fontSize:15,
        color:'white',
        marginBottom: 10,
        fontWeight:'bold',
    },
    textinput: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        width: '100%',

      },
    button:{
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '30%',
        height: '8%',
    },
    mainView: {
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        paddingLeft: '20%',
        paddingRight: '20%',
      },
};
