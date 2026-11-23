document.addEventListener("DOMContentLoaded", () => {
  const iconesNavegacao = {
    "index.html": "bi-grid-1x2-fill",
    "inspecoes.html": "bi-clipboard-check",
    "planejamento.html": "bi-calendar3"
  };

  document.querySelectorAll(".app-nav .navbar-nav > .nav-item > .nav-link").forEach((link) => {
    const href = link.getAttribute("href");
    const classeIcone = href === "#" ? "bi-buildings" : iconesNavegacao[href];
    if (!classeIcone || link.querySelector("i")) return;

    const icone = document.createElement("i");
    icone.className = `bi ${classeIcone}`;
    icone.setAttribute("aria-hidden", "true");
    link.prepend(icone, document.createTextNode(" "));
  });

  const usuarioPadrao = {
    nome: "Carlos Henrique",
    iniciais: "CH"
  };

  let usuario = usuarioPadrao;
  try {
    const usuarioSalvo = JSON.parse(localStorage.getItem("fieldopsUsuarioAutenticado"));
    if (usuarioSalvo?.nome && usuarioSalvo?.iniciais) {
      usuario = usuarioSalvo;
    } else {
      try {
        localStorage.setItem("fieldopsUsuarioAutenticado", JSON.stringify(usuarioPadrao));
      } catch {
        // Mantém o usuário padrão quando o navegador bloqueia o armazenamento local.
      }
    }
  } catch {
    try {
      localStorage.setItem("fieldopsUsuarioAutenticado", JSON.stringify(usuarioPadrao));
    } catch {
      // Mantém o usuário padrão quando o navegador bloqueia o armazenamento local.
    }
  }

  const navContainer = document.querySelector(".app-nav .app-container");
  let supervisorChip = document.querySelector(".supervisor-chip");

  if (navContainer && !supervisorChip) {
    supervisorChip = document.createElement("div");
    supervisorChip.className = "supervisor-chip";
    supervisorChip.innerHTML = '<span class="avatar"></span><span class="d-none d-sm-inline nome-supervisor"></span><i class="bi bi-chevron-down small"></i>';
    navContainer.appendChild(supervisorChip);
  }

  if (supervisorChip) {
    const avatar = supervisorChip.querySelector(".avatar");
    const nome = supervisorChip.querySelector(".nome-supervisor")
      || supervisorChip.querySelector("span.d-none.d-sm-inline");
    if (avatar) avatar.textContent = usuario.iniciais;
    if (nome) nome.textContent = usuario.nome;
  }

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
