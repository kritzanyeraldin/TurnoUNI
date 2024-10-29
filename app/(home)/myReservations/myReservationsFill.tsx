import ModalConfirmCancelReserve from "@/components/Myreservations/ModalConfirmCancelReserve";
import {
  Button,
  ButtonText,
  Card,
  Heading,
  HStack,
  ScrollView,
  Switch,
  Text,
  View,
  VStack,
} from "@gluestack-ui/themed";
import { useState } from "react";

const MyReservationsFill = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  return (
    <View flex={1}>
      {/* <ScrollView>/ */}
      <Card
        width="$80"
        height="$40"
        mt="$4"
        p="$3.5"
        bg="$primary500"
        justifyContent="center"
        alignSelf="center"
        gap="$2.5"
      >
        <HStack justifyContent="flex-start">
          {/* <Text>Tipo</Text> */}
          <Text>Area 1</Text>
        </HStack>
        <Heading size="md">2:00 pm - 3:00 pm</Heading>

        <HStack justifyContent="space-between" alignContent="center" mt="$2">
          <Switch size="sm" />
          <Button
            size="md"
            bg="$primary900"
            variant="solid"
            onPress={openModal}
          >
            <ButtonText color="$textLight900">Cancelar</ButtonText>
          </Button>
        </HStack>
      </Card>
      {/* </ScrollView> */}
      <ModalConfirmCancelReserve open={modalVisible} close={closeModal} />
    </View>
  );
};

export default MyReservationsFill;
