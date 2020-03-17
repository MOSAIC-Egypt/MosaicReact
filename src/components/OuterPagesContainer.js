import React from 'react';
import { View, ScrollView } from 'react-native';
import HeaderView from '../components/Header';


const OuterPagesContainer = (props) => {
        return (
            <View style={styles.container}>
        <ScrollView>
        <View style={styles.mainView}>
            <ScrollView>
         
                {props.children}
            </ScrollView>
        </View>
        </ScrollView>
        </View>
        );
    };

const styles = {
    // whole content container
    container:{
        flex:1,
        backgroundColor:'black',
    },
    mainView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'center',
        backgroundColor: '#000000',
      },
};

export default OuterPagesContainer;
