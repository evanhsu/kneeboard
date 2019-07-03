import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { AppText, PaneTitle, PaneLabel } from "../StyledText";
import {
  pane as paneLayout,
  paneEditor as editorLayout,
} from '../../constants/Layout';

class FlightTimePane extends Component {
  editor = (
    <View style={styles.editor}>
      <AppText>Trip: {this.props.trip}</AppText>
      <AppText>Cumulative: {this.props.cumulative}</AppText>
    </View>
  );

  render() {
    return (
      <TouchableOpacity style={styles.pane} onPress={this.props.onPress('Flight Time', this.editor)}>
        <PaneTitle>Flight Time</PaneTitle>
        <PaneLabel>Trip: <AppText>{this.props.trip}</AppText></PaneLabel>
        <PaneLabel>Cumulative: <AppText>{this.props.cumulative}</AppText></PaneLabel>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  pane: paneLayout.toJS(),
  editor: editorLayout.toJS(),
});

export default FlightTimePane;