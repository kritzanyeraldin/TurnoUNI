import { SignedIn, SignedOut, useAuth, useUser } from "@clerk/clerk-expo";
import { Button, ButtonText } from "@gluestack-ui/themed";
import { useRouter } from "expo-router";
import { Link } from "expo-router";
import { useCallback } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  const { user } = useUser();
  const router = useRouter();
  const { signOut } = useAuth();

  return (
    <View>
      <Text>Hello {user?.username}</Text>
      <Button
        onPress={async () => {
          await signOut();
        }}
      >
        <ButtonText>salir</ButtonText>
      </Button>
    </View>
  );
}
