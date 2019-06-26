import React from 'react';
import { Text } from 'react-native';
import Typography from '../constants/Typography';

export function MonoText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
  );
}

export function AppText(props) {
  return (
    <Text {...props} style={[props.style, { ...Typography.paragraph }]} />
  );
}


export function PaneTitle(props) {
  return (
    <Text {...props} style={[props.style, { ...Typography.paneTitle}]} />
  );
}


export function PaneLabel(props) {
  return (
    <Text {...props} style={[props.style, { ...Typography.paneLabel}]} />
  );
}

export function Subscript(props) {
  return (
    <Text {...props} style={[props.style, { ...Typography.subscript}]} />
  );
}
