import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';

import MainContainer from '../components/MainContainer';
import TopBar from './TopBar';


class DirectoryEgypt extends Component {
  static get options() {
    return TopBar('Directory');
  }

  render()
  {
  return (
      <MainContainer>
      <View style={styles.textView}>
        <Text style={styles.hrHeading}>HR</Text>
        <Text style={styles.body}>
         HR is located on the 5th floor.
        </Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.refmHeading}>Finance</Text>
        <Text style={styles.body}>Finance is located on the 5th floor.
        </Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.receptionHeading}>Telecome</Text>
        <Text style={styles.body}>Telecome is located on the 5th floor.</Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.itHeading}>Training</Text>
        <Text style={styles.body}>Training is located on the 4th floor.
        </Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.hrHeading}>Bupa</Text>
        <Text style={styles.body}>
        Bupa is located in floor -2. From the office call 8799.
        </Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.refmHeading}>Claim Box</Text>
        <Text style={styles.body}>
        Claim Box is located on the 5th floor(Left lobby).
        </Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.receptionHeading}>Reception</Text>
        <Text style={styles.body}>
        Reception is located on the ground floor(0). From the office call 2000 or 2010.
        </Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.itHeading}>Local IT</Text>
        <Text style={styles.body}>
        Local IT is located on the 11th floor.
         Use the entrance beside elevator A, go left then right you will find the glass
         area of the local IT on your right.
         </Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.hrHeading}>Mall Entrance</Text>
        <Text style={styles.body}>
        Mall entrance is located on the 4th floor.</Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.refmHeading}>Prayer area</Text>
        <Text style={styles.body}>
        Prayer area is located in Basement B.
        </Text>
      </View>

    </MainContainer>
  );
}}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center',
    backgroundColor: '#000000',
  },
  textView: {
    borderBottomColor: 'rgb(89,89,89)',
    borderWidth: 2,
    paddingBottom: 5,
  },
  directoryHeading: {
    color: 'rgb(255,180,230)',
    fontSize: 20,
  },
  hrHeading: {
    color: 'rgb(75,180,230)',
    marginLeft: 4,
    fontSize: 20,
  },
  body: {
    color: '#FFFFFF',
    marginLeft: 8,
    fontSize: 15,
  },
  receptionHeading: {
    color: 'rgb(255,102,0)',
    marginLeft: 4,
    fontSize: 20,
  },
  itHeading: {
    color: 'rgb(145,100,205)',
    marginLeft: 4,
    fontSize: 20,
  },
  refmHeading: {
    color: 'rgb(80,190,135)',
    marginLeft: 4,
    fontSize: 20,
  }});

export default DirectoryEgypt;
