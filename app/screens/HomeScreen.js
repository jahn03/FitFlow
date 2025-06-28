import { StackRouter } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.background}>
            <View style={styles.logoContainer}>
                <Text style={styles.title}>FlexFit</Text>
            </View>
            
            <TouchableOpacity
                style={styles.clientsButton}
                onPress={() => navigation.navigate('Clients')}
            >
                <Text style={styles.buttonText}>Clients</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.groupsButton}
                onPress={() => navigation.navigate('Groups')}
            >
                <Text style={styles.buttonText}>Groups</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.personalButton}
                onPress={() => navigation.navigate('Personal')}
            >
                <Text style={styles.buttonText}>Personal</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.exercisesButton}
                onPress={() => navigation.navigate('Exercises')}
            >
                <Text style={styles.buttonText}>Exercises</Text>
            </TouchableOpacity>

        </View>
        
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#0B060E",
        height: '100%',
        justifyContent: "center",
        alignItems: 'center'
    },

    logoContainer: {
        position: "absolute",
        top: 175,
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
        backgroundColor: "#225575",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20
    },

    groupsButton: {
        width: '80%',
        height: 70,
        backgroundColor: "#21917B",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,   
        marginBottom: 20

    },

    personalButton: {
        width: '80%',
        height: 70,
        backgroundColor: "#60C04C",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,               
        marginBottom: 20
 
    },

    exercisesButton: {
        width: '80%',
        height: 70,
        backgroundColor: "#5F3675",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10   
    },

    buttonText: {
        color: '#E5F9FD',
        fontSize: 20,
        fontWeight: 'bold'
    }
    
})

export default HomeScreen;