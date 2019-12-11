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

function boomer(){
let removeCartButtons = document.getElementsByClassName("btn btn-delete");
for (i=0; i<removeCartButtons.length; i++){
  let button = removeCartButtons[i];
  button.addEventListener('click', function(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
  })
}
}
boomer();

let createButton = document.getElementById("create");
let button = createButton;
button.addEventListener('click', function(element){
    let button = event.target;
    let title = document.getElementsByClassName("new")[0].getElementsByTagName("input")[0].value;
    let number = document.getElementsByClassName("new")[0].getElementsByTagName("input")[1].value;

    let cartRow = document.createElement("tr");
    cartRow.classList.add("product");
    let cartItems = document.getElementsByClassName("product")[0];
    let cartRowContents = `
    <td class="name">
          <span>${title}</span>
        </td>
    
        <td class="pu">
          $<span>${number}</span>
        </td>
    
        <td class="qty">
          <label>
            <input type="number" value="0" min="0">
          </label>
        </td>
    
        <td class="subtot">
          $<span>0</span>
        </td>
    
        <td class="rm">
          <button class="btn btn-delete">Delete</button>
        </td>`
    cartRow.innerHTML = cartRowContents;
  
    $cart.append(cartRow);
    boomer();
  })


// function addToCartClicked(event){
//   let button = event.target;
//   // let shopItem = document.getElementsByClassName("new")[0];
//   var title = document.getElementsByClassName("new")[0].getElementsByTagName("input")[0].value;
//   // let title = shopItem.getElementsByTagName("input")[0].value; 
//   console.log(title);
// }
