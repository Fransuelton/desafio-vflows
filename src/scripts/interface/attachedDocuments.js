import $ from "jquery";
import removeImage from "../../images/trash.jpg";
import downloadImage from "../../images/eye.jpg";

$(document).ready(function () {
  let documentCount = 1;
  let attachments = [];

  $("#add-document").change(function () {
    const addFluigToast = (title, type, timeout) => {
      FLUIGC.toast({
        title: `${title}`,
        message: "",
        type: `${type}`,
        timeout: `${timeout}`,
      });
    };

    addFluigToast("Novo documento salvo com sucesso!", "success", "fast");

    const files = $(this)[0].files;

    for (let i = 0; i < files.length; i++) {
      const documentName = "Documento em anexo " + documentCount;
      const file = files[i];
      const fileURL = URL.createObjectURL(file);
      const blob = new Blob([file], { type: file.type });

      attachments.push({ name: documentName, blob });

      const newDocument = $(`
        <div class="fs-display-flex fs-align-items-center">
          <button class='removeDocument btn-link'>
            <img src="${removeImage}" title="Excluir Anexo">
          </button>
          <a class="btn-link" href="${fileURL}" download="${documentName}">
            <img src="${downloadImage}" title="Baixar Anexo">
          </a>
          <p class="fs-font-bold fs-text-lg fs-color-black fs-xs-margin">${documentName}</p>
        </div>
      `);

      newDocument.appendTo("#documentRegister");
      documentCount++;

      newDocument.find(".removeDocument").click(function () {
        URL.revokeObjectURL(fileURL);
        attachments = attachments.filter(
          (attachment) => attachment.name !== documentName
        );
        $(this).closest(".fs-display-flex").remove();

        if ($("#documentRegister .fs-display-flex").length === 0) {
          documentCount = 1;
        }
      });
    }

    sessionStorage.setItem("attachments", JSON.stringify(attachments));
  });
});
