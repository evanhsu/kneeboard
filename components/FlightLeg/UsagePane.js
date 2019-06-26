import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { AppText, PaneTitle, PaneLabel, Subscript } from "../StyledText";
import { pane as paneLayout } from '../../constants/Layout';

function UsagePane(props) {
  const { waterGallons, cargoPounds, passengers } = props;

  return (
    <View style={styles.container}>
      <PaneTitle>Use</PaneTitle>
      <PaneLabel>H<Subscript>2</Subscript>O: <AppText>{waterGallons}</AppText></PaneLabel>
      <PaneLabel>PAX: <AppText>{passengers}</AppText></PaneLabel>
      <PaneLabel>LBS Cargo: <AppText>{cargoPounds}</AppText></PaneLabel>
    </View>
  );
}

const styles = StyleSheet.create(paneLayout);

export default UsagePane;
