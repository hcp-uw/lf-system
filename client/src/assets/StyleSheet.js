import { StyleSheet } from "react-native";

export const purple = '#4B2E83';
export const gold = '#B7A57A';
export const white = '#FFFFFF';

export const styles = StyleSheet.create({
    goldBigContainer: {
        backgroundColor: gold,
        alignItems: 'center',
        height: '68%',
        padding: 30,
        gap: 30,
        marginHorizontal: 45,
        borderRadius: 30,
        justifyContent: 'center'
    },
    
    purpleContainer: {
        backgroundColor: purple,
        alignItems: 'center',
        justifyContent: 'center',
        height: 39,
        width: 155,
        padding: 5,
        marginHorizontal: 114,
        borderRadius: 30,
    },

    textInputBar: {
        backgroundColor: white,
        borderColor: purple,
        borderRadius: 50,
        borderWidth: 1,
        width: '80%',
        height: '8%',
        padding: 10,
        fontSize: 12,
    },

    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: '1%',
        borderTopWidth: 1,
        borderColor: '#ddd',
        height: 60,
        alignItems: 'center',
    },
    navButton: {
        alignItems: 'center',
    },
    navImgButton: {
        width: '100%',
        height: '100%',
    },

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    appHeader: {
        paddingTop: 48,
        paddingBottom: 16,
        backgroundColor: '#F8F8F8',
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
        margin: 20,
        padding: 20,
        borderColor: 'black',
        width: 310,
        borderWidth: 1,
    },
    itemCard: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        marginBottom: 16,
        height: 250,
        width: '47%',
        overflow: 'hidden'
    },
    itemImage: {
        width: '100%',
        aspectRatio: 1,
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
        borderWidth: 2,
        borderRadius: 50,
        width: '80%',
        padding: 10,
        fontSize: 16,
        margin: 20,
        height: '100%',
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
    
    textInputBarCreateItem: {
        backgroundColor: white,
        borderColor: '#000000',
        borderWidth: 1,
        width: '85%',
        height: '20%',
        padding: 30,
        fontSize: 12,
    },
    scrollViewContent: {
        padding: 20,
    },
    section: {
        marginBottom: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    sectionSubtitle: {
        fontSize: 14,
        marginVertical: 10,
    },
    callToAction: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    clickHereText: {
        color: '#0000FF',
        marginRight: 5,
    },
    clickableIcon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imagesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    image: {
        width: 100,
        height: 100,
        margin: 5,
        borderRadius: 10,
    },
});
