function updateFavicons() {
    
    // Primeiro verifica se a media query de esquema de cor do CSS é verdadeira
    // Se retornar dark, .matches dá como verdadeiro. Mas se retornar light, .matches dá como falso
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Se darkmode = true, white; senão, blue.
    const folder = darkMode ? 'white' : 'blue';

    // Pega os favicons pelo id
    const favicons = document.getElementById(`favicon`);

    // Se os favicons existirem, ele retorna o caminho
    if(favicons) favicons.href = `assets/favicon/${folder}/32.png`;
}

// Atualiza ao carregar a página
updateFavicons();

// Atualiza se o usuário mudar o tema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicons);
