import React from "react";
import { StyleSheet, Image } from "react-native";
import { Text, View } from "../../../../components/Themed";

type Props = {};

const ProfileImage = (props: Props) => {
  return (
    <Image
      style={styles.profile}
      source={{ uri: "https://picsum.photos/id/1081/100/100" }}
    />
  );
};

export default ProfileImage;

const styles = StyleSheet.create({
  profile: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
});
