// Aqui você pode adicionar funcionalidades extras, como monitoramento de cliques

// Exemplo de monitoramento de cliques em links de download
document.querySelectorAll('#download a').forEach(link => {
    link.addEventListener('click', function() {
        console.log(`Link de download clicado: ${link.href}`);
        // Aqui você pode adicionar código para monitorar os cliques (por exemplo, enviar para o Google Analytics)
    });
});

// Aqui você pode adicionar funcionalidades extras, como monitoramento de cliques

// Exemplo de monitoramento de cliques em links de download
document.querySelectorAll('#download a').forEach(link => {
    link.addEventListener('click', function() {
        console.log(`Link de download clicado: ${link.href}`);
        // Aqui você pode adicionar código para monitorar os cliques (por exemplo, enviar para o Google Analytics)
    });
});

// Definindo os textos para cada idioma
const textos = {
    "pt": {
        "title": "Bem-vindo ao Oyana 愛 Desires",
        "description": "Somos uma pequena equipe apaixonada e dedicada a criar algo de qualidade. Nosso objetivo? Desenvolver mecânicas realmente divertidas e uma história que te prenda do início ao fim. Queremos que você se conecte com esse universo e aproveite cada momento.",
        "downloadPC": "Download PC 💻",
        "downloadAndroid": "Download Android 📱"
    },
    "en": {
        "title": "Welcome to Oyana 愛 Desires",
        "description": "We are a small team passionate and dedicated to creating something of quality...",
        "downloadPC": "Download PC 💻",
        "downloadAndroid": "Download Android 📱"
    }
};

// Função para atualizar o idioma
function atualizarIdioma(idioma) {
    // Atualiza o título da página
    document.querySelector("h1").textContent = textos[idioma].title;
    
    // Atualiza o texto da descrição da seção principal
    document.querySelector("section#paginainicial p").textContent = textos[idioma].description;

    // Atualiza os títulos das seções de download
    document.querySelector("section#download h1").textContent = textos[idioma].downloadPC;
    document.querySelectorAll("section#download h1")[1].textContent = textos[idioma].downloadAndroid;

    // Troca a imagem do site (exemplo com a imagem de idioma)
    document.querySelectorAll("img[src='images/english.png']").forEach(img => img.style.display = idioma === "en" ? "inline" : "none");
    document.querySelectorAll("img[src='images/portugues.png']").forEach(img => img.style.display = idioma === "pt" ? "inline" : "none");
}

// Listener para o seletor de idioma
document.getElementById("languageSelector").addEventListener("change", (e) => {
    const idiomaSelecionado = e.target.value;
    atualizarIdioma(idiomaSelecionado);
});
