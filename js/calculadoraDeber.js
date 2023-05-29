const leerNumero = (numero) => {
  if (igual) {
    document.getElementById("labelResultado").innerHTML = numero;
    igual = false;
  } else {
    document.getElementById("labelResultado").innerHTML =
      document.getElementById("labelResultado").innerHTML + numero;
  }
};

let num = '';
let igual = false;

const asignarNum = () =>
  parseInt(document.getElementById("labelResultado").innerHTML);

const operar = (op) => {
  if (op == "=") {
    document.getElementById("labelResultado").innerHTML = eval(num + document.getElementById("labelResultado").innerHTML);
    num = '';
    igual = true;
  } else {
    num += document.getElementById("labelResultado").innerHTML + op;
    document.getElementById("labelResultado").innerHTML = '';
    console.log(num);
  }
};
