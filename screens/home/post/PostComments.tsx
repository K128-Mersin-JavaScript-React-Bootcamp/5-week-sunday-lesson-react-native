import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Text } from "../../../components/Themed";

const PostComments = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>26 yorumun tümünü gör</Text>
    </TouchableOpacity>
  );
};

export default PostComments;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 8,
    marginHorizontal: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: "normal",
    opacity: 0.5,
    marginRight: 8,
  },
});
