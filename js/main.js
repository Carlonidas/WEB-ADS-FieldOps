document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".modal[id^='modalVisualizar']").forEach((modal) => {
    modal.addEventListener("show.bs.modal", (event) => {
      const data = event.relatedTarget?.dataset || {};
      modal.querySelectorAll("[data-ver]").forEach((campo) => {
        campo.textContent = data[campo.dataset.ver] || "—";
      });
    });
  });

  const excluirModal = document.getElementById("modalExcluir");
  if (excluirModal) {
    excluirModal.addEventListener("show.bs.modal", (event) => {
      const registro = event.relatedTarget?.dataset.registro;
      document.getElementById("excluirRegistro").textContent = registro || "este registro";
    });
  }

  document.querySelectorAll(".navbar-toggler").forEach((toggle) => {
    const menu = document.querySelector(toggle.dataset.bsTarget);
    if (!menu) return;
    menu.addEventListener("shown.bs.collapse", () => toggle.setAttribute("aria-label", "Fechar menu"));
    menu.addEventListener("hidden.bs.collapse", () => toggle.setAttribute("aria-label", "Abrir menu"));
  });

  const evidenciaModal = document.getElementById("modalEvidencia");
  if (evidenciaModal) {
    evidenciaModal.addEventListener("show.bs.modal", (event) => {
      const origem = event.relatedTarget?.dataset || {};
      document.getElementById("imagemEvidencia").src = origem.evidencia || "img/evidencia-quadro-forca.svg";
      document.getElementById("tituloEvidencia").textContent = origem.titulo || "Evidência";
    });
  }
});
