import React,{Component} from 'react';
import {View,Text,AsyncStorage,Alert} from 'react-native';
import {Navigation} from 'react-native-navigation';
class NotificationDetailPage extends Component{
    static get options() {
        return {
            topBar: {
                background: {
                    color: '#000000',
                },
                title: {
                    color:'#ffffff',
                    text: 'Notification Detail',
                },
                backButton: {
                    visible: true,
                    color:'#ffffff',
                },
            },
        };
    }
    constructor(props){
        super(props);
        this.state = {
            data:[],
            id:0,
            loading:false,
        };
    }
    async componentDidMount(){
        await AsyncStorage.getItem('notificationID').then(value => {
            this.setState({ id: value });
            console.log(value);
        });
        fetch('https://tt-gateway.equant.com/emmaws/APItest/api/notifications/' + this.state.id,{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic Q2hyaXN0b3BoZTpzc10kIWRMO3U=',
            }})
        .then(response => response.json())
        .then(async responseJson => {
          this.setState({
              data: responseJson,
              loading:true,
          });
          await AsyncStorage.setItem(this.state.id,JSON.stringify(responseJson));
      })
      .catch( async error => {
        var item = await AsyncStorage.getItem(this.state.id);
        var test= JSON.parse(item);
        if(test !== null){
            this.setState({
                data:test,
                loading:true,
            });
        } else {
        Alert.alert(
          'Alert',
          'Please check your internet connection and try again.',
          [
            {text: 'OK', onPress: () => Navigation.pop(this.props.componentId),
          },
          ],
        );}});
    }
    render(){
        if (this.state.data.length > 0){
            return (
                <View style={styles.outerContainer}>
                    <Text style={styles.titleStyle}>{this.state.data[0].noti_int_title}</Text>
                    <Text style={styles.textStyle}>{this.state.data[0].noti_int_text}</Text>
                </View>
            );
        }
        return (
            <View style={styles.outerContainer}>
                <Text style={styles.waitStyle}>Please Wait...</Text>
            </View>
        );
    }
}
const styles = {
    outerContainer:{
        flex:1,
        backgroundColor:'black',
    },
    titleStyle:{
        textAlign:'center',
        marginTop:10,
        color:'rgb(255,102,0)',
        fontWeight:'bold',
        fontSize:20,
    },
    textStyle:{
        marginTop:10,
        marginLeft:10,
        fontSize:15,
        color:'white',
    },
    waitStyle:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
    },
};

export default NotificationDetailPage;
