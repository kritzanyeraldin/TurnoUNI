import {
  Box,
  Button,
  ButtonText,
  Center,
  Heading,
  Image,
  Text,
  View,
} from "@gluestack-ui/themed";
import { useRouter } from "expo-router";
import Logo from "@/assets/images/booking.svg";

const myReservations = () => {
  const router = useRouter();
  return (
    <View flex={1}>
      <Center flex={1}>
        <Box maxWidth={300} maxHeight={300}>
          <Logo width={300} height={300} />
        </Box>
        <Heading color="$primary500">Haz una reservación</Heading>
        <Text color="$primary500" mt="$2">
          Afortunadamente, es facil realizar una
        </Text>
        <Button
          mt="$4"
          // bg="red"
          onPress={() => router.push("/myReservations/myReservationsFill")}
        >
          <ButtonText color="$textLight900">Reservar</ButtonText>
        </Button>
      </Center>
    </View>
  );
};

export default myReservations;
