$(function() {
      var selectItem, selectPrice, selectCheat, selectCheatPrice, url, qty = 100, sum = 0, oner;
      var fapzh = parseFloat($('#fapzh').text().replace(",", "."));
      var yopzh = parseFloat($('#yopzh').text().replace(",", "."));
      var yolzh = parseFloat($('#yolzh').text().replace(",", "."));
      var yoprzh = parseFloat($('#yoprzh').text().replace(",", "."));
      var yodz = parseFloat($('#yodz').text().replace(",", "."));
      var inspob = parseFloat($('#inspob').text().replace(",", "."));
      var inspzh = parseFloat($('#inspzh').text().replace(",", "."));
      var inslob = parseFloat($('#inslob').text().replace(",", "."));
      var inslzh = parseFloat($('#inslzh').text().replace(",", "."));
      var insaul = parseFloat($('#insaul').text().replace(",", "."));
      var insprvi = parseFloat($('#insprvi').text().replace(",", "."));
      var inspris = parseFloat($('#inspris').text().replace(",", "."));
      var inssohr = parseFloat($('#inssohr').text().replace(",", "."));
      var tepnk = parseFloat($('#tepnk').text().replace(",", "."));
      var tepvgich = parseFloat($('#tepvgich').text().replace(",", "."));
      var tepr = parseFloat($('#tepr').text().replace(",", "."));
      var twpnk = parseFloat($('#twpnk').text().replace(",", "."));
      var twprk = parseFloat($('#twprk').text().replace(",", "."));
      var tipzh = parseFloat($('#tipzh').text().replace(",", "."));
      var tilzh = parseFloat($('#tilzh').text().replace(",", "."));
      var tiprvi = parseFloat($('#tiprvi').text().replace(",", "."));
      var vkpob = parseFloat($('#vkpob').text().replace(",", "."));
      var vkpzh = parseFloat($('#vkpzh').text().replace(",", "."));
      var vkdrvpr = parseFloat($('#vkdrvpr').text().replace(",", "."));
      var vklzh = parseFloat($('#vklzh').text().replace(",", "."));
      var vkprzh = parseFloat($('#vkprzh').text().replace(",", "."));
      var vkre = parseFloat($('#vkre').text().replace(",", "."));
      var vkop = parseFloat($('#vkop').text().replace(",", "."));
      var vkprvi = parseFloat($('#vkprvi').text().replace(",", "."));
      var odpzh = parseFloat($('#odpzh').text().replace(",", "."));

      var socialNetworks = [
        { k: 'Facebook', price: 1 },
        { k: 'YouTube', price: 1 },
        { k: 'Instagram', price: 1 },
        { k: 'Телеграм', price: 1 },
        { k: 'Twitch', price: 1 },
        { k: 'TikTok', price: 1 },
        { k: 'ВКонтакте', price: 1 },
        { k: 'Одноклассники', price: 1 },
      ];

      // Facebook

      var fbCheats = [
        { k: 'Подписчики живые', price: fapzh }
      ];


      // YouTube

      var ytCheats = [
        { k: 'Подписчики живые', price: yopzh },
        { k: 'Лайки живые', price: yolzh },
        { k: 'Просмотры живые', price: yoprzh },
        { k: 'Дизлайки', price: yodz }
      ];


      // Instagram

      var igCheats = [
        { k: 'Подписчики обычные', price: inspob },
        { k: 'Подписчики живые', price: inspzh },
        { k: 'Лайки обычные', price: inslob },
        { k: 'Лайки живые', price: inslzh },
        { k: 'Автолайки', price: insaul },
        { k: 'Просмотры видео IG TV', price: insprvi },
        { k: 'Просмотры историй (story)', price: inspris },
        { k: 'Сохранение', price: inssohr }
      ];


      // Telegram

      var tgCheats = [
        { k: 'Подписчики на канал', price: tepnk },
        { k: 'Подписчики в группы, чаты', price: tepvgich },
        { k: 'Просмотры', price: tepr }
      ];


      // Twitch

      var twCheats = [
        { k: 'Подписчики на канал', price: twpnk },
        { k: 'Просмотры канала', price: twprk }
      ];


      // TikTok

      var ttCheats = [
        { k: 'Подписчики живые', price: tipzh },
        { k: 'Лайки живые', price: tilzh },
        { k: 'Просмотры видео', price: tiprvi }
      ];


      // Vkontakte

      var vkCheats = [
        { k: 'Подписчики обычные', price: vkpob },
        { k: 'Подписчики живые', price: vkpzh },
        { k: 'Друзья в профиль', price: vkdrvpr },
        { k: 'Лайки живые', price: vklzh },
        { k: 'Просмотры живые (глазик)', price: vkprzh },
        { k: 'Репосты', price: vkre },
        { k: 'Опросы', price: vkop },
        { k: 'Просмотры видео', price: vkprvi }
      ];


      // Odnoklassniki

      var okCheats = [
        { k: 'Подписчики живые', price: odpzh }
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
          case 'Twitch': insertCheats(twCheats); break;
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


      function discountSum(sItem, sCheat, qty, sum) {
        switch(sItem) {

          case 'Facebook':
            switch (sCheat) {
              case 'Подписчики живые':
                if(qty >= 0 && qty < 2000) return sum;
                else if(qty >= 2000 && qty < 5000) return sum - (sum * 5) / 100;
                else if(qty >= 5000 && qty < 10000) return sum - (sum * 10) / 100;
                else if(qty >= 10000) return sum - (sum * 15) / 100;
              break;
            }
          break;


          case 'YouTube':
            switch (sCheat) {
              case 'Подписчики живые':
              case 'Лайки живые':
              case 'Просмотры живые':
              case 'Дизлайки':
                if(qty >= 0 && qty < 2000) return sum;
                else if(qty >= 2000 && qty < 5000) return sum - (sum * 5) / 100;
                else if(qty >= 5000 && qty < 10000) return sum - (sum * 10) / 100;
                else if(qty >= 10000) return sum - (sum * 15) / 100;
              break;
            }
          break;



          case 'Instagram':
            switch (sCheat) {
              case 'Подписчики обычные':
              case 'Подписчики живые':
              case 'Лайки обычные':
              case 'Лайки живые':
              case 'Автолайки':
              case 'Сохранение':
                if(qty >= 0 && qty < 2000) return sum;
                else if(qty >= 2000 && qty < 5000) return sum - (sum * 5) / 100;
                else if(qty >= 5000 && qty < 10000) return sum - (sum * 10) / 100;
                else if(qty >= 10000) return sum - (sum * 15) / 100;
              break;
              case 'Просмотры видео IG TV':
              case 'Просмотры историй (story)':
                if(qty >= 0 && qty < 5000) return sum;
                else if(qty >= 5000 && qty < 10000) return sum - (sum * 5) / 100;
                else if(qty >= 10000 && qty < 20000) return sum - (sum * 10) / 100;
                else if(qty >= 20000) return sum - (sum * 15) / 100;
              break;
            }
          break;


          case 'Телеграм':
            switch (sCheat) {
              case 'Подписчики на канал':
              case 'Подписчики в группы, чаты':
                if(qty >= 0 && qty < 2000) return sum;
                else if(qty >= 2000 && qty < 5000) return sum - (sum * 5) / 100;
                else if(qty >= 5000 && qty < 10000) return sum - (sum * 10) / 100;
                else if(qty >= 10000) return sum - (sum * 15) / 100;
              break;
              case 'Просмотры':
                if(qty >= 0 && qty < 5000) return sum;
                else if(qty >= 5000 && qty < 10000) return sum - (sum * 5) / 100;
                else if(qty >= 10000 && qty < 20000) return sum - (sum * 10) / 100;
                else if(qty >= 20000) return sum - (sum * 15) / 100;
              break;
            }
          break;


          case 'Twitch':
            switch (sCheat) {
              case 'Подписчики на канал':
              case 'Просмотры канала':
                if(qty >= 0 && qty < 2000) return sum;
                else if(qty >= 2000 && qty < 5000) return sum - (sum * 5) / 100;
                else if(qty >= 5000 && qty < 10000) return sum - (sum * 10) / 100;
                else if(qty >= 10000) return sum - (sum * 15) / 100;
              break;
            }
          break;


          case 'TikTok':
            switch (sCheat) {
              case 'Подписчики живые':
              case 'Лайки живые':
                if(qty >= 0 && qty < 2000) return sum;
                else if(qty >= 2000 && qty < 5000) return sum - (sum * 5) / 100;
                else if(qty >= 5000 && qty < 10000) return sum - (sum * 10) / 100;
                else if(qty >= 10000) return sum - (sum * 15) / 100;
              break;
              case 'Просмотры видео':
                if(qty >= 0 && qty < 5000) return sum;
                else if(qty >= 5000 && qty < 10000) return sum - (sum * 5) / 100;
                else if(qty >= 10000 && qty < 20000) return sum - (sum * 10) / 100;
                else if(qty >= 20000) return sum - (sum * 15) / 100;
              break;
            }
          break;


          case 'ВКонтакте':
            switch (sCheat) {
              case 'Подписчики обычные':
              case 'Подписчики живые':
              case 'Лайки живые':
              case 'Репосты':
              case 'Опросы':
                if(qty >= 0 && qty < 2000) return sum;
                else if(qty >= 2000 && qty < 5000) return sum - (sum * 5) / 100;
                else if(qty >= 5000 && qty < 10000) return sum - (sum * 10) / 100;
                else if(qty >= 10000) return sum - (sum * 15) / 100;
              break;
              case 'Просмотры живые (глазик)':
              case 'Просмотры видео':
                if(qty >= 0 && qty < 5000) return sum;
                else if(qty >= 5000 && qty < 10000) return sum - (sum * 5) / 100;
                else if(qty >= 10000 && qty < 20000) return sum - (sum * 10) / 100;
                else if(qty >= 20000) return sum - (sum * 15) / 100;
              break;
              case 'Друзья в профиль':
                if(qty >= 0 && qty < 1000) return sum;
                else if(qty >= 1000 && qty < 2000) return sum - (sum * 5) / 100;
                else if(qty >= 2000 && qty < 5000) return sum - (sum * 10) / 100;
                else if(qty >= 5000) return sum - (sum * 15) / 100;
              break;
            }
          break;


          case 'Одноклассники':
            switch (sCheat) {
              case 'Подписчики живые':
                if(qty >= 0 && qty < 2000) return sum;
                else if(qty >= 2000 && qty < 5000) return sum - (sum * 5) / 100;
                else if(qty >= 5000 && qty < 10000) return sum - (sum * 10) / 100;
                else if(qty >= 10000) return sum - (sum * 15) / 100;
              break;
            }
          break;

        }

      }


      function recalc() {
        selectPrice = isNumeric(selectPrice) ? selectPrice : 0;
        qty = isNumeric(qty) ? qty : 100;
        selectCheatPrice = isNumeric(selectCheatPrice) ? selectCheatPrice : 0;
        sum = selectPrice * selectCheatPrice * qty;

        sum = discountSum(selectItem, selectCheat, qty, sum);

        if(sum === undefined) sum = 0;

        changeTable();
      }

      function changeTable() {
        $('.order-bl__priceval').text('Спишется ' + sum.toFixed(2) + ' руб.');
        $('.order-bl__orderval').text(selectCheat);
      }

      function sendData() {
        changeUrl();
        if (selectItem && selectCheat && url && qty > 0) {
          var csrf_token = $(".csrf_token input").val()
          var server = "/neworder"; // Адрес, куда нужно запрос отправить
          var data = {
            "csrfmiddlewaretoken": csrf_token,
            "item": selectItem,
            "cheat": selectCheat,
            "url": url,
            "qty": qty,
            "sum":sum,
          }
          $.ajax({
            url: server,
            method: "POST",
            data: data,
            success: function(data) {
              console.log(data)


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