import {
  Box,
  Button,
  ButtonText,
  Center,
  FormControl,
  Heading,
  Input,
  InputField,
  KeyboardAvoidingView,
  Text,
  View,
} from "@gluestack-ui/themed";
import { useSignUp } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Platform } from "react-native";

export default function SignInScreen() {
  const router = useRouter();
  const { isLoaded, signUp, setActive } = useSignUp();
  const [emailAddress, setEmailAddress] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress,
        username,
        password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setPendingVerification(true);
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
      const errorMessage = err.errors;
      if (errorMessage[0].code === "form_param_format_invalid") {
        console.log(errorMessage[0].longMessage);
        Alert.alert("Error", errorMessage[0].longMessage);
      }
      if (errorMessage[0].code === "form_password_length_too_short") {
        console.log(errorMessage[0].longMessage);
        Alert.alert("Error", errorMessage[0].longMessage);
      }
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.replace("/(home)");
      } else {
        console.error(JSON.stringify(completeSignUp, null, 2));
      }
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
      if (err.errors[0].code === "form_code_incorrect") {
        Alert.alert("Error", err.errors[0].longMessage);
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "height" : "height"}
    >
      {!pendingVerification && (
        <View h="100%" maxWidth="100%">
          <Center flex={1}>
            <Heading size="2xl" marginVertical="$10">
              Crea una cuenta
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
              <Input variant="outline" size="md">
                <InputField
                  value={username}
                  onChangeText={(userName) => setUserName(userName)}
                  placeholder="Ingresa tu nombre"
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
                    value={password}
                    onChangeText={(password) => setPassword(password)}
                    type="password"
                    defaultValue=""
                    placeholder="Ingresa tu contraseña"
                  />
                </Input>
              </FormControl>
            </Box>
            <Box marginTop="$8">
              <Button
                onPress={() => {
                  onSignUpPress();
                }}
              >
                <ButtonText>Registrarse</ButtonText>
              </Button>
              <Button
                variant="link"
                size="sm"
                onPress={() => {
                  router.push("/sign-in");
                }}
              >
                <ButtonText>¿Ya tienes una cuenta?. Inicia sesión</ButtonText>
              </Button>
            </Box>
          </Center>
        </View>
      )}
      {pendingVerification && (
        <>
          <Input>
            <InputField
              value={code}
              onChangeText={(code) => setCode(code)}
              placeholder="code..."
            />
          </Input>
          <Button onPress={onPressVerify}>
            <ButtonText>Verificar email</ButtonText>
          </Button>
          <Button onPress={() => router.push("/sign-up")}>
            <ButtonText>atras</ButtonText>
          </Button>
        </>
      )}
    </KeyboardAvoidingView>
  );
}