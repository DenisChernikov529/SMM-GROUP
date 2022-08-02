$(function() {

  // facebook

  const fbLiveSubPrice = [
    {
      amount: 1000,
      title: 'подписчики обычные',
      discount: 0,
      price: 498
    },
    {
      amount: 2000,
      title: 'подписчики обычные',
      discount: 5,
      price: 473
    },
    {
      amount: 5000,
      title: 'подписчики обычные',
      discount: 10,
      price: 448
    },
    {
      amount: 10000,
      title: 'подписчики обычные',
      discount: 15,
      price: 423
    }
  ];

  const fbLiveSubAdvList = [
    'Запуск в течение 1 часа',
    'Живые люди',
    'Гарантия результата',
    'Без банов, без списаний',
    'Скорость до 200 в сутки'
  ];


  // youtube

  const ytLiveSubPrice = [
    {
      amount: 1000,
      title: 'подписчики живые',
      discount: 0,
      price: 880
    },
    {
      amount: 2000,
      title: 'подписчики живые',
      discount: 5,
      price: 836
    },
    {
      amount: 5000,
      title: 'подписчики живые',
      discount: 10,
      price: 792
    },
    {
      amount: 10000,
      title: 'подписчики живые',
      discount: 15,
      price: 748
    }
  ];

  const ytLiveSubAdvList = [
    'Запуск  в течение 2 часов',
    'Скорость до 1000 в сутки',
    'Подписчики живые люди',
    'Гарантия бессрочная',
    'Можно заказывать повторно после выполнения'
  ];


  const ytLiveLikesPrice = [
    {
      amount: 1000,
      title: 'лайки живые',
      discount: 0,
      price: 550
    },
    {
      amount: 2000,
      title: 'лайки живые',
      discount: 5,
      price: 522
    },
    {
      amount: 5000,
      title: 'лайки живые',
      discount: 10,
      price: 495
    },
    {
      amount: 10000,
      title: 'лайки живые',
      discount: 15,
      price: 467
    }
  ];

  const ytLiveLikesAdvList = [
    'Запуск в течение 2 часов',
    'Скорость до 1000 в сутки',
    'Живые люди',
    'Гарантия бессрочная',
    'Можно заказывать повторно после выполнения'
  ];


  const ytLiveViewsPrice = [
    {
      amount: 1000,
      title: 'просмотры живые',
      discount: 0,
      price: 220
    },
    {
      amount: 2000,
      title: 'просмотры живые',
      discount: 5,
      price: 209
    },
    {
      amount: 5000,
      title: 'просмотры живые',
      discount: 10,
      price: 198
    },
    {
      amount: 10000,
      title: 'просмотры живые',
      discount: 15,
      price: 187
    }
  ];

  const ytLiveViewsAdvList = [
    'Запуск в течение 2 часов',
    'Скорость до 10000 в сутки',
    'Живые люди',
    'Гарантия бессрочная',
    '100% уникальный трафик'
  ];


  const ytLiveDislikesPrice = [
    {
      amount: 1000,
      title: 'дизлайки',
      discount: 0,
      price: 550
    },
    {
      amount: 2000,
      title: 'дизлайки',
      discount: 5,
      price: 522
    },
    {
      amount: 5000,
      title: 'дизлайки',
      discount: 10,
      price: 495
    },
    {
      amount: 10000,
      title: 'дизлайки',
      discount: 15,
      price: 467
    }
  ];

  const ytLiveDislikesAdvList = [
    'Запуск в течение 2 часов',
    'Скорость до 1000 в сутки',
    'Живые люди',
    'Гарантия бессрочная',
    'Можно заказывать повторно после выполнения'
  ];


  // instagram

  const igSubPrice = [
    {
      amount: 1000,
      title: 'подписчики обычные',
      discount: 0,
      price: 220
    },
    {
      amount: 2000,
      title: 'подписчики обычные',
      discount: 5,
      price: 209
    },
    {
      amount: 5000,
      title: 'подписчики обычные',
      discount: 10,
      price: 198
    },
    {
      amount: 10000,
      title: 'подписчики обычные',
      discount: 15,
      price: 187
    }
  ];

  const igSubAdvList = [
     'Запуск  в течение 1 часа',
     'Скорость до 5000 в сутки',
     'Подписчики частично русские и с аватарками',
     'Гарантия бессрочная',
     'Можно заказывать повторно после выполнения'
  ];


  const igLiveSubPrice = [
    {
      amount: 1000,
      title: 'подписчики живые',
      discount: 0,
      price: 550
    },
    {
      amount: 2000,
      title: 'подписчики живые',
      discount: 5,
      price: 522
    },
    {
      amount: 5000,
      title: 'подписчики живые',
      discount: 10,
      price: 495
    },
    {
      amount: 10000,
      title: 'подписчики живые',
      discount: 15,
      price: 467
    }
  ];

  const igLiveSubAdvList = [
     'Запуск в течение 2 часов',
     'Скорость до 3000 в сутки',
     'Подписчики живые люди',
     'Гарантия бессрочная',
     'Можно заказывать повторно после выполнения'
  ];


  const igLikesPrice = [
    {
      amount: 1000,
      title: 'лайки обычные',
      discount: 0,
      price: 90
    },
    {
      amount: 2000,
      title: 'лайки обычные',
      discount: 5,
      price: 85
    },
    {
      amount: 5000,
      title: 'лайки обычные',
      discount: 10,
      price: 81
    },
    {
      amount: 10000,
      title: 'лайки обычные',
      discount: 15,
      price: 76
    }
  ];

  const igLikesAdvList = [
     'Запуск в течение 1 часа',
     'Аккаунты среднего качества',
     'Гарантия результата',
     'Без банов, без списаний',
     'Можно заказывать повторно'
  ];


  const igLiveLikesPrice = [
    {
      amount: 1000,
      title: 'лайки живые',
      discount: 0,
      price: 180
    },
    {
      amount: 2000,
      title: 'лайки живые',
      discount: 5,
      price: 171
    },
    {
      amount: 5000,
      title: 'лайки живые',
      discount: 10,
      price: 162
    },
    {
      amount: 10000,
      title: 'лайки живые',
      discount: 15,
      price: 153
    }
  ];

  const igLiveLikesAdvList = [
     'Запуск в течение 2 часов',
     'Живые люди',
     'Гарантия результата',
     'Без банов, без списаний',
     'Можно заказывать повторно'
  ];


  const igAutoLikesPrice = [
    {
      amount: 1000,
      title: 'автолайки',
      discount: 0,
      price: 125
    },
    {
      amount: 2000,
      title: 'автолайки',
      discount: 5,
      price: 119
    },
    {
      amount: 5000,
      title: 'автолайки',
      discount: 10,
      price: 113
    },
    {
      amount: 10000,
      title: 'автолайки',
      discount: 15,
      price: 106
    }
  ];

  const igAutoLikesAdvList = [
     'Запуск в течение 1 часа',
     'Скорость 1500-3000 в сутки',
     'Автоматические лайки на новые публикации',
     'Активация авто-лайков в течении 4-х часов, затем можно выпускать новые посты',
     'Минимальное количество лайков на новый пост 30, максимальное - 7000'
  ];


  const igViewsIGTVPrice = [
    {
      amount: 1000,
      title: 'просмотры видео ig tv',
      discount: 0,
      price: 19
    },
    {
      amount: 5000,
      title: 'просмотры видео ig tv',
      discount: 5,
      price: 18
    },
    {
      amount: 10000,
      title: 'просмотры видео ig tv',
      discount: 10,
      price: 17
    },
    {
      amount: 20000,
      title: 'просмотры видео ig tv',
      discount: 15,
      price: 16
    }
  ];

  const igViewsIGTVAdvList = [
    'Запуск в течение 1 часа',
    'Живые люди',
    'Накрутка на IGTV видео в ленте',
    'Без банов, без списаний',
    'Вместе с просмотрами идут показы и охват (для бизнес профилей)'
  ];




  const igHistViewsPrice = [
    {
      amount: 1000,
      title: 'просмотры историй',
      discount: 0,
      price: 55
    },
    {
      amount: 5000,
      title: 'просмотры историй',
      discount: 5,
      price: 52
    },
    {
      amount: 10000,
      title: 'просмотры историй',
      discount: 10,
      price: 49
    },
    {
      amount: 20000,
      title: 'просмотры историй',
      discount: 15,
      price: 47
    }
  ];

  const igHistViewsAdvList = [
    'Запуск в течение 1 часа',
    'Живые люди',
    'Плавная скорость выполнения',
    'Без банов, без списаний',
    'Накрутка охвата и показов на публикацию с главной и "других"'
  ];


  const igSavePrice = [
    {
      amount: 1000,
      title: 'сохранение',
      discount: 0,
      price: 19
    },
    {
      amount: 2000,
      title: 'сохранение',
      discount: 5,
      price: 18
    },
    {
      amount: 5000,
      title: 'сохранение',
      discount: 10,
      price: 17
    },
    {
      amount: 10000,
      title: 'сохранение',
      discount: 15,
      price: 16
    }
  ];

  const igSaveAdvList = [
    'Старт в течении 5-30 минут, возможны задержки',
    'Накрутка сохранений публикации (закладки)',
    'Статистика сохранений отображается в бизнес-профилях'
  ];


  // telegram

  const tgChannelSubPrice = [
    {
      amount: 1000,
      title: 'просмотры живые',
      discount: 0,
      price: 198
    },
    {
      amount: 2000,
      title: 'просмотры живые',
      discount: 5,
      price: 188
    },
    {
      amount: 5000,
      title: 'просмотры живые',
      discount: 10,
      price: 178
    },
    {
      amount: 10000,
      title: 'просмотры живые',
      discount: 15,
      price: 168
    }
  ];

  const tgChannelSubAdvList = [
    'Скорость до 5000 в сутки',
    'Накрутка выполняется с запасом',
    'Старт в течении 0-12 часов',
    'Принимаются только открытые ссылки на канал'
  ];


  const tgGroupSubPrice = [
    {
      amount: 1000,
      title: 'просмотры живые',
      discount: 0,
      price: 198
    },
    {
      amount: 2000,
      title: 'просмотры живые',
      discount: 5,
      price: 188
    },
    {
      amount: 5000,
      title: 'просмотры живые',
      discount: 10,
      price: 178
    },
    {
      amount: 10000,
      title: 'просмотры живые',
      discount: 15,
      price: 168
    }
  ];

  const tgGroupSubAdvList = [
    'Скорость до 10000 в сутки',
    'Накрутка выполняется с запасом',
    'Запуск в течение 1 часа'
  ];


  const tgViewsPrice = [
    {
      amount: 1000,
      title: 'просмотры',
      discount: 0,
      price: 39
    },
    {
      amount: 5000,
      title: 'просмотры',
      discount: 5,
      price: 37
    },
    {
      amount: 10000,
      title: 'просмотры',
      discount: 10,
      price: 35
    },
    {
      amount: 20000,
      title: 'просмотры',
      discount: 15,
      price: 33
    }
  ];

  const tgViewsAdvList = [
    'Запуск в течение 1 часа',
    'Cкорость до 10000 в сутки',
    'Накрутка просмотров поста на канале',
    'Чтобы найти ссылку на пост нужно перейти в канал, возле нужного поста нажмите кнопку "поделиться" и затем внизу нажмите "скопировать ссылку" и вставьте её в поле'
  ];


  // twitch

  const twSubPrice = [
    {
      amount: 1000,
      title: 'подписчики на канал',
      discount: 0,
      price: 220
    },
    {
      amount: 2000,
      title: 'подписчики на канал',
      discount: 5,
      price: 209
    },
    {
      amount: 5000,
      title: 'подписчики на канал',
      discount: 10,
      price: 198
    },
    {
      amount: 10000,
      title: 'подписчики на канал',
      discount: 15,
      price: 187
    }
  ];

  const twSubAdvList = [
    'Запуск  в течение 3 часов',
    'Скорость от 2000 до 10000 в сутки',
    'Накрутка подписчиков на канал Twitch',
    'Гарантия бессрочная',
    'Можно заказывать повторно после выполнения'
  ];


  const twViewsPrice = [
    {
      amount: 1000,
      title: 'просмотры канала',
      discount: 0,
      price: 260
    },
    {
      amount: 2000,
      title: 'просмотры канала',
      discount: 5,
      price: 247
    },
    {
      amount: 5000,
      title: 'просмотры канала',
      discount: 10,
      price: 234
    },
    {
      amount: 10000,
      title: 'просмотры канала',
      discount: 15,
      price: 221
    }
  ];

  const twViewsAdvList = [
    'Запуск в течение 1 часа',
    'Скорость 1000-5000 в сутки',
    'Гарантия результата',
    'Без банов, без списаний',
    'Можно заказывать повторно'
  ];



  // tik-tok

  const ttLiveSubPrice = [
    {
      amount: 1000,
      title: 'подписчики живые',
      discount: 0,
      price: 880
    },
    {
      amount: 2000,
      title: 'подписчики живые',
      discount: 5,
      price: 836
    },
    {
      amount: 5000,
      title: 'подписчики живые',
      discount: 10,
      price: 792
    },
    {
      amount: 10000,
      title: 'подписчики живые',
      discount: 15,
      price: 748
    }
  ];

  const ttLiveSubAdvList = [
    'Запуск в течение 2 часов',
    'Живые люди',
    'Гарантия результата',
    'Без банов, без списаний',
    'Можно заказывать повторно'
  ];


  const ttLiveLikesPrice = [
    {
      amount: 1000,
      title: 'лайки живые',
      discount: 0,
      price: 220
    },
    {
      amount: 2000,
      title: 'лайки живые',
      discount: 5,
      price: 209
    },
    {
      amount: 5000,
      title: 'лайки живые',
      discount: 10,
      price: 198
    },
    {
      amount: 10000,
      title: 'лайки живые',
      discount: 15,
      price: 187
    }
  ];

  const ttLiveLikesAdvList = [
    'Запуск в течение 2 часов',
    'Живые люди',
    'Гарантия результата',
    'Без банов, без списаний',
    'Можно заказывать повторно'
  ];


  const ttVideoViewsPrice = [
    {
      amount: 1000,
      title: 'просмотры видео',
      discount: 0,
      price: 45
    },
    {
      amount: 5000,
      title: 'просмотры видео',
      discount: 5,
      price: 43
    },
    {
      amount: 10000,
      title: 'просмотры видео',
      discount: 10,
      price: 40
    },
    {
      amount: 20000,
      title: 'просмотры видео',
      discount: 15,
      price: 38
    }
  ];

  const ttVideoViewsAdvList = [
    'Запуск в течение 1 часа',
    'Живые люди',
    'Гарантия результата',
    'Без банов, без списаний',
    'Можно заказывать повторно'
  ];


  // vk

  const vkSubPrice = [
    {
      amount: 1000,
      title: 'подписчики обычные',
      discount: 0,
      price: 220
    },
    {
      amount: 2000,
      title: 'подписчики обычные',
      discount: 5,
      price: 209
    },
    {
      amount: 5000,
      title: 'подписчики обычные',
      discount: 10,
      price: 198
    },
    {
      amount: 10000,
      title: 'подписчики обычные',
      discount: 15,
      price: 187
    }
  ];

  const vkSubAdvList = [
     'Запуск в течение 1 часа',
     'Аккаунты среднего качества',
     'Гарантия результата',
     'Без банов, без списаний',
     'Можно заказывать повторно'
  ];


  const vkLiveSubPrice = [
    {
      amount: 1000,
      title: 'подписчики живые',
      discount: 0,
      price: 695
    },
    {
      amount: 2000,
      title: 'подписчики живые',
      discount: 5,
      price: 660
    },
    {
      amount: 5000,
      title: 'подписчики живые',
      discount: 10,
      price: 625
    },
    {
      amount: 10000,
      title: 'подписчики живые',
      discount: 15,
      price: 590
    }
  ];

  const vkLiveSubAdvList = [
     'Запуск в течение 4 часов',
     'Живые люди',
     'Гарантия результата',
     'Без банов, без списаний',
     'Можно заказывать повторно'
  ];


  const vkFriendsPrice = [
    {
      amount: 500,
      title: 'друзья в профиль',
      discount: 0,
      price: 360
    },
    {
      amount: 1000,
      title: 'друзья в профиль',
      discount: 5,
      price: 342
    },
    {
      amount: 2000,
      title: 'друзья в профиль',
      discount: 10,
      price: 324
    },
    {
      amount: 5000,
      title: 'друзья в профиль',
      discount: 15,
      price: 306
    }
  ];

  const vkFriendsAdvList = [
     'Запуск в течение 1 часа',
     'Скорость до 1000 в день',
     'Гарантия бессрочная',
     'Аватарки имеют 60% аккаунтов',
     'Можно заказывать повторно'
  ];


  const vkLiveLikesPrice = [
    {
      amount: 1000,
      title: 'лайки живые',
      discount: 0,
      price: 125
    },
    {
      amount: 2000,
      title: 'лайки живые',
      discount: 5,
      price: 119
    },
    {
      amount: 5000,
      title: 'лайки живые',
      discount: 10,
      price: 113
    },
    {
      amount: 10000,
      title: 'лайки живые',
      discount: 15,
      price: 106
    }
  ];

  const vkLiveLikesAdvList = [
     'Запуск в течение 2 часов',
     'Живые люди',
     'Гарантия результата',
     'Без банов, без списаний',
     'Можно заказывать повторно'
  ];


  const vkLiveViewsPrice = [
    {
      amount: 1000,
      title: 'просмотры живые (глазик)',
      discount: 0,
      price: 39
    },
    {
      amount: 5000,
      title: 'просмотры живые (глазик)',
      discount: 5,
      price: 37
    },
    {
      amount: 10000,
      title: 'просмотры живые (глазик)',
      discount: 10,
      price: 35
    },
    {
      amount: 20000,
      title: 'просмотры живые (глазик)',
      discount: 15,
      price: 33
    }
  ];

  const vkLiveViewsAdvList = [
     'Запуск в течение 1 часа',
     'Живые люди',
     'Гарантия результата',
     'Без банов, без списаний',
     'Можно заказывать повторно'
  ];


  const vkRepPrice = [
    {
      amount: 1000,
      title: 'репосты',
      discount: 0,
      price: 290
    },
    {
      amount: 2000,
      title: 'репосты',
      discount: 5,
      price: 275
    },
    {
      amount: 5000,
      title: 'репосты',
      discount: 10,
      price: 261
    },
    {
      amount: 10000,
      title: 'репосты',
      discount: 15,
      price: 246
    }
  ];

  const vkRepAdvList = [
     'Запуск в течение 1 часа',
     'Живые люди',
     'Гарантия результата',
     'Без банов, без списаний',
     'Можно заказывать повторно'
  ];


  const vkOprPrice = [
    {
      amount: 1000,
      title: 'опросы',
      discount: 0,
      price: 125
    },
    {
      amount: 2000,
      title: 'опросы',
      discount: 5,
      price: 119
    },
    {
      amount: 5000,
      title: 'опросы',
      discount: 10,
      price: 113
    },
    {
      amount: 10000,
      title: 'опросы',
      discount: 15,
      price: 106
    }
  ];

  const vkOprAdvList = [
     'Запуск в течение 1 часа',
     'Живые люди',
     'Гарантия результата',
     'Без банов, без списаний',
     'Можно заказывать повторно'
  ];


  const vkVideoViewsPrice = [
    {
      amount: 1000,
      title: 'просмотры видео',
      discount: 0,
      price: 45
    },
    {
      amount: 5000,
      title: 'просмотры видео',
      discount: 5,
      price: 43
    },
    {
      amount: 10000,
      title: 'просмотры видео',
      discount: 10,
      price: 40
    },
    {
      amount: 20000,
      title: 'просмотры видео',
      discount: 15,
      price: 38
    }
  ];

  const vkVideoViewsAdvList = [
     'Запуск в течение 1 часа',
     'Живые люди',
     'Гарантия результата',
     'Без банов, без списаний',
     'Можно заказывать повторно'
  ];


  // ok

  const okLiveSubPrice = [
    {
      amount: 1000,
      title: 'подписчики живые',
      discount: 0,
      price: 198
    },
    {
      amount: 2000,
      title: 'подписчики живые',
      discount: 5,
      price: 188
    },
    {
      amount: 5000,
      title: 'подписчики живые',
      discount: 10,
      price: 178
    },
    {
      amount: 10000,
      title: 'подписчики живые',
      discount: 15,
      price: 168
    }
  ];

  const okLiveSubAdvList = [
    'Запуск в течение 2 часов',
    'Живые люди',
    'Гарантия результата',
    'Без банов, без списаний',
    'Можно заказывать повторно'
  ];


  $('.modal__close').click(function() {
    $('.serv-box').remove();
    let exampleForm = document.getElementsByName('serv');
    for(let i = 0; i < exampleForm.length; i++){
      if(exampleForm[i].type == 'radio' && exampleForm[i].checked == true ){
        exampleForm[i].checked = false;
      }
    }

    $('.item-advant').remove();
  });

  function insertAdvList(list, numCol) {
    list.forEach((item, i) => {
      let itemAdvant = $(`<div class="item-advant"></div>`)
        .append(`<img src="img/okey.png" alt="">`)
        .append(`<span>${item}</span>`)

      if(item.toLowerCase() === 'аккаунты среднего качества') {
        itemAdvant = $(`<div class="item-advant"></div>`)
          .append(`<img src="img/smile.png" alt="">`)
          .append(`<span>${item}</span>`);
      }

      if(i < 2) {
        $('.advant-list__col').eq(numCol - 1).append(itemAdvant);
      }
      else if(i < 4) {
        $('.advant-list__col').eq(numCol).append(itemAdvant);
      }
      else {
        $('.advant-list__col').eq(numCol + 1).append(itemAdvant);
      }

    });
  }

  function insertPrice(price) {
    price.forEach(item => {
      let newElem = $(`<div class="serv-box"></div>`)
        .append(`<p class="serv-box__val">${item.amount}</p>`)
        .append(`<p class="serv-box__name">${item.title}</p>`)
        .append(`<p class="serv-box__discount">скидка ${item.discount}%</p>`)
        .append(`<p class="serv-box__price">${item.price} рублей за 1000</p>`)
        .append(`<a href="/order" class="serv-box__buy">КУПИТЬ ЗА ${item.amount / 1000 * item.price} РУБ</a>`)

      $('.serv-box-items').append(newElem);
    });
  }

  function selectSocialNet(socialNet, snPrice, snAdvList, inputNum, numCol) {
    $('input:radio[name="serv"]').change(
      function() {
        if (this.checked && this.id == `input-serv-${socialNet}-${inputNum}`) {
          $('.serv-box').remove();
          $('.item-advant').remove();
          insertPrice(snPrice);
          insertAdvList(snAdvList, numCol);
        }
      });
  }

  // selectSocialNet('имя соцсети', список_с_ценами, список_с_описанием, номер_инпута, номер_колонки)

  selectSocialNet('facebook', fbLiveSubPrice, fbLiveSubAdvList, 2, 1);

  selectSocialNet('youtube', ytLiveSubPrice, ytLiveSubAdvList, 2, 4);
  selectSocialNet('youtube', ytLiveLikesPrice, ytLiveLikesAdvList, 4, 4);
  selectSocialNet('youtube', ytLiveViewsPrice, ytLiveViewsAdvList, 6, 4);
  selectSocialNet('youtube', ytLiveDislikesPrice, ytLiveDislikesAdvList, 8, 4);

  selectSocialNet('inst', igSubPrice, igSubAdvList, 1, 7);
  selectSocialNet('inst', igLiveSubPrice, igLiveSubAdvList, 2, 7);
  selectSocialNet('inst', igLikesPrice, igLikesAdvList, 3, 7);
  selectSocialNet('inst', igLiveLikesPrice, igLiveLikesAdvList, 4, 7);
  selectSocialNet('inst', igAutoLikesPrice, igAutoLikesAdvList, 5, 7);
  selectSocialNet('inst', igViewsIGTVPrice, igViewsIGTVAdvList, 6, 7);
  selectSocialNet('inst', igHistViewsPrice, igHistViewsAdvList, 7, 7);
  selectSocialNet('inst', igSavePrice, igSaveAdvList, 8, 7);

  selectSocialNet('tg', tgChannelSubPrice, tgChannelSubAdvList, 1, 10);
  selectSocialNet('tg', tgGroupSubPrice, tgGroupSubAdvList, 2, 10);
  selectSocialNet('tg', tgViewsPrice, tgViewsAdvList, 3, 10);

  selectSocialNet('twitch', twSubPrice, twSubAdvList, 1, 13);
  selectSocialNet('twitch', twViewsPrice, twViewsAdvList, 2, 13);

  selectSocialNet('tiktok', ttLiveSubPrice, ttLiveSubAdvList, 2, 16);
  selectSocialNet('tiktok', ttLiveLikesPrice, ttLiveLikesAdvList, 4, 16);
  selectSocialNet('tiktok', ttVideoViewsPrice, ttVideoViewsAdvList, 6, 16);

  selectSocialNet('vk', vkSubPrice, vkSubAdvList, 1, 19);
  selectSocialNet('vk', vkLiveSubPrice, vkLiveSubAdvList, 2, 19);
  selectSocialNet('vk', vkFriendsPrice, vkFriendsAdvList, 3, 19);
  selectSocialNet('vk', vkLiveLikesPrice, vkLiveLikesAdvList, 4, 19);
  selectSocialNet('vk', vkLiveViewsPrice, vkLiveViewsAdvList, 5, 19);
  selectSocialNet('vk', vkRepPrice, vkRepAdvList, 6, 19);
  selectSocialNet('vk', vkOprPrice, vkOprAdvList, 7, 19);
  selectSocialNet('vk', vkVideoViewsPrice, vkVideoViewsAdvList, 8, 19);

  selectSocialNet('ok', okLiveSubPrice, okLiveSubAdvList, 2, 22);



});
