import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { padding } from "../constants/Layout";
import HobbsPane from "./FlightLeg/HobbsPane";
import FlightTimePane from "./FlightLeg/FlightTimePane";
import ClockPane from "./FlightLeg/ClockPane";
import DestinationPane from "./FlightLeg/DestinationPane";
import UsagePane from "./FlightLeg/UsagePane";

function FlightLeg(props) {
  const { data } = props;

  const handleClick = function () {
    console.log("CLICK!");
  };

  return (
    <View style={styles.container}>
      <HobbsPane start={data.hobbs.start} end={data.hobbs.end} onClick={handleClick} />
      <FlightTimePane trip={data.flightTime.trip} cumulative={data.flightTime.cumulative} />
      <ClockPane start={data.clockTime.start} end={data.clockTime.end} />
      <DestinationPane destination={data.destination} />
      <UsagePane
        waterGallons={data.usage.waterGallons}
        cargoPounds={data.usage.cargoPounds}
        passengers={data.usage.passengers}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingBottom: padding.get('row'),
  }
});

export default FlightLeg;

