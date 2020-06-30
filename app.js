const API_KEY = 'a7489b8171404266b5002ea6a6bd5b81';

function exibeNoticias() {
    let divTela = document.getElementById('tela');
    let texto = '';

    // Montar texto HTML das noticias
    let dados = JSON.parse(this.responseText);
    for (i = 0; i < 3; i++) {
        let noticia = dados.articles[i];
        let data = new Date(noticia.publishedAt);

        texto = texto + `
            <div class="box-noticia">
                <img src="${noticia.urlToImage}" alt="">
                <span class="titulo">${noticia.title}</span><br>
                <span class="creditos">${data.toLocaleDateString()} - 
                    ${noticia.source.name} - 
                    ${noticia.author}</span><br>
                <span class="text">
                ${noticia.content} <a href="${noticia.url}">Leia mais ...</a>
                </span>
            </div>            
        `;
    };

    // Preencher a DIV com o texto HTML
    divTela.innerHTML = texto;
}

function destaque() {

    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=br&apiKey=${API_KEY}`);
    xhr.send();

}

document.getElementById('btnPesquisa').addEventListener('click', executaPesquisa);