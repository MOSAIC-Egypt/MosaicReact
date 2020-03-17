import React, { Component } from 'react';
import { StyleSheet,AsyncStorage, Image, View, Text, TouchableOpacity } from 'react-native';
import {Navigation} from 'react-native-navigation';

import { hp as responsiveHeight, wp as responsiveWidth, responsiveFontSize } from './BottomNavBar';
import MainContainer from '../components/MainContainer';
import TopBar from './TopBar';
const imagesPath = '../assets/images/';        // Change to default Project images path

//Making Components
class Calendar extends Component {

    static get options() {
        return TopBar('Calendar');
    }
    async changeClicked(){
        this.setState({clicked:true});
      }
    constructor(props) {
        super(props);
        this.state = { month: '', dataSource:'',clicked:false};
    }

      SetMonthNumber = async (month)=>{
         await AsyncStorage.setItem('MonthNumber', month).then(async value => {
            if (!this.state.clicked){
                await this.changeClicked();
                await Navigation.push(this.props.componentId, {
                    component: {
                      name: 'Events',
                    }});
            }
            this.setState({clicked:false});
      });}

    render(){
    return (
        <MainContainer>
        <View>
            <Text
                style={styles.textStyle}>
                Click on each month to check{'\n'}public holidays, MSC visits and events
            </Text>

            <View style={styles.imageViewStyle}>
                <TouchableOpacity
                    onPress={()=> this.SetMonthNumber('01')}>
                    <Image
                    style={styles.imageStyle}
                    source={require(imagesPath + 'jan.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={()=> this.SetMonthNumber('02')}>
                    <Image
                    style={styles.imageStyle}
                    source={require(imagesPath + 'feb.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> this.SetMonthNumber('03')}>
                    <Image
                    style={styles.imageStyle}
                    source={require(imagesPath + 'mar.png')}
                    />
                </TouchableOpacity>
            </View>
            <View
                style={styles.imageViewStyle}
            >
                <TouchableOpacity
                    onPress={()=> this.SetMonthNumber('04')}>
                    <Image
                    style={styles.imageStyle}
                    source={require(imagesPath + 'apr.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={()=> this.SetMonthNumber('05')}>
                    <Image
                    style={styles.imageStyle}
                    source={require(imagesPath + 'may.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> this.SetMonthNumber('06')}>
                    <Image
                    style={styles.imageStyle}
                    source={require(imagesPath + 'jun.png')}
                    />
                </TouchableOpacity>
            </View>
            <View
                style={styles.imageViewStyle}
            >
                <TouchableOpacity
                    onPress={()=> this.SetMonthNumber('07')}>
                    <Image
                    style={styles.imageStyle}
                    source={require(imagesPath + 'july.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={()=> this.SetMonthNumber('08')}>
                    <Image
                    style={styles.imageStyle}
                    source={require(imagesPath + 'aug.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> this.SetMonthNumber('09')}>
                    <Image
                    style={styles.imageStyle}
                    source={require(imagesPath + 'sep.png')}
                    />
                </TouchableOpacity>
            </View>
            <View
                style={styles.imageViewStyle}
            >
                <TouchableOpacity
                    onPress={()=> this.SetMonthNumber('10')}>
                    <Image
                    style={styles.imageStyle}
                    source={require(imagesPath + 'oct.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={()=> this.SetMonthNumber('11')}>
                    <Image
                    style={styles.imageStyle}
                    source={require(imagesPath + 'nov.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> this.SetMonthNumber('12')}>
                    <Image
                    style={styles.imageStyle}
                    source={require(imagesPath + 'dec.png')}
                    />
                </TouchableOpacity>
            </View>
            {console.log(this.state.month)}
        </View>
        </MainContainer>
    );
}
}
//Styling
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
    },
    coverImageStyle: {
        height: responsiveHeight(27.3),
        width: responsiveWidth(100),
        marginTop: '10%',       // Change Margin value ro fit top navbar
    },
    lineImageStyle: {
        marginTop: '2%',
    },
    textStyle: {
        color: '#50BE87',
        fontSize: responsiveFontSize(2),
        marginLeft: '5%',
        marginTop: '2.5%',
        marginBottom: '4.5%',
    },
    imageViewStyle: {
        flexDirection: 'row',
        marginLeft: '15%',
        marginRight: '15%',
        marginBottom: '2%',     // Change Margin to fit buttom navbar
    },
    buttonStyle: {
        paddingRight: '13.5%',
        paddingLeft: '13.5%',
    },
    imageStyle: {
        width: responsiveWidth(17),
        height: responsiveHeight(9),        // Change height to fit buttom navbar
    },
});

export default Calendar;
