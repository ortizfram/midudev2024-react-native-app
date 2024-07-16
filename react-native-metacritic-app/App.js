import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import icon from "./assets/icon.png";

export default function App() {
  return (
    <View style={styles.container}>
      {/* LOCAL IMAGES e.g. */}
      <Text>IMAGES </Text>
      <Text>LOCAL IMAGES e.g.</Text>
      <Image
        source={icon}
        style={{ width: 100, height: 100, resizeMode: "center" }}
      />
      {/* BROWSER IMAGES e.g */}
      <Text>BROWSER IMAGES e.g</Text>
      <Image
        source={{
          uri: "https://occ-0-116-114.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABacRNF9YSi6DH7pFEB711vhfg-cEy0d5JeVAYzTTpTGJjVHUSe-PlhviGvcQn5ZFKjb_q3X4ErfOoCVISb1v3uTOlhzg8hM6I_Y6KmZDNbfwmL0qJfsQzPd9.jpg?r=50d",
        }}
        style={{ width: 300, height: 100, resizeMode: "center" }}
      />
      <Text>BOTONES</Text>
      {/* BOTTON NO ESTILABLE */}
      <Button title="Pulsa aqui" onPress={() => alert("Hola")} />
      {/* BOTTON ESTILABLE */}
      <TouchableOpacity
        onPress={() => alert("Hola boton estilable")}
        style={{ backgroundColor: "#000", padding: 10 }}
      >
        <Text style={{ color: "#fff" }}>Pulsa aqui</Text>
      </TouchableOpacity>
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
