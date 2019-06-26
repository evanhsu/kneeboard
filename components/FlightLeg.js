import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import HobbsPane from "./FlightLeg/HobbsPane";
import FlightTimePane from "./FlightLeg/FlightTimePane";
import ClockPane from "./FlightLeg/ClockPane";
import DestinationPane from "./FlightLeg/DestinationPane";
import UsagePane from "./FlightLeg/UsagePane";

function FlightLeg() {
  return (
    <View style={styles.container}>
      <HobbsPane start={123.0} end={124.8} />
      <FlightTimePane trip={1.4} cumulative={3.1} />
      <ClockPane start='11:36' end='12:58' />
      <DestinationPane destination='H-23'/>
      <UsagePane waterGallons='1500' cargoPounds='0' passengers={4}/>
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

