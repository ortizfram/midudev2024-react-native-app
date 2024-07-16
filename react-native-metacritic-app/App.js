import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

import icon from "./assets/icon.png";

export default function App() {
  return (
    <View style={styles.container}>
      {/* LOCAL IMAGES e.g. */}
      <Image source={icon} style={{width:100, height:100, resizeMode:"center"}}/>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
