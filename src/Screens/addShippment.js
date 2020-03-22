import React, {Component} from 'react';
import {ScrollView,View, TextInput,StyleSheet,Button} from 'react-native';





export default class AddShipment extends Component{
    
    render() {
      return (
        <View style={styles.viewContainer}>
        <TextInput
        style={styles.textInputStyle}
        //value={this.state.placeName}
    // onChangeText={this.placeNameChangedHander}
        placeholder = "Shipment Company Name"></TextInput>

    <TextInput
        style={styles.textInputStyle}
        //value={this.state.placeName}
    // onChangeText={this.placeNameChangedHander},
    
        placeholder = "Shipment Company Email">
    </TextInput>

    <TextInput
        style={styles.textInputStyle}
        //value={this.state.placeName}
    // onChangeText={this.placeNameChangedHander}
        placeholder = "Shipment Company Phone">
    </TextInput>
    <TextInput
        style={styles.textInputStyle}
        //value={this.state.placeName}
    // onChangeText={this.placeNameChangedHander}
        placeholder = "Shipment Company Address">
    </TextInput>

    <TextInput
        style={styles.textInputStyle}
        //value={this.state.placeName}
    // onChangeText={this.placeNameChangedHander}
        placeholder = "Password">
    </TextInput>

    <Button primary style={styles.placeButton} title="Submit " onPress={()=> this.props.navigation.navigate('HomeScreen')} ></Button>

    </View>
      );
    }
  }const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        
        backgroundColor:'#fff',
        
    },
    viewContainer:{
       // height:"100%",
        flex:1,
        backgroundColor:'#fff',
        
        alignItems: "center",
        justifyContent: "flex-start"
    },
    textInputStyle:{
        width:"80%",
        //borderWidth:1,
        //borderColor:"black",
        borderBottomWidth:1.0,
        marginTop:10.0,
        
    },
   
    placeButton:{
        width:"30%",
  
        padding:500
    }
});

/*

 
*/