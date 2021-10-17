import React from "react";
import { StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, View } from "../../../components/Themed";

type Props = {};

const PostImage = (props: Props) => {
  return (
    <TouchableOpacity onPress={() => alert("pressed")}>
      <Image
        source={{ uri: "https://picsum.photos/id/945/400/400" }}
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
