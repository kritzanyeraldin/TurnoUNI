import {
  Box,
  Button,
  ButtonText,
  Center,
  Divider,
  FormControl,
  FormControlHelperText,
  FormControlLabel,
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
import { useCallback, useEffect, useState } from "react";
import * as Notifications from "expo-notifications";
import { Alert, Platform } from "react-native";
import { FormControlLabelText } from "@gluestack-ui/themed";
import { FormControlHelper } from "@gluestack-ui/themed";

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
      console.log(JSON.stringify(err, null, 2));
      Alert.alert("Error", err.errors[0].longMessage);
    }
  }, [isLoaded, emailAddress, password]);

  useEffect(() => {
    const configureNotifications = async () => {
      const token = await registerForPushNotificationsAsync();
      if (token) {
        console.log("Token de notificación obtenido:", token);
        // Envía el token al backend si es necesario
        // await sendTokenToBackend(token);
      }
    };

    configureNotifications();
  }, []);

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });

  const registerForPushNotificationsAsync = async () => {
    let token;

    try {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;

      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== "granted") {
        console.log("Permisos de notificaciones no otorgados.");
        return null;
      }

      token = (
        await Notifications.getExpoPushTokenAsync({
          projectId: "a9b0ee48-1126-409e-a551-c1c1053d91c8",
        })
      ).data;

      return token;
    } catch (error) {
      console.error("Error registrando notificaciones:", error);
      return null;
    }
  };

  // const sendTokenToBackend = async (token: string) => {
  //   try {
  //     const response = await fetch("http://backend-url.com/api/save-token", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ token }),
  //     });
  //     if (response.ok) {
  //       console.log("Token enviado al backend con éxito.");
  //     } else {
  //       console.error("Error al enviar el token al backend.");
  //     }
  //   } catch (error) {
  //     console.error("Error en la conexión al backend:", error);
  //   }
  // };

  return (
    <View flex={1} bg="$primary500">
      <Center flex={1}>
        <Heading size="3xl" marginTop="$40">
          ¡Hola de nuevo!
        </Heading>
        <Box
          flex={1}
          // bg="$primary0"
          maxHeight="60%"
          gap="$4"
          width="70%"
          maxWidth="100%"
          marginTop="$10"
        >
          {/* <Button
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
          </HStack> */}
          {/* <Input
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
          </Input> */}

          <FormControl width="100%">
            <FormControlLabel>
              <FormControlLabelText>
                {/* Cuenta o nombre de usuario */}
              </FormControlLabelText>
            </FormControlLabel>
            <Input
              variant="outline"
              size="md"
              borderColor="$primary950"
              bg="$primary0"
            >
              <InputField
                value={emailAddress}
                onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
                placeholder="Cuenta o nombre de usuario"
                placeholderTextColor="$textLight0"
                color="$textLight950"
              />
            </Input>
            {/* <FormControlHelper>
              <FormControlHelperText>
                What would you like people to call you?
              </FormControlHelperText>
            </FormControlHelper> */}
          </FormControl>

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
