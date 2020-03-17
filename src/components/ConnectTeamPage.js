import React, { Component } from 'react';
import { Text, View, FlatList, Alert, Dimensions, Linking, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import { Navigation } from 'react-native-navigation';
import MainContainer from './MainContainer';
import msgImage from '../assets/images/msg.png';
import TopBar from './TopBar';


class ConnectTeamPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: false,
        };
    }

    static get options() {
        return TopBar('Connect Team');
    }

    componentDidMount() {
        fetch('https://tt-gateway.equant.com/emmaws/APItest/api/connect',{
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
            await AsyncStorage.setItem('ConnectTeam',JSON.stringify(this.state.data));
            })
            .catch(async error => {
                var item = await AsyncStorage.getItem('ConnectTeam');
                var test = JSON.parse(item);
                if (test !== null) {
                    this.setState({
                        data: test,
                        loading: true,
                    });
                }
                else {
                    Alert.alert(
                        'Alert',
                        'Please check your internet connection and try again.',
                        [
                            {
                                text: 'OK',
                                onPress: () => Navigation.pop(this.props.componentId),
                            },
                        ],
                    );
                }
            });
    }
    renderItems=({item}) => {
        if (item === null) {
            return <View style={styles.innerContainerStyle}/>;
        }
        return (
            <TouchableOpacity onPress={() => Linking.openURL('mailto:' + item.Email) }>
                <View style={styles.innerContainerStyle}>
                <Image
                    source={msgImage}
                    style={styles.img}
                />
                    <Text style={styles.textStyle}>{item.Email}</Text>
                </View>
            </TouchableOpacity>
        );
    };
    render(){
        let filteredUsersOrderToBill = this.state.data.filter(
            (user) => {
                return user.Team === 'Order to bill';
            }
        );
        let filteredUseresRegionalOperations = this.state.data.filter(
            (user)=>{
                return user.Team === 'Regional Operations';
            }
        );
        let filteredUsersBuildProfessionalServices = this.state.data.filter(
            (user)=>{
                return user.Team === 'Build - professional services';
            }
        );
        let filteredUsersVoiceSTM = this.state.data.filter(
            (user)=>{
                return user.Team === 'Voice STM';
            }
        );
        let filteredUsersEscUcRun = this.state.data.filter(
            (user)=>{
                return user.Team === 'ESC UC Run';
            }
        );
        let filteredUsersEscBuildAndSecurity = this.state.data.filter(
            (user)=>{
                return user.Team === 'ESC build & security';
            }
        );
        let filteredUseresOgsbEs = this.state.data.filter(
            (user)=>{
                return user.Team === 'OGSB - ES';
            }
        );
        let filteredUsersOgsbObsIt = this.state.data.filter(
            (user)=>{
                return user.Team === 'OGSB - OBS IT';
            }
        );
        let filteredUsersOgcbConnectivity = this.state.data.filter(
            (user)=>{
                return user.Team === 'OGCB - Connectivity';
            }
        );
        let filteredUsersSourcing = this.state.data.filter(
            (user)=>{
                return user.Team === 'Sourcing';
            }
        );
        let filteredUsersFinance = this.state.data.filter(
            (user)=>{
                return user.Team === 'Finance';
            }
        );
        let filteredUsersOcb = this.state.data.filter(
            (user)=>{
                return user.Team === 'OCB';
            }
        );
        let filteredUsersProductDevLifecycle = this.state.data.filter(
            (user)=>{
                return user.Team === 'Product Dev lifecycle';
            }
        );
        let filteredUsersServiceOpsGpo = this.state.data.filter(
            (user)=>{
                return user.Team === 'Service ops GPO';
            }
        );
        let filteredUsersIboExpertServices = this.state.data.filter(
            (user)=>{
                return user.Team === 'IBO - Expert Services';
            }
        );
        let filteredUsersIboOpertations = this.state.data.filter(
            (user)=>{
                return user.Team === 'IBO - Operations';
            }
        );
        let filteredUsersIb = this.state.data.filter(
            (user)=>{
                return user.Team === 'IB';
            }
        );
        let filteredUsersCso = this.state.data.filter(
            (user)=>{
                return user.Team === 'CSO';
            }
        );
        let filteredUsersOinis = this.state.data.filter(
            (user)=>{
                return user.Team === 'OINIS';
            }
        );
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
                    Order to bill
                </Text>
                <FlatList style={styles.flatView}
                data={filteredUsersOrderToBill} keyExtractor = { (item, index) => index.toString() }
                renderItem={this.renderItems}
                />
                <Text style={styles.titleStyle}>
                    Regional Operations
                </Text>
                <FlatList style={styles.flatView}
                data={filteredUseresRegionalOperations}  keyExtractor = { (item, index) => index.toString() }
                renderItem={this.renderItems}
                />
                <Text style={styles.titleStyle}>
                    Build - professional services
                </Text>
                <FlatList style={styles.flatView}
                data={filteredUsersBuildProfessionalServices}  keyExtractor = { (item, index) => index.toString() }
                renderItem={this.renderItems}
                />
                <Text style={styles.titleStyle}>
                    Voice STM
                </Text>
                <FlatList style={styles.flatView}  keyExtractor = { (item, index) => index.toString() }
                data={filteredUsersVoiceSTM}
                renderItem={this.renderItems}
                />
                <Text style={styles.titleStyle}>
                    ESC UC Run
                </Text>
                <FlatList style={styles.flatView}  keyExtractor = { (item, index) => index.toString() }
                data={filteredUsersEscUcRun}
                renderItem={this.renderItems}
                />
                <Text style={styles.titleStyle}>
                    ESC build {'&'} security
                </Text>
                <FlatList style={styles.flatView}  keyExtractor = { (item, index) => index.toString() }
                data={filteredUsersEscBuildAndSecurity}
                renderItem={this.renderItems}
                />
                <Text style={styles.titleStyle}>
                    OGSB - ES
                </Text>
                <FlatList style={styles.flatView}  keyExtractor = { (item, index) => index.toString() }
                data={filteredUseresOgsbEs}
                renderItem={this.renderItems}
                />
                <Text style={styles.titleStyle}>
                    OGSB - OBS IT
                </Text>
                <FlatList style={styles.flatView}  keyExtractor = { (item, index) => index.toString() }
                data={filteredUsersOgsbObsIt}
                renderItem={this.renderItems}
                />
                <Text style={styles.titleStyle}>
                    OGCB - Connectivity
                </Text>
                <FlatList style={styles.flatView}  keyExtractor = { (item, index) => index.toString() }
                data={filteredUsersOgcbConnectivity}
                renderItem={this.renderItems}
                />
                <Text style={styles.titleStyle}>
                    Sourcing
                </Text>
                <FlatList style={styles.flatView}  keyExtractor = { (item, index) => index.toString() }
                data={filteredUsersSourcing}
                renderItem={this.renderItems}
                />
                <Text style={styles.titleStyle}>
                    Finance
                </Text>
                <FlatList style={styles.flatView}  keyExtractor = { (item, index) => index.toString() }
                data={filteredUsersFinance}
                renderItem={this.renderItems}
                />
                <Text style={styles.titleStyle}>
                    OCB
                </Text>
                <FlatList style={styles.flatView}  keyExtractor = { (item, index) => index.toString() }
                data={filteredUsersOcb}
                renderItem={this.renderItems}
                />
                <Text style={styles.titleStyle}>
                    Product Dev lifecycle
                </Text>
                <FlatList style={styles.flatView}  keyExtractor = { (item, index) => index.toString() }
                data={filteredUsersProductDevLifecycle}
                renderItem={this.renderItems}
                />
                <Text style={styles.titleStyle}>
                    Service ops GPO
                </Text>
                <FlatList style={styles.flatView}  keyExtractor = { (item, index) => index.toString() }
                data={filteredUsersServiceOpsGpo}
                renderItem={this.renderItems}
                />
                <Text style={styles.titleStyle}>
                    IBO - Expert Services
                </Text>
                <FlatList style={styles.flatView}  keyExtractor = { (item, index) => index.toString() }
                data={filteredUsersIboExpertServices}
                renderItem={this.renderItems}
                />
                <Text style={styles.titleStyle}>
                    IBO - Operations
                </Text>
                <FlatList style={styles.flatView}  keyExtractor = { (item, index) => index.toString() }
                data={filteredUsersIboOpertations}
                renderItem={this.renderItems}
                />
                <Text style={styles.titleStyle}>
                    IB
                </Text>
                <FlatList style={styles.flatView}  keyExtractor = { (item, index) => index.toString() }
                data={filteredUsersIb}
                renderItem={this.renderItems}
                />
                <Text style={styles.titleStyle}>
                    CSO
                </Text>
                <FlatList style={styles.flatView}  keyExtractor = { (item, index) => index.toString() }
                data={filteredUsersCso}
                renderItem={this.renderItems}
                />
                <Text style={styles.titleStyle}>
                    OINIS
                </Text>
                <FlatList style={styles.flatView}  keyExtractor = { (item, index) => index.toString() }
                data={filteredUsersOinis}
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
    img: {
        width: Dimensions.get('window').width * 0.10,
        height: Dimensions.get('window').height * 0.05,
        resizeMode: 'contain',
    },
    flatView: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#000000',
      },
};


export default ConnectTeamPage;
