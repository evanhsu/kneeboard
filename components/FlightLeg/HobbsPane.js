import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

function HobbsPane(props) {
  const {start, end} = props;

  return (
    <View style={styles.container}>
      <Text>HOBBS</Text>
      <Text>Start: {start}</Text>
      <Text>End: {end}</Text>
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

export default HobbsPane;
