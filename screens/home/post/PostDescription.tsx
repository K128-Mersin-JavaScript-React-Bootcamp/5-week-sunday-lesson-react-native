import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "../../../components/Themed";

const PostDescription = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>ozaferayan</Text>
      <Text style={styles.comment}>Fotoğrafıma bir bakabilirsiniz.</Text>
    </View>
  );
};

export default PostDescription;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 8,
    marginHorizontal: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 8,
  },
  comment: {
    fontSize: 14,
  },
});
