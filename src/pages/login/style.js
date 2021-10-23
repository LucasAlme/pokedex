import { StyleSheet } from 'react-native';
import { cores, fontes } from '../../utils/Constants';


const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'contain'
    },
    txt: {
        color: cores.preto,
        fontSize: 14,
        marginTop: 10,
        fontFamily: fontes.regular
    },
    txtSmall: {
        color: cores.preto,
        fontSize: 12,
        fontFamily: fontes.regular
    },
    txtTitle: {
        color: cores.preto,
        fontSize: 24,
        fontFamily: fontes.regular
    },
    logoStyle: {
        width: 252,
        height: 88,
        marginBottom: '25%'
    },
    loginBox: {
        height: '47%',
        width: '90%',
        backgroundColor: cores.branco,
        borderRadius: 10,

    },
    inputStyle: {
        borderColor: cores.branco,
        borderBottomColor: cores.preto,
        marginTop: '5%'
    },
    btnStyle: {
        width: '90%',
        height: '17%',
        marginTop: '12%',
        borderWidth: 0
    },
    containerLogin: {
        height: '100%',
        width: '100%',
        alignItems: 'center'
    },
    vTitle: {
        padding: '5%'
    },
    rowStyle: {
        flexDirection: 'row',
    }

})

export default styles