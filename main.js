let titulos = JSON.parse(localStorage.getItem('titulos')) || [];


// Adicionar data aos títulos antigos que ainda não possuem esse registro

let titulosAtualizados = false;

titulos.forEach(function(titulo, indice) {

    if (typeof titulo.dataAdicao !== 'number') {

        titulo.dataAdicao = indice;

        titulosAtualizados = true;

    }

});

if (titulosAtualizados) {
    localStorage.setItem('titulos', JSON.stringify(titulos));
}

const traducoes = {
    'pt-br': {
        // Menu e tema
        inicio: 'Início',
        catalogo: 'Catálogo',
        estatisticas: 'Estatísticas',
        temaClaro: 'Tema Claro',
        temaEscuro: 'Tema Escuro',

        // Página inicial
        fraseDestaque: 'SEU ESPAÇO PESSOAL',
        tituloPrincipal: 'Toda história tem seu lugar.',
        descricaoPrincipal: 'Organize seus animes e mangás favoritos, acompanhe sua jornada e registre as histórias que marcaram você.',
        textoConvite: 'Pronto para iniciar sua próxima aventura?',
        botaoExplorar: 'Explorar catálogo →',
        fraseRodape: 'Histórias que merecem ser guardadas.',
        feitoComAmor: 'Feito com amor.',

        // Catálogo
        tituloCatalogo: 'Meu Catálogo',
        descricaoCatalogo: 'Suas histórias favoritas, reunidas em um só lugar.',
        totalTitulos: 'Total de títulos',
        concluidos: 'Concluídos',
        emAndamento: 'Em andamento',
        adicionarTitulo: '+ Adicionar título',
        adicionarTituloFormulario: 'Adicionar título',
        nomeTitulo: 'Nome do título',
        exemploTitulo: 'Ex: Frieren e a Jornada para o Além',
        tipo: 'Tipo',
        status: 'Status',
        selecione: 'Selecione',
        anime: 'Anime',
        manga: 'Mangá',
        assistindo: 'Assistindo',
        lendo: 'Lendo',
        concluido: 'Concluído',
        pausado: 'Pausado',
        progresso: 'Progresso',
        placeholderProgresso: 'Quantidade de episódios ou volumes',
        capa: 'Capa',
        adicionarAoCatalogo: 'Adicionar ao catálogo',
        cancelar: 'Cancelar',
        buscarTitulo: 'Buscar título...',
        ordenacaoRecentes: 'Adicionados recentemente',
        ordenacaoAntigos: 'Mais antigos primeiro',
        ordenacaoAZ: 'Nome (A–Z)',
        ordenacaoZA: 'Nome (Z–A)',
        todos: 'Todos',
        todosStatus: 'Todos os status',
        limparFiltros: 'Limpar filtros',
        excluir: 'Excluir',
        editar: 'Editar',
        editarTitulo: 'Editar título',
        salvarAlteracoes: 'Salvar alterações',
        confirmarExclusao: 'Tem certeza de que deseja excluir este título?',
        episodiosVolumes: 'episódios/volumes',
        capaDe: 'Capa de',
        mensagemCatalogoVazio: 'Sua coleção ainda está vazia. Que tal adicionar seu primeiro título?',
        mensagemSemResultados: 'Não encontramos títulos com esses filtros.',
        erroImagem: 'Não foi possível processar a imagem.',
        tituloPaginaEstatisticas: 'Estatísticas — SHIORI Notes',
        fraseEstatisticas: 'SUA JORNADA',
        tituloEstatisticas: 'Suas estatísticas',
        descricaoEstatisticas: 'Acompanhe sua coleção e veja como suas histórias estão evoluindo.',
        pausados: 'Pausados',
        minhaColecao: 'Minha coleção',
        distribuicaoColecao: 'Distribuição entre animes e mangás.',
        statusTitulos: 'Status dos títulos',
        andamentoColecao: 'Acompanhe o andamento da sua coleção.',
        animes: 'Animes',
        mangas: 'Mangás',
        assistindoGrafico: 'Assistindo',
        lendoGrafico: 'Lendo',
        concluidosGrafico: 'Concluídos',
        pausadosGrafico: 'Pausados'
    },

    'en': {
        // Menu e tema
        inicio: 'Home',
        catalogo: 'Catalog',
        estatisticas: 'Statistics',
        temaClaro: 'Light Theme',
        temaEscuro: 'Dark Theme',

        // Página inicial
        fraseDestaque: 'YOUR PERSONAL SPACE',
        tituloPrincipal: 'Every story has its place.',
        descricaoPrincipal: 'Organize your favorite anime and manga, follow your journey, and keep track of the stories that left a mark on you.',
        textoConvite: 'Ready to start your next adventure?',
        botaoExplorar: 'Explore catalog →',
        fraseRodape: 'Stories worth keeping.',
        feitoComAmor: 'Made with love.',

        // Catálogo
        tituloCatalogo: 'My Catalog',
        descricaoCatalogo: 'Your favorite stories, gathered in one place.',
        totalTitulos: 'Total titles',
        concluidos: 'Completed',
        emAndamento: 'In progress',
        adicionarTitulo: '+ Add title',
        adicionarTituloFormulario: 'Add title',
        nomeTitulo: 'Title name',
        exemploTitulo: 'E.g. Frieren: Beyond Journey’s End',
        tipo: 'Type',
        status: 'Status',
        selecione: 'Select',
        anime: 'Anime',
        manga: 'Manga',
        assistindo: 'Watching',
        lendo: 'Reading',
        concluido: 'Completed',
        pausado: 'On hold',
        progresso: 'Progress',
        placeholderProgresso: 'Number of episodes or volumes',
        capa: 'Cover',
        adicionarAoCatalogo: 'Add to catalog',
        cancelar: 'Cancel',
        buscarTitulo: 'Search title...',
        ordenacaoRecentes: 'Recently added',
        ordenacaoAntigos: 'Oldest first',
        ordenacaoAZ: 'Name (A–Z)',
        ordenacaoZA: 'Name (Z–A)',
        todos: 'All',
        todosStatus: 'All statuses',
        limparFiltros: 'Clear filters',
        excluir: 'Delete',
        editar: 'Edit',
        editarTitulo: 'Edit title',
        salvarAlteracoes: 'Save changes',
        confirmarExclusao: 'Are you sure you want to delete this title?',
        episodiosVolumes: 'episodes/volumes',
        capaDe: 'Cover of',
        mensagemCatalogoVazio: 'Your collection is still empty. How about adding your first title?',
        mensagemSemResultados: 'No titles were found with these filters.',
        erroImagem: 'Unable to process the image.',
        tituloPaginaEstatisticas: 'Statistics — SHIORI Notes',
        fraseEstatisticas: 'YOUR JOURNEY',
        tituloEstatisticas: 'Your statistics',
        descricaoEstatisticas: 'Track your collection and see how your stories are progressing.',
        pausados: 'On hold',
        minhaColecao: 'My collection',
        distribuicaoColecao: 'Distribution between anime and manga.',
        statusTitulos: 'Title statuses',
        andamentoColecao: 'Track the progress of your collection.',
        animes: 'Anime',
        mangas: 'Manga',
        assistindoGrafico: 'Watching',
        lendoGrafico: 'Reading',
        concluidosGrafico: 'Completed',
        pausadosGrafico: 'On hold'
    }
};

// Idioma salvo

let idiomaAtual = localStorage.getItem('idioma') || 'pt-br';


// Aplicar idioma ao documento
function aplicarIdioma() {

    document.documentElement.lang = idiomaAtual;

    const textos = traducoes[idiomaAtual];

    // Elementos com tradução automática
    const elementosTraduzidos = document.querySelectorAll('[data-i18n]');

    elementosTraduzidos.forEach(function(elemento) {

        const chave = elemento.dataset.i18n;

        if (textos[chave]) {
            elemento.textContent = textos[chave];
        }

    });

    // Traduzir placeholders
    const elementosPlaceholder = document.querySelectorAll('[data-i18n-placeholder]');

    elementosPlaceholder.forEach(function(elemento) {

        const chave = elemento.dataset.i18nPlaceholder;

        if (textos[chave]) {
            elemento.placeholder = textos[chave];
        }

    });

    // Menu de navegação
    const linksMenu = document.querySelectorAll('nav a');

    if (linksMenu[0]) linksMenu[0].textContent = textos.inicio;
    if (linksMenu[1]) linksMenu[1].textContent = textos.catalogo;
    if (linksMenu[2]) linksMenu[2].textContent = textos.estatisticas;

    // Botão de idioma
    const botaoIdioma = document.getElementById('language-toggle');

    if (botaoIdioma) {
        botaoIdioma.textContent = idiomaAtual === 'pt-br' ? 'EN' : 'PT-BR';
    }

    // Atualizar botão de tema
    atualizarBotaoTema();
    atualizarTextoFormulario();

}

// Atualizar textos do formulário conforme o idioma

function atualizarTextoFormulario() {

    const formulario = document.getElementById('formulario-titulo');

    if (!formulario) return;

    const textos = traducoes[idiomaAtual];

    const tituloFormulario = document.getElementById('titulo-formulario');
    const botaoEnviar = formulario.querySelector('button[type="submit"]');

    if (indiceEdicao !== null) {

        tituloFormulario.textContent = textos.editarTitulo;
        botaoEnviar.textContent = textos.salvarAlteracoes;

    } else {

        tituloFormulario.textContent = textos.adicionarTituloFormulario;
        botaoEnviar.textContent = textos.adicionarAoCatalogo;

    }
}

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


let graficoTipos = null;
let graficoStatus = null; 


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

    // Evita criar uma nova instância sobre um gráfico existente
    if (graficoTipos) {
        graficoTipos.destroy();
    }

    const textos = traducoes[idiomaAtual];

    graficoTipos = new Chart(canvas, {
        type: 'doughnut',

        data: {
            labels: [textos.animes, textos.mangas],

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

    // Evita criar uma nova instância sobre um gráfico existente
    if (graficoStatus) {
        graficoStatus.destroy();
    }

    const textos = traducoes[idiomaAtual];

    graficoStatus = new Chart(canvas, {
        type: 'bar',

        data: {
            labels: [
                textos.assistindoGrafico,
                textos.lendoGrafico,
                textos.concluidosGrafico,
                textos.pausadosGrafico
            ],

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
            textoTema.textContent = temaEscuro
    ? traducoes[idiomaAtual].temaClaro
    : traducoes[idiomaAtual].temaEscuro;
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

// Alternância de idioma

const botaoIdioma = document.getElementById('language-toggle');

if (botaoIdioma) {

    botaoIdioma.addEventListener('click', function() {

        idiomaAtual = idiomaAtual === 'pt-br' ? 'en' : 'pt-br';

        localStorage.setItem('idioma', idiomaAtual);

        aplicarIdioma();


        aplicarFiltros();

        if (document.getElementById('grafico-tipos')) {
    criarGraficoTipos();
    criarGraficoStatus();
}

    });

}

// Aplicar idioma salvo ao abrir a página

aplicarIdioma();


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

    const textos = traducoes[idiomaAtual];

    document.getElementById('titulo-formulario').textContent = textos.adicionarTituloFormulario;

    formularioTitulo.querySelector('button[type="submit"]').textContent = textos.adicionarAoCatalogo;

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

            const textos = traducoes[idiomaAtual];

            document.getElementById('titulo-formulario').textContent = textos.adicionarTituloFormulario;

            formularioTitulo.querySelector('button[type="submit"]').textContent = textos.adicionarAoCatalogo;

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

    // Textos do idioma atual
    const textos = traducoes[idiomaAtual];

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

    tipoCard.textContent = novoTitulo.tipo === 'anime'
        ? textos.anime
        : textos.manga;


    // Status
    const statusCard = document.createElement('span');
    statusCard.classList.add('anime-status');

    const nomesStatus = {
        assistindo: textos.assistindo,
        lendo: textos.lendo,
        concluido: textos.concluido,
        pausado: textos.pausado
    };

    statusCard.textContent = nomesStatus[novoTitulo.status] || novoTitulo.status;


    // Progresso
    const progressoCard = document.createElement('p');

    progressoCard.textContent =
        novoTitulo.progresso + ' ' + textos.episodiosVolumes;


    // Imagem
    if (typeof novoTitulo.imagem === 'string' && novoTitulo.imagem) {

        const capa = document.createElement('img');

        capa.src = novoTitulo.imagem;
        capa.alt = textos.capaDe + ' ' + novoTitulo.nome;

        novoCard.appendChild(capa);

    }


    // Reunindo as informações
    informacoes.append(tipoCard, titulo, statusCard, progressoCard);

    novoCard.appendChild(informacoes);


    // Botão excluir
    const botaoExcluir = document.createElement('button');

    botaoExcluir.type = 'button';
    botaoExcluir.textContent = textos.excluir;
    botaoExcluir.classList.add('botao-excluir');


    // Botão editar
    const botaoEditar = document.createElement('button');

    botaoEditar.type = 'button';
    botaoEditar.textContent = textos.editar;
    botaoEditar.classList.add('botao-editar');


    // Evento de edição
    botaoEditar.addEventListener('click', function() {

        indiceEdicao = titulos.indexOf(novoTitulo);

        document.getElementById('titulo-formulario').textContent = textos.editarTitulo;

        formularioTitulo.querySelector('button[type="submit"]').textContent = textos.salvarAlteracoes;

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

        if (!confirm(textos.confirmarExclusao)) {
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
const campoOrdenacao = document.getElementById('ordenar-titulos');
const botaoLimpar = document.getElementById('limpar-filtros');


// ==========================================
// 10. FILTRAR O CATÁLOGO
// ==========================================


function aplicarFiltros() {

    const listaCatalogo = document.querySelector('.catalogo-lista');

    if (!campoBusca || !filtroTipo || !filtroStatus || !listaCatalogo) {
        return;
    }

    const textos = traducoes[idiomaAtual];

    const busca = campoBusca.value.toLowerCase();
    const tipo = filtroTipo.value;
    const status = filtroStatus.value;

    const titulosFiltrados = titulos.filter(function(titulo) {

        const correspondeNome = titulo.nome.toLowerCase().includes(busca);
        const correspondeTipo = tipo === 'todos' || titulo.tipo === tipo;
        const correspondeStatus = status === 'todos' || titulo.status === status;

        return correspondeNome && correspondeTipo && correspondeStatus;

    });


    // Ordenar os títulos

    const ordem = campoOrdenacao ? campoOrdenacao.value : 'recentes';

    titulosFiltrados.sort(function(a, b) {

        switch (ordem) {

            case 'recentes':
                return b.dataAdicao - a.dataAdicao;

            case 'antigos':
                return a.dataAdicao - b.dataAdicao;

            case 'az':
                return a.nome.localeCompare(b.nome, idiomaAtual === 'en' ? 'en' : 'pt-BR', {
                    sensitivity: 'base'
                });

            case 'za':
                return b.nome.localeCompare(a.nome, idiomaAtual === 'en' ? 'en' : 'pt-BR', {
                    sensitivity: 'base'
                });

            default:
                return 0;

        }

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
        mensagem.textContent = textos.mensagemCatalogoVazio;

        listaCatalogo.appendChild(mensagem);

        return;
    }


    // Mensagem de pesquisa sem resultados

    if (titulosFiltrados.length === 0) {

        const mensagem = document.createElement('p');
        mensagem.classList.add('mensagem-vazia');
        mensagem.textContent = textos.mensagemSemResultados;

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

if (campoOrdenacao) {
    campoOrdenacao.addEventListener('change', aplicarFiltros);
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

    const textos = traducoes[idiomaAtual];

    formularioTitulo.querySelector('button[type="submit"]').textContent = textos.adicionarAoCatalogo;

    document.getElementById('titulo-formulario').textContent = textos.adicionarTituloFormulario;

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
            imagem: imagemAnterior,

        dataAdicao: indiceEdicao !== null
        ? titulos[indiceEdicao].dataAdicao
        : Date.now()
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

                alert(traducoes[idiomaAtual].erroImagem);

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






