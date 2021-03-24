// Select a size function
function selectSize() {
  let select_size = document.getElementById("select-size");
  let size = document.getElementById("size");
  select_size.innerHTML = size.innerHTML;
  size.style.backgroundColor = "#10005f";
  size.style.color = "#ffffff";
}

// Decrease Quantity function
function decreaseQuantity() {
  var quantity = parseInt(document.getElementById("quantity").value);
  quantity = isNaN(quantity) ? 0 : quantity;
  quantity < 1 ? (quantity = 1) : "";
  quantity--;
  document.getElementById("quantity").value = quantity;
}
// Increase Quantity function
function increaseQuantity() {
  var quantity = parseInt(document.getElementById("quantity").value);
  quantity = isNaN(quantity) ? 0 : quantity;
  quantity++;
  document.getElementById("quantity").value = quantity;
}

// Add cart popup functionality
function showCart() {
  if ($(".addtocart").hasClass("cart-hide")) {
    $(".addtocart").removeClass("cart-hiide");
    $(".addtocart").addClass("cart-show");
  } else if ($(".addtocart").hasClass("cart-show")) {
    $(".addtocart").removeClass("cart-show");
    $(".addtocart").addClass("cart-hide");
  }
}

// Close cart popup functionality
function closeCart() {
  $(".addtocart").removeClass("cart-show");
}

let uprice = document.getElementById("uprice").innerHTML.value;
let qty = document.getElementById("qty").innerHTML.value;
let tprice = document.getElementById("tprice").innerHTML.value;
