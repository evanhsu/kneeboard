import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

function PaneEditorScreen(props) {
  const { style, navigation } = props;
  const title = navigation.getParam('title');
  const editor = navigation.getParam('editor');

  return (
    <View style={styles.container}>
      <Text>{title} Pane Editor</Text>
      {editor}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
});

export default PaneEditorScreen;
