document.querySelector("#supplier-data-form").innerHTML = `
    <form class="fs-width-900 fs-border fs-border-radius">
        <fieldset>
            <legend class="fs-bg-info fs-color-white fs-md-padding-left">
            Dados do Fornecedor
            </legend>

            <div class="form-group fs-display-flex">

                <div class="col-xs-7">
                    <label for="razaosocial">Razão Social</label>
                    <input type="text" class="form-control" id="razaosocial">
                </div>

                <div class="col-xs-5">
                    <label for="cnpj">CNPJ</label>
                    <input type="number" class="form-control fs-no-spin" id="cnpj">
                </div>

            </div>

            <div class="form-group fs-display-flex">

                <div class="col-xs-7">
                    <label for="nomefantasia">Nome Fantasia</label>
                    <input type="text" class="form-control" id="nomefantasia">
                </div>

                <div class="col-xs-5">
                    <label for="inscricaoestadual">Inscrição Estadual</label>
                    <input type="text" class="form-control" id="inscricaoestadual">
                </div>

            </div>

            <div class="form-group fs-display-flex">

                <div class="col-xs-6">
                    <label for="cep">CEP</label>
                    <input type="number" class="form-control fs-no-spin" id="cep">
                </div>

                <div class="col-md-offset-2 col-xs-6">
                    <label for="inscricaomunicipal">Inscrição Municipal</label>
                    <input type="number" class="form-control fs-no-spin" id="inscricaomunicipal">
                </div>

            </div>

            <div class="form-group fs-display-flex">

                <div class="col-xs-7">
                    <label for="endereco">Endereço</label>
                    <input type="text" class="form-control" id="endereco">
                </div>

                <div class="col-xs-5">
                    <label for="numero">Número</label>
                    <input type="number" class="form-control fs-no-spin" id="numero">
                </div>

            </div>

            <div class="form-group col-xs-12">
                <label for="complemento">Complemento</label>
                <input type="text" class="form-control" id="complemento">
            </div>

            <div class="form-group row fs-justify-content-space-between fs-display-flex">

                <div class="col-xs-4">
                    <label for="bairro">Bairro</label>
                    <input type="text" class="form-control" id="bairro">
                </div>

                <div class="col-xs-4">
                    <label for="municipio">Municipio</label>
                    <input type="text" class="form-control" id="municipio">
                </div>

                <div class="col-xs-3">
                    <label for="estado">Estado</label>
                    <input type="text" class="form-control" id="estado">
                </div>
            </div>

            <div class="form-group row fs-justify-content-space-between fs-display-flex">
                <div class="col-xs-4">
                    <label for="pessoacontato">Nome da Pessoa de Contato</label>
                    <input type="text" class="form-control" id="pessoacontato">
                </div>
                <div class="col-xs-4">
                    <label for="telefone">Telefone</label>
                    <input type="tel" class="form-control" id="telefone">
                </div>
                <div class="col-xs-3">
                    <label for="email">E-mail</label>
                    <input type="email" class="form-control" id="email">
                </div>
            </div>
        </fieldset>
    </form>
`;
