import "../api/viaApiCep";

document.querySelector("#supplier-data-form").innerHTML = `
    <form class="fs-width-900 fs-border fs-border-radius">
        <fieldset>
            <legend class="fs-bg-info fs-color-white fs-md-padding-left">
            Dados do Fornecedor
            </legend>

            <div class="form-group fs-display-flex">

                <div class="col-xs-7">
                    <label for="razaosocial">Razão Social</label>
                    <input type="text" class="form-control" id="razaosocial" required>
                </div>

                <div class="col-xs-5">
                    <label for="cnpj">CNPJ</label>
                    <input type="number" class="form-control fs-no-spin" id="cnpj" required>
                </div>

            </div>

            <div class="form-group fs-display-flex">

                <div class="col-xs-7">
                    <label for="nomefantasia">Nome Fantasia</label>
                    <input type="text" class="form-control" id="nomefantasia" required>
                </div>

                <div class="col-xs-5">
                    <label for="inscricaoestadual">Inscrição Estadual</label>
                    <input type="text" class="form-control" id="inscricaoestadual">
                </div>

            </div>

            <div class="form-group fs-display-flex">

                <div class="col-xs-6">
                    <label for="cep">CEP</label>
                    <input type="number" class="form-control fs-no-spin" id="cep" required>
                </div>

                <div class="col-md-offset-2 col-xs-6">
                    <label for="inscricaomunicipal">Inscrição Municipal</label>
                    <input type="number" class="form-control fs-no-spin" id="inscricaomunicipal">
                </div>

            </div>

            <div class="form-group fs-display-flex">

                <div class="col-xs-7">
                    <label for="endereco">Endereço</label>
                    <input type="text" class="form-control" id="endereco" required>
                </div>

                <div class="col-xs-5">
                    <label for="numero">Número</label>
                    <input type="number" class="form-control fs-no-spin" id="numero" required>
                </div>

            </div>

            <div class="form-group col-xs-12">
                <label for="complemento">Complemento</label>
                <input type="text" class="form-control" id="complemento" required>
            </div>

            <div class="form-group row fs-justify-content-space-between fs-display-flex">

                <div class="col-xs-4">
                    <label for="bairro">Bairro</label>
                    <input type="text" class="form-control" id="bairro" required>
                </div>

                <div class="col-xs-4">
                    <label for="municipio">Municipio</label>
                    <input type="text" class="form-control" id="municipio" required>
                </div>

                <div class="col-xs-3">
                    <label for="estado">Estado</label>
                    <input type="text" class="form-control" id="estado" required>
                </div>
            </div>

            <div class="form-group row fs-justify-content-space-between fs-display-flex">
                <div class="col-xs-4">
                    <label for="pessoacontato">Nome da Pessoa de Contato</label>
                    <input type="text" class="form-control" id="pessoacontato" required>
                </div>
                <div class="col-xs-4">
                    <label for="telefone">Telefone</label>
                    <input type="tel" class="form-control" id="telefone" required>
                </div>
                <div class="col-xs-3">
                    <label for="email">E-mail</label>
                    <input type="email" class="form-control" id="email" required>
                </div>
            </div>
        </fieldset>
    </form>
`;

document.getElementById("telefone").addEventListener("input", function (e) {
  var input = e.target.value.replace(/\D/g, "");

  var formatted = "";

  if (input.length > 0) {
    if (input.length <= 2) {
      formatted = "(" + input;
    } else if (input.length <= 6) {
      formatted = "(" + input.substring(0, 2) + ") " + input.substring(2);
    } else if (input.length <= 10) {
      formatted =
        "(" +
        input.substring(0, 2) +
        ") " +
        input.substring(2, 6) +
        "-" +
        input.substring(6);
    } else {
      formatted =
        "(" +
        input.substring(0, 2) +
        ") " +
        input.substring(2, 7) +
        "-" +
        input.substring(7, 11);
    }
  }

  e.target.value = formatted;
});
