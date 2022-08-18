$(async function() {

  var selectItem, selectPrice, selectCheat, selectCheatPrice, url, qty = 100, sum = 0, oner;
  let ytCheats, fbCheats, tgCheats, twCheats, ttCheats, vkCheats, okCheats;
  function setPrices () {
    return $.get("/api/services/", function(data, status) {
      if (status !== "success") {
        return
      }

      data.forEach((item) => {
          var myArr = [item.servicemodel_set.map((item) => {
              return {
                  k: item.name,
                  price: item.price
              }
          })]
          if (item.title === "Facebook") {
            fbCheats = myArr[0];
          } else if (item.title === "YouTube") {
            ytCheats = myArr[0];
          } else if (item.title === "Instagram") {
            igCheats = myArr[0];
          } else if (item.title === "Telegram") {
            tgCheats = myArr[0];
          } else if (item.title === "Twitter") {
            twCheats = myArr[0];
          } else if (item.title === "TikTok") {
            ttCheats = myArr[0];
          } else if (item.title === "Vkontakte") {
            vkCheats = myArr[0];
          } else if (item.title === "Ok") {
            okCheats = myArr[0];
          }
      })
    });
  }
  async function getPrice(socialNetwork, service, quantity) {
    return $.post(
      "/api/get-price/",
      {
        "social_network": socialNetwork,
        "service": service,
        "quantity": quantity
      },
      (data, status) => {
        console.log(data);
        return data
      } 
    )
  };
  await setPrices()

  var socialNetworks = [
    { k: 'Facebook', price: 1 },
    { k: 'YouTube', price: 1 },
    { k: 'Instagram', price: 1 },
    { k: 'Телеграм', price: 1 },
    { k: 'Twitter', price: 1 },
    { k: 'TikTok', price: 1 },
    { k: 'ВКонтакте', price: 1 },
    { k: 'Одноклассники', price: 1 },
  ];

  function insertSocialNetworks() {
    var html = '';
    socialNetworks.forEach(item => {
      html += '<option data-item="' + item.k + '" data-price="' + item.price + '">' + item.k + '</option>';
    });
    $('#socialnet').append(html);
  }

  function insertCheats(cheats) {
    $('#cheat').find('option').remove().end();

    var html = '<option></option>';
    cheats.forEach(item => {
      html += '<option data-item="' + item.k + '" data-price="' + item.price + '">' + item.k + '</option>';
    });
    $('#cheat').append(html);
  }

  function changeSocialNetworks() {
    sum = 0;
    qty = 100;
    $('#qty').val('100');
    selectItem = $('#socialnet option').filter(':selected').data('item');
    selectPrice = $('#socialnet option').filter(':selected').data('price');

    switch(selectItem) {
      case 'Facebook': insertCheats(fbCheats); break;
      case 'YouTube': insertCheats(ytCheats); break;
      case 'Instagram': insertCheats(igCheats); break;
      case 'Телеграм': insertCheats(tgCheats); break;
      case 'Twitter': insertCheats(twCheats); break;
      case 'TikTok': insertCheats(ttCheats); break;
      case 'ВКонтакте': insertCheats(vkCheats); break;
      case 'Одноклассники': insertCheats(okCheats); break;
    }

    recalc();
  }

  function changeCheats() {
    selectCheat = $('#cheat option').filter(':selected').data('item');
    selectCheatPrice = $('#cheat option').filter(':selected').data('price');
    recalc();
  }

  function changeQty() {
    qty = $('#qty').val();
    if(qty < 100) {
      qty = 100;
      $('#qty').val('100');
    }
    recalc();
  }

  function changeUrl() {
    url = $('#url').val();
  }

  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }


  async function discountSum(sItem, sCheat, qty, sum) {
    if (sItem && sCheat) {
      sum = await getPrice(sItem, sCheat, qty).then(item => item.price);
      return sum
    }

  }


  async function recalc() {
    selectPrice = isNumeric(selectPrice) ? selectPrice : 0;
    qty = isNumeric(qty) ? qty : 100;
    selectCheatPrice = isNumeric(selectCheatPrice) ? selectCheatPrice : 0;
    sum = selectPrice * selectCheatPrice * qty;

    sum = await discountSum(selectItem, selectCheat, qty, sum);

    if(sum === undefined) sum = 0;

    console.log(sum)

    await changeTable();
  }

  async function changeTable() {
    $('.order-bl__priceval').text('Спишется ' + sum.toFixed(2) + ' руб.');
    $('.order-bl__orderval').text(selectCheat);
  }

  function sendData() {
    changeUrl();
    if (selectItem && selectCheat && url && qty > 0) {
      var server = "/api/top-up-basket/"; // Адрес, куда нужно запрос отправить
      var data = {
        "social_network": selectItem,
        "service": selectCheat,
        "url": url,
        "quantity": qty,
      }
      $.ajax({
        url: server,
        method: "POST",
        data: data,
        success: function(data) {

          if (data.success) {
            window.location.href = '/cabinet';
          }
        }
      });

    }
    else {
      alert('Пожалуйста дозаполните форму!')
    }
  }

  insertSocialNetworks();


  $('#socialnet').change(function() {
    changeSocialNetworks();
  });
  $('#cheat').change(function() {
    changeCheats();
  });
  $('#qty').change(function() {
    changeQty();
  });


  $("#socialnet").select2({
    width: '100%',
    minimumResultsForSearch: -1
  });
  $("#cheat").select2({
    width: '100%',
    minimumResultsForSearch: -1
  });
  $('#url').change(function() {
    changeUrl();
  });
  $('.create-order').click(function() {
    sendData();
  });



})