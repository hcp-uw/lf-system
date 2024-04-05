import { auth, db } from '../firebase/config';

export const checkNetId = () => {

}

export const createProfile = (user, name, campus) => {
    
}

export const register = ( {name, campus, netId, password, navigation, screen} ) => {
    // auth().createUserWithEmailAndPassword(netId + '@uw.edu', password)
    // .then((userCredential) => {
    //     createProfile(userCredential.user, name, email);
    //     console.log('User account created & signed in!');
    //     navigation.navigate();
    // })
    // .catch(error => {
    //     if (error.code === 'auth/email-already-in-use') {
    //     console.log('That email address is already in use!');
    //     }

    //     if (error.code === 'auth/invalid-email') {
    //     console.log('That email address is invalid!');
    //     }

    //     console.error(error);
    // });
}