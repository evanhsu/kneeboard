import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { AppText, PaneTitle, PaneLabel, Subscript } from "../StyledText";
import {
  pane as paneLayout,
  paneEditor as editorLayout,
} from '../../constants/Layout';

class UsagePane extends Component {
  editor = (
    <View style={styles.editor}>
      <AppText>H2O: {this.props.waterGallons}</AppText>
      <AppText>PAX: {this.props.passengers}</AppText>
      <AppText>Cargo: {this.props.cargoPounds}</AppText>
    </View>
  );

  render() {
    return (
      <TouchableOpacity style={styles.pane} onPress={this.props.onPress('Usage', this.editor)}>
        <PaneTitle>Use</PaneTitle>
        <PaneLabel>H<Subscript>2</Subscript>O: <AppText>{this.props.waterGallons}</AppText></PaneLabel>
        <PaneLabel>PAX: <AppText>{this.props.passengers}</AppText></PaneLabel>
        <PaneLabel>Cargo: <AppText>{this.props.cargoPounds}</AppText></PaneLabel>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  pane: paneLayout.toJS(),
  editor: editorLayout.toJS(),
});

export default UsagePane;
