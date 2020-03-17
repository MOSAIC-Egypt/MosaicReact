import React,{Component} from 'react';
import {Text,View,Alert,Linking,TouchableOpacity,Dimensions,FlatList,AsyncStorage} from 'react-native';
import MainContainer from './MainContainer';
import Image from 'react-native-scalable-image';
import msgImage from '../assets/images/msg.png';
import TopBar from './TopBar';
import {Navigation} from 'react-native-navigation';
class CSGPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[],
            loading:false,
        };
    }

    static get options() {
        return TopBar('CSGs');
    }

    componentDidMount(){
          fetch('https://tt-gateway.equant.com/emmaws/APItest/api/connect/cso',{
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
            await AsyncStorage.setItem('CSG',JSON.stringify(responseJson));
        })
        .catch(async error =>{
            var item = await AsyncStorage.getItem('CSG');
            var test = JSON.parse(item);
            if (test !== null){
                this.setState({
                    data:test,
                    loading:true,
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
          if (item === null){
              return <View style={styles.innerContainerStyle}/>;
          }
          return (
              <TouchableOpacity onPress={() => Linking.openURL('mailto:' + item.Email) }>
                  <View style={styles.innerContainerStyle}>
                  <Image
                  source={msgImage}
                  width={Dimensions.get('window').width * 0.08}
                  />
                  <Text style={styles.textStyle}>{item.Email}</Text>
              </View>
              </TouchableOpacity>
          );
      };
    render(){
        if (!this.state.loading){
            return (
                <MainContainer>
                    <Text style={{fontSize:20, fontWeight:'bold', color:'white',textAlign:'center'}}>
                        Please Wait...
                    </Text>
                </MainContainer>
            );
        }
        return (
            <MainContainer>
                <Text style={styles.titleStyle}>
                    CSO
                </Text>
                <FlatList keyExtractor = { (item, index) => index.toString() }
                data={this.state.data}
                renderItem={this.renderItems}
                />
            </MainContainer>
        );
    }
}

const styles = {
    titleStyle:{
        color:'rgb(255,102,0)',
        fontSize:20,
        marginLeft:5,
    },
    innerContainerStyle:{
        flexDirection:'row',
        marginTop:5,
        marginLeft:10,
    },
    textStyle:{
        color:'white',
        marginLeft:5,
        marginTop:5,
        fontSize:15,
    },
};


export default CSGPage;
