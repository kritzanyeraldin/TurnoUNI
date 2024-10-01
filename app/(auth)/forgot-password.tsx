import {
  Button,
  ButtonText,
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
      <Heading size="lg">Crea una nueva contraseña</Heading>
      <Input>
        <InputField placeholder="ingresa" />
      </Input>
      <Button>
        <ButtonText>enviar</ButtonText>
      </Button>
    </KeyboardAvoidingView>
  );
};

export default restorePasswordScreen;
