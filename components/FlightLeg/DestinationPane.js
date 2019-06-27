import React from 'react';
import {
  StyleSheet,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import { AppText, PaneTitle } from "../StyledText";
import { pane as paneLayout } from '../../constants/Layout';

function DestinationPane(props) {
  const { destination, handleClick } = props;

  return (
    <TouchableNativeFeedback onPress={handleClick}>
      <View style={styles.container}>
        <PaneTitle>Dest</PaneTitle>
        <AppText>{destination}</AppText>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create(paneLayout.toJS());

export default DestinationPane;
