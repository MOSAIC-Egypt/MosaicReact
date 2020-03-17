import React, { Component } from 'react';
import { Linking,StyleSheet,AsyncStorage, Alert, View, Text,Image, TouchableOpacity, Dimensions  } from 'react-native';
import {Navigation} from 'react-native-navigation';
import Moment from 'moment';
import { hp as responsiveHeight, wp as responsiveWidth, responsiveFontSize } from './BottomNavBar';
import MainContainer from './MainContainer';
import TopBar from './TopBar';

const imagesPath = '../assets/images/';        // Change to default Project images path
let win = Dimensions.get('window');
//Making Components
class BenefitsMenuDetails extends Component {

    static get options() {
        return TopBar('Benefits Menu Details');
    }
    async changeClicked(){
        this.setState({clicked:true});
      }
    constructor(props) {
        
        super(props);
     
        this.state = {
            details: '',
            data: [],
            loading: false,
            
            
        };
    
    }

    async componentDidMount() {

        
        await AsyncStorage.getItem('itemName').then(value => {
            this.setState({ itemName: value });
            //console.log('item in details page',this.state.details);
           
            //console.log( x.Name);
        });
        await AsyncStorage.getItem('itemBranches').then(value => {
            this.setState({ itemBranches: value.replace('Branch name :', '\n <B>Branch name : </b>') });
            //console.log('item in details page',this.state.details);
           
            //console.log( x.Name);
        });
        await AsyncStorage.getItem('itemDetails').then(value => {
            this.setState({ itemDetails: value });
            //console.log('item in details page',this.state.details);
           
            //console.log( x.Name);
        });
        await AsyncStorage.getItem('itemwebsite_link').then(value => {
            this.setState({ itemwebsite_link: value });
            //console.log('item in details page',this.state.details);
           
            //console.log( x.Name);
        });
        await AsyncStorage.getItem('itemfacebook_link').then(value => {
            this.setState({ itemfacebook_link: value });
            //console.log('item in details page',this.state.details);
           
            //console.log( x.Name);
        });
        await AsyncStorage.getItem('itemstart_date').then(value => {
            this.setState({ itemstart_date: value });
            //console.log('item in details page',this.state.details);
           
            //console.log( x.Name);
        });
        await AsyncStorage.getItem('itemend_date').then(value => {
            this.setState({ itemend_date: value });
            //console.log('item in details page',this.state.details);
           
            //console.log( x.Name);
        });

    }

    render(){
        const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
        console.log('last',this.state.namee );
        Moment.locale('en');
    return (
        
        <MainContainer  style={{ height: win.height, width: win.width}}>
            
            <View  style={styles.viewcontainer}>
             <Text  style={styles.textStyle}>
             { this.state.itemName}
            </Text>
            <View style={styles.rightContainer}>
            <TouchableOpacity onPress={() => TwitterOnPress(this)} >
            <Image
              source={require(imagesPath + 'worldWideWeb.png')}
              style={styles.icons}
            />
             </TouchableOpacity>
            </View>
             <View style={styles.rightcontainer}>
            
                 <TouchableOpacity onPress={() => FacebookOnPress(this)} >
            <Image
             source={require(imagesPath + 'facebookLogo.png')}
             style={styles.icons}
              
            />
             </TouchableOpacity>
            </View>
            </View>
            <View>
                    <Text style={{color:'#ff6600',fontSize:20,padding:20}}>
                    Offer details:

                    </Text>
                    <Text style={{ color:'white', paddingLeft:40, paddingBottom:15, fontSize: 15 }}>
                    { this.state.itemDetails}
                    </Text>

                    <Text style={{color:'#ff6600',fontSize:20,padding:20}}>
                    Branches:

                    </Text>
                    <Text style={{ color:'white', paddingLeft:40, paddingBottom:15, fontSize: 15 }}>
                    { this.state.itemBranches}}
                    </Text>
                    <Text style={{color:'#ff6600',fontSize:20,padding:20}}>
                    Start & End date

                    </Text>
                    <Text style={{ color:'white', paddingLeft:40, paddingBottom:15, fontSize: 15 }}>
                   Start date : {Moment(this.state.itemstart_date).format('DD MMM YYYY')}     

                    </Text>
                    <Text style={{ color:'white', paddingLeft:40, paddingBottom:15, fontSize: 15 }}>
                   End date :  {Moment(this.state.itemend_date ).format('DD MMM YYYY')}
                    </Text>
                </View>
      </MainContainer>
    );
}
}
//Styling
const styles = StyleSheet.create({
    icons:{
        height: 28,
        width: 48,
        alignSelf: 'flex-end',
        resizeMode: 'contain'
    },
    container: {
        backgroundColor: '#000',
        flex: 3,      
    },
    viewcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height:responsiveHeight(5),
         width: '90%',
        backgroundColor:'#8f8f8f',
        marginLeft:'5%',
        marginRight:'5%',
    },
    rightcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    },
    textStyle: {
        fontSize: responsiveFontSize(1.5),
        marginLeft: '5%',
       color:'white',
        marginTop: '2%',
        marginBottom: '1%',
        flex: 5 ,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    imageViewStyle: {

        alignItems: 'stretch',
        flexDirection: 'row',
        marginLeft: '10%',
        marginRight: '10%',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderRightWidth:  1,
        borderLeftWidth:  1,
        borderColor: '#fff',
    },
    touch: {
        width: responsiveWidth(20),
        height: responsiveHeight(15),
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        flex:1,
    },

    imageStyle: {
        width: responsiveWidth(17),
        height: responsiveHeight(9),        // Change height to fit buttom navbar
    },
});
function FacebookOnPress() {
    Linking.openURL('https://'+this.itemfacebook_link);
}
function TwitterOnPress() {
    Linking.openURL('https://'+this.itemwebsite_link);
}
export default BenefitsMenuDetails;
