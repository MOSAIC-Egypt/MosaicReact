import React,{Component} from 'react';
import {Text,View} from 'react-native';

import MainContainer from './MainContainer';
import  TopBar from './TopBar';


class ReceptionDeskPage extends Component {

    static get options() {
        return TopBar('Reception Desk');
    }

    render(){
        return (
            <MainContainer>
                <Text style={styles.titleBlueStyle}>
                    RECEPTION DESK
                </Text>
                <Text style={styles.textStyle}>
                    Ask the receptionists to call your visit SPOC to come collect you from Reception,
                     and to also provide you with your Visitors Pass that will enable you to enter our offices.
                     {'   '}Important: Please remember to  bring your FT ID or any other form of picture ID with you.
                </Text>
                <View style={styles.horizontalLineStyle}/>
                <Text style={styles.titleOrangeStyle}>
                    Your Agenda during your visit
                </Text>
                <Text style={styles.textStyle}>
                    You will be provided with a hard copy agenda of your visit program, along with the names and contact information of those you
                     will be meeting with.
                </Text>
            </MainContainer>
        );
    }
}
const styles = {
    horizontalLineStyle:{
        marginTop:20,
        borderBottomColor:'rgb(89,89,89)',
        borderBottomWidth:1,
        width:'100%',
    },
    titleBlueStyle:{
        color:'rgb(75,180,230)',
        fontSize:20,
        fontWeight:'bold',
        marginTop:20,
        marginLeft:20,
        marginBottom:10,
    },
    titleOrangeStyle:{
        color:'rgb(255,102,0)',
        fontSize:20,
        fontWeight:'bold',
        marginLeft:20,
        marginTop:20,
        marginBottom:10,
    },
    textStyle:{
        color:'white',
        fontSize:15,
        marginLeft:40,
        fontWeight:'bold',
    },
};

export default ReceptionDeskPage;
