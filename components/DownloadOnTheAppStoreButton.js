import React from "react";
import { Pressable, StyleSheet } from "react-native";

const DownloadOnTheAppStoreButton = () => {
  return <Pressable style={styles.image}>PRess</Pressable>;
};

export default DownloadOnTheAppStoreButton;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: 120,
    height: 40,
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
  },
});
