import {
  Button,
  ButtonText,
  Heading,
  Image,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
  View,
} from "@gluestack-ui/themed";
import { useRouter } from "expo-router";
import { Modal } from "react-native";
// import image from "@/assets/images";

type Props = {
  open: boolean;
  close: () => void;
};

const ModalConfirmReserve = ({ open, close }: Props) => {
  const router = useRouter();
  return (
    <Modal
      transparent
      animationType="fade"
      visible={open}
      onRequestClose={close}
    >
      <View
        w="100%"
        h="100%"
        justifyContent="center"
        alignItems="center"
        bg="#000000a8"
      >
        <View
          bg="$primary700"
          p="$5"
          gap="$3"
          width="100%"
          height="100%"
          maxWidth="80%"
          maxHeight="30%"
          justifyContent="center"
          alignItems="center"
          borderRadius="$xl"
        >
          <Heading>¡Reserva realizada!</Heading>

          <Text>Gracias por reserva</Text>

          <Button
            bg="$primary900"
            variant="solid"
            width="90%"
            onPress={() => router.push("/(home)")}
          >
            <ButtonText color="$textLight500">Regresar</ButtonText>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

export default ModalConfirmReserve;
