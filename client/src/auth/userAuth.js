import { Alert } from "react-native";
import { auth, firestore } from "../firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "@firebase/firestore";

const stripEmail = (netId) => {
  if (netId.includes("@")) {
    const index = netId.indexOf("@");
    netId = netId.substring(0, index);
  }

  return netId;
};

const createProfile = async (user, name, campus, email) => {
  try {
    const docRef = await addDoc(collection(firestore, "Users"), {
      userId: user.uid,
      name: name,
      campus: campus,
      email: email
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export async function register({ name, campus, netId, password, navigation }) {
  if (password !== "" && netId !== "" && name !== "") {
    const email = stripEmail(netId) + "@uw.edu";

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        createProfile(user, name, campus, email);
        console.log("User account created & signed in!");
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
    Alert.alert("Missing name, netID, or password");
  }
}

export async function login({ netId, password }) {
  if (netId !== "" && password !== "") {
    const email = stripEmail(netId) + "@uw.edu";
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch((error) => Alert.alert(error.message));
  } else {
    Alert.alert("Missing netID or password");
  }
}
