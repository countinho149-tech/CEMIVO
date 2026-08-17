import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [name, setName] = useState('');
  const [started, setStarted] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      {!started ? (
        <View style={styles.center}>
          <Text style={styles.logo}>CEMIVO</Text>

          <Text style={styles.title}>Welcome to CEMIVO</Text>

          <Text style={styles.subtitle}>
            Connect and chat with your friends.
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#888"
            value={name}
            onChangeText={setName}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (name.trim()) {
                setStarted(true);
              }
            }}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.center}>
          <Text style={styles.logo}>CEMIVO</Text>

          <Text style={styles.title}>Hello, {name} 👋</Text>

          <Text style={styles.subtitle}>
            Your CEMIVO account is ready.
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#38bdf8',
    textAlign: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#cbd5e1',
    textAlign: 'center',
    marginBottom: 25,
  },
  input: {
    backgroundColor: '#1e293b',
    color: '#ffffff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#38bdf8',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#0f172a',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
