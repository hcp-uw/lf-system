import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'


class UserPermissions {
    getCameraPermissions = async () => {
        if (Constants.platform.io) {
            const {status} = await Permisissions.askAysnc(Permissions.CAMERA_ROLL)

            if (statues != 'granted'){
                alert("We need permission to use your camera roll")
            }

        }
    }
}

export default new UserPermissions();