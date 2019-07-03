import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import { padding } from "../constants/Layout";
import HobbsPane from "./FlightLeg/HobbsPane";
import FlightTimePane from "./FlightLeg/FlightTimePane";
import ClockPane from "./FlightLeg/ClockPane";
import DestinationPane from "./FlightLeg/DestinationPane";
import UsagePane from "./FlightLeg/UsagePane";

function FlightLeg(props) {
  const { data, onOpenPane } = props;

  return (
    <View style={styles.container}>
      <HobbsPane start={data.hobbs.start} end={data.hobbs.end} onPress={onOpenPane} />
      <FlightTimePane trip={data.flightTime.trip} cumulative={data.flightTime.cumulative} onPress={onOpenPane} />
      <ClockPane start={data.clockTime.start} end={data.clockTime.end} onPress={onOpenPane} />
      <DestinationPane destination={data.destination} onPress={onOpenPane} />
      <UsagePane
        waterGallons={data.usage.waterGallons}
        cargoPounds={data.usage.cargoPounds}
        passengers={data.usage.passengers}
        onPress={onOpenPane}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingBottom: padding.get('row'),
  }
});

export default FlightLeg;

