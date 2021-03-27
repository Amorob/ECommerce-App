// T-Shirt size selection code
$(".size").click(function () {
  $(".size").each(function () {
    $(this).removeClass("size-selected");
  });
  $(this).addClass("size-selected");
  // Displaying the size selected info by the select size
  document.getElementById("select-size").innerHTML = document.querySelector(
    ".size-selected"
  ).innerHTML;
});

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
  // Function calls
  updatePrice();
  updateQuantity();
  calculateTotalPrice();
  calculateCartSubTotal();
}

// Close cart popup functionality
function closeCart() {
  $(".addtocart").removeClass("cart-show");
}

// Variables declaration
let originalPrice = document.getElementById("original-price");
let newPrice = document.getElementById("new-price");
let quantity = document.getElementById("quantity");
let qty = document.getElementById("qty");
let totalPrice = document.getElementById("total-price");
let cartSubtotalPrice = document.getElementById("cart-subtotal-price");

// Price update function
function updatePrice() {
  newPrice.innerHTML = originalPrice.innerHTML;
  newPrice = newPrice.innerHTML;
  return newPrice;
}

// Quantity update function
function updateQuantity() {
  qty.innerText = quantity.value;
  qty = qty.innerText;
  return qty;
}

// Calculate total price function
function calculateTotalPrice() {
  let qty = quantity.value;
  let price = originalPrice.innerText;
  totalPrice.innerHTML = Number(qty) * parseFloat(price);
}
//  calculateCartSubTotal function
function calculateCartSubTotal() {
  cartSubtotalPrice.innerHTML = quantity.value * originalPrice.innerText;
}
