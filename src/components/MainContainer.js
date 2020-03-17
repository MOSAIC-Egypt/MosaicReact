import React from 'react';
import { View, ScrollView } from 'react-native';
import HeaderView from '../components/Header';
import FooterView from './BottomNavBar';

const MainContainer = (props) => {
        return (
        <View style={styles.mainView}>
                <HeaderView header={props.header}/>
                  <ScrollView key={false}>
                    {props.children}
                    </ScrollView>
                <View style={styles.viewBottomStyle}>
                    <FooterView style={styles.bottomNavStyle} />
                </View>
        </View>
        );
    };

const styles = {
    // whole content container
    container:{
        // flex:1,
        backgroundColor:'black',
    },
    mainView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'center',

        backgroundColor: '#000000',
      },
      viewBottomStyle:{
        // flex: 1,
        justifyContent: 'flex-end',
        // backgroundColor:'white',
        // marginBottom: 36,
      },
      bottomNavStyle:{
        //   flex:1,
        //   height:'100%',
        //   marginBottom:36,
        //   resizeMode:'contain',
        //   position:'absolute',
        //   bottom:0,
      },
};

export default MainContainer;
