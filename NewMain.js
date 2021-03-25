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
    // Function calls
    updatePrice();
    updateQuantity();
    calculateTotalPrice();
  }
  
  // Close cart popup functionality
  function closeCart() {
    $(".addtocart").removeClass("cart-show");
  }
  // Geberate randomNumber between 10 and 100 function
  function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
  function randomPrice(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // Variables declaration for updatePrice, updateQuantity and calculateTotalPrice functions
  let originalPrice = document.getElementById("original-price");
  let newPrice = document.getElementById("new-price");
  let quantity = document.getElementById("quantity");
  let qty = document.getElementById("qty");
  let totalPrice = document.getElementById("total-price");
  
  // Price update function
  function updatePrice() {
    newPrice.innerHTML = originalPrice.innerHTML;
    // newPrice.innerHTML = newPrice;
    // newPrice = originalPrice.innerHTML;
    // newPrice.innerHTML = originalPrice.value;
    // newPrice.innerHTML = originalPrice.innerHTML;
    // newPrice = newPrice.innerHTML;
    return newPrice.innerHTML;
  }
  
  // Quantity update function
  function updateQuantity() {
    qty.innerHTML = quantity.value;
    qty = qty.innerHTML;
    return qty;
  }
  
  // Calculate total price function
  function calculateTotalPrice() {
    totalPrice.innerHTML = Number("newPrice.innerHTML") * Number("qty.value");
    totalPrice = totalPrice.innerHTML;
    return totalPrice;
    // totalPrice.innerHTML = Number("newPrice.innerHTML") * Number("qty.innerHTML");
    // return Number("totalPrice.innerHTML");
  
    // totalPrice = "newPrice.innerHTML" * "qty.innerHTML";
    // totalPrice.innerHTML = totalPrice;
    // return totalPrice.innerHTML;
  }
  