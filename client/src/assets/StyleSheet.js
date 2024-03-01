import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container1: {
        backgroundColor: '#B7A57A', // gold
        alignItems: 'center',
        height: '68%',
        padding: 30, // not actual padding, placeholder
        gap:30,
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
    container3: { //Modified container 1 to fit screen, can be used in place of container1 if needed.
        backgroundColor: '#B7A57A', // gold
        alignItems: 'center',
        height: 700,
        padding: 30, // not actual padding, placeholder
        marginHorizontal: 20,
        borderRadius: 20,
    },
    purpleContainer: { // Register and Log in Button
        backgroundColor: '#4B2E83', // purple
        alignItems: 'center',
        textAlignVertical: 'center',
        height: 39,
        width: 155,
        padding: 5,
        justifyContent: 'center',
        marginHorizontal: 114,
        borderRadius: 30,
    },
    /*landingpage*/
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    appHeader: {
        paddingTop: 48,
        paddingBottom: 16,
        backgroundColor: '#F8F8F8',
        //paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
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
        borderColor: '#F9F9F9',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        marginBottom: 16,
        height: 150,
        width: '47%',
        overflow: 'hidden'
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
        flexDirection: 'row',
        borderColor: '#E8E8E8',
        fontWeight: 'bold',
        padding: 8,
        borderRadius: 10,
        margin: 16,
    },
    scrollView: {
        height: '20%',
        width: '80%',
        margin: 20,
        alignSelf: 'center',
        padding: 20,
        borderWidth: 5,
        borderRadius: 5,
    },
    textWhite: {
        alignSelf:'center',
        color: 'white',
        fontWeight: 'bold',
    },

    alreadyUserText: {
        alignSelf:'center',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 26,
    }
});
    