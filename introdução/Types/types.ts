// tipos string - Uma string é uma sequência de um ou mais caracteres que podem consistir em letras, números ou símbolos.
let nome = "Joao";
console.log(nome);

//tipo numbers - É um objeto encapsulado que permite você trabalhar com valores numéricos.
let idade = 27;
idade = 27.5;
console.log(idade);

// tipo boolean - O objeto Boolean é um objeto wrapper para um valor booleano.
let possuiHobbies = false;
console.log(possuiHobbies);

// tipos explícitos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade); //typeof mostra o tipo da variavel
minhaIdade = "idade 27";
console.log(typeof minhaIdade);

// tipos array - O objeto Array do JavaScript é um objeto global usado na construção de 'arrays': objetos de alto nível semelhantes a listas.
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[1]);
console.log(typeof hobbies);

// tipos tuplas - Elas representam uma estrutura de dados simples parecida com um Array.
let endereço: [string, number] = ["Av principal", 99]; // a regra da tupla tem que ser definida de acordo com o tipo estipulado
console.log(endereço);

// tipo enums - Enums são uma funcionalidade adicionada ao JavaScript pelo TypeScript na qual facilita o manuseio de grupos de constantes nomeadas.
enum Cor {
  Cinza, // 0
  Azul = 100, // 1 // vc pode atribuir valor
  Verde, // 2
  Laranja,
  Vermelho = 100, // poder repetir que o TS nao gera problema de execuçao se tornando possivel
}

let minhaCor: Cor = Cor.Azul;
console.log(minhaCor, Cor.Vermelho);

// tipo any - Exatamente qualquer coisa, usado quando não se sabe ao certo o tipo da variável, a principal situação é quando não sabemos os tipos das entidades de uma biblioteca terceira.
let carro: any = "AUDI";
console.log(carro);
carro = { marca: "AUDI", ano: 2019 };
console.log(carro);
