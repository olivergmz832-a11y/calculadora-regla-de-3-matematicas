function calcular() {
  const valor1 = parseFloat(document.getElementById("valor1").value);
  const valor2 = parseFloat(document.getElementById("valor2").value);
  const valorX = parseFloat(document.getElementById("valorX").value);

  if (isNaN(valor1) || isNaN(valor2) || isNaN(valorX)) {
    document.getElementById("resultado").textContent =
      "Por favor llena los tres valores numéricos.";
    return;
  }

  const resultado = (valor2 * valorX) / valor1;

  document.getElementById("resultado").textContent =
    "Resultado: " + resultado.toFixed(2);
}
