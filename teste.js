/*
1. Buscar e exibir os livros de um autor;
2. Buscar e exibir os livros de determinado ano;
3. Buscar e exibir os livros de um autor a partir de determinado ano;
4. Buscar um livro pelo nome e trazer todos as suas versões em diferentes idiomas;
5. Exibir os livros de determinado idioma;
6. Exibir os livros ordenados pelo ano;
*/
let autores = ["Leonardo", "João", "Gabriel", "Tiago", "Lucas", "Kauan"]
let anos = [2002, 2006, 2005, 2000, 1999, 1990]
let nomes = ["Literatura", "A linguagem", "Francesa", "Arquivo x", "Aviação", "Imortal"]
let idiomas = []


function BuscarAutor() {
    let nomeAutor = prompt("Insira o nome do autor que deseja buscar")
    let indexAutores = []
    for (let contador = 0; contador < autores.length; contador++) {
        if (nomeAutor == autores[contador]) {
            indexAutores.push(contador)
        }
    }
    indexAutores.forEach(x => {
        console.log(autores[x])
        console.log(nomes[x])
    })
}

function BuscarAno() {
    let ano = parseInt(prompt("Insira o ano que deseja buscar"))
    let indexAnos = []
    let contador2 = 0
    anos.forEach(x => {
        if (ano == x) {
            indexAnos.push(contador2)
        }
        contador2++
    })
    indexAnos.forEach(x => console.log(nomes[x]))
}

function BuscarAutorAno() {
    let autor = prompt("Insira o nome do autor que deseja bsucar")
    let ano = parseInt(prompt("Insira a partir de que ano deseja buscar"))
    let indexAutores = []
    let contador = 0
    autores.forEach(x => {
        if (autor == x && anos[contador] > ano) {
            
        }
        contador++
    })
    indexAutores.forEach(x => console.log(nomes[x]))
}

function BuscarVersões() {
    let nome = prompt("Insira o nome do livro que deseja pesquisar")
    let index = nomes.indexOf(nome)
    console.log(idiomas[index])
}



function OrdenarAno() {
    let indexAnos = anos
    let anosSup = []
    let nomesSup = []
    indexAnos.sort()
    for (let index = 0; index < anos.length; index++) {
        for (let index2 = 0; index2 < anos.length; index2++)
            if (anos[index2] == indexAnos[index]) {
                anosSup[index] = anos[index2]
                nomesSup[index] = nomes[index2]
                console.log(index2)
            }
    }


    anos = anosSup
    nomes = nomesSup
    console.log(anos, nomes)
}

let continuar = "s"

while(continuar == "s"){
    let opcao = prompt("Insira a opção que deseja executar,  Buscar um Ator(1), Buscar um Ano(2), Buscar um Ator apartir de um Ano(3), Buscar Versões(4)")

    if(opcao == 1){
        BuscarAutor() 
    }else if(opcao == 2){
        BuscarAno()
    }else if(opcao == 3){
        BuscarAutorAno()
    }else if(opcao == 4){
        BuscarVersões()
    }
    let desejaContinuar = prompt("Deseja Continuar? s ou n")
    if(desejaContinuar != s){
        continuar = "n"
    }
}

