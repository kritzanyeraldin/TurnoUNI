import { Redirect, Slot, Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Button,
  ButtonIcon,
  ButtonText,
  Heading,
  HStack,
  View,
  VStack,
} from "@gluestack-ui/themed";
import { Text } from "@gluestack-ui/themed";
import { icons } from "@/constants/icons";

export default function AuthRoutesLayout() {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href={"/(home)"} />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack
      // screenOptions={{

      //   header(props) {
      //     return <HeaderComponent {...props} />;
      //   },
      // }}
      >
        <Stack.Screen
          name="sign-in"
          options={{ title: "Sign In", headerShown: false }}
        />
        <Stack.Screen
          name="sign-up"
          // options={{
          //   title: "Regresar",
          // }}
          options={{
            headerShown: true,
            header: (props) => <HeaderComponent {...props} />,
          }}
        />
        <Stack.Screen
          name="forgot-password"
          options={{
            headerShown: true,
            header: (props) => <HeaderComponent {...props} />,
          }}
        />
      </Stack>
    </SafeAreaView>
  );
}

const HeaderComponent = ({ ...props }: any) => {
  return (
    <View>
      <HStack>
        <Button onPress={() => props.navigation.goBack()}>
          <ButtonText>Regresar</ButtonText>
        </Button>
      </HStack>
    </View>
  );
};
