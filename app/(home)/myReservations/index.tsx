import { Button, ButtonText, Image, Text, View } from "@gluestack-ui/themed";
import { useRouter } from "expo-router";

const myReservations = () => {
  const router = useRouter();
  return (
    <View bg="#e7e7e7" alignItems="center" flex={1}>
      {/* <Image
        source={{
          uri: "https://picsum.photos/200/300",
          width: 200,
          height: 300,
        }}
      /> */}

      <Text>Haz una reservacion</Text>
      <Text mt="$2">Afortunadamente, es facil realizar una</Text>
      <Button
        mt="$4"
        bg="red"
        onPress={() => router.push("/myReservations/myReservationsFill")}
      >
        <ButtonText>Reservar</ButtonText>
      </Button>
    </View>
  );
};

export default myReservations;
