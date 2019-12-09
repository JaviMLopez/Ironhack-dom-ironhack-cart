var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1
  let unitPrice = Number($product.querySelector('.product .pu span').innerHTML);
  let unitQuantity = Number($product.querySelector('.product label input').value);

  let subtotal = unitPrice * unitQuantity;
  
  $product.querySelector('.subtot span').innerHTML = subtotal;
  return subtotal;
}
function calcAll() {
  // Iteration 1.2
  let productCollection = $cart.getElementByClass("product");
  let $product;
  let subtotal = 0;

  for(i=0; i < productCollection.length; i++){
    $product = productCollection[i];
    subtotal += updateSubtot($product);
  }
  updateSubtot();

}
$calc.onclick = calcAll;