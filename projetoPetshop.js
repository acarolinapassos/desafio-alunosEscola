const PETSHOP = "Petshop DH"

console.log(`** ${PETSHOP} **`)

// criando uma lista com vários animais e seus dados
const pets = [{
        nome: "Mel",
        tipo: "cão",
        raça: "maltês",
        idade: 10,
        genero: "fêmea",
        vacinado: false,
        serviços: ["banho"],

    },
    {
        nome: "Billy",
        tipo: "cão",
        raça: "Cocker",
        idade: 7,
        genero: "macho",
        vacinado: false,
        serviços: ["banho", "tosa", "veterinário"]

    },
    {
        nome: "Simba",
        tipo: "gato",
        raça: "vira-lata",
        idade: 2,
        genero: "macho",
        vacinado: false,
        serviços: ["banho", "tosa", "veterinário"]

    },
    {
        nome: "Chloe",
        tipo: "cão",
        raça: "poodle",
        idade: 6,
        genero: "fêmea",
        vacinado: true,
        serviços: ["banho", "tosa", "veterinário"]
    }
];

// console.log(pets)

// função ano do nascimento do animal, com arrow function
const anoDeNascimento = amigo => 2020 - amigo.idade

// função vacina. Se o animal foi vacinado, será vacinado. 
const vacina = amigo => {
    if (!amigo.vacinado) {
        amigo.vacinado == true;
        console.log("Seu pet foi vacinado com sucesso!");
    } else {
        console.log("Ops...seu pet já está vacinado!");
    }
}

// função para listar os animais, usando arrow function e template string 
const listarPet = () => {
    for (let interador of pets) {
        console.log(`__________________________
         nome:${interador.nome}
         tipo:${interador.tipo}
         raça:${interador.raça}
         idade:${interador.idade}
         genero: ${interador.genero}
         vacinado:${(interador.vacinado? "Sim" : "Não")}
         serviços:${interador.serviços}
         `)
    }
}

// Função para adicionar um pet.
// Porém, antes de criá-la, é preciso verificar se usuário preencheu 
// todos os itens de forma correta.

// FUnção validar os dados
const validarDados = dadosDosPet => {
    return (
        dadosDosPet.nome &&
        dadosDosPet.idade &&
        dadosDosPet.genero &&
        dadosDosPet.tipo &&
        dadosDosPet.raça)

};
// função adicionar animal
const adicionarPet = petNovo => {
    if (typeof petNovo == "object" && validarDados(petNovo)) {
        petNovo.nome = petNovo.nome.toString();
        petNovo.genero = petNovo.genero.toString();
        petNovo.tipo = petNovo.tipo.toString();
        petNovo.raça = petNovo.raça.toString();
        petNovo.idade = parseInt(petNovo.idade);
        if (!petNovo.serviços) {
            petNovo.serviços = [];
        }
        pets.push(petNovo);
        console.log(petNovo.nome + "  foi adicionado com sucesso!");
    } else {
        console.log("Ops...insira um objeto válido!");
    }
}

adicionarPet({
    nome: "Costelinha",
    tipo: "cão",
    raça: "vira-lata",
    idade: 6,
    genero: "macho",
    vacinado: true,
    serviços: ["tosa"]
});

console.log(pets)

// DESAFIO:

// CRIE UMA FUNÇÃO QUE CONTA QUANTOS PETS EU TENHO QUE ESTÃO VACINADOS
// (SEU RETORNO DEVE SER ALGO DO TIPO : "FORAM ENCONTRADOS X PETS NÃO 
// VACINADOS", "FORAM ENCONTRADOS X PETS VACINADOS")

const vacinacao = () => {
    let vacinados = pets.filter(function (callback) {
        return callback.vacinado == true;
    });
    console.log(`Foram encontrados ${vacinados.length} pets vacinados`);
    let naoVacinados = pets.filter(function (callback2) {
        return callback2.vacinado == false
    });
    console.log(`Foram encontrados ${naoVacinados.length} pets não vacinados`)
}

vacinacao()

// CRIAR UMA FUNÇÃO QUE SE CHAMA CAMPANHAVACINA, QUE VAI UTILIZAR
// A FUNÇÃO VACINA CRIADA ANTERIORMENTE PARA VACINAR TODOS OS PETS
// QUE ESTÃO SEM VACINA. NO FINAL, MOSTRAR QUANTOS PETS FORAM VACINADOS
// NESSA CAMPANHA

const CAMPANHAVACINA = () => {
    let quantidade = pets.filter(function (vacina) {
        return !vacina.vacinado
    });
    console.log(`Foram vacinados ${quantidade.length} pets nessa campanha`)
}

// CAMPANHAVACINA()


// funções para adicionar serviços
const darBanho = amigo => {
    amigo.serviços.push("banho");
    console.log(`${amigo.nome} está de banho tomado!`)
};
const tosar = amigo => {
    amigo.serviços.push("tosa");
    console.log(`${amigo.nome} está tosado(a)!`)
};
const consulta = amigo => {
    amigo.serviços.push("consulta");
    console.log(`${amigo.nome} passou pelo veterinário!`)
};

// criando a função de atendimento
const atenderPet = (amigo,serviços)=>{
    console.log(`Seja Bem-vindo ${amigo.nome}`)
      for (let iterador of serviços){
           iterador(amigo)
      }
    const pagar = () =>{
        console.log("Pagamento efetuado com sucesso ");
    };
    
    pagar();


    console.log("Volte sempre!");
    }

  
// atenderPet(pets[0],[darBanho,consulta])

const buscarNome = nome => {
    let encontrados = pets.filter(function(callback){
    return callback.nome== nome;
    });
    console.log(encontrados)
}

       
   
    










