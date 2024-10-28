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
    { key: "first", title: "Desayuno" },
    { key: "second", title: "Almuerzo" },
    { key: "third", title: "Cena" },
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
          pressColor="#7B0F00"
          style={{
            backgroundColor: "#313131ff",
          }}
          // renderIcon={(props) => (
          //   <Icon type={props.route.icon} weight="regular" />
          // )}
          renderTabBarItem={(props) => <TabBarItem {...props} />}
          renderLabel={(props) => (
            <Text size="xs" color="$textLight900">
              {props.route.title}
            </Text>
          )}
          renderIndicator={(props) => (
            <TabBarIndicator
              {...props}
              style={{
                height: "100%",
                backgroundColor: "#740E00",
              }}
            />
          )}
        />
      )}
    ></TabView>
  );
};

export default SchedulesTab;
