import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Image, Pressable } from "react-native";
import { Text, View } from "../../../../components/Themed";
import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";
import { Post } from "../../HomeScreen";
import PostImage from "../PostImage";
import ProfileActions from "./ProfileActions";
import ProfileImage from "./ProfileImage";
import ProfileNameAndLocation from "./ProfileNameAndLocation";

type Props = {
  post: Post;
};

const PostHeader = (props: Props) => {
  return (
    <View style={styles.container}>
      <ProfileImage uri={props.post.user.avatar} />
      <ProfileNameAndLocation post={props.post} />
      <ProfileActions />
    </View>
  );
};

export default PostHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
});
