import { StyleSheet } from "react-native"

const padding = 5

export default StyleSheet.create({
    wrap:{
        flex: 1,
        justifyContent: 'flex-start',
        padding: padding,
        backgroundColor: '#D0E9FD',
    },
    questionCounter:{
        textAlign: 'center',
        fontSize: 16,
        color: 'white',
        margin: 10
    },
    loadingText:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    loadingContainer: {
        justifyContent: 'center',
        flex: 1
    }
});