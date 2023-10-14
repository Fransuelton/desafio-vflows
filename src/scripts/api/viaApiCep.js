import $ from "jquery";

const addFluigToast = (title, type, timeout) => {
  FLUIGC.toast({
    title: `${title}`,
    message: "",
    type: `${type}`,
    timeout: `${timeout}`,
  });
};

$(document).ready(function () {
  function limpa_formulário_cep() {
    $("#endereco").val("");
    $("#municipio").val("");
    $("#bairro").val("");
    $("#estado").val("");
    $("#telefone").val("");
    $("#complemento").val("");
  }

  $("#cep").blur(function () {
    var cep = $(this).val().replace(/\D/g, "");

    if (cep != "") {
      var validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        $("#endereco").val("Carregando...");
        $("#municipio").val("Carregando...");
        $("#bairro").val("Carregando...");
        $("#estado").val("Carregando...");
        $("#telefone").val("Carregando...");
        $("#complemento").val("Carregando...");

        $.getJSON(
          "https://viacep.com.br/ws/" + cep + "/json/?callback=?",
          function (dados) {
            if (!("erro" in dados)) {
              $("#endereco").val(dados.logradouro);
              $("#municipio").val(dados.localidade);
              $("#bairro").val(dados.bairro);
              $("#estado").val(dados.uf);
              $("#telefone").val(`(${dados.ddd})`);
              $("#complemento").val(dados.complemento);
            } else {
              limpa_formulário_cep();
              addFluigToast("CEP não encontrado", "warning", "fast");
            }
          }
        );
      } else {
        limpa_formulário_cep();
        addFluigToast(
          "Formato de CEP inválido, Tente novamente.",
          "warning",
          "fast"
        );
      }
    } else {
      limpa_formulário_cep();
    }
  });
});
