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

const MenuTable = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  return (
    <View flex={1}>
      <ScrollView>
        <VStack margin="$3" bg="white">
          <HStack height={50} bg="#f3f3f3" width="100%" m="$1">
            <View
              flex={2}
              // bg="yellow"
              justifyContent="center"
              alignItems="center"
            >
              <Text>Horarios</Text>
            </View>
            <View
              flex={1}
              // bg="#a3a3a3"
              justifyContent="center"
              alignItems="center"
            >
              <Text>Area</Text>
            </View>
            <View
              flex={2}
              // bg="#efefd6"
              justifyContent="center"
              alignItems="center"
            >
              <Text>Reservar</Text>
            </View>
          </HStack>
          <View bg="#f3f3f3" gap="$1" flex={1}>
            {menuReserveSchedules.map((item) => (
              <HStack
                height={60}
                bg="white"
                // alignItems="center"
                width="100%"
                key={item.id}
              >
                <View
                  flex={2}
                  // bg="yellow"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text>{item.title}</Text>
                </View>
                <View
                  flex={1}
                  // bg="#585846"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text>{item.area}</Text>
                </View>
                <View
                  flex={2}
                  // bg="#efefd6"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Button onPress={openModal} bg="#dadada" size="sm">
                    <ButtonText>Reservar</ButtonText>
                  </Button>
                </View>
              </HStack>
            ))}
          </View>
        </VStack>
      </ScrollView>
      <ModalReserve open={modalVisible} close={closeModal} />
    </View>
  );
};

export default MenuTable;
