import { UserAvatar } from "@/components/Home";
import { DrawerItem, DrawerNavigationOptions } from "@react-navigation/drawer";
import { ScreenProps } from "expo-router/build/useScreens";

type DrawerItemProps = React.ComponentProps<typeof DrawerItem>;

type DrawerSectionItem = {
  id: string;
  props?: Partial<DrawerItemProps>;
  screenProps: ScreenProps<DrawerNavigationOptions>;
};

type DrawerSection = {
  id: string;
  label: string;
  items: DrawerSectionItem[];
};

const drawerSections: DrawerSection[] = [
  {
    id: "general",
    label: "General",
    items: [
      {
        id: "menu",
        props: {
        //   icon: ({ focused }) => <Home color={focused ? "red" : "black"} />,
        },
        screenProps: {
          name: "index",
          options: {
            drawerLabel: "Menú",
            title: "Menú",
          },
        },
      },

      {
        id: "reserve",
        props: {
        //   icon: ({ focused }) => <Utensils color={focused ? "red" : "black"} />,
        },
        screenProps: {
          name: "reserve",
          options: {
            drawerLabel: "Reservar",
            title: "Reservar",
            headerRight: UserAvatar,
            headerRightContainerStyle: { marginRight: 20, alignContent: "center" , marginBottom:5 },
            headerStyle: { backgroundColor: "#7b0e00e9" },
            headerTitleStyle: { color: "#e6e6e6" },
          },
        },
      },

      {
        id: "My reservations",
        props: {
        //   icon: ({ focused }) => (<CalendarHeart color={focused ? "red" : "black"} />),
        },
        screenProps: {
          name: "myReservations",
          options: {
            drawerLabel: "Mis Reservaciones",
            title: "Mis Reservaciones",
            headerRight: UserAvatar,
          },
        },
      },
    ],
  },
  {
    id: "settings",
    label: "Configuración",
    items: [
      {
        id: "settings",
        props: {
        //   icon: ({ focused }) => <Settings color={focused ? "red" : "black"} />,
        },
        screenProps: {
          name: "settings",
          options: {
            drawerLabel: "Ajustes",
            title: "Ajustes",
            headerRight: UserAvatar,
          },
        },
      },
    ],
  },
];

export default drawerSections;