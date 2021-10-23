import { StyleSheet } from 'react-native';
import { cores, fontes } from '../../utils/Constants';

export default styles = StyleSheet.create({
    txt: {
      color: cores.branco,
      fontFamily: fontes.regular,
      fontSize: 16
      
    },
    btn: {
      backgroundColor: cores.blue,
      height: 38,
      width: 105,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1
    }
  });
  