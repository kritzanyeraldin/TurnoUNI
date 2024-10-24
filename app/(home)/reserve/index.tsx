import ReserveTab from "@/components/reserve/reserveTab";
import SchedulesTab from "@/components/reserve/schedulesTab";
import { Text } from "@gluestack-ui/themed";
import { useState } from "react";
import { useWindowDimensions } from "react-native";
import {
  SceneMap,
  TabBar,
  TabBarIndicator,
  TabView,
} from "react-native-tab-view";

// const ReserveRoute = () => <ReserveTab />;

// const SchedulesRoute = () => <SchedulesTab />;

const renderScene = SceneMap({
  first: ReserveTab,
  second: SchedulesTab,
});

const ReserveScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Reserva" },
    { key: "second", title: "Horarios" },
  ]);

  return (
    <TabView
      // overScrollMode={"never"}
      swipeEnabled={false}
      style={{ backgroundColor: "white" }}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          style={{
            width: "60%",
            alignSelf: "center",
            backgroundColor: "white",
            marginTop: 5,
          }}
          renderLabel={(props) => (
            <Text color="black" size="xs">
              {props.route.title}
            </Text>
          )}
          renderIndicator={(props) => (
            <TabBarIndicator
              {...props}
              style={{ backgroundColor: "black", height: "8%" }}
            />
          )}
          // renderIcon={}
        />
      )}
    />
  );
};

export default ReserveScreen;
