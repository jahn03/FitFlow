import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GroupScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Group Screen</Text>
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
