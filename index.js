/*
async function fetchData() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) {
      throw new Error("не удалост получить сведения из data.json");
    }
    const data = await response.json();
    console.log(data);
    const productBox = document.querySelector("product_box");

    data.forEach(({name, image, price, size, quantity}))=>{
        const productE1
    }
  } catch (error) {
    console.error(error);
  }
}
fetchData();


*/

$(function () {
  function addToCart($form) {
    const formProduct = $form,
      path = formProduct.attr("action") || "/cart_items",
      pathJson = path + ".json",
      dataParam = formProduct.serialize();

    $.ajax({
      url: pathJson,
      type: "POST",
      datatype: "json",
      data: dataParam,
      success: function (response) {},
      error: function (response) {},
    });
  }

  $("[data-buy]").click(function (event) {
    event.preventDefault();
    addToCart($(this).parents("form:first"));
  });
});

function deletecart(id) {
  var carts = $.cookie("cart");

  carts = carts.split(',').filter(num => Number(num) !== id).join(',');
  if (carts.length === 0) carts = null;

  $.cookie("cart", carts);
  getInfoCart();
}
