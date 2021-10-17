import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../../../../components/Themed";

const ProfileNameAndLocation = () => {
  return (
    <View style={styles.nameAndLocation}>
      <Text style={styles.name}>ozaferayan</Text>
      <Text style={styles.location}>İstanbul, Turkey</Text>
    </View>
  );
};

export default ProfileNameAndLocation;

const styles = StyleSheet.create({
  nameAndLocation: {
    flex: 1,
    paddingHorizontal: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
  },
  location: {
    fontSize: 15,
  },
});
