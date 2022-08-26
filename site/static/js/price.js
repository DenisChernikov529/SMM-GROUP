$(async function() {
  $('.modal__close').click(function() {
    $('.serv-box').remove();
    let exampleForm = document.getElementsByName('serv');
    for(let i = 0; i < exampleForm.length; i++){
      if(exampleForm[i].type == 'radio' && exampleForm[i].checked == true ){
        exampleForm[i].checked = false;
      }
    }

    $('.advant-list__col').remove();
  });

  function insertAdvList(list) {
    $(`.advant-list`).empty();
    list.forEach((item, i) => {
      if (i === 4) {
        return
      }
      let itemAdvant = $(`<div class="item-advant"></div>`)
        .append(`<img src="img/okey.png" alt="">`)
        .append(`<span>${item.title}</span>`)

      if(item.title.toLowerCase() === 'аккаунты среднего качества') {
        itemAdvant = $(`<div class="item-advant"></div>`)
          .append(`<img src="img/smile.png" alt="">`)
          .append(`<span>${item.title}</span>`);
      }
      let newItem = $(`<div class="advant-list__col"></div>`).append(itemAdvant);

      $('.advant-list').append(newItem);
      if(list.length === 3 && i === 2) {
        $('.advant-list').append(`<div class="advant-list__col"></div>`);
      }

    });
  }

  function insertPrice(items, title, price) {
    items.forEach(item => {
      let newElem = $(`<div class="serv-box"></div>`)
        .append(`<p class="serv-box__val">${item.quantity}</p>`)
        .append(`<p class="serv-box__name">${title}</p>`)
        .append(`<p class="serv-box__discount">скидка ${item.discount}%</p>`)
        .append(`<p class="serv-box__price">${(price * 1000 - price * 1000 / 100 * item.discount).toFixed(2)} рублей за 1000</p>`)
        .append(`<a href="/cabinet/order" class="serv-box__buy">КУПИТЬ ЗА ${(item.quantity * (price - price  / 100 * item.discount)).toFixed(2)} РУБ</a>`)
      $('.serv-box-items').append(newElem);
      
    });
  }

  function setPrices (targId, targName) {
    return $.get(`/api/service/${targId}`, function(data, status) {
      if (status !== "success") {
        return
      }
      $('.serv-box').remove();
      insertPrice(data.discounts, data.name, data.price);
      $(`.wrap-modal[data-name="${targName}"]`).fadeIn();
      insertAdvList(data.advants);
      $(`#input-serv-${targId}`).prop("checked", true);

      $(`input[class="serv"]`).prop('checked', false);
      $(`input[id="${targId}"]`).prop('checked', true);

    });
  };
  
  $('li').on('click', function () {
    let targName = $(this).attr('data-targ');
    let targId = $(this).attr('id');
    setPrices(targId, targName);
  });

  $('.service__more').on('click', function () {
    let targName = $(this).attr('data-targ');
    let targId = $(this).attr('id');
    setPrices(targId, targName);
  });

  $('label.serv').on("click",
    function() {
      let targName = $(this).attr('data-name');
      let targId = $(this).attr('id');
      setPrices(targId, targName);
  });

});
