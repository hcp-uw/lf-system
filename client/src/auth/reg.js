import { Alert } from "react-native";
import { auth, db } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const stripEmail = (netId) => {
  if (netId.includes("@")) {
    const index = netId.indexOf("@");
    netId = netId.substring(0, index);
  }

  return netId;
};

const createProfile = (user, name, campus) => {};

export async function register({ name, campus, netId, password, navigation }) {
  const email = stripEmail(netId) + "@uw.edu";

  if (password !== "" && netId !== "") {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        createProfile(userCredential.user, name, email);
        console.log("User account created & signed in!");
        navigation.navigate("Login");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          Alert.alert("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          Alert.alert("That email address is invalid!");
        }

        if (error.code === "auth/weak-password") {
          Alert.alert("Password should be at least 6 characters");
        }

        console.log(error);
      });
  } else {
    Alert.alert("Missing email or password");
  }
}