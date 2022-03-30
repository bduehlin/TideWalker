import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#bfd1ff'
    },
    childbox: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    topdiv: {
        justifyContent: 'center',
        marginTop: '50%',
    },
    input: {
        height: 40,
        width: 150,
        margin: 12,
        marginBottom: 30,
        borderWidth: 1,
        padding: 10,
        alignSelf: 'center',
        color: '#0048ff',
    },
    text: {
        marginBottom: 20,
        textAlign: "center",
        fontSize: 20,
    },
    title: {
        marginBottom: 20,
        textAlign: "center",
        fontSize: 30,
    },
    button: {
        width: 250,
        alignSelf: 'center',
    }
});
export default styles