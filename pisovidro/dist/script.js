rodada = 1;
while (rodada <= 3) {
  console.log("Rodada: " + rodada);

  escolhaJogador = prompt("Nível " + rodada + ",  escolha vidro 1, 2 ou 3: ");
  pisoQuebrado = Math.floor(Math.random() * 3) + 1;

  if (escolhaJogador == pisoQuebrado) {
    alert("O vidro quebrou! Acabou o jogo para você!");
    rodada = 1000;
  } else {
    alert("Passou! O piso quebrado estava na ponte: " + pisoQuebrado);
  }

  rodada = rodada + 1;
}
if (rodada == 4) {
  alert("Parabéns! Você venceu!");
}

//ganhou = 0 //Se for 1, perdeu. Se for 0, ganhou.

for (let rodada = 1; rodada <= 3; rodada++) {
  escolhaJogador = prompt("Nível " + rodada + ",  escolha vidro 1, 2 ou 3: ");
  pisoQuebrado = Math.floor(Math.random() * 3) + 1;

  if (escolhaJogador == pisoQuebrado) {
    alert("O vidro quebrou! Acabou o jogo para você!");
    rodada = 1000;
    ganhou = 1
  } else {
    alert("Passou! O piso quebrado estava na ponte: " + pisoQuebrado);
  }
}
if (ganhou == 0) {
  alert("Parabéns! Você venceu!");
}