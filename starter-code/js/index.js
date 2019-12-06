var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1
  let unitPrice = $product.querySelector('.product .pu span').innerHTML;
  let unitQuantity = $product.querySelector('.product label input').value;
  

function calcAll() {
  // Iteration 1.2
}
$calc.onclick = calcAll;