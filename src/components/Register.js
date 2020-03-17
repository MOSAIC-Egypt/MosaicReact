import React, {Component} from 'react';
import {ImageBackground, StyleSheet, TextInput, TouchableOpacity, View, Text, Picker,ScrollView,
    KeyboardAvoidingView , AsyncStorage}  from 'react-native';
import {Navigation} from 'react-native-navigation';

import TopBar from './TopBar';


export default class Register extends Component {

    static get options() {
        return TopBar('Register');
    }

    state = {
        Name:'',
        Last:'',
        Email:'',
        Password:'',
        otp:'',
        Mobile:'',
        Ext:'',
        isAdmin:'',
        isLocked:'',
        ExpiryDate:'',
        playerID:'',
        Country:'',
        rePassword:'',
        loading: false
    };
    storeData = async (key , info) => {
        try {
          await AsyncStorage.setItem(key, info);
        } catch (e) {
          // saving error
          console.log(e);
        }
      };

    componentDidMount(){

    }
    Register = () => {
        if(this.state.loading === false)
        { this.setState({loading: true});
        if (this.state.Name !== '' && this.state.Last !== ''
                && this.state.Email !== ''
                    && this.state.Ext !== ''
                        && this.state.Mobile !== ''
                            && this.state.Country !== '')
                                {
                                        if (this.state.Email.endsWith("@orange.com")) {
                                           
                                                        return fetch('https://tt-gateway.equant.com/emmaws/APItest/api/users',
                                                        {
                                                            method: 'POST',
                                                            headers: {
                                                                'Accept': 'application/json',
                                                                'Content-Type': 'application/json',
                                                                'Authorization': 'Basic Q2hyaXN0b3BoZTpzc10kIWRMO3U=',
                                                            },
                                                            body: JSON.stringify({
                                                                first_name:this.state.Name,
                                                                last_name:this.state.Last,
                                                                email:this.state.Email,
                                                                otp:this.state.otp,
                                                                mob_num:this.state.Mobile,
                                                                ext:this.state.Ext,
                                                                isAdmin:this.state.isAdmin,
                                                                isLocked:this.state.isLocked,
                                                                ExpiryDate:this.state.ExpiryDate,
                                                                playerID:this.state.playerID,
                                                            }),
                                                            } )
                                                            .then((response)  =>
                                                            {
                                                                console.log(response)
                                                                console.log(typeof response)
                                                                console.log(response.status === 200);
                                                                console.log(response.status === 500);
                                                                if (response.status === 200){
                                                                    // this.storeData('firstName',this.state.Name);
                                                                    // this.storeData('lastName',this.state.Last);
                                                                    this.storeData('email',this.state.Email);
                                                                    // this.storeData('mobileNumber',this.state.Mobile);
                                                                    // this.storeData('extension',this.state.Ext);
                                                                    Navigation.push(this.props.componentId, {
                                                                        component: {
                                                                          name: 'SendOTP',
                                                                        }})
                                                                }
                                                                else {
                                                                    if(response.status === 500)
                                                                        alert("This user already exists.");
                                                                }
                                                            } 
                                                                ).catch((error) => {
                                                                    alert("Please check your internet connection and try again.")
                                                                })
                                                    }
                                        else {
                                            alert('Email is invalid');
                                        }
                                    }
                                    else {
                                        // eslint-disable-next-line no-alert
                                        alert('Please fill all required data');
                                    }
                                    this.setState({loading: false});
                                }
                                }

    render (){
        return (
            <ImageBackground style={styles.image} source={require('../assets/images/backgroundImage.png')}>
                <ScrollView>
                <View style={styles.container}>
                    <Text style={{fontSize:15, fontWeight:"bold"}}>
                        Please Enter Your Details
                    </Text>
                        <TextInput
                        style={styles.input}
                        placeholder="First Name"
                        placeholderTextColor="black"
                        value={this.state.Name}
                        onChangeText={(Name) => this.setState({Name})}
                        />
                        <TextInput
                        style={styles.input}
                        placeholder="Last Name"
                        placeholderTextColor="black"
                        value={this.state.Last}
                        onChangeText={(Last) => this.setState({Last})}
                        />
                        <TextInput
                        style={styles.input}
                        placeholder="First.last@orange.com"
                        keyboardType="email-address"
                        placeholderTextColor="black"
                        value={this.state.Email}
                        onChangeText={(Email) => this.setState({Email})}
                        />
                        <TextInput
                        style={styles.input}
                        placeholder="Ext #"
                        keyboardType="phone-pad"
                        placeholderTextColor="black"
                        value={this.state.Ext}
                        onChangeText={(Ext) => this.setState({Ext})}
                        />
                        <TextInput
                        style={styles.input}
                        placeholder="Mobile #"
                        keyboardType="phone-pad"
                        placeholderTextColor="black"
                        value={this.state.Mobile}
                        onChangeText={(Mobile) => this.setState({Mobile})}
                        />
                        <View style={{borderBottomWidth:1}}>
                        <Picker
                            style={{ aspectRatio:4}}
                            selectedValue={this.state.Country}
                            mode='dialog'
                            onValueChange={(itemValue, itemIndex) =>
                            this.setState({Country: itemValue})
                            }>
                            <Picker.Item label="Country" value="" />
                            <Picker.Item label="Egypt" value="EGY" />
                            <Picker.Item label="Brazil" value="BRA" />
                        </Picker>
                        </View>
                    <TouchableOpacity style={styles.button} onPress={() => this.Register()}>
                    <Text style={{color:'white', fontWeight:'bold', fontSize:15}}>
                        REGISTER
                    </Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}
const pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,50}$/

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
  },
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:'5%'
  },
    input: {
        width:'50%',
        height:'8%',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        textAlign:'center',
        fontWeight: 'bold',
        fontSize: 15 ,
        marginBottom:'2%'
    },
    button: {
        width:'30%',
        height:'5%',
        backgroundColor:'black',
        alignItems:'center',
        justifyContent:'center',
        marginTop:15,
    },
});
