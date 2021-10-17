import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, View } from "../../../components/Themed";
import Colors from "../../../constants/Colors";
import useColorScheme from "../../../hooks/useColorScheme";

const PostActions = () => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <TouchableOpacity style={styles.icon}>
          <FontAwesome
            name="heart-o"
            size={25}
            color={Colors[colorScheme].text}
            style={{ marginRight: 15 }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <FontAwesome
            name="comment-o"
            size={25}
            color={Colors[colorScheme].text}
            style={{ marginRight: 15 }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <FontAwesome
            name="send-o"
            size={25}
            color={Colors[colorScheme].text}
            style={{ marginRight: 15 }}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <FontAwesome
          name="bookmark-o"
          size={25}
          color={Colors[colorScheme].text}
          style={{ marginRight: 15 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PostActions;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 8,
    marginVertical: 12,
  },
  group: {
    flexDirection: "row",
  },
  icon: {
    marginRight: 4,
  },
});
