import React from 'react'
import { TextInput } from 'react-native'
import { TextInputMask } from 'react-native-masked-text';
import { cores } from '../../utils/Constants';

import styles from './style';

export default function Input({ mask, placeholder, placeholderColor, customStyle, width, password,type, value, onChangeText, multiline, length }) {
    return (
        mask ? 
        <TextInputMask includeRawValueInChangeText style={[styles.input, customStyle, {width: width ?? '100%'}]} type={mask} 
         placeholder={placeholder} multiline={multiline} placeholderTextColor={placeholderColor ?? cores.cinza}
         keyboardType={type} value={value} onChangeText={onChangeText} maxLength={length}/>
        :
        <TextInput  place secureTextEntry={password} placeholderTextColor={placeholderColor ?? cores.cinza}
        value={value} onChangeText={onChangeText} multiline={multiline} maxLength={length}
        keyboardType={type} placeholder={placeholder} style={[styles.input, customStyle, {width: width ?? '100%'}]} />
    )
}
