function validarCPF(text) {
    let Soma = 0;
    let resto;
    let validacaoDigitos = false;
    let validacaoDigitos2 = false;

    //CALCULO DO PRIMEIRO DIGITO
    for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(text.substring(i - 1, i)) * (11 - i);
    resto = Soma % 11;

    if (resto < 2) {
        resto = 0
    } else {
        resto = 11 - resto
    }
    resto != parseInt(text.substring(9, 10)) ? validacaoDigitos = false : validacaoDigitos = true;

    //CALCULO DO SEGUNDO DIGITO
    Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(text.substring(i - 1, i)) * (12 - i);
    let Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    Resto != parseInt(text.substring(10, 11)) ? validacaoDigitos2 = false : validacaoDigitos2 = true;

    let validated = false;

    text.length == 11 && validacaoDigitos && validacaoDigitos2 ? validated = true : validated = false;

    return validated
}

function validarEmail(text){
    const rEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return rEmail.test(text);
}

function hasLowerCase(text){
    const reg = /^(?=.*[a-z])/
    return reg.test(text);
}

function hasUpperCase(text){
    const reg = /^(?=.*[A-Z])/
    return reg.test(text);
}

function isNumberInvalid(senha ) {
    var regex = /\d/;
    for (let i = 0; i < senha.length; i++) {
        if (!regex.test(senha[i])) {
            return true
        }
    }
}

export {validarCPF, validarEmail, hasLowerCase, hasUpperCase, isNumberInvalid}