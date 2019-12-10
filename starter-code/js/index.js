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
  let productCollection = $cart.getElementsByClassName("product");
  let $product;
  let sumtotal = 0;

  for(i=0; i < productCollection.length; i++){
    $product = productCollection[i];
    sumtotal += updateSubtot($product);
  }
  
document.querySelector("h2 span").innerHTML = sumtotal;

updateSubtot();
}
$calc.onclick = calcAll;

let removeCartButtons = document.getElementsByClassName("btn btn-delete");
for (i=0; i<removeCartButtons.length; i++){
  let button = removeCartButtons[i];
  button.addEventListener('click', function(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
  })
}

let createButton = document.getElementById("create");
for (i=0; i<createButton.length; i++){
  let button = createButton[i];
  button.addEventListener('clicked', addToCartClicked)
}

function addToCartClicked(event){
  
}