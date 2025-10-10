function updateFavicons() {
  const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const folder = darkMode ? "white" : "blue";
  const favicon = document.getElementById("favicon");

  if (favicon) {
    favicon.href = `assets/favicon/${folder}/32-${folder}.png`;
  }
}

// Atualiza na inicialização
updateFavicons();

// Atualiza automaticamente quando o tema muda
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", updateFavicons);