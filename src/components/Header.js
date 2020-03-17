import React from 'react';
import { Dimensions, StyleSheet, Image } from 'react-native';

import HeaderImg from '../assets/images/headerImage.png';
import EgyptImg from '../assets/images/egyptBanner.jpg';


const Header = (props) => {
        if (props.header === 'Brazil' || global.img === 'Brazil')
        {
            return (
        <Image source={HeaderImg} style={styles.topImageView}/>
        );
        }
        else if (props.header === 'Egypt'|| global.img === 'Egypt')
        {
            return (
                <Image source={EgyptImg} style={styles.topImageView}/>
                );
        }

};

const styles = StyleSheet.create({
    topImageView: {

        marginBottom: Dimensions.get('window').height * 0.005,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.20,
        resizeMode: 'stretch',
        backgroundColor: 'black',

      },
});

export default Header;
