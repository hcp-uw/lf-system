import { StyleSheet } from "react-native";

export const purple = '#4B2E83';
export const gold = '#B7A57A';
export const white = '#FFFFFF';

export const styles = StyleSheet.create({
    goldBigContainer: {
        backgroundColor: gold, // gold
        alignItems: 'center',
        height: '68%',
        padding: 30, // not actual padding, placeholder
        gap:30,
        marginHorizontal: 45,
        borderRadius: 30,
        justifyContent: 'center'
    },
    
    purpleContainer: { // Register and Log in Button
        backgroundColor: purple, // purple
        alignItems: 'center',
        justifyContent: 'center',
        height: 39,
        width: 155,
        padding: 5,
        justifyContent: 'center',
        marginHorizontal: 114,
        borderRadius: 30,
    },

    /* inputContainer */
    textInputBar: {
        backgroundColor: white,
        borderColor: '#000000',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: purple,
        width: '80%',
        height: '8%',
        padding: 10,
        fontSize: 12,
    },
    /* inputContainer */

    /* Navigation Bar*/
    navBar: {
        top: '20%',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 50,
        padding:'1%'
    },
    navButton: {
        width: 40,
        height: 40,
    },
    navImgButton: {
        width: '100%',
        height: '100%',
    },
    /* Navigation Bar*/

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
        fontSize: 20,
    },
    postItemContainer: {
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
    postText:{
        alignSelf:'center',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
    },

    avatarPlaceHolder:{
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 48,
        backgroundColor: '#E1E2E6',
        justifyContent: 'center',
        alignItems: 'center',


    },
    avatar:{
        position: 'absolute',
        width: 100,
        height: 100,
        borderRadius: 50,
        

    },    
});
    