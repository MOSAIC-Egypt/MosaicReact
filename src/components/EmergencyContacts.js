import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableOpacity, Linking, Alert, Image } from 'react-native';

import MainContainer from './MainContainer';
import TopBar from './TopBar';

class EmergencyContacts extends Component{
    static get options() {
        return TopBar('Contacts');
    }



    render(){
        if(global.img === 'Egypt')
{
        return (
            <MainContainer>
                <Text style={styles.titleStyle}>For Emergencies</Text>
                <Text style={styles.subTitleStyle}>From the office call:</Text>
                <View style={styles.rowStyle}>
                    <Image
                        style={styles.img}
                        source={require('../assets/images/telephone.png')}
                    />
                    <Text style={styles.textStyle}>+33</Text>
                </View>
                <Text style={styles.subTitleStyle}>From your mobile call:</Text>
                <TouchableOpacity onPress={()=>{
                        Alert.alert(
                            'Alert',
                            'Are you sure you want call +201271113804?',
                            [
                              {text: 'Yes', onPress: () => Linking.openURL('tel:$(+2 01271113804)'),
                            },
                              {
                                text: 'No',
                              },
                            ],
                          );
                    }}>
                <View style={styles.rowStyle}>
                    <Image
                        style={styles.img}
                        source={require('../assets/images/mobile.png')}
                    />
                        <Text style={styles.textStyle}>+2 01271113804</Text>
                </View>
                </TouchableOpacity>
            </MainContainer>
        );
                }
        else
        {
            return (
                <MainContainer>
                    <Text style={styles.titleStyle}>For Emergencies</Text>
                    <Text style={styles.subTitleStyle}>* Security Desk: Protege Company – Protege:</Text>
                    <TouchableOpacity onPress={()=>{
                            Alert.alert(
                                'Alert',
                                'Are you sure you want call +55 2422499504 ?',
                                [
                                  {text: 'Yes', onPress: () => Linking.openURL('tel:$(+552422499504)'),
                                },
                                  {
                                    text: 'No',
                                  },
                                ],
                              );
                        }}>
                    <View style={styles.rowStyle}>
                        <Image
                            style={styles.img}
                            source={require('../assets/images/telephone.png')}
                        />
                        <Text style={styles.textStyle}>+55 24 2249 9504</Text>
                    </View>
                    </TouchableOpacity>
                    <Text style={styles.subTitleStyle}>* Medical desk Sta. Teresa Hospital – </Text>
                    <Text style={styles.subTitleStyle2}> Hosp. Sta. Teresa:</Text>
                    <TouchableOpacity onPress={()=>{
                            Alert.alert(
                                'Alert',
                                'Are you sure you want call +55 2422334600 ?',
                                [
                                  {text: 'Yes', onPress: () => Linking.openURL('tel:$(+552422334600)'),
                                },
                                  {
                                    text: 'No',
                                  },
                                ],
                              );
                        }}>
                    <View style={styles.rowStyle}>
                        <Image
                            style={styles.img}
                            source={require('../assets/images/telephone.png')}
                        />
                            <Text style={styles.textStyle}>+55 24 2233 4600</Text>
                    </View>
                    </TouchableOpacity>
                </MainContainer>
            );
        }
    }
}

const styles = {
    rowStyle: {
        flexDirection: 'row',
        marginLeft: '10%',
        marginTop: '5%',
    },
    titleStyle: {
        color: 'rgb(145,100,205)',
        fontSize: 35,
        marginBottom: '5%',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    subTitleStyle: {
        fontSize: 17,
        color: 'white',
        marginTop: '5%',
        marginLeft: '10%',
        fontWeight:'bold',
    },
    subTitleStyle2: {
        fontSize: 17,
        color: 'white',
        marginLeft: '10%',
        fontWeight:'bold',
    },
    textStyle: {
        color: 'white',
        fontSize: 16,
        marginLeft: '5%',
        marginTop: '2%',
    },
    img: {
        width: Dimensions.get('window').width * 0.1,
        height: Dimensions.get('window').height * 0.0625,
        resizeMode: 'contain',
    },
};

export default EmergencyContacts;
