idade = prompt("Digite sua idade:");
if (idade >= 18) {
  alert("Você pode jogar");
  escolhaJogador = prompt("Digite 1-Pedra, 2-Papel ou 3-Tesoura");
  escolhaComputador = Math.floor(Math.random() * 3) + 1;

  if (escolhaJogador == escolhaComputador) {
    alert("Empate!");
  }
  if (escolhaJogador == 1) {
    if (escolhaComputador == 2) {
      alert("Computador venceu!");
    }
    if (escolhaComputador == 3) {
      alert("Jogador vence!");
    }
    if (escolhaJogador == 2) {
      if (escolhaComputador == 1) {
        alert("Jogador venceu!");
      }
      if (escolhaComputador == 3) {
        alert("Computador venceu!");
      }
    }
    if (escolhaJogador == 3) {
      if (escolhaComputador == 1) {
        alert("Computador venceu!");
      }
      if (escolhaComputador == 2) {
        alert("Jogador venceu!");
      }
    }
  }
}
if (idade < 18) {
  alert("Você não pode jogar");
}

alert("A escolha do computador foi:" + escolhaComputador);

// alert("Vamos começar a jogar!")
