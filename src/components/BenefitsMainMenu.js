import React, { Component } from 'react';
import { Linking, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';

import MainContainer from './MainContainer';
import TopBar from './TopBar';
import hotelRatesImg from '../assets/images/hotelDiscount.png';
import cityStarsDiscountsImg from '../assets/images/cityStarsDiscount.png';
import orangeBenefitsImg from '../assets/images/orangeBenefits.png';


export default class BenefitsMainMenu extends Component {

    static get options() {
        return TopBar('Benefits Menu');
    }

    render() {
        return (
            <MainContainer>
                <View style = {styles.container}>
                    <View style = {styles.innerContainer}>
                        <TouchableOpacity onPress={() => hotelRatesOnPress()}>
                            <Image
                                source={hotelRatesImg}
                                style={styles.smallButton}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {() => cityStarsDiscountsOnPress(this)}>
                            <Image
                                source={cityStarsDiscountsImg}
                                style={styles.smallButton}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.innerContainer}>
                        <TouchableOpacity onPress={() => orangeBenefitsOnPress(this)}>
                            <Image
                                source={orangeBenefitsImg}
                                style={styles.orangeBenefits}
                            />
                        </TouchableOpacity>
                    </View>

                </View>
            </MainContainer>
        );
    }
}


const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const styles = {

    container: {
        flex: 1,
    },

    innerContainer: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: '1.2%',
    },

    smallButton: {
        resizeMode: 'contain',
        width: w * 0.475,
        height: h * 0.158,
    },

    orangeBenefits: {
        resizeMode: 'contain',
        width: w * 0.967,
        height: h * 0.129,
    },

};


////////////// OnPress events handled here //////////////

function hotelRatesOnPress() {
    Linking.openURL('https://tt-gateway.equant.com/emmaws/docs/Hotel-Rates.xlsx');
}

function cityStarsDiscountsOnPress(it) {
    Navigation.push(it.props.componentId, {
        component: {
          name: 'CityStarsPage',
    }});
}

function orangeBenefitsOnPress(it) {
    Navigation.push(it.props.componentId, {
        component: {
          name: 'BenefitsMenu',
    }});
}