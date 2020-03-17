/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, Modal, ScrollView, TouchableHighlight, Dimensions, AsyncStorage } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { goHomeEgypt, goHomeBrazil } from '../navigation/navigation';


// Create a Component
export default class BottomNavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pickerSelection: '',
            pickerDisplayed: false,
        };
        this.getData();
        console.log(this.state.pickerSelection);
    }

    async getData() {
        var value = await AsyncStorage.getItem('country');
        console.log(value);
        await this.changingState(value);
        console.log('initial state: ' + this.state.pickerSelection);
    }

    MenuMethod = () => {
        return (
            Navigation.mergeOptions('menuSideMenu', {
                sideMenu: {
                    right: {
                        visible: true,
                    },
                },
            })
        );
    };

    async changingState(value) {
        this.setState({
            pickerSelection: value,
        });
    }

    async setPickerValue(newValue) {
        console.log(newValue);
        await this.changingState(newValue);
        console.log('State Now ' + this.state.pickerSelection);

        this.togglePicker();
    }

    togglePicker() {
        this.setState({
            pickerDisplayed: !this.state.pickerDisplayed,
        });
    }

    render() {
        const pickerValues = [
            {
                title: 'Brazil MSC',
                value: 'Brazil MSC',
            },
            {
                title: 'Egypt MSC',
                value: 'Egypt MSC',
            },
        ];

        return (
            <View style={styles.navBarStyle}>
                {/* Home Button */}
                <TouchableOpacity
                    onPress={async () => {
                        console.log(AsyncStorage.getItem('country'));
                        if (this.state.pickerSelection === 'Egypt MSC') {
                            await AsyncStorage.setItem('country', 'Egypt MSC');
                            goHomeEgypt();
                        }
                        else {
                            await AsyncStorage.setItem('country', 'Brazil MSC');
                            goHomeBrazil();
                        }
                    }}
                    style={styles.homeButton}
                >
                    <Image
                        source={require('../assets/images/home.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.togglePicker()}
                >
                    <Text
                        style={styles.logoText}
                    >
                        {this.state.pickerSelection}
                    </Text>
                </TouchableOpacity>

                {/* Custom Picker, the standard picker was very stiff so had to
                    create a custome one */}
                {/* Error: Value keeps changing across pages when changed by user */}
                {/* Could improve animation by using react-native-modal Package */}
                {/* blurr background */}

                <Modal
                    visible={this.state.pickerDisplayed}
                    transparent={true}
                    onRequestClose={() => console.log('Close was requested')}
                    animationType={'slide'}
                >
                    <TouchableHighlight
                        style={{flex:1}}
                        underlayColor={'transparent'}
                        onPress= {() => this.togglePicker()}>
                        <ScrollView
                            style={styles.pickerView}
                        >
                            <View style={{ alignItems: 'center', padding: '5%' }} key = { (item) => item.toString() }>
                                <Text style={styles.pickerHeadText}>Where Are You?</Text>
                                {pickerValues.map((value, index) => {
                                    return (
                                        <View style={styles.pickerBottonsView} key={index}>
                                            <TouchableOpacity
                                                key={index}
                                                onPress={async () => {
                                                    console.log(value.value);
                                                    await this.setPickerValue(value.value);
                                                    console.log('Before Switching: ' + this.state.pickerSelection);
                                                    if (this.state.pickerSelection === 'Egypt MSC') {
                                                        await AsyncStorage.setItem('country','Egypt MSC');
                                                        goHomeEgypt();
                                                    }
                                                    else {
                                                        await AsyncStorage.setItem('country','Brazil MSC');
                                                        goHomeBrazil();
                                                    }
                                                }}
                                            >
                                                <Text style={styles.pickerText}>{value.title}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    );
                                })}

                                {/* <TouchableOpacity
                                onPress={() => this.togglePicker()}
                                >
                                    <Text
                                        style={styles.pickerCancel}
                                > cancel</Text>
                                </TouchableOpacity> */}
                            </View>
                        </ScrollView>
                    </TouchableHighlight>
                </Modal>
                {/* Menu Button */}
                <TouchableOpacity
                    onPress={() => this.MenuMethod()}
                    style={styles.menuButton}
                >
                    <Image
                        source={require('../assets/images/menu.png')}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}


// Styling
const styles = StyleSheet.create({

    navBarStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: hp('2%'),
        width: wp('100%'),
    },

    homeButton: {
        marginLeft: '10%',
        marginTop: '1%',
        height: '100%',
    },

    logoText: {
        color: 'white',
        fontSize: responsiveFontSize(3),
        fontWeight: 'bold',
    },

    pickerView: {
        borderRadius: 10,
        marginLeft: '5%',
        marginRight: '5%',
        backgroundColor: '#000',
        position: 'absolute',
        bottom: 0,
        left: '5%',
        right: '5%',
        height: '20%',
        width: '70%',

    },

    pickerHeadText: {
        marginBottom: '3%',
        paddingBottom: '2%',
        textAlign: 'center',
        fontSize: responsiveFontSize(2),
        color: 'rgb(255,102,0)',
        fontWeight: 'bold',
        borderColor: '#AAA',
        borderBottomWidth: 1,
        width: '70%',
    },

    pickerBottonsView: {
        borderColor: '#AAA',
        borderBottomWidth: 1,
        width: '70%',
        alignItems: 'center',
    },

    pickerText: {
        color: 'white',
        marginTop: hp('0.5%'),
        marginBottom: hp('0.5%'),
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
    },

    menuButton: {
        marginRight: '10%',
        marginTop: '1%',
        height: '100%',
    },

});


// react-native's "Dimensions" as a replacement for 'react-native-responsive-..'
// Might be a good idea to keep these in a new helper class/.js

export function responsiveFontSize(num) {
    const c = 0.013;
    return Dimensions.get('window').height * c * num;
}

export function wp(perc) {
    var num = typeof perc === 'string' ? Number(perc.substring(0, perc.length - 1)) : perc;
    return Dimensions.get('window').width * (num / 100);
}

export function hp(perc) {
    var num = typeof perc === 'string' ? Number(perc.substring(0, perc.length - 1)) : perc;
    return Dimensions.get('window').height * (num / 100);
}
