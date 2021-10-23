import { StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { cores, fontes } from '../../utils/Constants';

export default styles = StyleSheet.create({
  input: {
    width: '100%',
    height:50,
    fontSize: 16,
    color: cores.cinzaEscuro,
    backgroundColor: cores.branco,
    borderRadius: 5,
    borderColor:cores.cinzaEscuro,
    borderWidth: 1,
    fontFamily: fontes.regular
    
  },
  });
  