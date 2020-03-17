import React, { Component } from 'react';
import { View, Dimensions, Text, FlatList, StyleSheet, Alert, AsyncStorage, Image } from 'react-native';

import TopBar from './TopBar';
import Footer from './BottomNavBar';
import { goHome } from '../navigation/navigation';
import headerImg from '../assets/images/caf_header.png';
import menuImg from '../assets/images/caf_menu.png';
import MainContainer from './MainContainer';
let win = Dimensions.get('window');


export default class Cafeteria extends Component {

    static get options() {
        return TopBar('Cafeteria');
    }

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            weeksMenu: [],
            todaysLunch: '',
            alternativeText: 'Loading...',
        };
        AsyncStorage.removeItem('CafData');
        console.log("CafData");

    }

    componentDidMount() {

        var week = (getWeek()).toString();
        fetchAllData(this, week);
    }

    render() {
        if (this.state.loading) {
            return (
        <MainContainer  style={{ height: win.height, width: win.width}}>

                <View style={styles.viewLayer1}>
                        <Text style={styles.loading}>{this.state.alternativeText}</Text>
                </View>
                </MainContainer>
            );
        }

        return (
            <View style={styles.viewLayer1}>

                <View style={styles.headerImgView}>
                    <Image
                        source={headerImg}
                        style={styles.headerImg}
                    />
                </View>

                <View style={styles.todaysLunchView}>
                    <Text style={styles.todaysLunch}>{this.state.todaysLunch}</Text>
                </View>

                <View style={styles.menuImgView}>
                    <Image
                        source={menuImg}
                        style={styles.menuImg}
                    />
                </View>
                <View style = {styles.menu}>
                    <FlatList
                        data = {this.state.weeksMenu}
                        renderItem = {({item}) => itemView(item)}
                        contentContainerStyle = {styles.listContainer}
                    />
                </View>
                <Footer/>
            </View>
        );
    }
}

// Single FlatList item renderring
function itemView(item) {
    return (
        <View style = {styles.listItem}>
            <View style = {styles.dayView}>
                <Text style = {styles.day}>{item.week_day}</Text>
            </View>
            <View style = {styles.mealView}>
                <Text style = {styles.meal}>{item.meal_desc}</Text>
            </View>
        </View>
    );
}


// Save data to local storage (when required), set data to state
// Handles "Today's Lunch" text on off days
async function setData(self, data, dontSave) {
    var week = (getWeek()).toString();
    console.log("week" + week);

    console.log("data" + dontSave);
    if (!data.length) {
        self.setState({
            alternativeText: 'No Data',
        });
        return;
    }
    

    AsyncStorage.setItem('CafDataVersion', week);

    self.setState({
        weeksMenu: data,
        loading: false,
    });
    try {
        
    if (!dontSave) {
        for (let i = 0; i < 5; ++i) {
            await AsyncStorage.setItem('CafData' + i + 0, data[i].week_day);
            await AsyncStorage.setItem('CafData' + i + 1, data[i].meal_desc);
        }
    }
        self.setState({
            todaysLunch: data[new Date().getDay() - 1].meal_desc, // Weekend days would throw an index out of range exception
        });
    }
    catch {
        self.setState({
            todaysLunch: 'Check back next Monday!',
        });
    }

}


// Loads week data from local storage, then calls 'setData'
// Note: really poor method used to save and load data locally, should be replaced with JSON. functions
async function loadFromStorage(self) {

    var data = [];
    for (let i = 0; i < 5; ++i) {
        var obj = {
            week_day: await AsyncStorage.getItem('CafData' + i + 0),
            meal_desc: await AsyncStorage.getItem('CafData' + i + 1),
        };
        data.push(obj);
    }
    setData(self, data, true);
    return;

}


// Calls 'loadFromStorage' if data stored is up to date, otherwise fetch from API
// Otherwise, displays an alert to send user home
async function fetchAllData(self, weekNum) {

    var lastStored = await AsyncStorage.getItem('CafDataVersion');
    if (weekNum === lastStored) {
        return await loadFromStorage(self);
    }
    else {
        return await fetch('https://tt-gateway.equant.com/emmaws/APItest/api/cafeterias/' + weekNum, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic Q2hyaXN0b3BoZTpzc10kIWRMO3U=',
            }})
            .then(response => response.json())
            .then(response => {
                setData(self, response, false);
            })
            .catch(e => {
                Alert.alert(
                    'Error loading data',
                    e,
                    [
                        {
                            text: 'Home',
                            onPress: () => goHome(),
                        },
                    ]
                );
            });
    }

}


// Return Week's number in year
function getWeek() {
    var d = new Date();
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}


// Unused, index out of range unhandled, delete if unnecessary
export async function mealOfTheDay() {
    var week = (getWeek()).toString();
    return await fetch('https://tt-gateway.equant.com/emmaws/APItest/api/cafeterias/' + week,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic Q2hyaXN0b3BoZTpzc10kIWRMO3U=',
        }})
    .then(response => response.json())
    .then(response => {
        return response[new Date().getDay() - 1].meal_desc;
    });

}



const styles = StyleSheet.create({

    viewLayer1: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'black',
    },

    headerImgView: {
        flex: 19,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'black',
    },

    todaysLunchView: {
        flex: 4,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '4.5%',
    },

    menuImgView: {
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'black',
    },

    menu: {
        flex: 19,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: 'black',
        marginHorizontal: '2%',
    },

    listContainer: {
        flex: 1,
        flexGrow: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
    },

    listItem: {
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderColor: 'white',
        flexDirection: 'row',
        alignItems: 'stretch',
        backgroundColor: 'rgb(16,16,16)',
    },

    dayView: {
        flex: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },

    mealView: {
        flex: 25,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: '1%',
    },

    ////////// Text Styles //////////

    todaysLunch: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },

    day: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ff7800',
        textAlign: 'center',
        fontFamily: 'Palatino Linotype',
    },

    meal: {
        fontSize: 13,
        color: 'white',
        textAlign: 'center',
        flexWrap: 'wrap',
        fontStyle: 'italic',
    },

    loading: {
        fontSize: 30,
        textAlign: 'center',
        color: '#ff7800',
        fontWeight: '900',
        fontStyle: 'italic',
    },

    ////////// Images //////////

    headerImg: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.344,
        resizeMode: 'contain',
    },

    menuImg: {
        width: Dimensions.get('window').width * 0.750,
        height: Dimensions.get('window').height * 0.075,
        resizeMode: 'contain',
    },

});
