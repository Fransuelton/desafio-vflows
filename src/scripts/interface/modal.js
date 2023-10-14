import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { saveData } from "../services/saveData";

$(document).ready(function () {
  let modalCreated = false;

  $("#save-data").click(function () {
    if (!modalCreated) {
      const modal = $(`
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">VFlows - Cadastro de Fornecedores e Produtos</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div id="spinner-container">
                    <div class="d-flex justify-content-center">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
                <div id="content-container" style="display: none;">
                    <h6>Fornecedor Cadastrado com sucesso!</h2> 
                    <p>Razão Social: <span id="razaosocial-value"></span></p>
                    <p>CNPJ: <span id="cnpj-value"></span></p>
                    <p>Data de Cadastro: <span id="data-cadastro"></span></p>
                    
                    <p>As demais informações foram encaminhadas para o console do seu navegador.</p>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>   
    </div>
          `);

      modal.appendTo("#modal-area");

      modalCreated = true;
    }

    const spinnerContainer = $("#spinner-container");
    const contentContainer = $("#content-container");

    spinnerContainer.show();
    contentContainer.hide();

    const dataAtual = new Date();
    const dataFormatada = dataAtual.toLocaleDateString();

    $("#data-cadastro").text(dataFormatada);
    $("#razaosocial-value").text($("#razaosocial").val());
    $("#cnpj-value").text($("#cnpj").val());

    setTimeout(function () {
      spinnerContainer.hide();
      contentContainer.show();

      saveData();

      $("#razaosocial").val("");
      $("#nomefantasia").val("");
      $("#cep").val("");
      $("#cnpj").val("");
      $("#endereco").val("");
      $("#complemento").val("");
      $("#bairro").val("");
      $("#estado").val("");
      $("#municipio").val("");
      $("#numero").val("");
      $("#estado").val("");
      $("#inscricaoestadual").val("");
      $("#inscricaomunicipal").val("");
      $("#pessoacontato").val("");
      $("#telefone").val("");
      $("#email").val("");
      $("#descricaoproduto").val("");
      $("#undmedida").val("");
      $("#qdtdeemestoque").val("");
      $("#valorunitario").val("");
      $("#valortotal").val("");
    }, 3000);
  });
});
