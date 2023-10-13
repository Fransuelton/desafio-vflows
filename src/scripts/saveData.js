import $ from "jquery";

$(document).ready(function () {
  $("#save-data").click(function () {
    const jsonData = {
      razaoSocial: $("#razaosocial").val(),
      nomeFantasia: $("#nomefantasia").val(),
      cnpj: $("#cnpj").val(),
      inscricaoEstadual: $("#inscricaoestadual").val(),
      inscricaoMunicipal: $("#inscricaomunicipal").val(),
      nomeContato: $("#pessoacontato").val(),
      telefoneContato: $("#telefone").val(),
      emailContato: $("#email").val(),
      produtos: [
        {
          indice: 1,
          descricaoProduto: $("#descricaoproduto").val(),
          unidadeMedida: $("#undmedida").val(),
          qtdeEstoque: $("#qdtdeemestoque").val(),
          valorUnitario: $("#valorunitario").val(),
          valorTotal: $("#valortotal").val(),
        },
      ],
      anexos: [
        {
          indice: 1,
          nomeArquivo: "conteudo-do-arquivo-1",
          blobArquivo: "conteudo-do-arquivo-1",
        },
      ],
    };
    
    console.log(JSON.stringify(jsonData, null, 2));
  });
});
