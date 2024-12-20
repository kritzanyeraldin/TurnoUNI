import {
  Button,
  ButtonText,
  Center,
  FormControl,
  Heading,
  KeyboardAvoidingView,
} from "@gluestack-ui/themed";
import { Box } from "@gluestack-ui/themed";
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
      <Center flex={1} bg="$primary500">
        <Heading size="lg">Crea una nueva contraseña</Heading>

        <Box
          flex={1}
          // bg="$primary0"
          maxHeight="60%"
          gap="$4"
          width="70%"
          maxWidth="100%"
          marginTop="$10"
        >
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
                placeholder="Ingresa tu nueva contraseña"
                // value={password}
                // onChangeText={(password) => setPassword(password)}
                placeholderTextColor="$textLight0"
                color="$textLight950"
              />
            </Input>
          </FormControl>
          <Button
            bg="$primary900"
            variant="outline"
            borderColor="$primary0"
            // onPress={onSignInPress}
          >
            <ButtonText color="$textLight900">Enviar</ButtonText>
          </Button>
        </Box>
      </Center>
    </KeyboardAvoidingView>
  );
};

export default restorePasswordScreen;
