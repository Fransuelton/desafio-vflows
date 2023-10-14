import "./interface/supplierDataForm.js";
import "./interface/products.js";
import "./interface/attachedDocuments.js";
import "./interface/modal.js";

document.querySelector("#first-product-btn").addEventListener("click", () => {
  const addFluigToast = (title, type, timeout) => {
    FLUIGC.toast({
      title: `${title}`,
      message: "",
      type: `${type}`,
      timeout: `${timeout}`,
    });
  };

  addFluigToast("O cadastro precisa de 1 produto no minímo!", "info", "fast");
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
