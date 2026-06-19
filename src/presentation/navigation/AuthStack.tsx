import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../screens/LoginScreen";
import { useAuth } from "../contexts/AuthContext";
import { View, ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";
import { HomeScreen } from "../screens/HomeScreen";

export type AuthStackParamList = {
  Login: undefined;
  Home: undefined
}

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
  const theme = useTheme();
  const { isAuthenticated, initializing } = useAuth();
  return (
    <>
      {initializing ? (
        <View>
          <ActivityIndicator size="large" color={theme.colors.accentDeep} />
        </View>
      ) : isAuthenticated ? (
        <Stack.Navigator >
          <Stack.Screen name='Home' component={HomeScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Login' component={LoginScreen} />
        </Stack.Navigator>
      )}
    </>
  )
}