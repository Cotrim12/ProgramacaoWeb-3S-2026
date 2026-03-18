function jogar() {
  const opcoes = ["pedra", "papel", "tesoura"];

  // Usuário escolhe
  let usuario = prompt("Escolha: pedra, papel ou tesoura").toLowerCase();

  if (!opcoes.includes(usuario)) {
    console.log("Opção inválida!");
    return;
  }

  // Computador escolhe aleatoriamente
  let computador = opcoes[Math.floor(Math.random() * 3)];

  console.log("Você escolheu:", usuario);
  console.log("Computador escolheu:", computador);

  // Lógica do jogo
  if (usuario === computador) {
    console.log("Empate!");
  } else if (
    (usuario === "pedra" && computador === "tesoura") ||
    (usuario === "papel" && computador === "pedra") ||
    (usuario === "tesoura" && computador === "papel")
  ) {
    console.log("Você venceu!");
  } else {
    console.log("Computador venceu!");
  }
}