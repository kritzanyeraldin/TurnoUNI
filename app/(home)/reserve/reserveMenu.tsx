// import { Icon } from "@/components/common";
import MenuTable from "@/components/reserve/menuTable";
import { HStack, Input, InputField, View } from "@gluestack-ui/themed";
import { useState } from "react";

const ReserveMenuScreen = () => {
  return (
    <View bg="#f3f3f3" flex={1}>
      <HStack gap="$2.5" bg="$gray5" p="$2.5" m="$3">
        <View alignSelf="center">{/* <Icon type="search" size={16} /> */}</View>
        <Input flex={1}>
          <InputField placeholder="Buscar" />
        </Input>
      </HStack>
      <MenuTable />
      {/* 
     
      <Button onPress={() => setModalVisible(true)}>reservar</Button> */}
    </View>
  );
};

export default ReserveMenuScreen;
