import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import FlightLeg from '../components/FlightLeg';
import colors from '../constants/Colors';

function getFlightLegs() {
  // TODO: Get Flight Leg data out of state... returning mock data for now
  return [
    {
      hobbs: {
        start: 143.6,
        end: 144.9,
      },
      flightTime: {
        trip: 1.3,
        cumulative: 1.3,
      },
      clockTime: {
        start: Date.parse('10:00:00 yesterday'),
        end: Date.parse('11:18:00 yesterday'),
      },
      destination: 'H-15',
      usage: {
        waterGallons: 0,
        cargoPounds: 350,
        passengers: 5,
      },
    },
    {
      hobbs: {
        start: 144.9,
        end: 146.8,
      },
      flightTime: {
        trip: 1.9,
        cumulative: 3.2,
      },
      clockTime: {
        start: Date.parse('10:00:00 yesterday'),
        end: Date.parse('11:18:00 yesterday'),
      },
      destination: 'H-15',
      usage: {
        waterGallons: 0,
        cargoPounds: 200,
        passengers: 6,
      },
    },
    {
      hobbs: {
        start: 146.8,
        end: 147.8,
      },
      flightTime: {
        trip: 1.9,
        cumulative: 3.2,
      },
      clockTime: {
        start: Date.parse('10:00:00 yesterday'),
        end: Date.parse('11:18:00 yesterday'),
      },
      destination: 'H-15',
      usage: {
        waterGallons: 0,
        cargoPounds: 200,
        passengers: 6,
      },
    },
    {
      hobbs: {
        start: 147.8,
        end: 148.8,
      },
      flightTime: {
        trip: 1.9,
        cumulative: 3.2,
      },
      clockTime: {
        start: Date.parse('10:00:00 yesterday'),
        end: Date.parse('11:18:00 yesterday'),
      },
      destination: 'H-15',
      usage: {
        waterGallons: 0,
        cargoPounds: 200,
        passengers: 6,
      },
    },
    {
      hobbs: {
        start: 148.8,
        end: 149.8,
      },
      flightTime: {
        trip: 1.9,
        cumulative: 3.2,
      },
      clockTime: {
        start: Date.parse('10:00:00 yesterday'),
        end: Date.parse('11:18:00 yesterday'),
      },
      destination: 'H-15',
      usage: {
        waterGallons: 0,
        cargoPounds: 200,
        passengers: 6,
      },
    },
    {
      hobbs: {
        start: 149.8,
        end: 150.8,
      },
      flightTime: {
        trip: 1.9,
        cumulative: 3.2,
      },
      clockTime: {
        start: Date.parse('10:00:00 yesterday'),
        end: Date.parse('11:18:00 yesterday'),
      },
      destination: 'H-15',
      usage: {
        waterGallons: 0,
        cargoPounds: 200,
        passengers: 6,
      },
    },
    {
      hobbs: {
        start: 150.8,
        end: 151.8,
      },
      flightTime: {
        trip: 1.9,
        cumulative: 3.2,
      },
      clockTime: {
        start: Date.parse('10:00:00 yesterday'),
        end: Date.parse('11:18:00 yesterday'),
      },
      destination: 'H-15',
      usage: {
        waterGallons: 0,
        cargoPounds: 200,
        passengers: 6,
      },
    },
    {
      hobbs: {
        start: 151.8,
        end: 153.8,
      },
      flightTime: {
        trip: 1.9,
        cumulative: 3.2,
      },
      clockTime: {
        start: Date.parse('10:00:00 yesterday'),
        end: Date.parse('11:18:00 yesterday'),
      },
      destination: 'H-15',
      usage: {
        waterGallons: 0,
        cargoPounds: 200,
        passengers: 6,
      },
    },
  ];
}

function FlightLegList(props) {
  const { flightLegs, style } = props;

  const flightLegList = flightLegs.map((flightLeg) => (
    <FlightLeg key={flightLeg.hobbs.start} data={flightLeg} />
  ));

  return (
    <View style={style}>
      {flightLegList}
    </View>
  );
}


export default function FlightLegsScreen() {
  const flightLegs = getFlightLegs();

  return (
    <View style={styles.container}>
      <ScrollView>
        <FlightLegList flightLegs={flightLegs} style={styles.innerList} />
      </ScrollView>
    </View>
  );
}

FlightLegsScreen.navigationOptions = {
  title: "Flight Legs",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.get('primary'),
  },
  innerList: {
    padding: 10,
  }
});