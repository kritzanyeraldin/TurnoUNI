import { Image, View } from "@gluestack-ui/themed";
import { Modal } from "react-native";
// import image from "@/assets/images";

type Props = {
  open: boolean;
  close: () => void;
};

const ModalConfirmReserve = ({ open, close }: Props) => {
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
          bg="#ededed"
          p="$5"
          gap="$3"
          width="100%"
          height="100%"
          maxWidth="80%"
          maxHeight="30%"
        >
          <Image
            source={{
              uri: "https://picsum.photos/200/300",
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ModalConfirmReserve;
