import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,Button
} from 'react-native';

/*import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';*/

import Header from '../../Components/header';
//import AppNavigator from '../../Navigation/navigation'; <AppNavigator />

class PostScreen extends React.Component {
    render() {
      return (
          <View>
              <Header></Header>
              
              <View style={styles.container}>
                <Text>PostScreen</Text>

                <Button
                  title="Go to Shipment"
                  onPress={}
                    />
            </View>
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

  export default PostScreen;