import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


function FlightTimePane() {
  return (
    <View style={styles.container}>
      <Text>Flight Time</Text>
      <Text>Trip: 0.9</Text>
      <Text>Cumulative: 0.9</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: '#992222',
  },
  title: {
    fontSize: 10,
  }
});

export default FlightTimePane;