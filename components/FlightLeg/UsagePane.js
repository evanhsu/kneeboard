import React from 'react';
import {
  StyleSheet,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import { AppText, PaneTitle, PaneLabel, Subscript } from "../StyledText";
import { pane as paneLayout } from '../../constants/Layout';

function UsagePane(props) {
  const { waterGallons, cargoPounds, passengers, handleClick } = props;

  return (
    <TouchableNativeFeedback onPress={handleClick}>
      <View style={styles.container}>
        <PaneTitle>Use</PaneTitle>
        <PaneLabel>H<Subscript>2</Subscript>O: <AppText>{waterGallons}</AppText></PaneLabel>
        <PaneLabel>PAX: <AppText>{passengers}</AppText></PaneLabel>
        <PaneLabel>Cargo: <AppText>{cargoPounds}</AppText></PaneLabel>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create(
  paneLayout.mergeDeep({
    container: {
      borderRightWidth: 1,
    }
  }).toJS()
);

export default UsagePane;
