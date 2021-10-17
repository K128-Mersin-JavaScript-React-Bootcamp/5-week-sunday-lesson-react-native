import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../../../components/Themed";
import PostActions from "./PostActions";
import PostAddComment from "./PostAddComment";
import PostComments from "./PostComments";
import PostDescription from "./PostDescription";
import PostHeader from "./postHeader/PostHeader";
import PostImage from "./PostImage";
import PostLikes from "./PostLikes";
import PostTime from "./PostTime";

type Props = {
  item: string | number;
};

const Post = (props: Props) => {
  return (
    <View>
      <PostHeader />
      <PostImage />
      <PostActions />
      <PostLikes />
      <PostDescription />
      <PostComments />
      <PostAddComment />
      <PostTime />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({});
