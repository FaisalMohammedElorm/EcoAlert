import { AuthProvider } from "@/contexts/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { Image } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

function RootLayoutNav() {
  return (
    <Stack screenOptions={{ headerBackTitle: "Back" }}>
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      <Stack.Screen name="auth" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ 
        headerShown: true, 
        headerTitle: () => (
          <Image 
            source={require('@/assets/images/EcoAlert_App_Logo.png')} 
            style={{ width: 120, height: 180 }}
            resizeMode="contain"
          />
        ),
        headerStyle: {
          backgroundColor: '#f8f9fa'
        }
      }} />
      <Stack.Screen name="report-waste" options={{ headerShown: false }} />
      <Stack.Screen name="pickup-schedule" options={{ headerShown: false }} />
      <Stack.Screen name="feedback" options={{ headerShown: false }} />
      <Stack.Screen name="notifications" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ headerShown: false }} />
    </Stack>
  );
}

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AuthProvider>
          <RootLayoutNav />
        </AuthProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}