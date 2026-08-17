import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function App() {
  const [screen, setScreen] = useState('welcome');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  if (screen === 'create') {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />

        <KeyboardAvoidingView
          style={styles.full}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <View style={styles.form}>
            <TouchableOpacity onPress={() => setScreen('welcome')}>
              <Text style={styles.back}>‹ Back</Text>
            </TouchableOpacity>

            <View style={styles.smallLogo}>
              <Text style={styles.logoLetter}>C</Text>
            </View>

            <Text style={styles.formTitle}>Create Account</Text>

            <Text style={styles.formSubtitle}>
              Join CEMIVO and connect with everyone.
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Your name"
              placeholderTextColor="#6B7280"
              value={name}
              onChangeText={setName}
            />

            <TextInput
              style={styles.input}
              placeholder="@username"
              placeholderTextColor="#6B7280"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
            />

            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => setScreen('home')}
            >
              <Text style={styles.primaryText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

  if (screen === 'home') {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />

        <View style={styles.home}>
          <View>
            <Text style={styles.homeLogo}>CEMIVO</Text>
            <Text style={styles.welcome}>
              Welcome, {name || 'Friend'} 👋
            </Text>
          </View>

          <View style={styles.emptyBox}>
            <Text style={styles.emptyIcon}>💬</Text>

            <Text style={styles.emptyTitle}>
              Your chats
            </Text>

            <Text style={styles.emptyText}>
              Start a conversation and connect with people.
            </Text>
          </View>

          <TouchableOpacity
            style={styles.newChat}
            onPress={() => setScreen('welcome')}
          >
            <Text style={styles.newChatText}>
              + New Chat
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.content}>
        <View style={styles.logoBox}>
          <Text style={styles.logo}>C</Text>
        </View>

        <Text style={styles.title}>CEMIVO</Text>

        <Text style={styles.subtitle}>
          Connect beyond.
        </Text>

        <Text style={styles.description}>
          Chat, call and connect with the people
          who matter to you.
        </Text>

        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.createButton}
            onPress={() =>
