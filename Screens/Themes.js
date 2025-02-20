import { View, Text } from "react-native";
import { useThemes } from "../assets/TheContext/themeContext.js";
import { Picker } from "@react-native-picker/picker";

const Themes = () => {
  const { setTheme, currentThemeName } = useThemes();

  const themeOptions = {
    light: ["Dark", "Darker"],
    dark: ["Light", "Darker"],
    darker: ["Light", "Dark"],
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Select Theme</Text>
      <Picker
        selectedValue={currentThemeName}
        onValueChange={(itemValue) => setTheme(itemValue)}
        style={{ width: 200 }}
      >
        {themeOptions[currentThemeName]?.map((theme) => (
          <Picker.Item key={theme} label={theme} value={theme.toLowerCase()} />
        ))}
      </Picker>
    </View>
  );
};

export default Themes;
