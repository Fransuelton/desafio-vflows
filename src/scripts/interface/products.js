import $ from "jquery";
import removeImage from "../../images/trash.jpg";
import productBoxImage from "../../images/product-box.png";

$(document).ready(function () {
  let productCount = 2;

  $("#add-product").click(function () {
    const productName = "Produto - " + productCount;

    const newProduct = $(`

    <section class='product fs-display-flex fs-justify-content-center fs-align-items-center fs-lg-margin-bottom'>

      <button class='removeProduct btn-link'>
        <img src="${removeImage}" title="Excluir Produto">
      </button>
      
      <section class="fs-border fs-border-radius fs-md-margin-right">
      <legend class="fs-bg-white fs-no-border-bottom fs-md-padding-left">${productName}</legend>
        <fieldset class="fs-display-flex fs-justify-content-center fs-align-items-center ">
          <img src="${productBoxImage}" width="100px" height="100px">

          <div class="form-group">
            <div class="col-xs-12 fs-sm-margin-bottom">
              <label for="descricaoproduto">Produto</label>
              <input type="text" class="form-control" id="descricaoproduto" required>
            </div>

            <div class="col-xs-3">
              <label for="undmedida">UND. Medida</label>
              <input type="number" class="form-control fs-no-spin" id="undmedida" required>
            </div>

            <div class="col-xs-3">
              <label for="qdtdeemestoque">QDTDE. em Estoque</label>
              <input type="number" class="form-control qdtdeemestoque fs-no-spin" id="qdtdeemestoque" required>
            </div>

            <div class="col-xs-3">
              <label for="valorunitario">Valor Unitário</label>
              <input type="number" class="form-control valorunitario fs-no-spin" id="valorunitario" required>
            </div>

            <div class="col-xs-3">
              <label for="valortotal">Valor Total</label>
              <input type="number" class="form-control valortotal fs-no-spin" id="valortotal" readonly>
            </div>
            
          </div>
        </fieldset>
      </section>   
    </section>
`);

    const addFluigToast = (title, type, timeout) => {
      FLUIGC.toast({
        title: `${title}`,
        message: "",
        type: `${type}`,
        timeout: `${timeout}`,
      });
    };

    addFluigToast("Novo Produto adicionado!", "success", "fast");

    newProduct.appendTo("#productRegister");
    productCount++;

    newProduct.find(".removeProduct").click(function () {
      $(this).closest(".product").remove();

      if (productCount > 2) {
        productCount--;
      }
    });

    $(document).ready(function () {
      $(".valorunitario, .qdtdeemestoque").on("input", function () {
        $(".valorunitario").each(function (index) {
          var unitValue = parseFloat($(this).val());
          var stockQuantity = parseFloat($(".qdtdeemestoque").eq(index).val());

          if (!isNaN(unitValue) && !isNaN(stockQuantity)) {
            var totalValue = unitValue * stockQuantity;
            $(".valortotal").eq(index).val(totalValue.toFixed(2));
          } else {
            $(".valortotal").eq(index).val("");
          }
        });
      });
    });
  });
});
