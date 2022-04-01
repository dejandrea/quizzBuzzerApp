import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import firebase from "firebase";

import db from '../config';

class SoundButton extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
      //{source:som},
      { shouldPlay: true }
    );
  };

  isButtonPressed(buttonColor) {
    var time = new Date().getTime();

    var query = db.ref('teams/' + buttonColor + '/').update({
      isButtonPressed: true,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
    });
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: this.props.color }]}
        onPress={() => {
          var buttonColor = this.props.color;
          this.isButtonPressed(buttonColor);
          this.playSound();
        }}>
        <Text style={styles.buttonText}>Pressione-me</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    marginTop: 100,
    marginLeft: 80,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    backgroundColor: 'red',
    borderRadius: 100,
    marginBottom:100
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default SoundButton;
