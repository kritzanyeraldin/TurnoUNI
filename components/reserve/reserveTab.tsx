import Carousel from "./carousel";
import ReserveMenu from "../../app/(home)/reserve/reserveMenu";
import { router, useNavigation, useRouter } from "expo-router";
import { Box, Heading, Text, View } from "@gluestack-ui/themed";

const menuData = [
  {
    id: "Desayuno",
    title: "Desayuno",
  },
  {
    id: "Almuerzo",
    title: "Almuerzo",
  },
  {
    id: "Cena",
    title: "Cena",
  },
];

const lateMenuData = [
  {
    id: "Desayuno Carroña",
    title: "Desayuno Carroña",
  },
  {
    id: "Almuerzo Carroña",
    title: "Almuerzo Carroña",
  },
  {
    id: "Cena Carroña",
    title: "Cena Carroña",
  },
];

export default function ReserveTab() {
  const router = useRouter();
  return (
    <View height="100%">
      <Box gap="$3" marginBottom="$10" marginTop="$7">
        <Heading marginLeft="$3" color="$primary950">
          Menú Principal
        </Heading>
        <Carousel
          data={menuData.map((item) => ({
            ...item,
            action: {
              label: "Reservar",
              onPress: () => router.push("/(home)/reserve/reserveMenu"),
            },
          }))}
        ></Carousel>
      </Box>

      <Box gap="$3" marginTop="$3">
        <Heading marginLeft="$3" color="$primary950">
          Menú Carroña
        </Heading>
        <Carousel
          data={lateMenuData.map((item) => ({
            ...item,
            action: {
              label: "Reservar",
              onPress: () => {
                console.log(item);
              },
            },
          }))}
        ></Carousel>
      </Box>
    </View>
  );
}
