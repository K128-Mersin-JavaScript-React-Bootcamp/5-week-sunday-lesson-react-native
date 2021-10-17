import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Text } from "../../../components/Themed";
import { Post } from "../HomeScreen";

type Props = {
  post: Post;
};
const PostTime = (props: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text}>{props.post.time}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.translate}>Çevirisine bak</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostTime;

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
  translate: {
    fontSize: 14,
    fontWeight: "normal",
    marginRight: 8,
  },
});
