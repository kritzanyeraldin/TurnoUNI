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
import Logo from "@/assets/images/order_confirmed.svg";

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
        flex={1}
        maxWidth="100%"
        maxHeight="100%"
        justifyContent="center"
        alignItems="center"
        bg="#000000a8"
      >
        <View
          bg="$primary700"
          p="$5"
          gap="$3"
          flex={1}
          width="60%"
          // height="100%"
          maxWidth="100%"
          maxHeight="50%"
          justifyContent="center"
          alignItems="center"
          borderRadius="$xl"
        >
          <Logo width={120} height={120} />
          <Heading>¡Reserva realizada!</Heading>

          <Text>Gracias por reserva</Text>

          <Button
            bg="$primary900"
            variant="solid"
            width="90%"
            mt="$5"
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
