/* eslint-disable react-native/no-inline-styles */
import React,{Component} from 'react';
import {FlatList, View, Text, TouchableOpacity,Image, AsyncStorage} from 'react-native';
// import Image from 'react-native-scalable-image';
import {Navigation} from 'react-native-navigation';
import discountImage from '../assets/images/discountsHome.png';
import emergencyImage from '../assets/images/emergencyHome.png';
import workplaceImage from '../assets/images/workplaceHome.png';
import servicesImage from '../assets/images/servicesHome.png';
import newcomersImage from '../assets/images/newComers.png';
import visitorsImage from '../assets/images/visitorsGuide.png';
import managerImage from '../assets/images/managerCorner.png';
import MainContainer from './MainContainer';
import OneSignal from 'react-native-onesignal'; // Import package from node modules
import TopBar from './TopBar';
import OneClickButton from './OneClickButton';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

var dayName = '';
class HomeScreenEgypt extends Component {
    static firstName = '';
    constructor() {
        super();
        OneSignal.init('3c96653e-0884-45e3-9a6c-b3779d870a1c');
        OneSignal.addEventListener('received', this.onReceived);
        OneSignal.addEventListener('opened', this.onOpened);
        OneSignal.addEventListener('ids', this.onIds);
        console.log('Notification ' + OneSignal.name);
        this.state = {
          weekMeal:[],
          clicked:false,
          isEgyptImage:false,
        };
        this.getData();
      }


componentDidMount()
{
    fetchName();
    fetch('https://tt-gateway.equant.com/emmaws/APItest/api/cafeterias/' + this.getWeek().toString())
    .then(response => response.json())
    .then(responseJson=>{
      this.setState({
          weekMeal:responseJson,
      });
    });
    var date = new Date();
    var day = date.getDay();
    if (day === 0){
        dayName = 'Sunday';
    } else if (day === 1){
        dayName = 'Monday';
    } else if (day === 2){
      dayName = 'Tuesday';
  } else if (day === 3){
      dayName = 'Wednesday';
  } else if (day === 4){
      dayName = 'Thursday';
  } else if (day === 5){
      dayName = 'Friday';
  } else if (day === 6){
      dayName = 'Saturday';
  }
}
      componentWillUnmount() {
        OneSignal.removeEventListener('received', this.onReceived);
        OneSignal.removeEventListener('opened', this.onOpened);
        OneSignal.removeEventListener('ids', this.onIds);
      }

      onReceived(notification) {
        console.log('Notification received: ', notification);
      }

      onOpened(openResult) {
        console.log('Message: ', openResult.notification.payload.body);
        console.log('Data: ', openResult.notification.payload.additionalData);
        console.log('isActive: ', openResult.notification.isAppInFocus);
        console.log('openResult: ', openResult);
      }

      onIds(device) {
        console.log('Device info: ', device);
      }

      getImage = async () => {
        var country = await AsyncStorage.getItem('country');
      console.log(country);
        if (country  === 'Egypt MSC') {
            this.setState({
                isEgyptImage: true,
            });
        }
        else {
            this.setState({
                isEgyptImage: false,
            });
        }
        console.log(this.state.isEgyptImage);
    }
      getData = async () => {
        try {
            const value = await AsyncStorage.getItem('firstName');
            if (value !== null) {
              this.firstName = value;
            }
          }
          catch (e) {
            // error reading value
          }
      };
    static get options() {
        global.img = 'Egypt';
       var title = 'Welcome';
       if (this.firstName !== null)
       {
         title = 'Welcome ' + this.firstName + '!';
       }
        return TopBar('Home', true, true);
    }

    getWeek() {
        var d = new Date();
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
        var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    }

      async changeClicked(){
        this.setState({clicked:true});
      }
      renderedMeal=({item})=>{
          return (
              <Text style={styles.mealStyle}>{item.meal_desc}</Text>
          );
      }
    render(){
        var filteredMeal = '';
        console.log(this.state.weekMeal);
        if (this.state.weekMeal !== null && this.state.weekMeal.length !== 0)
        {
            console.log(this.state.weekMeal);
          filteredMeal = this.state.weekMeal.filter(
             (meal)=>{
                 return meal.week_day === dayName;
             }
        );
        }
        return (
            <MainContainer header="Egypt" >
                <View style={styles.mealContainer}>
                 <Text style={styles.subTextOrangeStyle}>Today's Meal: </Text>
                <FlatList
                data={filteredMeal}
                renderItem={this.renderedMeal}
                 style={{marginLeft:wp('1%'),resizeMode:'stretch'}}
                />
                </View>
                <View style={styles.changeDirection}>
                <View style={styles.centerStyle}>
                    <TouchableOpacity onPress={async () =>{
                         const {clicked} = this.state;
                         if (!clicked){
                            await this.changeClicked();
                            await Navigation.push(this.props.componentId, {
                                component: {
                                  name: 'NewComers',
                                }});
                         }
                        this.setState({clicked:false});
                     }} style={{justifyContent:'center',alignItems:'center' ,marginLeft:'40%'}}>

                    <Image
                    style={{width:wp('10%'),height:hp('5%'),resizeMode:'stretch'}}
                    source={newcomersImage}
                    // style={{alignItems:'center'}}
                    />
                    <Text style={styles.subTextStyle}>New</Text>
                    <Text style={styles.subTextStyle}>Comers</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={styles.marginLeftStyle}>
                    <TouchableOpacity onPress={async () =>{
                         const {clicked} = this.state;
                         if (!clicked){
                            await this.changeClicked();
                            await Navigation.push(this.props.componentId, {
                                component: {
                                  name: 'VisitorsPage',
                                }});
                         }
                        this.setState({clicked:false});
                     }
                    } style={{justifyContent:'center',alignItems:'center'}}>

                   <Image
                    style={{width:wp('10%'),height:hp('5%'),resizeMode:'stretch'}}
                    source={visitorsImage}
                    />
                    <Text style={styles.subTextStyle}>Visitors</Text>
                    <Text style={styles.subTextStyle}>guide</Text>
                   </TouchableOpacity>
                   </View>
                   <View  style={styles.marginLeftManagerStyle}>
                   <TouchableOpacity onPress={async() =>{
                         const {clicked} = this.state;
                         if (!clicked){
                            await this.changeClicked();
                            await Navigation.push(this.props.componentId, {
                                component: {
                                  name: 'ManagersCorner',
                                }});
                         }
                        this.setState({clicked:false});
                     }} style={{justifyContent:'center',alignItems:'center' ,marginRight:'40%'}}>
                   <Image
                    source={managerImage}
                    style={{width:wp('10%'),height:hp('5%'),resizeMode:'stretch'}}
                    />
                    <Text style={styles.subTextStyle}>Managers</Text>
                    <Text style={styles.subTextStyle}>Corner</Text>
                   </TouchableOpacity>
                   </View>
                </View>
                <View style={styles.innerContainer}>
                     <OneClickButton page="Workplace" style={styles.buttonStyleTop}>
                        <Image
                            source={workplaceImage}
                            style={{width:wp('48%'),height:'100%',resizeMode:'stretch'}}
                            />
                     </OneClickButton>
                    <OneClickButton page="ServicesMenu" style={styles.buttonStyleTopRight}>
                        <Image
                            style={{width:wp('48%'),height:'100%',resizeMode:'stretch'}}
                            source={servicesImage}
                            />
                     </OneClickButton>
                     </View>
                     <View style={styles.innerContainer}>
                <OneClickButton page="BenefitsMenu" style={styles.buttonStyleDown}>
                        <Image
                            style={{width:wp('48%'),height:'100%',resizeMode:'stretch'}}
                            source={discountImage}
                            />
                     </OneClickButton>
                    <OneClickButton page="EmergencyMenu" style={styles.buttonStyleDownRight}>
                        <Image
                            style={{width:wp('48%'),height:'100%',resizeMode:'stretch'}}
                            source={emergencyImage}
                            />
                    </OneClickButton>
                </View>
            </MainContainer>
        );
    }
}
const styles = {
    mealContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
    },
    innerContainer:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        // flexWrap:'wrap',
        width:wp('100%'),
        marginBottom:'2%',
        height:hp('15%'),
        // backgroundColor:'blue',
    },
    textStyle:{
        color:'#fff',
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold',
    },
    subTextOrangeStyle:{
        color:'rgb(255,102,0)',
        fontSize:20,
        marginLeft:'5%',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        marginBottom:'5%',
        marginTop:'5%',
    },
    mealStyle:{
        color:'rgb(255,102,0)',
        fontSize:20,
        // marginTop:'2%',
        alignItems:'center',
        justifyContent:'center',
    },
    subTextStyle:{
        color:'#fff',
        fontSize:15,
        marginBottom:'5%',
        // marginTop:10,
        // alignItems:'center',
        // justifyContent:'center',
        textAlign:'center',
        alignItems:'center',
        marginRight:'3%',
        marginLeft:'3%',
    },
    changeDirection:{
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        // resizeMode:'contain',
        // textAlign:'center',
        marginTop:hp('1%'),
        marginBottom:hp('1%'),
        // marginLeft:'5%',
    },
    buttonStyleTop:{
        // backgroundColor:'blue',
        // width:wp('45%'),
        marginRight:'2%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'3%',
    },
    buttonStyleTopRight:{
        // backgroundColor:'blue',
        // width:wp('45%'),
        justifyContent:'center',
        alignItems:'center',
        marginTop:'3%',
    },
    buttonStyleDown:{
        // backgroundColor:'blue',
        // width:wp('45%'),
        marginRight:'2%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'3%',
    },
    buttonStyleDownRight:{
        // backgroundColor:'blue',
        // width:wp('45%'),
        justifyContent:'center',
        alignItems:'center',
        marginTop:'3%',
    },
    marginLeftManagerStyle:{
        // marginLeft:wp('15%'),
        alignItems:'center',
        width:wp('33%'),
        justifyContent:'center',
        // backgroundColor:'blue',
    },
    marginLeftStyle:{
        // marginLeft:wp('15%'),
        // backgroundColor:'blue',
        alignItems:'center',
        width:wp('33%'),
        justifyContent:'center',
        // backgroundColor:'green',
    },
    centerStyle:{
        alignItems:'center',
        width:wp('33%'),
        justifyContent:'center',
        // backgroundColor:'red',
    },
};
export default HomeScreenEgypt;
export function fetchName(name) {
    if (name) {
        HomeScreenEgypt.firstName = name;
    }
    else {
        AsyncStorage.getItem('firstName').then(value => {
            HomeScreenEgypt.firstName = value;
        });
    }
}