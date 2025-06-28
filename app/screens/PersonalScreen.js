import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PersonalScreen() {
    return (
            <View style={styles.container}>
                <Text style={styles.text}>Personal Screen</Text>
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#160F29'
    },
    text: {
        color: '#E5F9FD',
        fontSize: 24
    }
});