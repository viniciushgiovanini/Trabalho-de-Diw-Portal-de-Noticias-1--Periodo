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
                ${noticia.content} <a href="${noticia.url}"  target="_blank" >Leia mais ...</a>
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
//http://localhost:5501/

function executaPesquisa() {
    let query = document.getElementById('txtPesquisa').value;
    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    //               https://newsapi.org/v2/everything?q=                    &apiKey=
    xhr.open('GET', `https://newsapi.org/v2/everything?q=${query}&language=pt&apiKey=${API_KEY}`);
    xhr.send();
    h.innerHTML = "Pesquisa";
    h.style.background = 'darkslategray';
}

document.getElementById('btnPesquisa').addEventListener('click', executaPesquisa);

function esportes() {
    
    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=br&category=sports&apiKey=0fce1a4701bc4d1c932d3ea2149442e8`);
    xhr.send();

}


function saude() {

    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=br&category=health&apiKey=0fce1a4701bc4d1c932d3ea2149442e8`);
    xhr.send();    

}

function games() {

    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=br&category=entertainment&apiKey=0fce1a4701bc4d1c932d3ea2149442e8`);
    xhr.send();
    

}


function tech() {

    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=br&category=technology&apiKey=0fce1a4701bc4d1c932d3ea2149442e8`);
    xhr.send();

}