import React, { Component } from 'react';
import {searchBar, StyleSheet,AsyncStorage, Image, View, Text, TouchableOpacity, Dimensions, Linking  } from 'react-native';
import {Navigation} from 'react-native-navigation';
import { SearchBar } from 'react-native-elements';
import { hp as responsiveHeight, wp as responsiveWidth, responsiveFontSize } from './BottomNavBar';
import MainContainer from './MainContainer';
import TopBar from './TopBar';
const imagesPath = '../assets/images/';        // Change to default Project images path
let win = Dimensions.get('window');
//Making Components
class BenefitsMenu extends Component {

    static get options() {
        return TopBar('Benefits Menu');
    }
    async changeClicked(){
        this.setState({clicked:true});
      }
    constructor(props) {
        super(props);
        this.state = { Benefit: '', dataSource:'',clicked:false};
    }

      SetcatograyName = async (Benefit)=>{
         await AsyncStorage.setItem('Cateogary', Benefit).then(async value => {
            if (!this.state.clicked){
                await this.changeClicked();
                await Navigation.push(this.props.componentId, {
                    component: {
                      name: 'BenefitsList',
                    }});
            }
            this.setState({clicked:false});
      });}
//
    render(){
    return (
        <MainContainer  style={{ height: win.height, width: win.width}}>
            <View style={{marginTop: 20}}>
            <View style={StyleSheet.flatten([styles.imageViewStyle,{borderTopWidth: 1}])}>
                <TouchableOpacity
                  style={styles.touch}
                    onPress={()=> this.SetcatograyName('dining')}>
                    <Image
                    style={styles.imageStyle}
                    source={require(imagesPath + 'diningBenefits.png')}
                    />
               <Text
                style={StyleSheet.flatten([styles.textStyle,{color: '#4BB4E6'}])}
                onPress={()=> this.SetcatograyName('dining')}
                 >Dining
                     </Text>
                </TouchableOpacity>
                <TouchableOpacity
               // eslint-disable-next-line react-native/no-inline-styles
               style={StyleSheet.flatten([styles.touch,{borderLeftWidth: 1, borderColor: '#fff'}])}
                    onPress={()=> this.SetcatograyName('flowersAndChocolates')}>
                    <Image
                    style={styles.imageStyle}
                    source={require(imagesPath + 'bouquet.png')}
                    />
                     <Text
                style={StyleSheet.flatten([styles.textStyle,{color: '#FF7900'}])}
                onPress={()=> this.SetcatograyName('flowersAndChocolates')}
                 >Flowers & Chocolates
                     </Text>
                </TouchableOpacity>
                </View>
                <View
                style={styles.imageViewStyle}
            >
                <TouchableOpacity
                style={styles.touch}
                    onPress={()=> this.SetcatograyName('home')}>
                    <Image
                    style={styles.imageStyle}
                    source={require(imagesPath + 'house.png')}
                    />
                     <Text
                style={StyleSheet.flatten([styles.textStyle,{color: '#50BE87'}])}
                onPress={()=> this.SetcatograyName('home')}
                 >Home
                     </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={StyleSheet.flatten([styles.touch,{borderRightWidth: 1,borderLeftWidth: 1, borderColor: '#fff'}])}
                    onPress={()=> this.SetcatograyName('pharmacy')}>
                    <Image
                    style={styles.imageStyle}
                    source={require(imagesPath + 'medicine.png')}
                    />
                     <Text
                style={StyleSheet.flatten([styles.textStyle,{color: '#A885D8'}])}
                onPress={()=> this.SetcatograyName('pharmacy')}
                 >Pharmacy
                     </Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.touch}
                    onPress={()=> this.SetcatograyName('dentalAndOptics')}>
                    <Image
                    style={styles.imageStyle}
                    source={require(imagesPath + 'tooth.png')}
                    />
                     <Text
                style={StyleSheet.flatten([styles.textStyle,{color: '#FFD200'}])}
                onPress={()=> this.SetcatograyName('dentalAndOptics')}
                 >Dental & Optics
                     </Text>
                </TouchableOpacity>
                </View>
            <View
                style={styles.imageViewStyle}
            >
                <TouchableOpacity
                   style={styles.touch}
                    onPress={()=> Linking.openURL('https://tt-gateway.equant.com/emmaws/docs/Hotel-Rates.xlsx')}>
                    <Image
                    style={styles.imageStyle}
                    source={require(imagesPath + 'hotels.png')}
                    />
                     <Text
                style={StyleSheet.flatten([styles.textStyle,{color: '#4BB4E6'}])}
                onPress={()=> this.SetcatograyName('hotels')}
                 >Hotels
                     </Text>
                </TouchableOpacity>
                </View>
            <View
                style={styles.imageViewStyle}
            >
                <TouchableOpacity
                 style={styles.touch}
                    onPress={()=> this.SetcatograyName('beautyAndFitness')}>
                    <Image
                    style={styles.imageStyle}
                    source={require(imagesPath + 'cosmeticsBenefits.png')}
                    />
                     <Text
                style={StyleSheet.flatten([styles.textStyle,{color: '#FFB4E6'}])}
                onPress={()=> this.SetcatograyName('beautyAndFitness')}
                 >Beauty & Fitness
                     </Text>
                </TouchableOpacity>
                <TouchableOpacity
                   // eslint-disable-next-line react-native/no-inline-styles
                   style={StyleSheet.flatten([styles.touch,{borderLeftWidth: 1, borderColor: '#fff'}])}
                    onPress={()=> this.SetcatograyName('fashion')}>
                    <Image
                    style={styles.imageStyle}
                    source={require(imagesPath + 'dress.png')}
                    />
                     <Text
                style={StyleSheet.flatten([styles.textStyle,{color: '#50BE87'}])}
                onPress={()=> this.SetcatograyName('fashion')}
                 >Fashion
                     </Text>
                </TouchableOpacity>
                </View>
            <View
                style={styles.imageViewStyle}
            >
                <TouchableOpacity
                 style={styles.touch}
                    onPress={()=> this.SetcatograyName('child')}>
                    <Image
                    style={styles.imageStyle}
                    source={require(imagesPath + 'mortarboard.png')}
                    />
                     <Text
                style={StyleSheet.flatten([styles.textStyle,{color: '#A885D8'}])}
                onPress={()=> this.SetcatograyName('child')}
                 >Child care & Education
                     </Text>
                </TouchableOpacity>
         
                <TouchableOpacity
                 // eslint-disable-next-line react-native/no-inline-styles
                 style={StyleSheet.flatten([styles.touch,{borderLeftWidth: 1, borderColor: '#fff'}])}
                    onPress={()=> this.SetcatograyName('clubsAndEntertainment')}>
                    <Image
                    style={styles.imageStyle}
                    source={require(imagesPath + 'clubs.png')}
                    />
                     <Text
                style={StyleSheet.flatten([styles.textStyle,{color: '#FFD200'}])}
                onPress={()=> this.SetcatograyName('clubsAndEntertainment')}
                 >  Clubs & Entertaiment
                     </Text>
                </TouchableOpacity>
                </View>
            <View
                style={styles.imageViewStyle}
            >
                <TouchableOpacity
                 style={styles.touch}
                    onPress={()=> this.SetcatograyName('banks')}>
                    <Image
                    style={styles.imageStyle}
                    source={require(imagesPath + 'banks.png')}
                    />
                     <Text
                style={StyleSheet.flatten([styles.textStyle,{color: '#50BE87'}])}
                onPress={()=> this.SetcatograyName('banks')}
                 >Banks
                     </Text>
                </TouchableOpacity>
                <TouchableOpacity
                   // eslint-disable-next-line react-native/no-inline-styles
                   style={StyleSheet.flatten([styles.touch,{borderRightWidth: 1,borderLeftWidth: 1, borderColor: '#fff'}])}
                    onPress={()=> this.SetcatograyName('services')}>
                    <Image
                    style={styles.imageStyle}
                    source={require(imagesPath + 'services.png')}
                    />
                     <Text
                style={StyleSheet.flatten([styles.textStyle,{color: '#FF7900'}])}
                onPress={()=> this.SetcatograyName('services')}
                 >  Services
                     </Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.touch}
                    onPress={()=> this.SetcatograyName('others')}>
                    <Image
                    style={styles.imageStyle}
                    source={require(imagesPath + 'other.png')}
                    />
                     <Text
                style={StyleSheet.flatten([styles.textStyle,{color: '#A885D8'}])}
                onPress={()=> this.SetcatograyName('others')}
                 >  Others
                     </Text>
                </TouchableOpacity>
            </View>
            {console.log(this.state.Benefit)}
        </View>
        </MainContainer>
    );
}
}
//Styling
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 3,
    },
    textStyle: {
        fontSize: responsiveFontSize(1.5),
       // marginLeft: '5%',
        marginTop: '2%',
        marginBottom: '1%'
    },
    imageViewStyle: {
      
        alignItems: 'stretch',
        flexDirection: 'row',
        marginLeft: '2%',
        marginRight: '2%',
        padding: 1,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderRightWidth:  1,
        borderLeftWidth:  1,
        borderColor: '#fff'
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
        width: responsiveWidth(18),
        height: responsiveHeight(9),        // Change height to fit buttom navbar
    },
 
});

export default BenefitsMenu;
