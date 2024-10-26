import {
  Button,
  ButtonText,
  Card,
  HStack,
  ScrollView,
  Switch,
  Text,
  View,
  VStack,
} from "@gluestack-ui/themed";

const MyReservationsFill = () => {
  return (
    <View bg="#f6f6f6" width="100%" height="100%">
      <ScrollView>
        <Card
          width="100%"
          maxWidth="80%"
          // height="100%"
          flex={1}
          alignSelf="center"
          mt="$4"
          p="$3.5"
          bg="#cfcfcfe8"
          // justifyContent="center
          gap="$2.5"
        >
          <HStack justifyContent="space-between">
            <Text>Tipo</Text>
            <Text>Area</Text>
          </HStack>
          <Text>horario</Text>
          <VStack justifyContent="space-between">
            <HStack alignItems="center" gap="$2">
              <Switch size="sm" />
            </HStack>
            <Button bg="#a7a7a7" size="xs" width="$10">
              <ButtonText color="white">Cancelar</ButtonText>
            </Button>
          </VStack>
        </Card>
      </ScrollView>
    </View>
  );
};

export default MyReservationsFill;
