import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "../../../components/Themed";

const PostLikes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>1002 beğenme</Text>
    </View>
  );
};

export default PostLikes;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
