import { Redirect, Slot, Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthRoutesLayout() {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href={"/(home)"} />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{ title: "Sign In", headerShown: false }}
        />
        <Stack.Screen name="sign-up" options={{ title: "Regresar" }} />
        <Stack.Screen name="forgot-password" options={{ title: "Regresar" }} />
      </Stack>
    </SafeAreaView>
  );
}
