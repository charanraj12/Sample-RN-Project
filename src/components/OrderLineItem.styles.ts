import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        paddingVertical: 10,
        backgroundColor: "#fff",
        borderRadius: 8,
        marginVertical: 4
    },
    headerExpanderContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    clientLogo: {
        width: 20,
        height: 20,
        marginRight: 8
    },
    idTimeDistance: {
        display: 'flex',
        flexDirection: 'column'
    },
    clientLogoId: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8
    },
    timeDistance: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    amtTypeExpander: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    amtType: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    amount: {
        marginBottom: 8,
        fontFamily: 'Nunito-Bold',
        fontSize: 14,
        fontWeight: '600',
        color: '#43419e'
    },
    orderId: {
        fontFamily: 'Nunito-Bold',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.4,
        color: '#8c8c8c'
    },
    highlight: {
        color: '#43419e'
    },
    timeDistanceText: {
        fontFamily: 'Nunito-Bold',
        fontSize: 14,
        fontWeight: '600',
        letterSpacing: 0.4,
        color: '#8c8c8c'
    },
    paymentType: {
        fontFamily: 'Nunito-Bold',
        fontSize: 12,
        fontWeight: '600',
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 4
    },
    prepaid: {
        backgroundColor: '#fff8f0',
        color: '#f07305'
    },
    cod: {
        backgroundColor: '#d4f9ea',
        color: '#0d9b5f'
    },
    bulletIcon: {
        width: 16,
        height: 16
    },
    expanderIcon: {
        width: 28,
        height: 28,
        marginLeft: 8
    },
    earningsContainer: {
        display: 'flex',
        backgroundColor: '#f3f4f7',
        borderRadius: 8,
        marginTop: 8
    },
    lineItemHeader: {
        fontFamily: 'Nunito-Bold',
        fontSize: 12,
        fontWeight: '600',
        marginBottom: 4,
        marginLeft: 12,
        color: '#8c8c8c'
    },
    lineItem: {
        color: '#000',
        fontFamily: 'Nunito-Bold',
        fontSize: 12,
        fontWeight: '600',
        marginVertical: 4,
        marginHorizontal: 12
    },
    lineItemRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default styles;