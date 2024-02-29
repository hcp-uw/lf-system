import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container1: {
        backgroundColor: '#B7A57A', // gold
        alignItems: 'center',
        height: 509,
        padding: 30, // not actual padding, placeholder
        gap:20,
        marginHorizontal: 45,
        borderRadius: 30,
    },
    container2: {
        backgroundColor: '#FFFFFF', // white
        borderColor: '#000000',
        borderWidth: 1,
        alignItems: 'center',
        height: 40,
        width: 200,
        marginHorizontal: 68,
        borderRadius: 50,
    },
    registerContainer: {
        backgroundColor: '4B2E83', // purple
        alignItems: 'center',
        height: 40.78,
        padding: 1.91,
        marginHorizontal: 114,
        borderRadius: 30,
    },
    loginContainer: {
        backgroundColor: '#4B2E83', // purple
        alignItems: 'center',
        height: 39,
        width: 200,
        padding: 5,
        marginHorizontal: 114,
        borderRadius: 30,
    },
    
    appHeader: {
        backgroundColor: '#282c34',
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
    },
            searchInput: {
              backgroundColor: '#FFFFFF',
              borderColor: '#000000',
              borderWidth: 1,
              borderRadius: 50,
              width: '80%',
              padding: 10,
              fontSize: 16,
              margin: 20,
              height: 50,
            },
            itemsContainer: {
                padding: 20,
            },
            itemCard: {
                borderColor: '#DDDDDD',
                borderWidth: 1,
                borderRadius: 8,
                padding: 10,
                alignItems: 'center',
                justifyContent: 'center',
                margin: 10,
                height: 150,
            },
            itemImage: {
                width: '100%',
                aspectRatio: 1, // Adjust as necessary to maintain aspect ratio
                borderBottomWidth: 1,
                borderColor: '#DDDDDD',
            },
            itemTitle: {
                marginTop: 8,
                height: 20,
            },
            searchBar: {
                backgroundColor: '#F2F2F2',
                fontWeight: 'bold',
                padding: 20,
            },
        scrollView: {
            height: '20%',
            width: '80%',
            margin: 20,
            alignSelf: 'center',
            padding: 20,
            borderWidth: 5,
            borderRadius: 5,
        }
});
    