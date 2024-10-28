import {
  Badge,
  BadgeText,
  Card,
  Heading,
  HStack,
  ScrollView,
  Text,
  VStack,
} from "@gluestack-ui/themed";
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
    <ScrollView height="100%">
      {data.map((item) => (
        <Card
          key={item.id}
          width="100%"
          maxWidth="90%"
          // height="$13"
          alignSelf="center"
          mt="$4"
          bg={item.progress === 100 ? "$primary50" : "$primary500"}
        >
          <HStack justifyContent="center" flexGrow={1}>
            <VStack justifyContent="space-around" flexGrow={1} marginLeft="$4">
              <Text size="sm">{item.date}</Text>
              <Heading size="md" style={{ fontWeight: "bold" }}>
                {item.schedule}
              </Heading>
              <HStack gap="$2">
                <Badge
                  size="md"
                  variant="outline"
                  borderRadius="$full"
                  action="info"
                  bg={item.progress !== 100 ? "$primary900" : "$primary50"}
                  borderColor="$textLight900"
                >
                  <BadgeText color="$textLight900">{item.id}</BadgeText>
                </Badge>
                <Badge
                  size="md"
                  variant="outline"
                  borderRadius="$full"
                  action="info"
                  bg={item.progress !== 100 ? "$primary900" : "$primary50"}
                  borderColor="$textLight900"
                >
                  <BadgeText color="$textLight900">{item.area}</BadgeText>
                </Badge>
              </HStack>
            </VStack>
            <VStack flexGrow={1} alignItems="center" gap="$1">
              <AnimatedCircularProgress
                style={{
                  marginTop: 9,
                }}
                size={100}
                width={15}
                fill={item.progress}
                backgroundColor="#9A473C"
                tintColor={item.progress === 100 ? "#B98078" : "#d5beb5"}
              ></AnimatedCircularProgress>
              <Text>{item.progress}% </Text>
            </VStack>
          </HStack>
        </Card>
      ))}
    </ScrollView>
  );
};

export default ScheduleCard;
