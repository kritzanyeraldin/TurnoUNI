import { Button, ButtonText, VStack } from "@gluestack-ui/themed";
import { Text } from "@gluestack-ui/themed";
import { Box, Heading, HStack, View } from "@gluestack-ui/themed";
import React from "react";
import { Modal, Pressable } from "react-native";
type ModalProps = {
  open: boolean;
  close: () => void;
};
const ModalConfirmCancelReserve = ({ open, close }: ModalProps) => {
  return (
    <>
      <Modal
        transparent
        animationType="fade"
        visible={open}
        onRequestClose={close}
      >
        <View
          flex={1}
          justifyContent="center"
          alignItems="center"
          bg="#000000a8"
        >
          <View
            flex={1}
            bg="$primary700"
            p="$3"
            gap="$3"
            width="100%"
            // height="10%"
            maxWidth="80%"
            maxHeight="30%"
            borderRadius="$xl"
            alignItems="center"
            justifyContent="center"
            // alignContent="center"
          >
            <Heading alignSelf="center">¿Estás seguro de continuar?</Heading>
            <Text>Esta acción no se podrá deshacer.</Text>

            <HStack justifyContent="center" gap="$4" mt="$2">
              <Button
                bg="$primary900"
                borderColor="$primary50"
                variant="outline"
                onPress={close}
              >
                <ButtonText color="$textLight900">Cancelar</ButtonText>
              </Button>
              <Button
                bg="$primary900"
                variant="outline"
                borderColor="$primary50"
                onPress={close}
              >
                <ButtonText color="$textLight900">Confirmar</ButtonText>
              </Button>
            </HStack>
            <Pressable onPress={close} />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ModalConfirmCancelReserve;
