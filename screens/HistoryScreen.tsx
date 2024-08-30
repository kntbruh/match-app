import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React, { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import BottomSheet from '../components/bottomSheet/BottomSheet';
import UserScreenshot from '../components/UserScreenshot';

export type RegularScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Regular'
>;

export default function HistoryScreen() {
  const data = Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`);
  const numColumns = 3;
  const renderItem = ({ item }: { item: string }) => <UserScreenshot />;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name='left' size={35} color='black' />
        </Pressable>
        <View style={styles.textContainer}>
          <Text style={styles.text}>History</Text>
        </View>
        <AntDesign name='plus' size={35} color='#FC92C0' />
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={numColumns}
          contentContainerStyle={styles.gridContainer}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FC92C0',
    flex: 1,
  },
  textContainer: { alignItems: 'center' },
  text: {
    color: 'black',
    fontSize: 44,
    fontWeight: '700',
    lineHeight: 45.8,
  },
  textRegular: { textAlign: 'center', fontSize: 25 },

  topBar: {
    flexDirection: 'row',
    paddingTop: 73,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  main: { paddingTop: 50, paddingHorizontal: 19 },
  textMain: {
    fontSize: 28,
    paddingHorizontal: 42,
    lineHeight: 33.41,
    textAlign: 'center',
  },
  gridContainer: {
    padding: 8,
  },
});
