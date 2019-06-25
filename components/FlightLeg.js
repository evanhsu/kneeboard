import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import HobbsPane from "./FlightLeg/HobbsPane";
import FlightTimePane from "./FlightLeg/FlightTimePane";

function FlightLeg() {
    return (
      <View style={styles.container}>
        <HobbsPane start={123.0} end={124.8} />
        <FlightTimePane/>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  }
});

export default FlightLeg;

