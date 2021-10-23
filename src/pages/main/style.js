import { StyleSheet } from 'react-native';
import { cores, fontes } from '../../utils/Constants';


const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: cores.branco,
    },
    txt: {
        color: cores.preto,
        fontFamily: fontes.regular
    },
    logoStyle: {
        width: 117,
        height: 41,
    },
    inputStyle: {
        backgroundColor: "#E5E5E5",
        borderRadius: 30,
        borderColor: cores.branco,
        textAlign: 'center',
        fontSize: 14
    },
    header: {
        height: '25%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: '10%'
    },
    rowStyle: {
        flexDirection: 'row',
    },
    iconStyle: {
        padding: 12
    },
    cardGradient: {
        height: 120,
        width: 170,
        borderRadius: 20,

    },
    containerCard: {
        height: 150,
        width: '50%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    nameView: {
        height: '25%',
        width: '80%',
        backgroundColor: "#676767",
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: '45%'
    },
    txtName: {
        color: cores.branco,
        textTransform: 'capitalize',
       
    }
})

export default styles