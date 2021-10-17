import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../../../components/Themed";
import PostHeader from "./postHeader/PostHeader";

type Props = {
  item: string | number;
};

const Post = (props: Props) => {
  return (
    <View>
      <PostHeader />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({});
