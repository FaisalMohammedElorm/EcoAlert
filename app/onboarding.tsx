import { useAuth } from '@/contexts/AuthContext';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

export default function OnboardingScreen() {
  const { completeOnboarding } = useAuth();

  const handleGetStarted = async () => {
    await completeOnboarding();
    router.replace('/auth');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image 
              source={require('@/assets/images/EcoAlert_App_Logo.png')} 
              style={{ width: 150, height: 150 }}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.messageContainer}>
          <Text style={styles.title}>CLEAN{'\n'}COMMUNITIES{'\n'}START WITH YOU!</Text>
          <Text style={styles.subtitle}>
            Report waste, track clean ups, and join others making a difference in your neighborhood.
          </Text>
        </View>

        <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
          <Text style={styles.getStartedText}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E7D32',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingVertical: 60,
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
  },
  logoContainer: {
    marginBottom: 20,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 1,
    fontFamily: 'Poppins_700Bold',
  },
  messageContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    lineHeight: 40,
    marginBottom: 30,
    fontFamily: 'Poppins_700Bold',
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
    fontFamily: 'Poppins_400Regular',
  },
  getStartedButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 25,
    minWidth: 200,
    alignItems: 'center',
  },
  getStartedText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
    fontFamily: 'Poppins_700Bold',
  },
});