const alunosDaEscola = [{
        nome: "Henrique",
        notas: [],
        cursos: [],
        faltas: 5
    }, {
        nome: "Edson",
        notas: [],
        cursos: [],
        faltas: 2
    }, {
        nome: "Bruno",
        notas: [10, 9.8, 9.6],
        cursos: [],
        faltas: 0
    },
    {
        nome: "Guilherme",
        notas: [10, 9.8, 9.6],
        cursos: [{
            nomeDoCurso: "Full Stack",
            dataMatricula: new Date
        }],
        faltas: 0
    }, {
        nome: "Carlos",
        notas: [],
        cursos: [],
        faltas: 0
    },
    {
        nome: "Lucca",
        notas: [10, 9.8, 9.6],
        cursos: [{
            nomeDoCurso: "UX",
            dataMatricula: new Date
        }],
        faltas: 0
    }
];

const buscarAluno = nomeDoAluno => {
    let encontrados = alunosDaEscola.find((callback) => {
        return callback.nome == nomeDoAluno
    });
    if (typeof encontrados == "object") {
        console.log(`Aluno(a) encontrado: ${encontrados.nome}`)
    } else {
        console.log("Aluno(a) não encontrado")
    }
}

// buscarAluno("Lucca");

const listarAlunos = () => {
    for (iterador of alunosDaEscola) {
        console.log(`
    ${iterador.nome}`)
    }
}

// listarAlunos();

const adicionarAluno = nomeDoAluno => {
    alunosDaEscola.push({
        nome: nomeDoAluno,
        notas: [],
        cursos: [],
        faltas: 0
    });
    console.log(nomeDoAluno + " foi adicionado com sucesso!")

}


// adicionarAluno("Nathan");
// listarAlunos()

const matricularAluno = (nomeDoAluno, cursoNovo) => {
    let encontrados = alunosDaEscola.find((callback) => {
        return callback.nome == nomeDoAluno
    });
    if (typeof encontrados == "object") {
        encontrados.cursos.push([{
            nomeDoCurso: cursoNovo,
            dataMatricula: new Date
        }], )
        console.log(nomeDoAluno + " foi matriculado em " + cursoNovo + "!")

    } else {
        console.log("Aluno(a) ainda não cadastrado no sistema.")
    }
}

//    matricularAluno("Carlos","Data Science");

const aplicarFalta = nomeDoAluno => {
    for (let i = 0; i < alunosDaEscola.length; i++) {
        if (alunosDaEscola[i].nome == nomeDoAluno && alunosDaEscola[i].cursos != []) {
            ++alunosDaEscola[i].faltas
            console.log("Falta aplicada!")
        }
    }
}


// aplicarFalta("Guilherme")
// console.log(alunosDaEscola[3].faltas)

const aplicarNota = (nomeDoAluno,nota) => {
    for (let i = 0; i < alunosDaEscola.length; i++) {
        if (alunosDaEscola[i].nome == nomeDoAluno && alunosDaEscola[i].cursos != []) {
            alunosDaEscola[i].notas.push(nota)
            console.log("Nota adicionada!")
        }
    }
}

// aplicarNota("Guilherme",9.7);
// console.log(alunosDaEscola[3].notas)

const aprovarAluno = nomeDoAluno =>{
    for (let i = 0; i < alunosDaEscola.length; i++) {
if (alunosDaEscola[i].nome == nomeDoAluno && alunosDaEscola[i].cursos != []) {
        let resultado = alunosDaEscola[i].notas.reduce((acumulador,elemento) =>{
    return acumulador+elemento
        })   
if((resultado / alunosDaEscola[i].notas.length) >= 7 && alunosDaEscola[i].faltas <= 3){
 console.log("Aprovado(a)")
} else{
    console.log("Reprovado(a)")
}
}
    }
}

// aprovarAluno("Guilherme")
