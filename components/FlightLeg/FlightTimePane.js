import React from 'react';
import {
  StyleSheet,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import { AppText, PaneTitle, PaneLabel } from "../StyledText";
import { pane as paneLayout } from '../../constants/Layout';

function FlightTimePane(props) {
  const { trip, cumulative, handleClick } = props;

  return (
    <TouchableNativeFeedback onPress={handleClick}>
      <View style={styles.container}>
        <PaneTitle>Flight Time</PaneTitle>
        <PaneLabel>Trip: <AppText>{trip}</AppText></PaneLabel>
        <PaneLabel>Cumulative: <AppText>{cumulative}</AppText></PaneLabel>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create(paneLayout.toJS());

export default FlightTimePane;