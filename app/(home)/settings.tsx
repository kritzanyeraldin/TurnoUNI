import { HStack, Switch, Text, View, VStack } from "@gluestack-ui/themed";

const Settings = () => {
  return (
    <View>
      <VStack justifyContent="center" p="$4">
        <Text>Notificaciones</Text>
        <HStack marginLeft="$3" marginRight="$3" gap="$5" alignItems="center">
          <Text>Notificarme cuando se ahabilite cualquier reserva </Text>
          <Switch />
        </HStack>
      </VStack>
    </View>
  );
};

export default Settings;
