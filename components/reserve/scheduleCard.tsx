import { Card, HStack, ScrollView, Text, VStack } from "@gluestack-ui/themed";
import React from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export type TmenuItem = {
  id: string;
  schedule: string;
  date: string;
  area: string;
  progress: number;
};

type ScheduleCardProps = {
  data: TmenuItem[];
};

const ScheduleCard = ({ data }: ScheduleCardProps) => {
  return (
    <ScrollView bg="#ffffff" height="100%">
      {data.map((item) => (
        <Card
          key={item.id}
          width="100%"
          maxWidth="90%"
          // height="$13"
          alignSelf="center"
          mt="$4"
          bg={item.progress === 100 ? "#969696e8" : "#e7e7e7ff"}
        >
          <HStack justifyContent="center" flexGrow={1}>
            <VStack justifyContent="space-around" flexGrow={1} marginLeft="$4">
              <HStack gap="$1.5">
                {/* <Calendar size="$1" /> */}
                <Text size="xs">{item.date}</Text>
              </HStack>
              <Text size="sm" style={{ fontWeight: "bold" }}>
                {item.schedule}
              </Text>
              <HStack gap="$2">
                <Text
                  bg="#d2d2d2"
                  textAlign="center"
                  width="$6"
                  height="$2.5"
                  // borderWidth="$0.5"
                  style={{ textAlignVertical: "center" }}
                >
                  {item.id}
                </Text>
                <Text
                  // borderColor="black"
                  // borderWidth="$1"
                  bg="#d2d2d2"
                  textAlign="center"
                  width="$6"
                  height="$2.5"
                  // borderWidth="$0.5"
                  style={{ textAlignVertical: "center" }}
                >
                  {item.area}
                </Text>
              </HStack>
            </VStack>
            <VStack flexGrow={1} alignItems="center">
              <AnimatedCircularProgress
                style={{
                  marginTop: 9,
                }}
                size={110}
                width={15}
                fill={item.progress}
                backgroundColor="#888787"
                tintColor="#1b1818aa"
              ></AnimatedCircularProgress>
              <Text>{item.progress} </Text>
            </VStack>
          </HStack>
        </Card>
      ))}
    </ScrollView>
  );
};

export default ScheduleCard;
