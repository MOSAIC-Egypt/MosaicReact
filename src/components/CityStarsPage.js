/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, TouchableOpacity, Dimensions, AsyncStorage, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';
import MainContainer from './MainContainer';
import fashionImage from '../assets/images/fashion.png';
import diningImage from '../assets/images/dining.png';
import cosmeticsImage from '../assets/images/cosmetics.png';
import furnitureImage from '../assets/images/furniture.png';
import kidsImage from '../assets/images/kids.png';
import TopBar from './TopBar';

class CityStarsPage extends Component {

    static get options() {
        return TopBar('City Stars');
    }

    storeData = async (key , info) => {
        try {
          await AsyncStorage.setItem(key, info);
        } catch (e) {
          // saving error
          console.log(e);
        }
    };

    render() {
        return (
            <MainContainer>
                <View style={{flex: 1}}>
                    <View style={styles.innerContainer}>
                        <TouchableOpacity onPress={() => {
                            this.storeData('discount','fashion');
                            Navigation.push(this.props.componentId, {
                            component: {
                            name: 'CityStarsDiscounts',
                            }});
                        }
                        }>
                            <Image
                                source={fashionImage}
                                style={styles.smallButton}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            this.storeData('discount','dining');
                            Navigation.push(this.props.componentId, {
                            component: {
                            name: 'CityStarsDiscounts',
                            }});
                        }
                        }>
                            <Image
                                source={diningImage}
                                style={styles.smallButton}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.innerContainer}>
                        <TouchableOpacity onPress={() => {
                            this.storeData('discount', 'cosmetics');
                            Navigation.push(this.props.componentId, {
                            component: {
                            name: 'CityStarsDiscounts',
                            }});
                        }
                        }>
                            <Image
                                source={cosmeticsImage}
                                style={styles.smallButton}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            this.storeData('discount', 'furniture');
                            Navigation.push(this.props.componentId, {
                            component: {
                            name: 'CityStarsDiscounts',
                            }});
                        }
                        }>
                            <Image
                                source={furnitureImage}
                                style={styles.smallButton}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.innerContainer}>
                        <TouchableOpacity onPress={() => {
                                this.storeData('discount', 'kids');
                                Navigation.push(this.props.componentId, {
                                component: {
                                name: 'CityStarsDiscounts',
                                }});
                            }
                            }>
                            <Image
                                source={kidsImage}
                                style={styles.largeButton}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </MainContainer>
        );
    }
}

const styles = {
    innerContainer: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: '1.2%',
    },

    smallButton: {
        width: Dimensions.get('window').width * 0.475,
        height: Dimensions.get('window').height * 0.158,
        resizeMode: 'contain',
    },

    largeButton: {
        width: Dimensions.get('window').width * 0.967,
        height: Dimensions.get('window').height * 0.129,
        resizeMode: 'contain',
    },
};

export default CityStarsPage;