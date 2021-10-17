import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "../../../components/Themed";
import { Post } from "../HomeScreen";

type Props = {
  post: Post;
};
const PostLikes = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.post.likeCount} beğenme</Text>
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
