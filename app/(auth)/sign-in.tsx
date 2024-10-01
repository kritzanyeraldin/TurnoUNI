import {
  Box,
  Button,
  ButtonText,
  Center,
  Divider,
  FormControl,
  Heading,
  HStack,
  Input,
  InputField,
  set,
  Text,
  View,
} from "@gluestack-ui/themed";
import { useSignIn } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { useCallback, useState } from "react";

export default function SignInScreen() {
  const router = useRouter();
  const { signIn, setActive, isLoaded } = useSignIn();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const onSignInPress = useCallback(async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/");
      } else {
        // See https://clerk.com/docs/custom-flows/error-handling
        // for more info on error handling
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  }, [isLoaded, emailAddress, password]);

  return (
    <View h="100%" maxWidth="100%" bg="$coolGray100">
      <Center flex={1}>
        <Heading size="2xl" marginVertical="$10">
          ¡Hola de nuevo!
        </Heading>
        <Box flex={1} maxHeight="60%" gap="$2" maxWidth="80%" marginTop="$2.5">
          <Button size="md">
            <ButtonText>Google</ButtonText>
          </Button>
          <HStack justifyContent="center" alignItems="center" space="md">
            <Divider my="$0.5" />
            <Text>o</Text>
            <Divider my="$0.5" />
          </HStack>
          <Input variant="outline" size="md">
            <InputField
              value={emailAddress}
              onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
              placeholder="Ingresa tu cuenta o nombre de usuario"
            />
          </Input>
          <FormControl
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            isRequired={true}
          >
            <Input size="md">
              <InputField
                type="password"
                defaultValue=""
                placeholder="Ingresa tu contraseña"
                value={password}
                onChangeText={(password) => setPassword(password)}
              />
            </Input>
            <Button
              variant="link"
              size="sm"
              alignSelf="flex-end"
              marginTop="-$1"
            >
              <ButtonText>¿Olvidaste tu contraseña?</ButtonText>
            </Button>
          </FormControl>
          <Box marginTop="$10">
            <Button onPress={onSignInPress}>
              <ButtonText>Iniciar</ButtonText>
            </Button>
            <Button
              variant="link"
              size="sm"
              onPress={() => {
                router.push("/sign-up");
              }}
            >
              <ButtonText>¿No tienes una cuenta? Registrate</ButtonText>
            </Button>
          </Box>
        </Box>
      </Center>
    </View>
  );
}
