import {
  Button,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Image,
} from "react-native";

const RoleExample = () => {
  const imageUrl = "https://picsum.photos/id/237/200/300";

  return (
    <View>
      <Button title="Button" />
      <TouchableOpacity disabled accessibilityRole="link">
        <Text style={{ color: "blue" }}>Link</Text> {/* Styled as a link */}
      </TouchableOpacity>
      <TouchableOpacity disabled accessibilityRole="link ">
        <Text style={{ color: "blue" }}>Link</Text> {/* Styled as a link */}
      </TouchableOpacity>
      <View style={{ marginBottom: 10 }}>
        <Text>Contentinfo</Text>
      </View>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Heading</Text>
      <View style={{ marginBottom: 10 }}>
        <Text>Banner</Text>
      </View>
      <Text>CheckBox</Text>
      <TextInput style={{ borderWidth: 3, borderColor: "black" }} /> CheckBox
      <TextInput style={{ borderWidth: 3, borderColor: "black" }} /> Spinbutton
      <TextInput style={{ borderWidth: 3, borderColor: "black" }} /> Radio
      <TextInput style={{ borderWidth: 3, borderColor: "black" }} /> Textbox
      {/*<Image style={{ width: 100, height: 100 }} source={imageUrl} />*/}
      <TextInput />
    </View>
  );
};

export default RoleExample;
