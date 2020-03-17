import React, {Component} from 'react';
import {Text,View,TouchableOpacity, AsyncStorage,  TextInput} from 'react-native';
import {Navigation} from 'react-native-navigation';

import MainContainer from '../components/MainContainer';
import TopBar from './TopBar';
import {Input, Button} from 'react-native-elements';

class UpdateInfo extends Component {

  static get options() {
      return TopBar('Update Profile');
    }

    constructor(props) {
        super(props);
        this.state = { firstName: '' , lastName: '', email: '', mobileNumber: '', extension: ''  };
        this.getData('firstName');
        this.getData('lastName');
        this.getData('email');
        this.getData('mobileNumber');
        this.getData('extension');
      }

      getData = async (info) => {
        try {

          const value = await AsyncStorage.getItem(info);

          if (value !== null) {
         switch (info){
             case 'firstName':this.setState({firstName: value}); break;
             case 'lastName':this.setState({lastName: value}); break;
             case 'email':this.setState({email: value}); break;
             case 'mobileNumber':this.setState({mobileNumber: value}); break;
             case 'extension':this.setState({extension: value}); break;
         }
          }
        } catch (e) {
            console.log(e);
        }
      };

      state={newFirstName: '', newLastName:'', newMobileNumber:'',newExtension:''}



      render(){



        return (
            <MainContainer>
                <View style={styles.mainView}>
               <Input
            //FirstName
            containerStyle={{width:'60%'}}
            inputStyle={styles.textInput}
            placeholder="First Name"
            placeholderTextColor="white"
            onChangeText={ text => {this.setState({newFirstName: text});}}
            defaultValue={this.state.firstName}
          />
          <Input
            //LastName
            containerStyle={{width:'60%'}}

            inputStyle={styles.textInput}
            placeholder="Last Name"
            placeholderTextColor="white"
            onChangeText={text => {this.setState({newLastName: text});}}
            defaultValue={this.state.lastName}
          />
                         <Input
            //Email
            containerStyle={{width:'60%'}}

            inputStyle={styles.textInput}
            placeholder="Email"
            placeholderTextColor="white"
            value={this.state.email}
            editable={false}

          />
                         <Input
            //MobileNumber
            containerStyle={{width:'60%'}}
            
            inputStyle={styles.textInput}
            placeholder="Mobile Number"
            placeholderTextColor="white"
            onChangeText={text => {this.setState({newMobileNumber: text});}}
            defaultValue={this.state.mobileNumber}
          />

           <Input
            //extension
            containerStyle={{width:'60%'}}

            inputStyle={styles.textInput}
            placeholder="Extension"
            placeholderTextColor="white"
            onChangeText={text => {this.setState({newExtension: text});}}
            defaultValue={this.state.extension}
             />
        
          <View style={styles.buttonsView}>
          <TouchableOpacity  onPress={() => Navigation.push(this.props.componentId, {
                       component: {
                         name: 'ChangePassword',
                       }})
                   }>
              <Text  style={styles.text}>Change Password</Text>
          </TouchableOpacity>
          <Button title="   Save   " titleStyle={{color:'black', alignSelf:'center', textAlign:'center'}}
          // style={styles.buttonSave} 
          buttonStyle={styles.buttonSave}
          onPress={()=>{
              fetch('https://tt-gateway.equant.com/emmaws/APItest/api/users/' + this.state.mail,
              {
                  method: 'PUT',
                  headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                      'Authorization': 'Basic Q2hyaXN0b3BoZTpzc10kIWRMO3U=',
                  },
                  body: JSON.stringify({
                    first_name:this.state.newFirstName,
                    last_name:this.state.newLastName,

                    mob_num:this.state.newMobileNumber,
                    ext:this.state.newExtension,

                  }),
                  } )
                  .then((response) => response.json())
                  .then((responseJson) => {
                      this.setState({
                          data: responseJson.data,
                      });
                      alert('Profile is updated successfully!');
                      console.log('update success');
                  })
                  .catch((error) => {
                      alert('Error while trying to update profile');
                      console.error(error);
                  });
            }  } />
          </View>
          </View>
               </MainContainer>
        );
    }
    }
    const styles = {
        textInput: {
            textAlign: 'center',
            color: 'white',
            fontSize: 15,
          },
          mainView: {
            flex: 1,
            width: '100%',
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            paddingTop:'20%',
            alignItems: 'center',
          },
          buttonSave: {
             justifyContent: 'center',
             alignContent: 'center',
           // textAlign:'center',
            height: '50%',
            //width:'60%',
             alignItems: 'center',
            backgroundColor:'white',
            color:'black',
          },
          buttonText: {
            textAlign: 'center',
            color: 'black',
            textAlignVertical: 'center',
            justifyContent: 'center',
          },
          buttonsView: {
            flexDirection: 'column',
            width: '70%',
            alignItems: 'center',
            height: '50%',
            backgroundColor:'black',
            justifyContent: 'space-evenly',
           alignContent:'center',
           
          },
          text: {
            textAlign: 'center',
            fontSize: 15,
            color: 'white',
            fontWeight: 'bold',
          },

    };
    export default UpdateInfo;
