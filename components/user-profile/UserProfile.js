import { View, Text, SafeAreaView } from "react-native";

export const UserProfile = ({
  displayName,
  username,
  email,
  isEmailVerified,
}) => (
  <SafeAreaView>
    <View>
      <Text>Display Name: {displayName}</Text>
    </View>
    <View>
      <Text>Username: {username}</Text>
    </View>
    <View>
      <Text>Email: {email}</Text>
    </View>
    <View>
      <Text>
        Verified : {isEmailVerified ? "Email Verified" : "Email not Verified"}
      </Text>
    </View>
  </SafeAreaView>
);
