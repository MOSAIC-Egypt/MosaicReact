import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import { Navigation } from 'react-native-navigation';

import FooterView from './BottomNavBar';
import TopBar from './TopBar';


class NotificationPage extends Component {

    static get options() {
        return TopBar('Notifications');
    }

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: false,
        };
    }

    storeData = async (key , info) => {
        try {
          await AsyncStorage.setItem(key, info);
        } catch (e) {
          // saving error
          console.log(e);
        }
    };

    getParsedDate(strDate) {
        var strSplitDate = String(strDate).split(' ');
        var date = new Date(strSplitDate[0]);
        var dd = date.getDate();
        var mm = date.getMonth() + 1;
        var yyyy = date.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        date =  dd + '-' + mm + '-' + yyyy;
        return date.toString();
    }

    componentDidMount() {
        fetch('https://tt-gateway.equant.com/emmaws/APItest/api/notifications',{
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
                await AsyncStorage.setItem('notification',JSON.stringify(responseJson));
            })
            .catch(async error => {
                var item = await AsyncStorage.getItem('notification');
                var test = JSON.parse(item);
                if (test !== null) {
                    this.setState({
                        data: test,
                        loading: true,
                    });
            } else {
            Alert.alert(
            'Alert',
            'Please check your internet connection and try again.',
            [
              {text: 'OK', onPress: () =>  Navigation.pop(this.props.componentId),
            },
            ],
          );}});
      }
    renderItems=({item})=>{
        var date = this.getParsedDate(item.noti_date);
        if (item === null){
            return <View/>;
        }
        var notiID = '' + item.id;
        return (
            <TouchableOpacity onPress={()=>{
                this.storeData('notificationID',notiID);
                Navigation.push(this.props.componentId, {
                    component: {
                      name: 'NotificationDetailPage',
                    }});
            }}>
                <View>
                    <Text style={styles.itemTextStyle}>{item.noti_desc}</Text>
                    <Text style={styles.itemDateStyle}>{date}</Text>
                    <View style={styles.horizontalLineStyle}/>
                </View>
            </TouchableOpacity>
        );
    };
    render(){
        if (!this.state.loading){
            return (
                <View style={styles.outerContainer}>
                    <Text style={styles.waitStyle}>Please Wait...</Text>
                </View>
            );
        }
        return (
            <View style={styles.outerContainer}>
                <FlatList keyExtractor = { (item, index) => index.toString() }
                data={this.state.data}
                renderItem={this.renderItems}
                />
                <FooterView/>
            </View>
        );
    }
}
const styles = {
    outerContainer:{
        flex:1,
        backgroundColor:'black',
    },
    waitStyle:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
    },
    itemTextStyle:{
        fontSize:15,
        color:'white',
        marginLeft:10,
        marginTop:10,
    },
    itemDateStyle:{
        fontSize:15,
        color:'rgb(89,89,89)',
        marginRight:10,
        textAlign:'right',
    },
    horizontalLineStyle:{
        borderBottomColor:'rgb(89,89,89)',
        borderBottomWidth:1,
        width:'100%',
        marginLeft:10,
    },
};


export default NotificationPage;
