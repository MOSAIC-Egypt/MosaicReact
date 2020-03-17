import React, { Component } from 'react';
import { View, Text, FlatList, Alert, AsyncStorage, ActivityIndicator,Dimensions } from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';
import TopBar from './TopBar';
import MainContainer from './MainContainer';
const imagesPath = '../assets/images/';        // Change to default Project images path
let win = Dimensions.get('window');
class BenefitsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
      discount:'',

    };
    this.arrayholder = [];
  }

  static get options() {
    return TopBar('Benefits');
  }

  async componentDidMount() {

    await AsyncStorage.getItem('Cateogary').then(value => {
      this.setState({ discount: value });
      console.log(this.state.discount);
    });

    fetch('https://tt-gateway.equant.com/emmaws/APItest/api/discounts/' + this.state.discount, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic Q2hyaXN0b3BoZTpzc10kIWRMO3U=',
      }
    })
      .then(response => response.json())
      .then(async responseJson => {
        this.setState({
          data: responseJson,
          loading: false,
          refreshing: false,

          error: responseJson.error || null
        });
        this.arrayholder = responseJson;
        await AsyncStorage.setItem(this.state.discount, JSON.stringify(responseJson));
      })
      .catch(async error => {
        var item = await AsyncStorage.getItem(this.state.discount);
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
                text: 'OK', onPress: () => Navigation.pop(this.props.componentId),
              },
            ],
          );
        }
      });
  }

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true,
      },
      () => {
        this.componentDidMount();
      }
    );
  };
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#CED0CE',
        }}
      />
    );
  };

  renderHeader = () => {
    return <SearchBar placeholder="Type Here..." DarkTheme onChangeText={text => this.searchFilterFunction(text)}
      autoCorrect={false}
      value={this.state.value}
      round={false}
      icon={{ type: 'material-community', color: '#86939e', name: 'share' }} />;
  };

  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };


  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: '#CED0CE',
          backgroundColor: '#000000'
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {
    return (
<MainContainer  style={{backgroundColor:'#000000', height: win.height, width: win.width}}>
      <FlatList
        data={this.state.data}
        style={{backgroundColor:'#000000'}}
        renderItem={({ item }) => (
          
          <ListItem
            title={item.name}
            titleStyle={{ color: 'white' }}
            containerStyle={{ backgroundColor: '#000000' }}
            // leftAvatar={{ source: { uri: 'data:image/png;base64,' + item.Pic }, rounded: false, size: "large" }}
            onPress= {async ()=> {
               await AsyncStorage.setItem('itemName', item.name);
               await AsyncStorage.setItem('itemBranches', item.branches === null ? '' : item.branches);
               await AsyncStorage.setItem('itemDetails', item.offer === null ? '' : item.offer);
               await AsyncStorage.setItem('itemwebsite_link',item.website_link === null ? '' : item.website_link);
               await AsyncStorage.setItem('itemfacebook_link',item.facebook_link === null ? '' : item.website_link);
               await AsyncStorage.setItem('itemstart_date', item.start_date === null ? '' : item.start_date );
               await AsyncStorage.setItem('itemend_date',item.end_date === null ? '' : item.end_date);
              Navigation.push(this.props.componentId, {
              component: {
                name: 'BenefitsMenuDetails',
              }})
            }}
          />
        )}
        keyExtractor={item => item.Name}
        ItemSeparatorComponent={this.renderSeparator}
        ListHeaderComponent={this.renderHeader}
        ListFooterComponent={this.renderFooter}
        onRefresh={this.handleRefresh}
        refreshing={this.state.refreshing}
      />
        </MainContainer>
    );
  
  }
}

export default BenefitsList;