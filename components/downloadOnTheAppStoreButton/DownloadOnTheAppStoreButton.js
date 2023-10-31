import React from "react";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";
export const googleLink = "https://www.google.com/";

const DownloadOnTheAppStoreButton = () => {
  return (
    <View style={styles.container}>
      <View>
        <Pressable
          accessibilityLabel="Download on the App Store"
          onPress={() => Linking.openURL(googleLink)}
          style={styles.btn}
        >
          <Text>Go to Google</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DownloadOnTheAppStoreButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "red",
    borderWidth: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    // flex: 1,
    // width: 120,
    // height: 40,
    backgroundColor: "purple",
    padding: 20,
  },
});
