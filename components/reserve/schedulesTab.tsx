import React, { useState } from "react";
import {
  SceneMap,
  TabBar,
  TabBarIndicator,
  TabBarItem,
  TabView,
} from "react-native-tab-view";
import ScheduleCard from "./scheduleCard";
import { Text } from "@gluestack-ui/themed";
const breakfastSchedules = [
  {
    id: "Turno 1",
    schedule: "2:00pm - 2:30pm",
    date: "Sep5, 2022",
    area: "Area 1",
    progress: 40,
  },
  {
    id: "Turno 2",
    schedule: "2:30pm - 3:00pm",
    date: "Sep5, 2022",
    area: "Area 1",
    progress: 50,
  },
  {
    id: "Turno 3",
    schedule: "3:00pm - 3:30pm",
    date: "Sep5, 2022",
    area: "Area 2",
    progress: 100,
  },

  {
    id: "Turno 4",
    schedule: "3:00pm - 3:30pm",
    date: "Sep5, 2022",
    area: "Area 2",
    progress: 100,
  },
  {
    id: "Turno 5",
    schedule: "3:00pm - 3:30pm",
    date: "Sep5, 2022",
    area: "Area 2",
    progress: 100,
  },
];

// const SchedulesTab = () => {
//   return (
//     <View>
//       <Tabs
//         defaultValue="Desayuno"
//         orientation="horizontal"
//         flexDirection="column"
//         width="100%"
//         // height=
//         overflow="hidden"
//         bg="#ffffff"
//         mt="$3"
//         // br="$0"
//         // h={200}
//       >
//         <Tabs.List justifyContent="center" br={0}>
//           <Tabs.Tab value="Desayuno">
//             <SizableText>Desayuno</SizableText>
//           </Tabs.Tab>
//           <Tabs.Tab value="Almuerzo">
//             <SizableText>Almuerzo</SizableText>
//           </Tabs.Tab>
//           <Tabs.Tab value="Cena">
//             <SizableText>Cena</SizableText>
//           </Tabs.Tab>
//         </Tabs.List>

//         <Separator />
//         {/* <Tabs.Content value="Desayuno" height="100%">
//           <ScrollView>
//             <Comp data={breakfastSchedules}></Comp>
//           </ScrollView>
//         </Tabs.Content>
//         <Tabs.Content value="Almuerzo">
//           <Comp data={breakfastSchedules}></Comp>
//         </Tabs.Content>
//         <Tabs.Content value="Cena">
//           <Comp data={breakfastSchedules}></Comp>
//         </Tabs.Content> */}
//       </Tabs>
//     </View>
//   );
// };
const BreakfastRoute = () => <ScheduleCard data={breakfastSchedules} />;
const LunchRoute = () => <ScheduleCard data={breakfastSchedules} />;
const DinnerRoute = () => <ScheduleCard data={breakfastSchedules} />;

const renderScene = SceneMap({
  first: BreakfastRoute,
  second: LunchRoute,
  third: DinnerRoute,
});

type Route = {
  key: string;
  title: string;
  // icon: keyof typeof icons;
};

const SchedulesTab = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState<Route[]>([
    // { key: "first", title: "Desayuno", icon: "coffee" },
    // { key: "second", title: "Almuerzo", icon: "forkKnife" },
    // { key: "third", title: "Cena", icon: "bowlSteam" },
  ]);
  return (
    <TabView
      onIndexChange={setIndex}
      // initialLayout=
      navigationState={{ index, routes }}
      renderScene={renderScene}
      tabBarPosition="bottom"
      swipeEnabled={false}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          pressColor="red"
          style={{
            backgroundColor: "white",
          }}
          // renderIcon={(props) => (
          //   <Icon type={props.route.icon} weight="regular" />
          // )}
          renderTabBarItem={(props) => <TabBarItem {...props} />}
          renderLabel={(props) => (
            <Text size="xs" color="black">
              {props.route.title}
            </Text>
          )}
          renderIndicator={(props) => (
            <TabBarIndicator
              {...props}
              style={{
                height: "100%",
                backgroundColor: "#b7b7b7",
              }}
            />
          )}
        />
      )}
    ></TabView>
  );
};

export default SchedulesTab;
