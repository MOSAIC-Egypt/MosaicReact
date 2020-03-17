/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, View, AsyncStorage, FlatList, Alert, Dimensions, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';

import MainContainer from './MainContainer';
import TopBar from './TopBar';


class CityStarsDiscounts extends Component {

    static get options() {
        return TopBar('Discounts');
    }

    constructor(props) {
        super(props);
        this.state = {
            discount: '',
            data: [],
            loading: false,
        };
    }

    async componentDidMount() {

        await AsyncStorage.getItem('discount').then(value => {
            this.setState({ discount: value });
            console.log(this.state.discount);
        });

        fetch('https://tt-gateway.equant.com/emmaws/APItest/api/discounts/' + this.state.discount,{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic Q2hyaXN0b3BoZTpzc10kIWRMO3U=',
            }})
            .then(response => response.json())
            .then(async responseJson => {
                this.setState({
                    data: responseJson,
                    loading: true,
                });
                await AsyncStorage.setItem(this.state.discount, JSON.stringify(responseJson));
            })
            .catch(async error => {
                var item = await AsyncStorage.getItem(this.state.discount);
                var test = JSON.parse(item);
                if (test !== null) {
                    this.setState({
                        data: test,
                        loading: true,
                    });
                }
                else {
                    Alert.alert(
                        'Alert',
                        'Please check your internet connection and try again.',
                        [
                            {
                                text: 'OK', onPress: () => Navigation.pop(this.props.componentId),
                            },
                        ],
                    );
                }
            });
    }

    renderDiscounts=({item}) => {
        var byteImage = 'data:image/png;base64,' + item.Pic;
        console.log(byteImage);
        if (item === null) {
            return <View/>;
        }
        return (
            <View style={{alignItems: 'center'}}>
                <Image
                    source={{uri:byteImage}}
                    style={imgStyle}
                />
                <Text style={{textAlign: 'center', marginTop: '2.5%', marginBottom: '15%', color: 'white', fontSize: 20}}>
                    {item.Name}
                </Text>
            </View>
        );
    };

    render() {
        console.log(this.state.data);
        if (!this.state.loading) {
            return (
                <MainContainer>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>
                        Please Wait...
                    </Text>
                </MainContainer>
            );
        }
        return (
            <MainContainer>
                <FlatList style={styles.flatView}
                    data={this.state.data}
                    renderItem={this.renderDiscounts}
                />
            </MainContainer>
        );
    }
}

const imgStyle = {
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').height * 0.3,
    resizeMode: 'stretch',
};

const styles = {
    flatView: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#000000',
      },
    };
export default CityStarsDiscounts;
