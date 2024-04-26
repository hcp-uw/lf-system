import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { useState, useEffect } from "react";
import { styles } from "../assets/StyleSheet";
import { PurpleButton } from "../components/button";
import { InputContainer } from "../components/inputContainer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";


import { register } from "../auth/userAuth";

export default function Registration({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user =>{
      if(user) {
        navigation.navigate("AuthStack");
      }
    })

    return unsubscribe;
  }, [])

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
          placeholder="Name"
          placeholderTextColor="#999"
          onChangeText={(val) => setName(val)}
        />

        <TextInput
          textAlign="center"
          style={styles.textInputBar}
          placeholder="UW NetID"
          placeholderTextColor="#999"
          onChangeText={(val) => setEmail(val)}
        />

        <TextInput
          textAlign="center"
          style={styles.textInputBar}
          placeholder="Password"
          placeholderTextColor="#999"
          onChangeText={(val) => setPassword(val)}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.purpleContainer}
          onPress={() =>
            register({
              name: name,
              netId: email,
              campus: "Seattle",
              password: password,
              navigation: navigation,
            })
          }
        >
          <Text style={styles.textWhite}>Register</Text>
        </TouchableOpacity>

        <Text style={styles.alreadyUserText}>Already a User?</Text>

        <PurpleButton
          navigation={navigation}
          navigationPage="Login"
          buttonText="Login"
        />
      </View>
    </View>
  );
}
