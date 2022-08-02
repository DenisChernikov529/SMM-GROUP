$(function() {
      var selectItem, selectPrice, selectCheat, selectCheatPrice, url, qty = 100, sum = 0, oner;
      var oner = parseFloat($('#oner').text().replace(",", "."));
      if (oner){
        console.log('yes')
      }
      else{
        console.log('no')
      }
      console.log(oner);
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
        { k: 'Подписчики живые', price: oner }
      ];


      // YouTube

      var ytCheats = [
        { k: 'Подписчики живые', price: 0.88 },
        { k: 'Лайки живые', price: 0.55 },
        { k: 'Просмотры живые', price: 0.22 },
        { k: 'Дизлайки', price: 0.55 }
      ];


      // Instagram

      var igCheats = [
        { k: 'Подписчики обычные', price: 0.22 },
        { k: 'Подписчики живые', price: 0.55 },
        { k: 'Лайки обычные', price: 0.09 },
        { k: 'Лайки живые', price: 0.18 },
        { k: 'Автолайки', price: 0.125 },
        { k: 'Просмотры видео IG TV', price: 0.019 },
        { k: 'Просмотры историй (story)', price: 0.055 },
        { k: 'Сохранение', price: 0.019 }
      ];


      // Telegram

      var tgCheats = [
        { k: 'Подписчики на канал', price: 0.198 },
        { k: 'Подписчики в группы, чаты', price: 0.198 },
        { k: 'Просмотры', price: 0.039 }
      ];


      // Twitch

      var twCheats = [
        { k: 'Подписчики на канал', price: 0.22 },
        { k: 'Просмотры канала', price: 0.26 }
      ];


      // TikTok

      var ttCheats = [
        { k: 'Подписчики живые', price: 0.88 },
        { k: 'Лайки живые', price: 0.22 },
        { k: 'Просмотры видео', price: 0.045 }
      ];


      // Vkontakte

      var vkCheats = [
        { k: 'Подписчики обычные', price: 0.22 },
        { k: 'Подписчики живые', price: 0.695 },
        { k: 'Друзья в профиль', price: 0.36 },
        { k: 'Лайки живые', price: 0.125 },
        { k: 'Просмотры живые (глазик)', price: 0.039 },
        { k: 'Репосты', price: 0.29 },
        { k: 'Просмотры видео', price: 0.045 }
      ];


      // Odnoklassniki

      var okCheats = [
        { k: 'Подписчики живые', price: 0.198 }
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