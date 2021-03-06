import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'teal',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold',
    },
    buttonContainer: {
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
    buttonText: {
        fontSize: 30,
        lineHeight: 50,
        fontWeight: 'bold',
        color: 'white',
        textAlignVertical: 'center',
    },
    toModalButton: {
        marginTop: 50,
    },
    backToLastStoryButton: {
        marginTop: 50,
    },
    backToFeedsButton: {
        marginTop: 50,
    },
});
