import React from "react";
import { StyleSheet, Image } from "react-native";
import { Text, View } from "../../../../components/Themed";

type Props = {
  size: number | undefined;
};

const ProfileImage = (props: Props) => {
  return (
    <Image
      style={styles(props).profile}
      source={{ uri: "https://picsum.photos/id/1081/100/100" }}
    />
  );
};

export default ProfileImage;

const styles = (props: Props) =>
  StyleSheet.create({
    profile: {
      borderRadius: 50,
      width: props.size,
      height: props.size,
    },
  });
