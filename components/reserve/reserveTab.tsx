import Carousel from "./carousel";
import ReserveMenu from "../../app/(home)/reserve/reserveMenu";
import { router, useNavigation, useRouter } from "expo-router";
import { View } from "@gluestack-ui/themed";

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
    <View bg="white" height="100%" justifyContent="space-around">
      <Carousel
        data={menuData.map((item) => ({
          ...item,
          action: {
            label: "Reservar",
            onPress: () => router.push("/(home)/reserve/reserveMenu"),
          },
        }))}
      ></Carousel>

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
    </View>
  );
}
