import { Alert } from "react-native";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

export async function login({ email, password, navigation }) {
  console.log(email);
  console.log(email);
  if (email !== "" && password !== "") {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch((error) => Alert.alert(error.message));
  } else {
    Alert.alert("Missing email or password");
  }
}
