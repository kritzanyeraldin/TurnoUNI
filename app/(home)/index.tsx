import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  const { user } = useUser();

  return (
    <View>
      <SignedIn>
        <Text>Hello {user?.username}</Text>
      </SignedIn>
      <SignedOut>
        <Text>Sign In</Text>
        <Text>Sign Up</Text>
      </SignedOut>
    </View>
  );
}
