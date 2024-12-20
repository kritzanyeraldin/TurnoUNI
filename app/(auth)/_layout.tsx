import { Redirect, Slot, Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

import {
  Button,
  ButtonIcon,
  ButtonText,
  Heading,
  HStack,
  SafeAreaView,
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
    <SafeAreaView flex={1} bg="$primary500">
      <Stack
      // screenOptions={{

      //   header(props) {
      //     return <HeaderComponent {...props} />;
      //   },
      // }}
      >
        <Stack.Screen
          name="signIn"
          options={{ title: "Sign In", headerShown: false }}
        />
        <Stack.Screen
          name="signUp"
          // options={{
          //   title: "Regresar",
          // }}
          options={{
            headerShown: true,
            header: (props) => <HeaderComponent {...props} />,
          }}
        />
        <Stack.Screen
          name="forgotPassword"
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
    <View height="$20">
      <HStack marginTop="$11" marginLeft="$3">
        <Button
          // bg="$primary200"
          variant="solid"
          // borderColor="$primary0"
          onPress={() => props.navigation.goBack()}
        >
          <ButtonText color="$textLight900">Regresar</ButtonText>
        </Button>
      </HStack>
    </View>
  );
};
