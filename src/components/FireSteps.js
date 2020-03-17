import React, {Component} from 'react';
import {View, Text} from 'react-native';

import MainContainer from '../components/MainContainer';
import TopBar from './TopBar';


class FireSteps extends Component {

    static get options() {
    return TopBar('Fire Steps');
    }

    render(){
        return (
            <MainContainer>
                {/* to view the header image */}
                {/* <HeaderView/> */}
                <View>
                    <Text style={{color:'rgb(145,100,205)',fontSize:20,padding:20}}>
                    Fire steps
                    </Text>
                    <Text style={{ color:'white', paddingLeft:40, paddingBottom:15, fontSize: 15 }}>
                    {'\u2022'}  Leave all your belongings behind{'\n'}
                    {'\u2022'}  Evacuate the building using the stairwell  and do not use elevators{'\n'} 
                    {'\u2022'}  Remain calm and don’t rush or run on the stairs{'\n'}
                    {'\u2022'}  Head to the designated assembly point{'\n'}
                    </Text>

                    <Text style={{ color: 'rgb(145,100,205)', fontSize: 25, textAlign:'center'}}>
                        NB: Assembly points location{'\n'}is in front of buildings
                    </Text>
                </View>
            </MainContainer>
        );
    }}

export default FireSteps;
