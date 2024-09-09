/* nessa area fica a logica do programa*/
// quando tiver um tijolinho é valido
// quando quiser puxar algo do html tem que usar o document.getElementById
// Imprime no console para verificar se a seção foi encontrada corretamente
// ->   console.log
function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById ("campo-pesquisa").value;
  
    // se campoPesquisa for uma string sem nada
    if(!campoPesquisa) { // pode ser ! ou == ""
        section.innerHTML = "<p>Nada foi encontrado. Você não inseriu nenhuma informação. </p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada item (dado) na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        // então, faça...
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)
            || tags.includes(campoPesquisa)) {
            //cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2> 
                    <a href="#" target="_blank"> ${dado.titulo} </a> 
                </h2>
                <p class="descricao-meta"> ${dado.descricao}</p> 
                <a href="${dado.link}" target="_blank">Mais informações</a> 
            </div>
    `;// A sintaxe `` (template literal) permite inserir variáveis diretamente na string
        }
      }
  
    if (!resultados){
        resultados = "<p>Nada foi encontrado. </p>"
    }
    // Atribui a string completa de resultados ao conteúdo HTML da seção
    section.innerHTML = resultados;
  }