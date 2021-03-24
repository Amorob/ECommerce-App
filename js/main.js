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
