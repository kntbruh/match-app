import React, { forwardRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import { BottomSheetComponent } from './BottomSheetComponent';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { RegularScreenNavigationProp } from '../../screens/regular';

type BottomSheetProps = {
  navigation: RegularScreenNavigationProp;
};

const BottomSheet = forwardRef<BottomSheetModal, BottomSheetProps>(
  (props, ref) => {
    const { navigation } = props;
    const closeBottomSheet = () => {
      ref.current.close();
    };
    const handleScreen = () => {
      closeBottomSheet();
      setTimeout(() => {
        navigation.navigate('Tips');
      }, 300);
    };

    return (
      <BottomSheetComponent ref={ref}>
        <View style={styles.contentContainer}>
          <Entypo
            style={styles.icon}
            name='cross'
            size={40}
            color='black'
            onPress={closeBottomSheet}
          />
          <View style={styles.pinkBox}>
            <View style={styles.struggle}>
              <Text style={styles.title}>Struggling to get matches?</Text>
              <AntDesign name='right' size={28} color='black' />
            </View>
            <View>
              <Text>
                Try our AI app to enhance your appearance with personalized
                advice.
              </Text>
            </View>
          </View>
          <Pressable onPress={handleScreen} style={styles.buttonPink}>
            <Text style={styles.buttonTitle}>💡 Tips</Text>
            <AntDesign name='right' size={23} color='black' />
          </Pressable>
        </View>
      </BottomSheetComponent>
    );
  }
);

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 48,
    paddingBottom: 20,
  },
  icon: { paddingTop: 40 },
  pinkBox: {
    backgroundColor: '#FD96C3',
    height: 176,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 26,
    borderRadius: 20,
    marginBottom: 20,
  },
  struggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: { fontSize: 23, fontWeight: 'bold' },
  buttonPink: {
    backgroundColor: '#FD96C3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 40,
    padding: 20,
  },
  buttonTitle: { fontSize: 25 },
});

export default BottomSheet;
