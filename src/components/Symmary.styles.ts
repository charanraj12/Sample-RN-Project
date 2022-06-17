import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: "#fff",
        borderRadius: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 4
    },
    component : {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f3f6',
        padding: 8,
        borderRadius: 8,
        flex: 1
    },
    middleComponent : {
        marginHorizontal: 8
    },
    componentValue: {
        fontFamily: "Nunito-Bold",
        fontSize: 15,
        lineHeight: 24,
        color: '#43419e',
        fontWeight: "400"
    },
    componentName: {
        fontFamily: "Nunito-Regular",
        fontSize: 11,
        color: '#0b1323',
        fontWeight: "400"
    }
  });

export default styles;