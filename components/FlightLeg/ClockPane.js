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

class ClockPane extends Component {
  editor = (
    <View style={styles.editor}>
      <AppText>{this.props.start}</AppText>
      <AppText>{this.props.end}</AppText>
    </View>
  );

  render() {
    return (
      <TouchableOpacity style={styles.pane} onPress={this.props.onPress('Clock Time', this.editor)}>
        <PaneTitle>Clock</PaneTitle>
        <PaneLabel>Start: <AppText>{this.props.start}</AppText></PaneLabel>
        <PaneLabel>End: <AppText>{this.props.end}</AppText></PaneLabel>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  pane: paneLayout.toJS(),
  editor: editorLayout.toJS(),
});

export default ClockPane;
