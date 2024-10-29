import menuReserveSchedules from "@/constants/menuTable";
import React, { useState } from "react";
import ModalReserve from "./modalReserve";
import {
  Button,
  HStack,
  ScrollView,
  Text,
  View,
  VStack,
} from "@gluestack-ui/themed";
import { ButtonText } from "@gluestack-ui/themed";
import { Box } from "@gluestack-ui/themed";

const MenuTable = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  return (
    <ScrollView flex={1}>
      <VStack margin="$3" bg="$primary500">
        <HStack
          height={50}
          flex={1}
          maxWidth="100%"
          margin="$1"
          bg="$primary800"
        >
          <Box flex={3} justifyContent="center" alignItems="center">
            <Text>Horarios</Text>
          </Box>
          <Box flex={1} justifyContent="center" alignItems="center">
            <Text>Area</Text>
          </Box>
          <Box flex={2} justifyContent="center" alignItems="center">
            <Text>Reservar</Text>
          </Box>
        </HStack>
        <View bg="#f3f3f3" gap="$1" flex={1}>
          {menuReserveSchedules.map((item) => (
            <HStack height={60} bg="$primary500" width="100%" key={item.id}>
              <View flex={3} justifyContent="center" alignItems="center">
                <Text size="md">{item.title}</Text>
              </View>
              <View flex={1} justifyContent="center" alignItems="center">
                <Text>{item.area}</Text>
              </View>
              <View flex={2} justifyContent="center" alignItems="center">
                <Button
                  onPress={openModal}
                  bg="$primary900"
                  variant="outline"
                  // borderColor="$primary0"
                  size="sm"
                >
                  <ButtonText color="$textLight900">Reservar</ButtonText>
                </Button>
              </View>
            </HStack>
          ))}
        </View>
      </VStack>
      <ModalReserve open={modalVisible} close={closeModal} />
    </ScrollView>
  );
};

export default MenuTable;
