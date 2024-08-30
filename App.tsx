import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Paywall from './screens/paywall';
import Regular from './screens/regular';
import UserImage from './screens/userImage';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { TipsScreen } from './screens/TipsScreen';
import { CardStyleInterpolators } from '@react-navigation/stack';
import DefaultText from './screens/defaultText';
import HistoryScreen from './screens/HistoryScreen';

export type RootStackParamList = {
  Home: undefined;
  Regular: undefined;
  UserImage: undefined;
  Tips: undefined;
  DefaultText: undefined;
  HistoryScreen: undefined;
};

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
              headerShown: false,
              gestureEnabled: true,
              gestureDirection: 'horizontal',
              // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          >
            <Stack.Screen name='Home' component={Paywall} />
            <Stack.Screen name='Regular' component={Regular} />
            <Stack.Screen name='UserImage' component={UserImage} />
            <Stack.Screen name='Tips' component={TipsScreen} />
            <Stack.Screen name='DefaultText' component={DefaultText} />
            <Stack.Screen name='HistoryScreen' component={HistoryScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
