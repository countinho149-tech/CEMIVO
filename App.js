import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [screen, setScreen] = useState('welcome');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message.trim()) {
      setMessage('');
    }
  };

  if (screen === 'welcome') {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />

        <View style={styles.center}>
          <Text style={styles.logo}>CEMIVO</Text>

          <Text style={styles.title}>Welcome to CEMIVO</Text>

          <Text style={styles.subtitle}>
            Connect with people and chat with your friends.
          </Text>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => setScreen('create')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  if (screen === 'create') {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />

        <View style={styles.content}>
          <Text style={styles.logo}>CEMIVO</Text>

          <Text style={styles.title}>Create your profile</Text>

          <Text style={styles.subtitle}>
            Enter your name to continue.
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Your name"
            placeholderTextColor="#888"
            value={username}
            onChangeText={setUsername}
          />

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => {
              if (username.trim()) {
                setScreen('chat');
              }
            }}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => setScreen('welcome')}
          >
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>CEMIVO</Text>
        <Text style={styles.userName}>{username}</Text>
      </View>

      <ScrollView style={styles.messages}>
        <View style={styles.welcomeMessage}>
          <Text style={styles.messageText}>
            Welcome to CEMIVO, {username}! 👋
          </Text>
        </View>
      </ScrollView>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.messageInput}
          placeholder="Write a message..."
          placeholderTextColor="#888"
          value={message}
          onChangeText={setMessage}
        />

        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
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
    alignItems: 'center',
    padding: 25,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
  },

  logo: {
    fontSize: 38,
    fontWeight: '800',
    color: '#38bdf8',
    textAlign: 'center',
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 16,
    color: '#cbd5e1',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
  },

  input: {
    backgroundColor: '#1e293b',
    color: '#ffffff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    marginBottom: 15,
  },

  primaryButton: {
    backgroundColor: '#38bdf8',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#0f172a',
    fontSize: 16,
    fontWeight: '700',
  },

  backButton: {
    alignItems: 'center',
    marginTop: 18,
  },

  backText: {
    color: '#38
