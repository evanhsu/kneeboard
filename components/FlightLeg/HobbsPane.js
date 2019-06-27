import React from 'react';
import {
  StyleSheet,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import { AppText, PaneTitle, PaneLabel } from "../StyledText";
import { pane as paneLayout } from '../../constants/Layout';

function HobbsPane(props) {
  const { start, end, handleClick } = props;

  return (
    <TouchableNativeFeedback onPress={handleClick}>
      <View style={styles.container} onClick={handleClick}>
        <PaneTitle>HOBBS</PaneTitle>
        <PaneLabel>Start: <AppText>{start}</AppText></PaneLabel>
        <PaneLabel>End: <AppText>{end}</AppText></PaneLabel>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create(paneLayout.toJS());

export default HobbsPane;
