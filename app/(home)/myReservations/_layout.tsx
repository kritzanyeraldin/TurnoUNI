import { SafeAreaView } from "@gluestack-ui/themed";
import { Slot, Stack } from "expo-router";

export default function MyReservationslayout() {
  return (
    <SafeAreaView flex={1}>
      <Slot />
    </SafeAreaView>
  );
}
