import $ from "jquery";

$(document).ready(function () {
    function limpa_formulário_cep() {
      $("#endereco").val("");
      $("#municipio").val("");
      $("#bairro").val("");
      $("#estado").val("");
      $("#telefone").val("");
    }
  
    $("#cep").blur(function () {
      var cep = $(this).val().replace(/\D/g, "");
  
      if (cep != "") {
        var validacep = /^[0-9]{8}$/;
  
        if (validacep.test(cep)) {
          
          $("#endereco").val("...");
          $("#municipio").val("...");
          $("#bairro").val("...");
          $("#estado").val("...");
          $("#telefone").val("...");
          $("#complemento").val("...")
  
          $.getJSON(
            "https://viacep.com.br/ws/" + cep + "/json/?callback=?",
            function (dados) {
              
              if (!("erro" in dados)) {
  
                $("#endereco").val(dados.logradouro);
                $("#municipio").val(dados.localidade);
                $("#bairro").val(dados.bairro);
                $("#estado").val(dados.uf);
                $("#telefone").val(`(${dados.ddd})`);
                $("#complemento").val(dados.complemento)
  
              } else {
                limpa_formulário_cep();
                alert("CEP não encontrado.");
              }
            }
          );
        } else {
          limpa_formulário_cep();
          alert("Formato de CEP inválido.");
        }
      } else {
        limpa_formulário_cep();
      }
    });
  });