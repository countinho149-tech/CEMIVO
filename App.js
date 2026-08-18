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
  const [name, setName] = useState('');
  const [started, setStarted] = useState(false);
  const [screen, setScreen] = useState('home');

  if (!started) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />

        <View style={styles.center}>
          <Text style={styles.logo}>CEMIVO</Text>

          <Text style={styles.title}>Welcome to CEMIVO</Text>

          <Text style={styles.subtitle}>
            Connect and chat with your friends.
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#94a3b8"
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
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>CEMIVO</Text>
          <Text style={styles.headerUser}>{name}</Text>
        </View>

        {screen === 'home' && (
          <ScrollView contentContainerStyle={styles.content}>
            <Text style={styles.welcome}>Hello, {name} 👋</Text>

            <Text style={styles.subtitle}>
              Welcome to your CEMIVO home.
            </Text>

            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardTitle}>💬 Chats</Text>
              <Text style={styles.cardText}>
                Start chatting with your friends.
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardTitle}>👥 Contacts</Text>
              <Text style={styles.cardText}>
                Find and connect with people.
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardTitle}>👤 Profile</Text>
              <Text style={styles.cardText}>
                Your CEMIVO account: {name}
              </Text>
            </TouchableOpacity>
          </ScrollView>
        )}

        {screen === 'chats' && (
          <View style={styles.center}>
            <Text style={styles.bigIcon}>💬</Text>
            <Text style={styles.title}>Chats</Text>
            <Text style={styles.subtitle}>
              Your conversations will appear here.
            </Text>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>New Chat</Text>
            </TouchableOpacity>
          </View>
        )}

        {screen === 'contacts' && (
          <View style={styles.center}>
            <Text style={styles.bigIcon}>👥</Text>
            <Text style={styles.title}>Contacts</Text>
            <Text style={styles.subtitle}>
              Your CEMIVO contacts will appear here.
            </Text>
          </View>
        )}

        {screen === 'profile' && (
          <View style={styles.center}>
            <Text style={styles.bigIcon}>👤</Text>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>
              Your CEMIVO account is ready.
            </Text>
          </View>
        )}

        <View style={styles.bottomNav}>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => setScreen('home')}
          >
            <Text style={styles.navIcon}>🏠</Text>
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() => setScreen('chats')}
          >
            <Text style={styles.navIcon}>💬</Text>
            <Text style={styles.navText}>Chats</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() => setScreen('contacts')}
          >
            <Text style={styles.navIcon}>👥</Text>
            <Text style={styles.navText}>Contacts</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() => setScreen('profile')}
          >
            <Text style={styles.navIcon}>👤</Text>
            <Text style={styles.navText}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01172a',
  },

  main: {
    flex: 1,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },

  content: {
    padding: 20,
    paddingBottom: 100,
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

  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: '#cbd5e1',
    textAlign: 'center',
    marginBottom: 25,
  },

  input: {
    width: '100%',
    backgroundColor: '#10293b',
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
    width: '100%',
  },

  buttonText: {
    color: '#0f172a',
    fontSize: 16,
    fontWeight: 'bold',
  },

  header: {
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#17344a',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#38bdf8',
  },

  headerUser: {
    fontSize: 15,
    color: '#cbd5e1',
  },

  card: {
    backgroundColor: '#10293b',
    padding: 20,
    borderRadius: 16,
    marginBottom: 15,
  },

  cardTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  cardText: {
    color: '#94a3b8',
    fontSize: 15,
  },

  bigIcon: {
    fontSize: 55,
    marginBottom: 15,
  },

  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 75,
    backgroundColor: '#0b2235',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#17344a',
  },

  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  navIcon: {
    fontSize: 22,
    marginBottom: 3,
  },

  navText: {
    color: '#cbd5e1',
    fontSize: 12,
  },
});
