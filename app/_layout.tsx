import { Stack } from "expo-router";
import '@/global.css';

export default function RootLayout() {
  return (
    <Stack
    >
      <Stack.Screen name="(tabs)" options={{ animationEnabled: false }} />
      <Stack.Screen name="(auth)" options={{ animationEnabled: false }} />
      <Stack.Screen name="onboarding" options={{ animationEnabled: false }} />
    </Stack>
  );
}
