import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, FlatList, Dimensions, AsyncStorage,Alert} from 'react-native';
import {Navigation} from 'react-native-navigation';
import MainContainer from '../components/MainContainer';
import TopBar from './TopBar';

export default class Events extends Component{ //use <Events> component in App.js after import
    constructor(props) {
        super(props);
        this.state = { month: '',loading:false};    
    }

    static get options() {
        return TopBar('Events');
    }

    componentDidMount(){
        try {
            AsyncStorage.getItem('MonthNumber').then(value => {
              this.setState({ month: value });
        fetch('https://tt-gateway.equant.com/emmaws/APItest/api/events/' + this.state.month,{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic Q2hyaXN0b3BoZTpzc10kIWRMO3U=',
            }})
        .then((response) => response.json())
        .then(async (responseJson) => {
            this.setState({
                dataSource: responseJson,
                loading:true,
            },
            console.log(typeof this.state.datasource),
            console.log( this.state.datasource)
            );
            await AsyncStorage.setItem(this.state.month,JSON.stringify(responseJson));
        })
        .catch(async (error) => {
            var item = await AsyncStorage.getItem(this.state.month);
            var test = JSON.parse(item);
            if (test !== null){
                this.setState({
                    dataSource:test,
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
            );
            }
            catch (e) {
              console.log(e);
          }
    }
    ListEmptyView = () => {
        return (
          <View style={styles.headerText}>
            <Text style={{textAlign: 'center',fontSize:20, fontWeight:'bold',color:'white'}}> No Events.</Text>
          </View>
        );
      }
    getImage(eventType){
        if (eventType === 'Public Holidays'){
        return (
            <Image source={require('../assets/images/puplicholiday.png')}
                    style={{width:"30%", height:win.width*0.3}}
                    resizeMode={'contain'}
            />
            );
            }
        else if (eventType === 'MSC Events'){
            return (
                <Image source={require('../assets/images/msceventspic.png')}
                    style={{width:"30%", height:win.width * 0.3}}
                    resizeMode={'contain'}
                />
                );
            }
        else {
            return (
                <Image source={require('../assets/images/mscvisitspic.png')}
                    style={{ width : "30%", height:win.width * 0.3}}
                    resizeMode={'contain'}
                />
                );
            }
        }
    getDateName(day){
        const date = new Date(day);
        var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var dayOfWeek = date.getDay();

        return (
            <Text>{dayNames[dayOfWeek]}</Text>
        );
    }
    render(){
        if (!this.state.loading){
            return (
                <MainContainer>
                    <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>
                        Please Wait...
                    </Text>
                </MainContainer>
            );
        }
        return (
            <MainContainer>
                <FlatList
                style={{ padding:10 }}
                data={this.state.dataSource}
                ItemSeparatorComponent={
                    () => <View style={{ height:10 }}/>
                }
                renderItem={({item}) =>
                <View style={styles.flatList}>
                    {this.getImage(item.event_type_name)}
                    <Text style={styles.text}>
                        {this.getDateName(item.event_dt_start)}
                        {'\n'}
                        {item.event_dt_start.slice(8,10)}
                    </Text>
                    <Text style={styles.text}>{item.event_name}</Text>
                </View>
                }
                keyExtractor = { (item, index) => index.toString() }
                ListEmptyComponent={this.ListEmptyView}
                />
            </MainContainer>
        );
    }
}

const win = Dimensions.get('window');

const styles = StyleSheet.create({
    image: {
        width:null,
        height:'30%', //check the height of image with other screens
    },
    text: {
        color: 'rgb(255,180,230)',
        fontSize: 15,
        textAlign:'center',
        width : '25%',
    },
    flatList: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
  });
