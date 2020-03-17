import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableOpacity, Linking, Image } from 'react-native';

import websiteImage from '../assets/images/orangewebsite.png';
import MainContainer from './MainContainer';
import TopBar from './TopBar';


class GeneralInformationPage extends Component {

    static get options() {
        return TopBar('General Info');
    }

    render() {
        return (
            <MainContainer>
                <Text style={styles.titleStyle}>GENERAL INFORMATION</Text>
                <Text style={styles.subTitleOrangeStyle}>Visitors Pass</Text>
                <Text style={styles.textStyle}>Remember to keep your Visitors Pass with you and visible at all times, especially whenever you are
                     entering or exiting any of our office floors and/or buildings.
                </Text>
                <View style={styles.horizontalLineStyle}/>
                <Text style={styles.subTitleBlueStyle}>Your Agenda during your visit</Text>
                <Text style={styles.textStyle}>You will be provided with a hard copy agenda of your visit program, along with the names and contact
                    information of those you will be meeting with.
                </Text>
                <View style={styles.horizontalLineStyle}/>
                <Text style={styles.subTitleGreenStyle}>Sustenance and Shopping</Text>
                <Text style={styles.textStyle}>On each of our office floors there is a kitchenette where you will find complimentary tea. On some floors,
                 you will find Nespresso and vending machines, as well as a collection of snacks, available for purchase. Inside CityStars mall
                     you will find two food courts. The ground floor food court in phase one has many fast food outlets, while the food court in
                      Phase two has many restaurants. Also located in the mall are several pharmacies and a collection of local souvenir shops on
                       the 4th floor of Phase One.
                </Text>
                <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://www.citystars-heliopolis.com.eg');}}y>
                    <View style={styles.siteContainer}>
                        <Image
                            style={styles.img}
                            source={websiteImage}
                        />
                        <Text style={styles.linkStyle}>www.citystars-heliopolis.com.eg</Text>
                    </View>
                </TouchableOpacity>
            </MainContainer>
        );
    }
}
const styles = {
    horizontalLineStyle: {
        marginTop: '5%',
        marginBottom: '5%',
        borderBottomColor: 'rgb(89,89,89)',
        borderBottomWidth: 1,
        width: '100%',
    },
    titleStyle: {
        color: 'rgb(255,180,230)',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: '2.5%',
        marginVertical: '2.5%',
    },
    subTitleOrangeStyle: {
        marginLeft: '5%',
        marginTop: '2.5%',
        fontSize: 20,
        color: 'rgb(255,102,0)',
        fontWeight: 'bold',
    },
    textStyle: {
        color: 'white',
        fontSize: 15,
        marginHorizontal: '5%',
        marginTop: '2.5%',
    },
    subTitleBlueStyle: {
        marginLeft: '5%',
        marginTop: '2.5%',
        fontSize: 20,
        color: 'rgb(75,180,230)',
        fontWeight: 'bold',
    },
    subTitleGreenStyle: {
        marginLeft: '5%',
        marginTop: '2.5%',
        fontSize: 20,
        color: 'rgb(80,190,135)',
        fontWeight: 'bold',
    },
    siteContainer: {
        flexDirection:'row',
        marginLeft: '12.5%',
        marginTop: '2.5%',
    },
    linkStyle: {
        marginLeft: '2.5%',
        fontWeight: 'bold',
        color: 'white',
        marginTop: '7.5%',
    },
    img: {
        marginTop: '5%',
        width: Dimensions.get('window').width * 0.10,
        height: Dimensions.get('window').height * 0.065,
        resizeMode: 'contain',
    },
};


export default GeneralInformationPage;
