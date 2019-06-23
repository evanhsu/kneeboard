import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
} from "react-native";

export default function MissionsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>
          hello
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});