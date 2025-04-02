function validarCpf(cpfText) {
    let cpf = cpfText.replaceAll(".", "").replaceAll("-", "");

    if (cpf.length != 11) {
        return false;
    }

    let soma = 0, resto;

    //Valida primeiro dígito
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.charAt(9))) {
        return false;
    }

    //Valida segundo dígito
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.charAt(10))) {
        return false;
    }

    //Valida CPFs com caracteres iguais. Ex.: 999.999.999-99
    for (let algarismo = 0; algarismo < 10; algarismo++) {
        let igual = true;
        
        for (let index = 0; index < 9; index++) {
            if (algarismo != parseInt(cpf.charAt(index))) {
                igual = false;
                break;
            }
        }

        //Encontrou um CPF com todos os algarismos iguais
        if (igual) {
            return false;
        }
    }

    return true;
}

function processarForm(event) {
    event.preventDefault();

    let inputCpf = $("#input-cpf");
    let cpfText = inputCpf.val();
    let resultado = validarCpf(cpfText);

    if (resultado) {
        inputCpf.removeClass("is-invalid").addClass("is-valid");
    } else {
        inputCpf.removeClass("is-valid").addClass("is-invalid");
    }
}

function inicializarPagina() {
    $('#input-cpf').mask('000.000.000-00');
    $('#form-cpf').submit(processarForm);
}

$(document).ready(inicializarPagina);