import $ from "jquery";
import removeImage from "../../images/trash.jpg";
import viewImage from "../../images/eye.jpg";

$(document).ready(function () {
  let documentCount = 1;

  $("#add-document").click(function () {
    const documentName = "Documento em anexo " + documentCount;

    const newDocument = $(`
    <div class="fs-display-flex fs-align-items-center">

      <button class='removeDocument btn-link'>
        <img src="${removeImage}" title="Excluir Anexo">
      </button>

      <button class="btn-link">
        <img src="${viewImage}" title="Visualizar Anexo">
      </button>

        <p class="fs-font-bold fs-text-lg fs-color-black">${documentName}</p>
        
    </div>`);
    
    newDocument.appendTo("#documentRegister");
    documentCount++;

    newDocument.find(".removeDocument").click(function () {
      $(this).closest(".fs-display-flex").remove();

      if ($("#documentRegister .fs-display-flex").length === 0) {
        documentCount = 1;
      }
    });
  });
});
