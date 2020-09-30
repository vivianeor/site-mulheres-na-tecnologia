document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario() {
  if(document.getElementById("nome").value != "" &&
     document.getElementById("email").value != "" &&
     document.getElementById("telefone").value != "" ){
      alert("Pronto! Você receberá no seu email :)")
  }else{
      alert("Por favor, preencha seu nome e email!")
  }
}


