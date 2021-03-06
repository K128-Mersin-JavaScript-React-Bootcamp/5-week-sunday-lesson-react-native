import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../../../../components/Themed";
import { Post, User } from "../../HomeScreen";

type Props = {
  post: Post;
};

const ProfileNameAndLocation = (props: Props) => {
  return (
    <View style={styles.nameAndLocation}>
      <Text style={styles.name}>{props.post.user.name}</Text>
      <Text style={styles.location}>{props.post.location}</Text>
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
