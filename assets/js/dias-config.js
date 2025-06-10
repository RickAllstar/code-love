function formatarData(dataStr) {
  const partes = dataStr.split('/');
  return new Date(partes[2], partes[1] - 1, partes[0]);
}

function atualizarTempo() {
  const dataEspecialFormatada = formatarData(dataEspecial);
  const agora = new Date();
  const diff = agora - dataEspecialFormatada;

  const diasTotais = Math.floor(diff / (1000 * 60 * 60 * 24));

  // Se quiser limitar a 165 dias máximos:
  const dias = Math.min(diasTotais, 165);
  const meses = Math.floor(dias / 30);
  const diasRestantes = dias % 30;

  let tempoFormatado = "";
  if (meses > 0) tempoFormatado += `${meses} ${meses === 1 ? "mês" : "meses"}`;
  if (diasRestantes > 0) tempoFormatado += `${meses > 0 ? " e " : ""}${diasRestantes} ${diasRestantes === 1 ? "dia" : "dias"}`;
  if (!tempoFormatado) tempoFormatado = "menos de 1 dia";

  document.getElementById("tempo-formatado").textContent = tempoFormatado;
  document.getElementById("dias").textContent = dias;
}

document.addEventListener("DOMContentLoaded", () => {
  atualizarTempo();
  setInterval(atualizarTempo, 60 * 1000); 
});
