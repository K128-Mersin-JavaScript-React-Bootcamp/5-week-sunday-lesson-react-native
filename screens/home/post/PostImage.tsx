import React from "react";
import { StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, View } from "../../../components/Themed";
import { Post } from "../HomeScreen";

type Props = {
  onHandlePostDetail: () => void;
  post: Post;
};

const PostImage = (props: Props) => {
  return (
    <TouchableOpacity onPress={() => props.onHandlePostDetail()}>
      <Image
        source={{ uri: props.post.image }}
        style={styles.image}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default PostImage;

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 400,
  },
});
