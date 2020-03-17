/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View,Text,ScrollView,FlatList, Dimensions,Alert} from 'react-native';
import {Navigation} from 'react-native-navigation';

import MainContainer from './MainContainer';
import TopBar from './TopBar';
const numColumns = 3;


class SecurityOrganization extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading:false,
        };
    }

    static get options() {
        return TopBar('Organization');
    }

    componentDidMount(){
        fetch('https://tt-gateway.equant.com/emmaws/APItest/api/connect',{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic Q2hyaXN0b3BoZTpzc10kIWRMO3U=',
            }})
        .then(response => response.json())
        .then(responseJson => {
            this.setState({
                data: responseJson,
                loading:true,
            });
        })
        .catch(error => Alert.alert(
            'Alert',
            'Please check your internet connection and try again.',
            [
              {text: 'OK', onPress: () => Navigation.pop(this.props.componentId),
            },
            ],
          ));
    }
    renderItemCSO = ({ item, index }) => {
        if (item === null) {
          return <View style={[styles.CSOItemStyle, styles.itemInvisible]} />;
        }
        return (
          <View style={styles.CSOItemStyle}>
            <Text style={styles.flatListTextContainer}>{item.Name}</Text>
            <Text style={styles.CSOTeamTextStyle}>{item.Team}</Text>

          </View>
        );
    };
    renderItemSESC = ({ item, index }) => {
        if (item === null) {
          return <View style={[styles.SESCItemStyle, styles.itemInvisible]} />;
        }
        return (
          <View style={styles.SESCItemStyle}>
            <Text style={styles.flatListTextContainer}>{item.Name}</Text>
            <Text style={styles.SESCTeamTextStyle}>{item.Team}</Text>
          </View>
        );
    };
    renderItemCSGLead = ({ item, index }) => {
        if (item === null) {
          return <View style={[styles.CSGLeadItemStyle, styles.itemInvisible]} />;
        }
        return (
          <View style={styles.CSGLeadItemStyle}>
            <Text style={styles.flatListTextContainer}>{item.Name}</Text>
            <Text style={styles.CSGLeadTeamTextStyle}>{item.Team}</Text>
          </View>
        );
    };
    renderItemCSG = ({ item, index }) => {
        if (item === null) {
          return <View style={[styles.CSGItemStyle, styles.itemInvisible]} />;
        }
        return (
          <View style={styles.CSGItemStyle}>
            <Text style={styles.flatListTextContainer}>{item.Name}</Text>
            <Text style={styles.CSGTeamTextStyle}>{item.Team}</Text>
          </View>
        );
    };
    render(){
        let filteredUsersOrderToBill = this.state.data.filter(
            (user) => {
                return user.Team === 'CSO';
            }
        );
        let filteredUseresRegionalOperations = this.state.data.filter(
            (user)=>{
                return user.Team === 'SESC';
            }
        );
        let filteredUsersBuildProfessionalServices = this.state.data.filter(
            (user)=>{
                return user.Team === 'CSG Lead';
            }
        );
        let filteredUsersVoiceSTM = this.state.data.filter(
            (user)=>{
                return user.Team === 'CSG';
            }
        );
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
                <Text style={styles.titleStyle}>Security Organization</Text>
                <ScrollView style={styles.scrollViewStyle}>
                <View style={styles.innerContainer}>
                    <View style={styles.rotatedTextContainer}>
                        <Text allowFontScaling adjustsFontSizeToFit minimumFontScale={0.5} style={styles.rotatedText}>CSO</Text>
                    </View>
                    <View style={styles.CSOInnerContainer}>
                    <FlatList
                        data={formatData(filteredUsersOrderToBill, numColumns)}
                        renderItem={this.renderItemCSO}
                        numColumns={numColumns}
                    />
                    </View>
                </View>
                <View style={styles.innerContainer}>
                    <View style={styles.rotatedTextContainer}>
                        <Text allowFontScaling adjustsFontSizeToFit minimumFontScale={0.5} style={styles.rotatedText}>SESC</Text>
                    </View>
                    <View style={styles.SESCInnerContainer}>
                    <FlatList
                        data={formatData(filteredUseresRegionalOperations, numColumns)}
                        renderItem={this.renderItemSESC}
                        numColumns={numColumns}
                    />
                    </View>
                </View>
                <View style={styles.innerContainer}>
                    <View style={styles.rotatedTextContainer}>
                        <Text allowFontScaling adjustsFontSizeToFit minimumFontScale={0.5} style={styles.rotatedText}>CSG Lead</Text>
                    </View>
                    <View style={styles.CSGLeadInnerContainer}>
                    <FlatList
                        data={formatData(filteredUsersBuildProfessionalServices, numColumns)}
                        renderItem={this.renderItemCSGLead}
                        numColumns={numColumns}
                    />
                    </View>
                </View>
                <View style={styles.innerContainer}>
                    <View style={styles.rotatedTextContainer}>
                        <Text allowFontScaling adjustsFontSizeToFit minimumFontScale={0.5} style={styles.rotatedText}>CSG</Text>
                    </View>
                    <View style={styles.CSGInnerContainer}>
                    <FlatList
                        data={formatData(filteredUsersVoiceSTM, numColumns)}
                        renderItem={this.renderItemCSG}
                        numColumns={numColumns}
                    />
                    </View>
                </View>
                </ScrollView>
            </MainContainer>
        );
    }
}
const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
      data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow++;
    }
    return data;
  };

const styles = {
    container:{
        flex:1,
        backgroundColor:'black',
    },
    scrollViewStyle:{
        marginBottom:10,
    },
    innerContainer:{
        flexDirection:'row',
    },
    flatListConatiner:{
        alignItems:'center',
        justifyContent:'center',
    },
    rotatedTextContainer:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
    },
    imageStyle:{
        marginTop:20,
        justifyContent:'flex-start',
    },
    titleStyle:{
        fontSize:20,
        color:'rgb(255,102,0)',
        marginTop:20,
        marginLeft:20,
        marginBottom:20,
    },
    rotatedText:{
        transform: [{ rotate: '-90deg'}],
        color:'white',
    },
    flatListTextContainer:{
        color:'white',
        fontSize:15,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:20,
        marginTop:20,
    },
    itemInvisible:{
        backgroundColor: 'transparent',
    },
    CSOInnerContainer:{
        borderLeftWidth:6,
        borderLeftColor:'#rgb(145,100,205)',
        flex:10,
        marginBottom:15,
    },
    CSOItemStyle:{
        borderRightWidth:1,
        borderRightColor:'#rgb(145,100,205)',
        flex:1,
        width: Dimensions.get('window').width / numColumns - (Dimensions.get('window').width * 0.05),
    },
    CSOTeamTextStyle:{
        color:'#rgb(145,100,205)',
        fontSize:15,
        marginLeft:20,
    },
    SESCInnerContainer:{
        borderLeftWidth:6,
        borderLeftColor:'#rgb(255,180,230)',
        flex:10,
        marginBottom:15,
    },
    SESCItemStyle:{
        borderRightWidth:1,
        borderRightColor:'#rgb(255,180,230)',
        flex:1,
        width: Dimensions.get('window').width / numColumns - (Dimensions.get('window').width * 0.05),
    },
    SESCTeamTextStyle:{
        color:'#rgb(255,180,230)',
        fontSize:15,
        marginLeft:20,
    },
    CSGLeadInnerContainer:{
        borderLeftWidth:6,
        borderLeftColor:'#rgb(75,180,230)',
        flex:10,
        marginBottom:15,
    },
    CSGLeadItemStyle:{
        borderRightWidth:1,
        borderRightColor:'#rgb(75,180,230)',
        flex:1,
        width: Dimensions.get('window').width / numColumns - (Dimensions.get('window').width * 0.05),
    },
    CSGLeadTeamTextStyle:{
        color:'#rgb(75,180,230)',
        fontSize:15,
        marginLeft:20,
    },
    CSGInnerContainer:{
        borderLeftWidth:6,
        borderLeftColor:'#rgb(80,190,135)',
        flex:10,
    },
    CSGItemStyle:{
        borderRightWidth:1,
        borderRightColor:'#rgb(80,190,135)',
        width: Dimensions.get('window').width / numColumns - (Dimensions.get('window').width * 0.05),
        flex:1,
    },
    CSGTeamTextStyle:{
        color:'#rgb(80,190,135)',
        fontSize:15,
        marginLeft:20,
    },
};
export default SecurityOrganization;
