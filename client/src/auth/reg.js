import { Alert } from 'react-native';
import { auth, db } from '../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const checkNetId = (netId) => {
    if(netId.contains('@')){
        const index = 
    }

    return true;
}

const createProfile = (user, name, campus) => {
    
}

export async function register( {name, campus, netId, password, navigation, screen} ){
    const email = netId +'@uw.edu';
    
    if(password !== '' && netId !== ''){
        await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            createProfile(userCredential.user, name, email);
            console.log('User account created & signed in!');
            navigation.navigate();
        }).catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }

            console.error(error);
        });
    } else{
        Alert.alert('Missing email or password');
    }
}