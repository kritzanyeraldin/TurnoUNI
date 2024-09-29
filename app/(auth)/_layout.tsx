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
      <Slot />
    </SafeAreaView>
  );
}
