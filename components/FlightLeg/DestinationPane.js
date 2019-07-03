import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { AppText, PaneTitle } from "../StyledText";
import {
  pane as paneLayout,
  paneEditor as editorLayout,
} from '../../constants/Layout';

class DestinationPane extends Component {
  editor = (
    <View style={styles.editor}>
      <AppText>{this.props.destination}</AppText>
    </View>
  );

  render() {
    return (
      <TouchableOpacity style={styles.pane} onPress={this.props.onPress('Destination', this.editor)}>
        <PaneTitle>Dest</PaneTitle>
        <AppText>{this.props.destination}</AppText>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  pane: paneLayout.toJS(),
  editor: editorLayout.toJS(),
});

export default DestinationPane;
