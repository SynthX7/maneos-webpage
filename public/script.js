//-----------------------------//
//      Estrutura padrão       //
//-----------------------------//
const head = document.getElementById("head");

// Meta charset
let metaCharset = document.createElement("meta");
metaCharset.setAttribute("charset", "UTF-8");
head.appendChild(metaCharset);

// Meta viewport
let metaViewport = document.createElement("meta");
metaViewport.name = "viewport";
metaViewport.content =
  "width=device-width, initial-scale=1.0, viewport-fit=cover";
head.appendChild(metaViewport);

// Estilos
let style1 = document.createElement("link");
style1.rel = "stylesheet";
style1.href = "styles/style.css";
head.appendChild(style1);

let style2 = document.createElement("link");
style2.rel = "stylesheet";
style2.href =
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
head.appendChild(style2);

// Favicon
let favicon = document.createElement("link");
favicon.id = "favicon";
favicon.rel = "icon";
favicon.type = "image/png";
head.appendChild(favicon);

// Título
let title = document.createElement("title");
title.textContent = "ManeOS";
head.appendChild(title);

//-----------------------------//
//   Atualizador de favicon    //
//-----------------------------//
function updateFavicons() {
  const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const folder = darkMode ? "white" : "blue";
  const favicon = document.getElementById("favicon");

  if (favicon) {
    favicon.href = `assets/favicon/${folder}/32.png`;
  }
}

// Atualiza na inicialização
updateFavicons();

// Atualiza automaticamente quando o tema muda
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", updateFavicons);

//-----------------------------//
//       Botão de copiar       //
//-----------------------------//
function copy(btn, text) {
  btn.addEventListener("click", () => {
    navigator.clipboard
      .writeText(text.value)
      .then(() => {
        // Feedback visual
        btn.textContent = "Copiado!";
        setTimeout(() => {
          btn.innerHTML = '<i class="fa fa-copy"></i> Copiar';
        }, 1500);
      })
      .catch((err) => console.error("Erro ao copiar: ", err));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const pixBtn = document.getElementById("copyPix");
  const pixText = document.getElementById("pixText");

  const btcBtn = document.getElementById("copyBtc");
  const btcText = document.getElementById("btcText");

  const ethBtn = document.getElementById("copyEth");
  const ethText = document.getElementById("ethText");

  if (pixBtn && pixText) copy(pixBtn, pixText);
  if (btcBtn && btcText) copy(btcBtn, btcText);
  if (ethBtn && ethText) copy(ethBtn, ethText);
});

//-----------------------------//
//            Menu             //
//-----------------------------//
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const closeMenu = document.querySelector(".close-menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("open");

  if (menu.classList.contains("open")) {
    menu.classList.remove("fa-bars");
    document.body.style.overflow = "hidden"; // trava o scroll
  } else {
    menu.classList.add("fa-bars");
    document.body.style.overflow = ""; // libera o scroll
  }
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("open");
  menu.classList.add("fa-bars");
  document.body.style.overflow = ""; // libera o scroll
});



//-----------------------------//
//           Header            //
//-----------------------------//

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 80) {
      header.classList.add("hidden");
    } else {
      header.classList.remove("hidden");
    }

    lastScroll = currentScroll;
  });
});
