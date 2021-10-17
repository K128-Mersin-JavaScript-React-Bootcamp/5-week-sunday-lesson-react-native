import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../../../components/Themed";
import { RootTabScreenProps } from "../../../types";
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
  screenProps: RootTabScreenProps<"Home">;
};

const Post = (props: Props) => {
  const handleGoToPostDetail = () => {
    props.screenProps.navigation.push("NotFound");
  };
  return (
    <View>
      <PostHeader />
      <PostImage onHandlePostDetail={handleGoToPostDetail} />
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
