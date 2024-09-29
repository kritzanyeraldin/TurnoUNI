import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Slot } from "expo-router";
import { Stack } from "expo-router/stack";

export default function HomeLayout() {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Redirect href={"/(auth)/sign-in"} />;
  }
  return <Stack />;
}
