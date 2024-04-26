import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { useEffect, useState } from "react";
import { styles } from "../assets/StyleSheet";
import { PurpleButton } from "../components/button";
import { login } from "../auth/userAuth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const testing = true;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("AuthStack");
      }
    });

    return unsubscribe;
  }, []);

  return (
    <View
      style={{
        justifyContent: "center",
        flex: 1,
      }}
    >
      <View style={styles.goldBigContainer}>
        <TextInput
          textAlign="center"
          style={styles.textInputBar}
          placeholderTextColor="#999"
          placeholder="UW NetID"
          onChangeText={(val) => setEmail(val)}
        />

        <TextInput
          textAlign="center"
          style={styles.textInputBar}
          placeholderTextColor="#999"
          placeholder="Password"
          onChangeText={(val) => setPassword(val)}
        />

        <TouchableOpacity
          style={styles.purpleContainer}
          onPress={() => 
            testing
              ? login({ netId: 'fpazaran', password: 'password' })
              : login({
                  netId: email,
                  password: password,
                })
          }
        >
          <Text style={styles.textWhite}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.alreadyUserText}>Not a user?</Text>

        <PurpleButton
          navigation={navigation}
          navigationPage="Registration"
          buttonText="Register"
        />
      </View>
    </View>
  );
}
