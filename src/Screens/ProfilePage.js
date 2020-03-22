import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

class ProfilePage extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>ProfileScreen</Text>
        </View>
      )
    }
  }

  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });


  export default ProfilePage;