import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../../../components/Themed";
import { RootTabScreenProps } from "../../../types";
import { Post as PostType, User } from "../HomeScreen";
import PostActions from "./PostActions";
import PostAddComment from "./PostAddComment";
import PostComments from "./PostComments";
import PostDescription from "./PostDescription";
import PostHeader from "./postHeader/PostHeader";
import PostImage from "./PostImage";
import PostLikes from "./PostLikes";
import PostTime from "./PostTime";

type Props = {
  post: PostType;
  currentUser?: User;
  screenProps: RootTabScreenProps<"Home">;
};

const Post = (props: Props) => {
  const handleGoToPostDetail = () => {
    props.screenProps.navigation.push("PostDetail");
  };
  const post = props.post;
  return (
    <View>
      <PostHeader post={post} />
      <PostImage post={post} onHandlePostDetail={handleGoToPostDetail} />
      <PostActions />
      <PostLikes post={post} />
      <PostDescription post={post} />
      <PostComments post={post} />
      {props.currentUser && <PostAddComment currentUser={props.currentUser} />}
      <PostTime post={post} />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({});
