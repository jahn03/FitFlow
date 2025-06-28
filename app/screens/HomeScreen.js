import { StackRouter } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function HomeScreen(props) {
    return (
        <View style={styles.background}>
            <View style={styles.logoContainer}>
                <Text style={styles.title}>FlexFit</Text>
            </View>

            <Button color={"#246A73"} style={styles.clientsButton} title='Clients'></Button>

            <Button style={styles.groupsButton} title='Groups'></Button>

        </View>
        
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#160F29",
        height: '100%',
        justifyContent: "center",
        alignItems: 'center'
    },
    logoContainer: {
        position: "absolute",
        top: 150,
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        color: "#E5F9FD",
        textAlign: 'center',
    },
    
    clientsButton: {
        width: '80%',
        height: 70,
        backgroundColor: "#246A73",
        justifyContent: 'center'
    },
    groupsButtonContainer: {
        width: '80%',
        height: 70,
        backgroundColor: "#246A73",
        justifyContent: 'center',
        marginTop: 50
    },
    groupsButton: {
        width: '80%',
        height: 70,
        backgroundColor: "#246A73",
        justifyContent: 'center',
        marginTop: 50    }
    
})

export default HomeScreen;