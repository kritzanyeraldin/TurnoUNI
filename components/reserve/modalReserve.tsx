import { useState } from "react";
import { Alert, Modal, Pressable } from "react-native";
import ModalConfirmReserve from "./modalConfirmReserve";
import {
  Box,
  Button,
  ButtonText,
  Heading,
  HStack,
  Text,
  View,
  VStack,
} from "@gluestack-ui/themed";

type ModalProps = {
  open: boolean;
  close: () => void;
};

const ModalReserve = ({ open, close }: ModalProps) => {
  const [modalConfirmVisible, setModalConfirmVisible] = useState(false);
  const openModal = () => {
    setModalConfirmVisible(true);
  };
  const closeModal = () => {
    setModalConfirmVisible(false);
  };

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
            p="$5"
            gap="$3"
            width="100%"
            height="30%"
            maxWidth="80%"
            maxHeight="35%"
            borderRadius="$xl"
            // alignItems="center"
            justifyContent="center"
            // alignContent="center"
          >
            <Heading alignSelf="center">Titulo</Heading>
            <Box
              borderWidth="$1"
              bg="$primary50"
              borderColor="$primary0"
              marginBottom="$2"
              padding="$5"
            >
              <HStack justifyContent="space-between">
                <VStack gap="$1">
                  <Text color="$primary950">Horario</Text>
                  <Text color="$primary950">Ingreso</Text>
                  <Text color="$primary950">Nota</Text>
                </VStack>
                <VStack gap="$1">
                  <Text color="$primary950">9:00 - 10:00</Text>
                  <Text color="$primary950">Area2</Text>
                  <Text color="$primary950">Almuerzo</Text>
                </VStack>
              </HStack>
            </Box>
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
                onPress={() => {
                  openModal(), close();
                }}
              >
                <ButtonText color="$textLight900">Reservar</ButtonText>
              </Button>
            </HStack>
            <Pressable onPress={close} />
          </View>
        </View>
      </Modal>
      <ModalConfirmReserve open={modalConfirmVisible} close={closeModal} />
    </>
  );
};

export default ModalReserve;
