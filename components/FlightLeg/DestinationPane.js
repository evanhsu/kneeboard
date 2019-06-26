import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { AppText, PaneTitle } from "../StyledText";
import { pane as paneLayout } from '../../constants/Layout';

function DestinationPane(props) {
  const { destination } = props;

  return (
    <View style={styles.container}>
      <PaneTitle>Dest</PaneTitle>
      <AppText>{destination}</AppText>
    </View>
  );
}

const styles = StyleSheet.create(paneLayout);

export default DestinationPane;
