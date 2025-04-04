//Preciso criar uma lista com os 3 jogadores
personagem = ["", "", ""];
vilões = ["", "", ""];

forçaPersonagem = 0;
forçaVilões = 0;

alert("O array personagem contém: " + personagem);
for (let i = 0; i < 3; i++) {
  escolhaPersonagem = prompt("Digite o nome do seu personagem" + (i + 1));
  personagem[i] = escolhaPersonagem;

  //Calcular a força de cada jogador e somar para saber a força do time
  forçaPersonagem = forçaPersonagem + Math.floor(Math.random() * 10) + 1;

  //Maneira mais avançada de fazer a mesma coisa: forçaPersonagem += Math.floor(Math.random()*10) +1
}
console.log("Agora, o array personagem contém: " + personagem);

console.log("Início Vilões: " + vilões);
for (let i = 0; i < 3; i++) {
  indiceAleatório = Math.floor(Math.random() * 5);
  vilõesPossíveis = [
    "Nazaré Tedesco",
    "Odete Roitman",
    "Flora",
    "Carminha",
    "Bia Falcão"
  ];
  vilões[i] = vilõesPossíveis[indiceAleatório];

  //Calcular a força de cada jogador do time do computador
  forçaVilões = forçaVilões + Math.floor(Math.random() * 10) + 1;
}
console.log("Final Vilões: " + vilões);

//Comparar os dois times para saber quem venceu
if (forçaPersonagem > forçaVilões) {
  alert(
    "Seu time é muito forte! Você ganhou a disputa do cabo de guerra! Sua força foi " +
      forçaPersonagem
  );
} else {
  if (forçaPersonagem < forçaVilões) {
    alert(
      "Seu time é fraquinho! O computador ganhou o cabo de guerra com força de " +
        forçaVilões
    );
  } else {
    alert("Os dois times tem a mesma força. Vocês empataram!");
  }
}
