function validarCPF(cpf){
    if(cpf.length !== 11){
      return {valido:false, texto:"CPF deve ter 11 dígitos."}
    }else{
      return {valido:true, texto:""}
    }
}

function validarSenha(senha){
    if(senha.length < 4 || senha.length > 72){
      return {valido:false, texto:"Senha deve conter entre 4 e 72 dígitos."}
    }else{
      return {valido:true, texto:""}
    }
}

function validarCEP(cep){
    if(cep.length !== 8){
        return {valido:false, texto:"CEP deve conter 8 dígitos e apenas números."}
    }else{
        return {valido:true, texto:""}
    }
}

function validarNome(nome){
    if(nome.length < 4){
        return {valido:false, texto:"Nome deve conter pelo menos 4 dígitos."}
    }else{
        return {valido:true, texto:""}
    }
}

export {validarCPF, validarSenha, validarCEP, validarNome};