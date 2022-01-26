// string
let nome = "Joao";
console.log(nome);

//numbers
let idade = 27;
idade = 27.5;
console.log(idade);

//boolean
let possuiHobbies = false;
console.log(possuiHobbies);

// tipos explícitos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade); //typeof mostra o tipo da variavel
minhaIdade = "idade 27";
console.log(typeof minhaIdade);

//tipos array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[1]);
console.log(typeof hobbies);

// tipos tuplas
let endereço: [string, number] = ["Av principal", 99]; // a regra da tupla tem que ser definida de acordo com o tipo estipulado
console.log(endereço);
