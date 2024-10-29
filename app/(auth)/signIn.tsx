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
    <View flex={1} bg="$primary500">
      <Center flex={1}>
        <Heading size="2xl" marginVertical="$10">
          ¡Hola de nuevo!
        </Heading>
        <Box
          flex={1}
          // bg="$primary0"
          maxHeight="60%"
          gap="$3"
          maxWidth="80%"
          marginTop="$10"
        >
          <Button
            bg="$primary900"
            variant="outline"
            borderColor="$primary0"
            size="md"
          >
            <ButtonText color="$textLight900">Google</ButtonText>
          </Button>
          <HStack
            justifyContent="center"
            alignItems="center"
            space="md"
            // bg="$secondary800"
          >
            <Divider my="$0.5" bgColor="$primary0" />
            <Text>o</Text>
            <Divider my="$0.5" bgColor="$primary0" />
          </HStack>
          <Input
            variant="outline"
            size="md"
            borderColor="$primary950"
            bg="$primary0"
          >
            <InputField
              value={emailAddress}
              onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
              placeholder="Ingresa tu cuenta o nombre de usuario"
              placeholderTextColor="$textLight0"
              color="$textLight950"
            />
          </Input>
          <FormControl
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            isRequired={true}
          >
            <Input
              size="md"
              variant="outline"
              borderColor="$primary950"
              bg="$primary0"
            >
              <InputField
                type="password"
                defaultValue=""
                placeholder="Ingresa tu contraseña"
                value={password}
                onChangeText={(password) => setPassword(password)}
                placeholderTextColor="$textLight0"
                color="$textLight950"
              />
            </Input>
            <Button
              variant="link"
              size="sm"
              alignSelf="flex-end"
              // marginTop="-$1"
              onPress={() => {
                router.push("/forgotPassword");
              }}
            >
              <ButtonText color="$textLight900">
                ¿Olvidaste tu contraseña?
              </ButtonText>
            </Button>
          </FormControl>
          <Box marginTop="$5" gap="$4">
            <Button
              bg="$primary900"
              variant="outline"
              borderColor="$primary0"
              onPress={onSignInPress}
            >
              <ButtonText color="$textLight900">Iniciar</ButtonText>
            </Button>
            <Button
              variant="link"
              size="sm"
              onPress={() => {
                router.push("/signUp");
              }}
            >
              <ButtonText underline color="$textLight900">
                ¿No tienes una cuenta? Registrate
              </ButtonText>
            </Button>
          </Box>
        </Box>
      </Center>
    </View>
  );
}
