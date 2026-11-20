let titulos = JSON.parse(localStorage.getItem('titulos')) || [];


// ==========================================
// 1. ATUALIZAR ESTATÍSTICAS
// ==========================================

function atualizarEstatisticas() {

    const total = titulos.length;

    const concluidos = titulos.filter(function(titulo) {
        return titulo.status === 'concluido';
    }).length;

    const andamento = titulos.filter(function(titulo) {
        return titulo.status === 'assistindo' || titulo.status === 'lendo';
    }).length;

    const pausados = titulos.filter(function(titulo) {
        return titulo.status === 'pausado';
    }).length;

    const elementoTotal = document.getElementById('total-titulos');
    const elementoConcluidos = document.getElementById('total-concluidos');
    const elementoAndamento = document.getElementById('total-andamento');
    const elementoPausados = document.getElementById('total-pausados');

    if (elementoTotal) elementoTotal.textContent = total;
    if (elementoConcluidos) elementoConcluidos.textContent = concluidos;
    if (elementoAndamento) elementoAndamento.textContent = andamento;
    if (elementoPausados) elementoPausados.textContent = pausados;
}


// ==========================================
// 2. GRÁFICO DE TIPOS
// ==========================================

function criarGraficoTipos() {

    const animes = titulos.filter(function(titulo) {
        return titulo.tipo === 'anime';
    }).length;

    const mangas = titulos.filter(function(titulo) {
        return titulo.tipo === 'manga';
    }).length;

    const canvas = document.getElementById('grafico-tipos');

    if (!canvas) return;

    new Chart(canvas, {
        type: 'doughnut',

        data: {
            labels: ['Animes', 'Mangás'],

            datasets: [{
                data: [animes, mangas],
                backgroundColor: ['#762F40', '#C47A8B'],
                borderWidth: 0
            }]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}


// ==========================================
// 3. GRÁFICO DE STATUS
// ==========================================

function criarGraficoStatus() {

    const assistindo = titulos.filter(function(titulo) {
        return titulo.status === 'assistindo';
    }).length;

    const lendo = titulos.filter(function(titulo) {
        return titulo.status === 'lendo';
    }).length;

    const concluidos = titulos.filter(function(titulo) {
        return titulo.status === 'concluido';
    }).length;

    const pausados = titulos.filter(function(titulo) {
        return titulo.status === 'pausado';
    }).length;

    const canvas = document.getElementById('grafico-status');

    if (!canvas) return;

    new Chart(canvas, {
        type: 'bar',

        data: {
            labels: ['Assistindo', 'Lendo', 'Concluídos', 'Pausados'],

            datasets: [{
                data: [assistindo, lendo, concluidos, pausados],

                backgroundColor: [
                    '#762F40',
                    '#C47A8B',
                    '#A65D70',
                    '#D9A5AF'
                ],

                borderRadius: 6
            }]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,

            plugins: {
                legend: {
                    display: false
                }
            },

            scales: {
                y: {
                    beginAtZero: true,

                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
}


// ==========================================
// 4. CONTROLE DE EDIÇÃO
// ==========================================

let indiceEdicao = null;


// ==========================================
// 5. ALTERNÂNCIA DE TEMA
// ==========================================

const botaoTema = document.getElementById('theme-toggle');

const temaSalvo = localStorage.getItem('tema');

if (temaSalvo === 'escuro') {
    document.body.classList.add('tema-escuro');
}


function atualizarBotaoTema() {

    const temaEscuro = document.body.classList.contains('tema-escuro');

    if (botaoTema) {

        const iconeTema = botaoTema.querySelector('.theme-icon');
        const textoTema = botaoTema.querySelector('.theme-text');

        if (iconeTema) {
            iconeTema.textContent = temaEscuro ? '☀' : '☾';
        }

        if (textoTema) {
            textoTema.textContent = temaEscuro ? 'Tema Claro' : 'Tema Escuro';
        }
    }
}


atualizarBotaoTema();

if (botaoTema) {

    botaoTema.addEventListener('click', function() {

        document.body.classList.toggle('tema-escuro');

        const temaEscuro = document.body.classList.contains('tema-escuro');

        localStorage.setItem('tema', temaEscuro ? 'escuro' : 'claro');

        atualizarBotaoTema();

    });
}


// ==========================================
// 6. ABRIR E FECHAR O FORMULÁRIO
// ==========================================

const botaoAdicionar = document.getElementById('abrir-formulario');
const formularioContainer = document.getElementById('formulario-container');


// ==========================================
// 7. REFERÊNCIA E CONTROLE DO FORMULÁRIO
// ==========================================

const formularioTitulo = document.getElementById('formulario-titulo');


function cancelarEdicao() {

    formularioTitulo.reset();

    indiceEdicao = null;

    document.getElementById('titulo-formulario').textContent = 'Adicionar título';

    formularioTitulo.querySelector('button[type="submit"]').textContent = 'Adicionar ao catálogo';

    formularioContainer.style.display = 'none';
}


const botaoCancelar = document.getElementById('cancelar-edicao');

if (botaoCancelar) {
    botaoCancelar.addEventListener('click', cancelarEdicao);
}


if (botaoAdicionar && formularioContainer) {

    botaoAdicionar.addEventListener('click', function() {

        if (getComputedStyle(formularioContainer).display === 'none') {

            formularioTitulo.reset();

            indiceEdicao = null;

            document.getElementById('titulo-formulario').textContent = 'Adicionar título';

            formularioTitulo.querySelector('button[type="submit"]').textContent = 'Adicionar ao catálogo';

            formularioContainer.style.display = 'block';

        } else {

            cancelarEdicao();

        }

    });
}


// ==========================================
// 8. FUNÇÃO PARA CRIAR OS CARDS
// ==========================================

function criarCard(novoTitulo) {

    const listaCatalogo = document.querySelector('.catalogo-lista');

    if (!listaCatalogo) return;

    const novoCard = document.createElement('article');
    novoCard.classList.add('anime-card');

    const informacoes = document.createElement('div');
    informacoes.classList.add('anime-info');


    // Nome do título

    const titulo = document.createElement('h3');
    titulo.textContent = novoTitulo.nome;


    // Tipo

    const tipoCard = document.createElement('span');
    tipoCard.classList.add('anime-tipo');

    tipoCard.textContent = novoTitulo.tipo === 'anime' ? 'Anime' : 'Mangá';


    // Status

    const statusCard = document.createElement('span');
    statusCard.classList.add('anime-status');

    const nomesStatus = {
        assistindo: 'Assistindo',
        lendo: 'Lendo',
        concluido: 'Concluído',
        pausado: 'Pausado'
    };

    statusCard.textContent = nomesStatus[novoTitulo.status] || novoTitulo.status;


    // Progresso

    const progressoCard = document.createElement('p');

    progressoCard.textContent =
        novoTitulo.progresso + ' episódios/volumes';


    // Imagem

    if (typeof novoTitulo.imagem === 'string' && novoTitulo.imagem) {

        const capa = document.createElement('img');

        capa.src = novoTitulo.imagem;
        capa.alt = 'Capa de ' + novoTitulo.nome;

        novoCard.appendChild(capa);

    }


    // Reunindo as informações

    informacoes.append(tipoCard, titulo, statusCard, progressoCard);

    novoCard.appendChild(informacoes);


    // Botão excluir

    const botaoExcluir = document.createElement('button');

    botaoExcluir.type = 'button';
    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.classList.add('botao-excluir');


    // Botão editar

    const botaoEditar = document.createElement('button');

    botaoEditar.type = 'button';
    botaoEditar.textContent = 'Editar';
    botaoEditar.classList.add('botao-editar');


    // Evento de edição

    botaoEditar.addEventListener('click', function() {

        indiceEdicao = titulos.indexOf(novoTitulo);

        document.getElementById('titulo-formulario').textContent = 'Editar título';

        formularioTitulo.querySelector('button[type="submit"]').textContent = 'Salvar alterações';

        document.getElementById('nome-titulo').value = novoTitulo.nome;
        document.getElementById('tipo-titulo').value = novoTitulo.tipo;
        document.getElementById('status-titulo').value = novoTitulo.status;
        document.getElementById('progresso-titulo').value = novoTitulo.progresso;

        formularioContainer.style.display = 'block';

    });


    novoCard.appendChild(botaoEditar);
    novoCard.appendChild(botaoExcluir);


    // Evento de exclusão

    botaoExcluir.addEventListener('click', function() {

        if (!confirm('Tem certeza de que deseja excluir este título?')) {
            return;
        }

        const indice = titulos.indexOf(novoTitulo);

        titulos.splice(indice, 1);

        localStorage.setItem('titulos', JSON.stringify(titulos));

        aplicarFiltros();

        atualizarEstatisticas();

    });


    // Adicionando o card ao catálogo

    listaCatalogo.appendChild(novoCard);

}


// ==========================================
// 9. REFERÊNCIAS DOS CONTROLES DO CATÁLOGO
// ==========================================

const campoBusca = document.getElementById('busca-titulo');
const filtroTipo = document.getElementById('filtro-tipo');
const filtroStatus = document.getElementById('filtro-status');
const botaoLimpar = document.getElementById('limpar-filtros');


// ==========================================
// 10. FILTRAR O CATÁLOGO
// ==========================================

function aplicarFiltros() {

    const listaCatalogo = document.querySelector('.catalogo-lista');

    if (!campoBusca || !filtroTipo || !filtroStatus || !listaCatalogo) {
        return;
    }

    const busca = campoBusca.value.toLowerCase();
    const tipo = filtroTipo.value;
    const status = filtroStatus.value;

    const titulosFiltrados = titulos.filter(function(titulo) {

        const correspondeNome = titulo.nome.toLowerCase().includes(busca);
        const correspondeTipo = tipo === 'todos' || titulo.tipo === tipo;
        const correspondeStatus = status === 'todos' || titulo.status === status;

        return correspondeNome && correspondeTipo && correspondeStatus;

    });


    // Controlar a exibição do botão limpar

    if (botaoLimpar) {
        botaoLimpar.hidden = titulos.length === 0 || titulosFiltrados.length > 0;
    }


    listaCatalogo.innerHTML = '';


    // Mensagem de catálogo vazio

    if (titulos.length === 0) {

        const mensagem = document.createElement('p');
        mensagem.classList.add('mensagem-vazia');
        mensagem.textContent = 'Sua coleção ainda está vazia. Que tal adicionar seu primeiro título?';

        listaCatalogo.appendChild(mensagem);

        return;
    }


    // Mensagem de pesquisa sem resultados

    if (titulosFiltrados.length === 0) {

        const mensagem = document.createElement('p');
        mensagem.classList.add('mensagem-vazia');
        mensagem.textContent = 'Não encontramos títulos com esses filtros.';

        listaCatalogo.appendChild(mensagem);

        return;
    }


    // Criar os cards encontrados

    titulosFiltrados.forEach(function(titulo) {
        criarCard(titulo);
    });

}


// ==========================================
// 11. EVENTO DO BOTÃO LIMPAR FILTROS
// ==========================================

if (botaoLimpar) {

    botaoLimpar.addEventListener('click', function() {

        campoBusca.value = '';
        filtroTipo.value = 'todos';
        filtroStatus.value = 'todos';

        aplicarFiltros();

    });

}


// ==========================================
// 12. EVENTOS DE BUSCA E FILTROS
// ==========================================

if (campoBusca) {
    campoBusca.addEventListener('input', aplicarFiltros);
}

if (filtroTipo) {
    filtroTipo.addEventListener('change', aplicarFiltros);
}

if (filtroStatus) {
    filtroStatus.addEventListener('change', aplicarFiltros);
}


// ==========================================
// 13. SALVAR UM TÍTULO
// ==========================================

function salvarTitulo(novoTitulo) {

    if (indiceEdicao !== null) {

        titulos[indiceEdicao] = novoTitulo;

        indiceEdicao = null;

    } else {

        titulos.push(novoTitulo);

    }

    localStorage.setItem('titulos', JSON.stringify(titulos));

    aplicarFiltros();

    atualizarEstatisticas();

    formularioTitulo.reset();

    formularioTitulo.querySelector('button[type="submit"]').textContent = 'Adicionar ao catálogo';

    document.getElementById('titulo-formulario').textContent = 'Adicionar título';

    formularioContainer.style.display = 'none';

}


// ==========================================
// 14. COMPRIMIR IMAGENS
// ==========================================

function comprimirImagem(arquivo) {

    return new Promise(function(resolve, reject) {

        const imagem = new Image();
        const url = URL.createObjectURL(arquivo);

        imagem.onload = function() {

            const limite = 600;

            const escala = Math.min(
                1,
                limite / Math.max(imagem.width, imagem.height)
            );

            const largura = Math.round(imagem.width * escala);
            const altura = Math.round(imagem.height * escala);

            const canvas = document.createElement('canvas');

            canvas.width = largura;
            canvas.height = altura;

            const contexto = canvas.getContext('2d');

            contexto.fillStyle = '#FFFFFF';
            contexto.fillRect(0, 0, largura, altura);

            contexto.drawImage(imagem, 0, 0, largura, altura);

            const imagemComprimida = canvas.toDataURL(
                'image/jpeg',
                0.75
            );

            URL.revokeObjectURL(url);

            resolve(imagemComprimida);

        };

        imagem.onerror = function() {

            URL.revokeObjectURL(url);

            reject(new Error('Não foi possível carregar a imagem.'));

        };

        imagem.src = url;

    });

}


// ==========================================
// 15. ENVIAR O FORMULÁRIO
// ==========================================

if (formularioTitulo) {

    formularioTitulo.addEventListener('submit', function(event) {

        event.preventDefault();


        // Capturando os valores

        const nome = document.getElementById('nome-titulo').value;
        const tipo = document.getElementById('tipo-titulo').value;
        const status = document.getElementById('status-titulo').value;
        const progresso = document.getElementById('progresso-titulo').value;
        const imagem = document.getElementById('imagem-titulo').files[0];


        // Preservando a imagem anterior durante a edição

        const imagemAnterior = indiceEdicao !== null
            ? titulos[indiceEdicao].imagem
            : null;


        // Criando o objeto

        const novoTitulo = {
            nome: nome,
            tipo: tipo,
            status: status,
            progresso: progresso,
            imagem: imagemAnterior
        };


        // Verificando se uma nova imagem foi selecionada

        if (imagem) {

            comprimirImagem(imagem)

                .then(function(imagemComprimida) {

                    novoTitulo.imagem = imagemComprimida;

                    salvarTitulo(novoTitulo);

                })

                .catch(function(erro) {

                    console.error(erro);

                    alert('Não foi possível processar a imagem.');

                });

        } else {

            salvarTitulo(novoTitulo);

        }

    });

}


// ==========================================
// 16. RECUPERAR OS TÍTULOS SALVOS
// ==========================================

const listaCatalogo = document.querySelector('.catalogo-lista');

if (listaCatalogo) {
    aplicarFiltros();
}


// ==========================================
// 17. ATUALIZAR A PÁGINA DE ESTATÍSTICAS
// ==========================================

if (document.getElementById('total-titulos')) {
    atualizarEstatisticas();
}

if (document.getElementById('grafico-tipos')) {
    criarGraficoTipos();
    criarGraficoStatus();
}






