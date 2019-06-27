import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import CrewScreen from '../screens/CrewScreen';
import PowerScreen from '../screens/PowerScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MissionsScreen from '../screens/FlightLegsScreen';

const CrewStack = createStackNavigator({
  Crew: CrewScreen,
});

CrewStack.navigationOptions = {
  tabBarLabel: 'Crew',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-people${focused ? '' : '-outline'}`
          : 'md-people'
      }
    />
  ),
};

const FlightLegsStack = createStackNavigator({
  Missions: MissionsScreen,
});

FlightLegsStack.navigationOptions = {
  tabBarLabel: 'Flight Legs',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-airplane' : 'md-airplane'}
    />
  ),
};

const PowerStack = createStackNavigator({
  Power: PowerScreen,
});

PowerStack.navigationOptions = {
  tabBarLabel: 'Power',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-battery-charging' : 'md-battery-charging'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  FlightLegsStack,
  CrewStack,
  PowerStack,
  SettingsStack,
});
