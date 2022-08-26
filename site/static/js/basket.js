async function neworder(n){

  async function createOrder(n) {
    let balance = parseFloat($(".info__val").find("a").text().replace(" руб.", ""));
    let price = parseFloat($(`#price-${n}`).text());
    if (price > balance ) {
        alert("На вашем балансе не достаточно средств!")
        return
    }
    return $.post(
      "/api/create-order/",
      {
        "id": n,
      }
    )
  };
  await createOrder(n)
  setTimeout(() => { location.reload(); }, 500);
};
async function deletemodel(n){

  async function delOrder(n) {
    return $.post(
      "/api/reduce-basket/",
      {
        "id": n,
      }
    )
  };
  await delOrder(n)
  setTimeout(() => { location.reload(); }, 500);
};
