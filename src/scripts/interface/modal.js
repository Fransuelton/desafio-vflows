import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

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
                    <p>Razão Social: ${$("#razaosocial").val()}</p>
                    <p>CNPJ: ${$("#cnpj").val()}</p>
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

    setTimeout(function () {
      spinnerContainer.hide();
      contentContainer.show();
    }, 3000);
  });
});
