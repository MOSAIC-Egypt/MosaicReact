import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


class HomePage extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>HomeScreen</Text>
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

  export default HomePage;