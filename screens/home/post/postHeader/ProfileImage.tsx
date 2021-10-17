import React from "react";
import { StyleSheet, Image, ImageURISource } from "react-native";
import { Text, View } from "../../../../components/Themed";

type Props = {
  size?: number;
  uri: ImageURISource["uri"];
};

const ProfileImage = (props: Props) => {
  return <Image style={styles(props).profile} source={{ uri: props.uri }} />;
};

export default ProfileImage;

const styles = (props: Props) =>
  StyleSheet.create({
    profile: {
      borderRadius: props.size ? props.size : 50,
      width: props.size ? props.size : 50,
      height: props.size ? props.size : 50,
    },
  });
