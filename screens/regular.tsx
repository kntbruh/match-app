import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import {
  BottomSheetModal,
  BottomSheetView,
  useBottomSheetModal,
} from '@gorhom/bottom-sheet';
import React, { useRef } from 'react';
import { BottomSheetComponent } from '../components/bottomSheet/BottomSheetComponent';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import BottomSheet from '../components/bottomSheet/BottomSheet';

export type RegularScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Regular'
>;

export default function Regular() {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const navigation = useNavigation<RegularScreenNavigationProp>();
  const handleModal = () => bottomSheetRef.current?.present();

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Pressable onPress={handleModal}>
          <Feather name='menu' size={40} color='black' />
        </Pressable>
        <View style={styles.textContainer}>
          <Text style={styles.text}>CUPID</Text>
          <Text style={styles.textRegular}>Regular</Text>
        </View>
        <Pressable onPress={() => navigation.navigate('HistoryScreen')}>
          <Entypo name='back-in-time' size={40} color='black' />
        </Pressable>
      </View>
      <View style={styles.main}>
        <View>
          <Text style={styles.textMain}>
            Upload a screenshot of a chat or bio
          </Text>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/images/screen3.png')}
              style={[styles.image, styles.bottomImage]}
            />
            <Image
              source={require('../assets/images/screen2.png')}
              style={[styles.image, styles.middleImage]}
            />
            <Image
              source={require('../assets/images/screen1.png')}
              style={[styles.image, styles.topImage]}
            />
          </View>
        </View>
        <View style={styles.buttons}>
          <View style={styles.loveButton}>
            <Text style={styles.buttonText}>❤</Text>
          </View>
          <Pressable
            onPress={() => navigation.navigate('UserImage')}
            style={styles.textButton}
          >
            <Text style={styles.buttonText}>Upload Screenshot</Text>
          </Pressable>
        </View>
      </View>
      <BottomSheet ref={bottomSheetRef} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FC92C0',
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
  imageContainer: {
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
    height: 350, // Установите нужную высоту
    position: 'relative',
    width: '100%',
  },
  image: {
    width: 150,
    height: 325,
    resizeMode: 'cover',
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bottomImage: {
    transform: [{ rotate: '-15deg' }],
    zIndex: 1,
    width: 141,
    left: 40,
    top: 20,
  },
  middleImage: {
    transform: [{ rotate: '0deg' }],
    zIndex: 2,
  },
  topImage: {
    transform: [{ rotate: '15deg' }],
    zIndex: 4,
    left: 150,
  },
  buttons: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
  },
  loveButton: { backgroundColor: 'black', padding: 15, borderRadius: 40 },
  textButton: { backgroundColor: 'black', padding: 15, borderRadius: 40 },
  buttonText: { color: 'white', fontSize: 28 },
});
