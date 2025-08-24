function gerarCPF() {
  const n = [];

  // Gera os 9 primeiros dígitos
  for (let i = 0; i < 9; i++) {
    n.push(Math.floor(Math.random() * 10));
  }

  // Calcula o primeiro dígito verificador
  let d1 = 0;
  for (let i = 0; i < 9; i++) {
    d1 += n[i] * (10 - i);
  }
  d1 = 11 - (d1 % 11);
  if (d1 >= 10) d1 = 0;
  n.push(d1);

  // Calcula o segundo dígito verificador
  let d2 = 0;
  for (let i = 0; i < 10; i++) {
    d2 += n[i] * (11 - i);
  }
  d2 = 11 - (d2 % 11);
  if (d2 >= 10) d2 = 0;
  n.push(d2);

  // Formata como CPF: XXX.XXX.XXX-XX
  const cpfFormatado = `${n[0]}${n[1]}${n[2]}.${n[3]}${n[4]}${n[5]}.${n[6]}${n[7]}${n[8]}-${n[9]}${n[10]}`;

  // Exibe o CPF na tela
  document.getElementById("cpf").textContent = cpfFormatado;
}
