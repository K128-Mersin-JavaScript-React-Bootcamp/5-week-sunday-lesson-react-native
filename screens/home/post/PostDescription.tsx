import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "../../../components/Themed";
import { Post } from "../HomeScreen";

type Props = {
  post: Post;
};
const PostDescription = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.post.user.name}</Text>
      <Text style={styles.comment}>{props.post.description}</Text>
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
