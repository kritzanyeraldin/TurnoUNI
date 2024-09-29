import {
  Box,
  Button,
  ButtonText,
  Center,
  FormControl,
  Heading,
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
        <Box w="$72" gap="$2">
          <Button size="md">
            <ButtonText>Google</ButtonText>
          </Button>
          <Text>o</Text>
          <Input variant="outline" size="md">
            <InputField
              value={emailAddress}
              onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
              placeholder="Ingresa tu cuenta"
            />
          </Input>
        </Box>
        <Box w="$72" marginVertical="$2">
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
          </FormControl>
          <Button variant="link" size="sm">
            <ButtonText>¿Olvidaste tu contraseña?</ButtonText>
          </Button>
        </Box>
        <Box marginTop="$10">
          <Button>
            <ButtonText onPress={onSignInPress}>Iniciar</ButtonText>
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
      </Center>
    </View>
  );
}
