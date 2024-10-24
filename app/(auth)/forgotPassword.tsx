import {
  Button,
  ButtonText,
  Center,
  Heading,
  KeyboardAvoidingView,
} from "@gluestack-ui/themed";
import { Input, InputField, Text, View } from "@gluestack-ui/themed";
import React from "react";
import { Platform } from "react-native";

const restorePasswordScreen = () => {
  return (
    <KeyboardAvoidingView
      flex={1}
      // bg="red"
      behavior={Platform.OS === "ios" ? "height" : "height"}
    >
      <Center>
        <Heading size="lg">Crea una nueva contraseña</Heading>
        <Input>
          <InputField placeholder="ingresa" />
        </Input>
        <Button>
          <ButtonText>enviar</ButtonText>
        </Button>
      </Center>
    </KeyboardAvoidingView>
  );
};

export default restorePasswordScreen;
