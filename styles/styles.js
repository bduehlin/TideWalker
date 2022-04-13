import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#bfd1ff'
    },
    childbox: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    topdiv: {
        justifyContent: 'center',
        marginTop: '40%',
    },
    input: {
        height: 40,
        width: 150,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        alignSelf: 'center',
        color: '#0048ff',
    },
    text: {
        marginBottom: 20,
        textAlign: "center",
        fontSize: 20,
        fontFamily: 'Cantarell_400Regular'
    },
    title: {
        marginBottom: 20,
        textAlign: "center",
        fontSize: 30,
    },
    button: {
        width: 250,
        alignSelf: 'center',
        marginBottom: 20,
    },
    header: {
        height: 100,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        margin: 0, 
        padding: 0,
    }
});
export default styles