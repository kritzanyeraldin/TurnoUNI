import {
  Box,
  Button,
  ButtonText,
  Card,
  Heading,
  Text,
  View,
  VStack,
} from "@gluestack-ui/themed";
import React, { useState } from "react";
import { ButtonProps, FlatList, useWindowDimensions } from "react-native";

export type TCarouselItem = {
  id: string;
  title: string;
  action: {
    label: string;
    onPress: ButtonProps["onPress"];
  };
};

type CarouselProps = {
  data: TCarouselItem[];
};

const SPANCING = 16;

const Carousel = ({ data }: CarouselProps) => {
  const { width } = useWindowDimensions();
  const [currentMenuItemId, setCurrentMenuItemId] = useState<string>();
  const carWidth = width - 2 * SPANCING;

  return (
    <View w="100%">
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        contentContainerStyle={{
          backgroundColor: "#F5F5F5",
          gap: 16,
          paddingRight: carWidth / 2,
        }}
        snapToAlignment="start"
        decelerationRate="fast"
        onViewableItemsChanged={({ viewableItems }) => {
          setCurrentMenuItemId(viewableItems[0].key);
        }}
        renderItem={({ item, index }) => (
          <Card
            backgroundColor="$primary500"
            key={item.id}
            w={carWidth - 60}
            h={200}
            borderRadius="$lg"
            alignItems="center"
            justifyContent="center"
          >
            <Box height="50%" w="$full" maxWidth="90%">
              <Heading mb="$2">{item.title}</Heading>
              <Text>Disfruta de un rico {item.title}</Text>
            </Box>
            <Button
              bg="$primary900"
              variant="solid"
              mt="$7"
              width="90%"
              onPress={item.action.onPress}
            >
              <ButtonText color="$textLight800">{item.action.label}</ButtonText>
            </Button>
          </Card>
        )}
      ></FlatList>
      {/* {data.map((item) => {
          return (
            <Circle
              key={item.id}
              transform={[
                {
                  scale: item.id === currentMenuItemId ? 1.2 : 1,
                },
              ]}
              size={10}
              bg={item.id === currentMenuItemId ? "black" : "#ffffffd2"}
              borderColor="black"
              borderWidth="$1"
              mr="$1.5"
            ></Circle>
          );
        })} */}
    </View>
  );
};

export default Carousel;
