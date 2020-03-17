import React, { Component } from 'react';
import {Button, View} from 'react-native';


class DirectingScreen extends Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View>
        <Button
          title="Go to directory"
          onPress={() => navigate('Directory')}
        />

        <Button
        title="Go to fire steps"
        onPress={() => navigate('FireSteps')}
      />

<Button
        title="Go to home screen"
        onPress={() => navigate('Home')}
      />

<Button
        title="Go to login screen"
        onPress={() => navigate('Login')}
      />
      <Button
        title="Go to month events screen"
        onPress={() => navigate('MonthEvents')}
      />
       <Button
        title="Go to Security screen"
        onPress={() => navigate('Security')}
      />
       <Button
        title="Go to menu screen"
        onPress={() => navigate('Menu')}
      />
       <Button
        title="Go to register screen"
        onPress={() => navigate('Register')}
      />
       <Button
        title="Go to calendar screen"
        onPress={() => navigate('Calendar')}
      />
       <Button
        title="Go to Emergency Menu screen"
        onPress={() => navigate('EmergencyMenu')}
      />
      </View>
      );
    }
  }

  export default DirectingScreen;
