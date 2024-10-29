// import { Icon } from "@/components/common";
import MenuTable from "@/components/reserve/menuTable";
import { HStack, Input, InputField, View } from "@gluestack-ui/themed";

const ReserveMenuScreen = () => {
  return (
    <View flex={1}>
      <HStack gap="$2.5" bg="$gray5" marginVertical="$5" marginHorizontal="$3">
        {/* <View alignSelf="center"><Icon type="search" size={16} /></View> */}
        <Input flex={1} variant="outline" borderColor="$primary950" bg="white">
          <InputField
            placeholder="Buscar"
            placeholderTextColor="$textLight0"
            color="$textLight950"
          />
        </Input>
      </HStack>
      <MenuTable />
      {/* 
     
      <Button onPress={() => setModalVisible(true)}>reservar</Button> */}
    </View>
  );
};

export default ReserveMenuScreen;
