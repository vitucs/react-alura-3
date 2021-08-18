import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import 'fontsource-roboto';
import { validarCEP, validarCPF, validarSenha, validarNome} from "./models/cadastro";
import {Container, Typography } from "@material-ui/core"
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";
class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Formulário</Typography>
        <ValidacoesCadastro.Provider value={{cpf:validarCPF, senha:validarSenha, cep:validarCEP, nome:validarNome}}>
          <FormularioCadastro aoEnviar={aoEnviarForm}/>
        </ValidacoesCadastro.Provider>
        
      </Container>
    );
  }
}

function aoEnviarForm(dados){
  console.log(dados);
}

export default App;
