import React, { useEffect, useState } from "react";
import { Alert, Image, ImageBackground, KeyboardAvoidingView, Text, View } from "react-native";
import Button from "../../components/button";
import Input from "../../components/input";
import { Account } from '../../models/account';
import { validarEmail } from '../../utils/Validacoes';
import styles from "./style";
import DismissKeyboard from '../../components/dismissKeyboard';
import { useDispatch, useSelector } from "react-redux";
import { dispatchState } from "../../utils/Constants";
const loginImage = require('../../assets/loginImage.png');
const logoPokemon = require('../../assets/pokemonLogo.png');

export default function Login() {

    const [account, setAccount] = useState(new Account());
    const dispatch = useDispatch();
    const token = useSelector(state => state.token);

    useEffect(() => {
        if (token !== '')
            dispatch({ type: dispatchState.isLogin, value: true });
    }, [token])

    function isValid() {
        const listErrors = [];
        if (!validarEmail(account.email)) listErrors.push('O email inserido não é valido');
        if (account.senha <= 3) listErrors.push('Sua senha deve ter mais que 3 caracteres');
        if (listErrors.length > 0) {
            Alert.alert('Campos preenchidos incorretamente', `${listErrors.join('\n\n')}`)
            return false
        }

        return true
    }

    var rand = function () {
        return Math.random().toString(36).substr(2);
    };

    var tokenFunction = function () {
        return rand() + rand();
    };

    function login() {
        if (isValid()) {
            dispatch({ type: dispatchState.token, value: tokenFunction() });
        } else {
            return null
        }
    }
    return (
        <DismissKeyboard>
            <KeyboardAvoidingView keyboardVerticalOffset={-20} behavior={'height'} contentContainerStyle={{ flex: 1 }} style={{ flex: 1 }}>
                <ImageBackground source={loginImage} style={styles.background}>
                    <Image source={logoPokemon} style={styles.logoStyle} />
                    <View style={styles.loginBox}>
                        <View style={styles.vTitle}>
                            <Text style={styles.txtTitle}>Bem-vindo</Text>
                            <Text style={styles.txt}>Insira seus dados para acessar</Text>
                        </View>
                        <View style={styles.containerLogin}>
                            <Input customStyle={styles.inputStyle} placeholder="Email" width={'90%'} value={account.email} type="email-address" onChangeText={(txt) => setAccount({ ...account, email: txt })} />
                            <Input customStyle={styles.inputStyle} placeholder="Senha" width={'90%'} password value={account.senha} onChangeText={(txt) => setAccount({ ...account, senha: txt })} />
                            <Button value="Login" customStyle={styles.btnStyle} onPress={login} />
                        </View>
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView >
        </DismissKeyboard>

    )
}