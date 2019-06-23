import React from 'react';
import FlightLeg from '../components/FlightLeg';
import {
    View,
    StyleSheet,
    ScrollView,
    Text,
} from "react-native";

function FlightLegList() {
    return (
        <View>
            <FlightLeg/>
            <FlightLeg/>
            <FlightLeg/>
        </View>
    );
}


export default function MissionsScreen() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>
                    Missions
                </Text>
                <FlightLegList/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        textAlign: 'center',
        flex: 1,
        fontSize: 24,
    },
});