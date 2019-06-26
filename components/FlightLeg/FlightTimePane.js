import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { AppText, PaneTitle, PaneLabel } from "../StyledText";
import { pane as paneLayout } from '../../constants/Layout';

function FlightTimePane(props) {
  const { trip, cumulative } = props;

  return (
    <View style={styles.container}>
      <PaneTitle>Flight Time</PaneTitle>
      <PaneLabel>Trip: <AppText>{trip}</AppText></PaneLabel>
      <PaneLabel>Cumulative: <AppText>{cumulative}</AppText></PaneLabel>
    </View>
  );
}

const styles = StyleSheet.create(paneLayout);

export default FlightTimePane;