import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text>Test Message</Text>
      <Image source={{ 
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300"}}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#160F29',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
