import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    storyButtonContainer: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'black',
        borderRadius: 99999,
        shadowRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.8,
        marginTop: 20,
    },
    storyButtonText: {
        fontSize: 30,
        lineHeight: 50,
        fontWeight: 'bold',
        color: 'white',
        textAlignVertical: 'center',
    },
});
