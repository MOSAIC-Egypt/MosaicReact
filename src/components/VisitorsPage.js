/* eslint-disable react-native/no-inline-styles */
import React,{Component} from 'react';
import { View, TouchableOpacity, Image} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MainContainer from './MainContainer';
import ahmedNaguibImage from '../assets/images/ahmadnaguib.png';
import importantContactsImage from '../assets/images/importantcontacts.png';
import receptionImage from '../assets/images/reception.png';
import ciscoIpPhone from '../assets/images/ciscoipphone.png';
import generalInfo from '../assets/images/generalinfo.png';
import OurLocation from '../assets/images/ourLocation.png';
import visitorSafety from '../assets/images/visitorSafety.png';
import TopBar from './TopBar';


class VisitorsPage extends Component {

    static get options() {
        return TopBar('Visitors');
    }

    render() {
        return (
            <MainContainer>
                <View style={styles.changeDirection}>
                    <TouchableOpacity onPress={() => Navigation.push(this.props.componentId, {
                        component: {
                          name: 'SiteLeaderPage',
                        }})
                    } style={{justifyContent:'center',alignItems:'center',marginRight:'2%'}}>
                        <Image
                        style={{width:wp('58%'),height:'100%',resizeMode:'stretch'}}
                        source={ahmedNaguibImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Navigation.push(this.props.componentId, {
                        component: {
                          name: 'ImportantContactsPage',
                        }})
                    } style={{justifyContent:'center',alignItems:'center'}}>
                        <Image
                        style={{width:wp('38%'),height:'100%',resizeMode:'stretch'}}
                        source={importantContactsImage}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.changeDirection}>
                    <TouchableOpacity onPress={() => Navigation.push(this.props.componentId, {
                        component: {
                          name: 'ReceptionDeskPage',
                        }})
                    } style={{justifyContent:'center',alignItems:'center',marginRight:'2%'}}>
                        <Image
                        style={{width:wp('38%'),height:'100%',resizeMode:'stretch'}}
                        source={receptionImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Navigation.push(this.props.componentId, {
                        component: {
                          name: 'CiscoIPPhonePage',
                        }})
                    } style={{justifyContent:'center',alignItems:'center'}}>
                        <Image
                        style={{width:wp('58%'),height:'100%',resizeMode:'stretch'}}
                        source={ciscoIpPhone}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.changeDirection}>
                    <TouchableOpacity onPress={() => Navigation.push(this.props.componentId, {
                        component: {
                          name: 'GeneralInformationPage',
                        }})
                    } style={{justifyContent:'center',alignItems:'center',marginRight:'2%'}}>
                        <Image
                        style={{width:wp('43%'),height:'100%',resizeMode:'stretch'}}
                        source={generalInfo}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Navigation.push(this.props.componentId, {
                        component: {
                          name: 'OurLocationPage',
                        }})
                    } style={{justifyContent:'center',alignContent:'center'}}>
                        <Image
                        style={{width:wp('53%'),height:'100%',resizeMode:'stretch'}}
                        source={OurLocation}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.changeDirection2}>
                <TouchableOpacity onPress={() => Navigation.push(this.props.componentId, {
                        component: {
                          name: 'VisitorsSafety',
                        }})
                    } style={{justifyContent:'center',alignItems:'center'}}>
                        <Image
                        style={{width:wp('98%'),height:'100%',resizeMode:'stretch'}}
                        source={visitorSafety}
                        />
                </TouchableOpacity>
                </View>
            </MainContainer>
        );
    }
}
const styles = {
    changeDirection:{
        marginBottom:'2%',
        flexDirection:'row',
        height:hp('17%'),
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'black',
    },
    changeDirection2:{
        marginBottom:'2%',
        flexDirection:'row',
        height:hp('13%'),
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'black',
    },
};
export default VisitorsPage;
