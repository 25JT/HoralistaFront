
import Swal from 'sweetalert2';

export function alertaCheck(mensaje) {
  Swal.fire({
    icon: "success",
    title: "¡Correcto!",
    text: mensaje,
    confirmButtonColor: "#3085d6",
  });
}

export function alertaFallo(mensaje) {
  Swal.fire({
    icon: "error",
    title: "¡Error!",
    text: mensaje,
    confirmButtonColor: "#3085d6",
  });
}

export function alertaMal(mensaje) {
  Swal.fire({
    icon: "warning",
    title: "¡Atención!",
    text: mensaje,
    confirmButtonColor: "#3085d6",
  });
}

export function alertaCheck2(mensaje) {
  Swal.fire({
    icon: "success",
    title: "¡Correcto!",
    text: mensaje,
    confirmButtonColor: "#3085d6",
  }).then(() => {
    location.href = "/";
  });
}



export function alertaFallo2(mensaje) {
  Swal.fire({
    icon: "error",
    title: "¡Error!",
    text: mensaje,
    confirmButtonColor: "#3085d6",
  }).then(() => {
    location.href = "/";
  });
}

export function alertaCheck3(mensaje) {
  Swal.fire({
    icon: "success",
    title: "¡Correcto!",
    text: mensaje,
    confirmButtonColor: "#3085d6",
  }).then(() => {
    location.href = "/MenuNegocio";
  });
}

export function alertaCheck4(mensaje) {
  Swal.fire({
    icon: "success",
    title: "¡Correcto!",
    text: mensaje,
    confirmButtonColor: "#3085d6",
  }).then(() => {
    location.href = "/PrincipalCliente";
  });
}