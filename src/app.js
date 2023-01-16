/* eslint-disable */
import "bootstrap";
import "./style.css";

let who = ["El Perro", "Mi Abuela", "Su tortuga", "Mi pajaro"];
let action = ["comió", "orinó", "aplastó", "rompió"];
let what = ["mi tarea", "las llaves", "mi ferrari"];
let when = ["antes de clases", "justo a tiempo", "cuando dormía"];

window.onload = function() {
  let excusa = excuse(who, action, what, when);
  let excuseElement = document.getElementById("excuse");
  excuseElement.innerHTML = excusa;
};

function excuse(array1, array2, array3, array4) {
  let whoRandomNumber = Math.floor(Math.random() * array1.length);
  let actionRandomNumber = Math.floor(Math.random() * array2.length);
  let whatRandomNumber = Math.floor(Math.random() * array3.length);
  let whenRandomNumber = Math.floor(Math.random() * array4.length);

  return (
    array1[whoRandomNumber] +
    " " +
    array2[actionRandomNumber] +
    " " +
    array3[whatRandomNumber] +
    " " +
    array4[whenRandomNumber]
  );
}
