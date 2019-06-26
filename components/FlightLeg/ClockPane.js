import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { AppText, PaneTitle, PaneLabel } from "../StyledText";
import { pane as paneLayout } from '../../constants/Layout';

function ClockPane(props) {
  const { start, end } = props;

  return (
    <View style={styles.container}>
      <PaneTitle>Clock</PaneTitle>
      <PaneLabel>Start: <AppText>{start}</AppText></PaneLabel>
      <PaneLabel>End: <AppText>{end}</AppText></PaneLabel>
    </View>
  );
}

const styles = StyleSheet.create(paneLayout);

export default ClockPane;
