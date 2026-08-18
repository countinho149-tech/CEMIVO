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

        <View style={styles.welcomeContainer}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoIcon}>C</Text>
          </View>

          <Text style={styles.logo}>CEMIVO</Text>

          <Text style={styles.welcomeTitle}>
            Connect with your world
          </Text>

          <Text style={styles.welcomeSubtitle}>
            Chat, connect and stay close to the people you care about.
          </Text>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Your name</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              placeholderTextColor="#718096"
              value={name}
              onChangeText={setName}
            />
          </View>

          <TouchableOpacity
            style={[
              styles.continueButton,
              !name.trim() && styles.disabledButton,
            ]}
            onPress={() => {
              if (name.trim()) {
                setStarted(true);
              }
            }}
          >
            <Text style={styles.continueText}>Continue</Text>
            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>

          <Text style={styles.footerText}>
            Welcome to CEMIVO
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.main}>
        <View style={styles.topHeader}>
          <View>
            <Text style={styles.smallGreeting}>Welcome back</Text>
            <Text style={styles.headerTitle}>CEMIVO</Text>
          </View>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {name.charAt(0).toUpperCase()}
            </Text>
          </View>
        </View>

        {screen === 'home' && (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.homeContent}
          >
            <View style={styles.heroCard}>
              <View style={styles.heroText}>
                <Text style={styles.heroGreeting}>
                  Hello, {name} 👋
                </Text>

                <Text style={styles.heroTitle}>
                  Ready to connect?
                </Text>

                <Text style={styles.heroSubtitle}>
                  Start a conversation and stay connected.
                </Text>
              </View>

              <View style={styles.heroCircle}>
                <Text style={styles.heroIcon}>💬</Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Quick access</Text>

            <TouchableOpacity
              style={styles.featureCard}
              onPress={() => setScreen('chats')}
            >
              <View style={styles.featureIconBlue}>
                <Text style={styles.featureEmoji}>💬</Text>
              </View>

              <View style={styles.featureInfo}>
                <Text style={styles.featureTitle}>Chats</Text>
                <Text style={styles.featureSubtitle}>
                  Start chatting with friends
                </Text>
              </View>

              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.featureCard}
              onPress={() => setScreen('contacts')}
            >
              <View style={styles.featureIconPurple}>
                <Text style={styles.featureEmoji}>👥</Text>
              </View>

              <View style={styles.featureInfo}>
                <Text style={styles.featureTitle}>Contacts</Text>
                <Text style={styles.featureSubtitle}>
                  Find people and connect
                </Text>
              </View>

              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.featureCard}
              onPress={() => setScreen('profile')}
            >
              <View style={styles.featureIconGreen}>
                <Text style={styles.featureEmoji}>👤</Text>
              </View>

              <View style={styles.featureInfo}>
                <Text style={styles.featureTitle}>Profile</Text>
                <Text style={styles.featureSubtitle}>
                  Manage your CEMIVO account
                </Text>
              </View>

              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>

            <View style={styles.infoBox}>
              <Text style={styles.infoIcon}>✨</Text>

              <View style={styles.infoTextContainer}>
                <Text style={styles.infoTitle}>
                  Welcome to CEMIVO
                </Text>

                <Text style={styles.infoText}>
                  Your new place to connect and chat.
                </Text>
              </View>
            </View>
          </ScrollView>
        )}

        {screen === 'chats' && (
          <View style={styles.page}>
            <Text style={styles.pageIcon}>💬</Text>

            <Text style={styles.pageTitle}>Your Chats</Text>

            <Text style={styles.pageSubtitle}>
              Your conversations will appear here.
            </Text>

            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>
                + New Chat
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {screen === 'contacts' && (
          <View style={styles.page}>
            <Text style={styles.pageIcon}>👥</Text>

            <Text style={styles.pageTitle}>Contacts</Text>

            <Text style={styles.pageSubtitle}>
              Find your friends and start connecting.
            </Text>

            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>
                + Add Contact
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {screen === 'profile' && (
          <View style={styles.page}>
            <View style={styles.profileAvatar}>
              <Text style={styles.profileAvatarText}>
                {name.charAt(0).toUpperCase()}
              </Text>
            </View>

            <Text style={styles.pageTitle}>{name}</Text>

            <Text style={styles.pageSubtitle}>
              Your CEMIVO account is ready.
            </Text>

            <View style={styles.profileCard}>
              <Text style={styles.profileLabel}>Account name</Text>
              <Text style={styles.profileName}>{name}</Text>
            </View>
          </View>
        )}

        <View style={styles.bottomNav}>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => setScreen('home')}
          >
            <Text
              style={[
                styles.navIcon,
                screen === 'home' && styles.activeIcon,
              ]}
            >
              🏠
            </Text>

            <Text
              style={[
                styles.navText,
                screen === 'home' && styles.activeText,
              ]}
            >
              Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() => setScreen('chats')}
          >
            <Text
              style={[
                styles.navIcon,
                screen === 'chats' && styles.activeIcon,
              ]}
            >
              💬
            </Text>

            <Text
              style={[
                styles.navText,
                screen === 'chats' && styles.activeText,
              ]}
            >
              Chats
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() => setScreen('contacts')}
          >
            <Text
              style={[
                styles.navIcon,
                screen === 'contacts' && styles.activeIcon,
              ]}
            >
              👥
            </Text>

            <Text
              style={[
                styles.navText,
                screen === 'contacts' && styles.activeText,
              ]}
            >
              Contacts
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() => setScreen('profile')}
          >
            <Text
              style={[
                styles.navIcon,
                screen === 'profile' && styles.activeIcon,
              ]}
            >
              👤
            </Text>

            <Text
              style={[
                styles.navText,
                screen === 'profile' && styles.activeText,
              ]}
            >
              Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#061522',
  },

  main: {
    flex: 1,
  },

  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 26,
  },

  logoCircle: {
    width: 78,
    height: 78,
    borderRadius: 39,
    backgroundColor: '#38bdf8',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 16,
  },

  logoIcon: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#061522',
  },

  logo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#38bdf8',
    textAlign: 'center',
    letterSpacing: 2,
    marginBottom: 18,
  },

  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
  },

  welcomeSubtitle: {
    fontSize: 15,
    lineHeight: 23,
    color: '#94a3b8',
    textAlign: 'center',
    marginBottom: 35,
  },

  inputContainer: {
    marginBottom: 16,
  },

  inputLabel: {
    color: '#cbd5e1',
    fontSize: 14,
    marginBottom: 8,
  },

  input: {
    backgroundColor: '#102536',
    borderWidth: 1,
    borderColor: '#1e3a50',
    borderRadius: 14,
    color: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 15,
    fontSize: 16,
  },

  continueButton: {
    height: 56,
    backgroundColor: '#38bdf8',
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  disabledButton: {
    opacity: 0.45,
  },

  continueText: {
    color: '#061522',
    fontSize: 17,
    fontWeight: 'bold',
  },

  arrow: {
    color: '#061522',
    fontSize: 24,
    marginLeft: 10,
  },

  footerText: {
    color: '#475569',
    textAlign: 'center',
    marginTop: 25,
    fontSize: 13,
  },

  topHeader: {
    paddingHorizontal: 20,
    paddingVertical: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  smallGreeting: {
    color: '#64748b',
    fontSize: 13,
    marginBottom: 2,
  },

  headerTitle: {
    color: '#38bdf8',
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: '#1d4ed8',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  homeContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },

  heroCard: {
    backgroundColor: '#0e2d43',
    borderRadius: 22,
    padding: 20,
    marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#16435e',
  },

  heroText: {
    flex: 1,
    paddingRight: 10,
  },

  heroGreeting: {
    color: '#38bdf8',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 7,
  },

  heroTitle: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 7,
  },

  heroSubtitle: {
    color: '#94a3b8',
    fontSize: 13,
    lineHeight: 19,
  },

  heroCircle: {
    width: 65,
    height: 65,
    borderRadius: 33,
    backgroundColor: '#164e63',
    justifyContent: 'center',
    alignItems: 'center',
  },

  heroIcon: {
    fontSize: 30,
  },

  sectionTitle: {
    color: '#ffffff',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 14,
  },

  featureCard: {
    backgroundColor: '#0b2235',
    borderRadius: 17,
    padding: 15,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#132f43',
  },

  featureIconBlue: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#123f5a',
    justifyContent: 'center',
    alignItems: 'center',
  },

  featureIconPurple: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#30204f',
    justifyContent: 'center',
    alignItems: 'center',
  },

  featureIconGreen: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#123e36',
    justifyContent: 'center',
    alignItems: 'center',
  },

  featureEmoji: {
    fontSize: 23,
  },

  featureInfo: {
    flex: 1,
    marginLeft: 14,
  },

  featureTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },

  featureSubtitle: {
    color: '#64748b',
    fontSize: 13,
  },

  chevron: {
    color: '#64748b',
    fontSize: 28,
    marginLeft: 8,
  },

  infoBox: {
    backgroundColor: '#0b2235',
    borderRadius: 17,
    padding: 17,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#132f43',
  },

  infoIcon: {
    fontSize: 25,
    marginRight: 13,
  },

  infoTextContainer: {
    flex: 1,
  },

  infoTitle: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },

  infoText: {
    color: '#64748b',
    fontSize: 13,
  },

  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingBottom: 80,
  },

  pageIcon: {
    fontSize: 55,
    marginBottom: 15,
  },

  pageTitle: {
    color: '#ffffff',
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  pageSubtitle: {
    color: '#94a3b8',
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 25,
  },

  primaryButton: {
    backgroundColor: '#38bdf8',
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 13,
  },

  primaryButtonText: {
    color: '#061522',
    fontSize: 15,
    fontWeight: 'bold',
  },

  profileAvatar: {
    width: 95,
    height: 95,
    borderRadius: 48,
    backgroundColor: '#1d4ed8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },

  profileAvatarText: {
    color: '#ffffff',
    fontSize: 38,
    fontWeight: 'bold',
  },

  profileCard: {
    width: '100%',
    backgroundColor: '#0b2235',
    borderRadius: 16,
    padding: 18,
    marginTop: 10,
  },

  profileLabel: {
    color: '#64748b',
    fontSize: 13,
    marginBottom: 6,
  },

  profileName: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '600',
  },

  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 76,
    backgroundColor: '#081c2c',
    borderTopWidth: 1,
    borderTopColor: '#15354a',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 65,
  },

  navIcon: {
    fontSize: 21,
    marginBottom: 4,
    opacity: 0.55,
  },

  activeIcon: {
    opacity: 1,
  },

  navText: {
    color: '#64748b',
    fontSize: 11,
  },

  activeText: {
    color: '#38bdf8',
    fontWeight: 'bold',
  },
});
