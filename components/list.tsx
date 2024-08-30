import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const List = () => {
  return (
    <>
      <View style={styles.list}>
        <View style={styles.listItem}>
          <Text style={styles.listIcon}>🔥</Text>
          <Text style={styles.listText}>Unlimited Rizz</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listIcon}>🤝</Text>
          <Text style={styles.listText}>Trusted by Millions</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listIcon}>❤️‍🔥</Text>
          <Text style={styles.listText}>Coach Recommended</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listIcon}>🍯</Text>
          <Text style={styles.listText}>Proven to Get Dates</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listIcon}>📈</Text>
          <Text style={styles.listText}>x10 More Responses</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listIcon}>😈</Text>
          <Text style={styles.listText}>x8 More Dates</Text>
        </View>
      </View>
    </>
  );
};

export default List;
const styles = StyleSheet.create({
  list: {
    paddingTop: 15,
  },
  listItem: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  listIcon: { fontSize: 35 },
  listText: { color: 'white', fontSize: 20, marginLeft: 20, fontWeight: '400' },
});
