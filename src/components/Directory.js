import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';

import MainContainer from '../components/MainContainer';
import TopBar from './TopBar';


class Directory extends Component {
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
          HR is located on the 2th floor , use the main entrance, go left then
          you will find the HR room.
        </Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.refmHeading}>RE&FM</Text>
        <Text style={styles.body}>
          RE&FM is located on the 2th floor. Use the main entrance go left until
          the working area there you will find the RE&FM team.
        </Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.receptionHeading}>Reception</Text>
        <Text style={styles.body}>Reception is located on the 2th floor.</Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.itHeading}>Local IT</Text>
        <Text style={styles.body}>
          Local IT is located on the 2th floor. Use the main entrance go left
          until the working area there you will find the IT team.
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

export default Directory;
