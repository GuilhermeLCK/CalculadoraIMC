function calcularImc() {
  let altura = document.getElementById("altura").value;
  let peso = document.getElementById("peso").value;
  let img = document.getElementById("img");

  let imc = peso / (altura * altura).toFixed(2);

  if (altura.length == 0 || peso.length == 0) {
    alert("[ERRO!] PREENCHA TODOS OS CAMPOS");
  } else {
    if (imc >= 0 && imc < 18.5) {
      img.src = "magro.png";

      document.body.style.background = "#5bd9ab";
    } else if (imc >= 18.5 && imc < 24.9) {
      img.src = "peso-ideal.png";
      document.body.style.background = "#1ba673";
    } else if (imc >= 25 && imc < 30) {
      img.src = "acima do peso.png";
      document.body.style.background = "#f28f79";
    } else if (imc >= 30.1 && imc < 35) {
      img.src = "gordo.png";
      document.body.style.background = "#f2637e";
    } else if (imc >= 35.1 && imc < 99) {
      img.src = "obeso.png";
      document.body.style.background = "#d94e";
    }
  }
}

let button = document.getElementById("button");
button.addEventListener("click", calcularImc);
