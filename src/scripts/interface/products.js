import $ from "jquery";
import removeImage from "../../images/trash.jpg";
import productBoxImage from "../../images/product-box.png";

$(document).ready(function () {
  let productCount = 1;

  $("#add-product").click(function () {
    const productName = "Produto - " + productCount;

    const newProduct = $(`

    <div class='product fs-display-flex fs-lg-margin-bottom'>

      <button class='removeProduct btn-link'>
        <img src="${removeImage}" title="Excluir Produto">
      </button>
      
      <form class="fs-border fs-border-radius fs-md-margin-right">
        <fieldset class="fs-display-flex">
          <legend class="fs-bg-white fs-no-border-bottom fs-md-padding-left">${productName}</legend>

          <img src="${productBoxImage}" class="fs-display-flex fs-md-margin-right">

          <div class="form-group">
            <div>
              <label for="descricaoproduto">Produto</label>
              <input type="text" class="form-control" id="descricaoproduto">
            </div>

            <div class="col-xs-3">
              <label for="pessoacontato">UND. Medida</label>
              <input type="text" class="form-control" id="pessoacontato">
            </div>

            <div class="col-xs-3">
              <label for="qdtdeemestoque">QDTDE. em Estoque</label>
              <input type="tel" class="form-control" id="qdtdeemestoque">
            </div>

            <div class="col-xs-3">
              <label for="valorunitario">Valor Unitário</label>
              <input type="email" class="form-control" id="valorunitario">
            </div>

            <div class="col-xs-3">
              <label for="valortotal">Valor Total</label>
              <input type="email" class="form-control" id="valortotal">
            </div>
            
          </div>
        </fieldset>
      </form>   
    </div>
`);

    newProduct.appendTo("#productRegister");
    productCount++;

    newProduct.find(".removeProduct").click(function () {
      $(this).closest(".product").remove();

      if (productCount > 1) {
        productCount--;
      }
    });
  });
});
