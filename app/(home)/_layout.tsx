import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Slot } from "expo-router";
import { Stack } from "expo-router/stack";
import { Drawer } from "expo-router/drawer";
import { DrawerContent } from "@/components/Home";
import { drawerSections } from "@/constants";

export default function HomeLayout() {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Redirect href={"/(auth)/signIn"} />;
  }
  return (
    <Drawer
      drawerContent={DrawerContent}
      screenOptions={
        {
          // headerRight: UserAvatar,
          // drawerContentStyle: { height: "100%" },
        }
      }
    >
      {drawerSections.map((section) =>
        section.items.map((item) => <Drawer.Screen {...item.screenProps} />)
      )}
    </Drawer>
  );
}
