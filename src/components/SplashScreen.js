import React, { Component } from 'react';
import {View, Text, Image } from 'react-native';
import splashImg from '../assets/images/splashImage.png';

export class Splash extends Component {

    constructor() {
        super();
        this.state = {
          animating: false,
          align: 'center',
          alignsecond: false,
        };

        setTimeout(
          () =>
            this.load(),
          3000
        );
      }

      load = () => {
        const {navigate} = this.props.navigation;
        navigate('Directing');
    };
    render() {
    return (
      <View
        style={{ flex: 1, alignItems: 'center', flexDirection: 'row',
          justifyContent: this.state.align,
          marginHorizontal: 40}}>
        <Image
          source={splashImg}
          style={{ width: 100, height: 100 }}
        />
          <View style={{ margin: 10 }}>
            <Text
              style={{color: '#114998', fontSize: 30, fontWeight: 'bold' }}>
              Connect
            </Text>
          </View>
      </View>
    );
  }
}

 export default Splash;
