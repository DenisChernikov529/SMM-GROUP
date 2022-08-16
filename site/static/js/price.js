$(function() {
      var fapzh = parseFloat($('#fapzh').text().replace(",", "."));//Подписчики живые
      // fapzh = 0.498;

      var yopzh = parseFloat($('#yopzh').text().replace(",", "."));//Подписчики живые
      // yopzh = 0.88;
      var yolzh = parseFloat($('#yolzh').text().replace(",", "."));//Лайки живые
      // yolzh = 0.55;
      var yoprzh = parseFloat($('#yoprzh').text().replace(",", "."));//Просмотры живые
      // yoprzh = 0.22;
      var yodz = parseFloat($('#yodz').text().replace(",", "."));//Дизлайки
      // yodz = 0.55;

      var inspob = parseFloat($('#inspob').text().replace(",", "."));//Подписчики обычные
      // inspob = 0.22;
      var inspzh = parseFloat($('#inspzh').text().replace(",", "."));//Подписчики живые
      // inspzh = 0.55;
      var inslob = parseFloat($('#inslob').text().replace(",", "."));//Лайки обычные
      // inslob = 0.09;
      var inslzh = parseFloat($('#inslzh').text().replace(",", "."));//Лайки живые
      // inslzh = 0.18;
      var insaul = parseFloat($('#insaul').text().replace(",", "."));//Автолайки
      // insaul = 0.125;
      var insprvi = parseFloat($('#insprvi').text().replace(",", "."));//Просмотры видео IG TV
      // insprvi = 0.019;
      var inspris = parseFloat($('#inspris').text().replace(",", "."));//Просмотры историй (story)
      // inspris = 0.055;
      var inssohr = parseFloat($('#inssohr').text().replace(",", "."));//Сохранение
      // inssohr = 0.019;

      var tepnk = parseFloat($('#tepnk').text().replace(",", "."));//Подписчики на канал
      // tepnk = 0.198;
      var tepvgich = parseFloat($('#tepvgich').text().replace(",", "."));//Подписчики в группы, чаты
      // tepvgich = 0.198;
      var tepr = parseFloat($('#tepr').text().replace(",", "."));//Просмотры
      // tepr = 0.039;

      var twpnk = parseFloat($('#twpnk').text().replace(",", "."));//Подписчики на канал
      // var twpnk = 0.22;
      var twprk = parseFloat($('#twprk').text().replace(",", "."));//Просмотры канала
      // var twprk = 0.26;

      var tipzh = parseFloat($('#tipzh').text().replace(",", "."));//Подписчики живые
      // var tipzh = 0.88;
      var tilzh = parseFloat($('#tilzh').text().replace(",", "."));//Лайки живые
      // var tilzh = 0.22; 
      var tiprvi = parseFloat($('#tiprvi').text().replace(",", "."));//Просмотры видео
      // var tiprvi = 0.045;

      var vkpob = parseFloat($('#vkpob').text().replace(",", "."));//Подписчики обычные
      // vkpob = 0.22;
      var vkpzh = parseFloat($('#vkpzh').text().replace(",", "."));//Подписчики живые
      // vkpzh = 0.695;
      var vkdrvpr = parseFloat($('#vkdrvpr').text().replace(",", "."));//Друзья в профиль
      // vkdrvpr = 0.36;
      var vklzh = parseFloat($('#vklzh').text().replace(",", "."));//Лайки живые
      // vklzh = 0.125;
      var vkprzh = parseFloat($('#vkprzh').text().replace(",", "."));//Просмотры живые (глазик)
      // vkprzh = 0.039;
      var vkre = parseFloat($('#vkre').text().replace(",", "."));//Репосты
      // vkre = 0.29;
      var vkop = parseFloat($('#vkop').text().replace(",", "."));//Опросы
      // vkop = 0.125;
      var vkprvi = parseFloat($('#vkprvi').text().replace(",", "."));//Просмотры видео
      // vkprvi = 0.045;

      var odpzh = parseFloat($('#odpzh').text().replace(",", "."));//Подписчики живые
      // odpzh = 0.198;
  // facebook

  const fbLiveSubPrice = [
    {
      amount: 1000,
      title: 'подписчики обычные',
      discount: 0,
      price: fapzh * 1000
    },
    {
      amount: 2000,
      title: 'подписчики обычные',
      discount: 5,
      price: fapzh * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'подписчики обычные',
      discount: 10,
      price: fapzh * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'подписчики обычные',
      discount: 15,
      price: fapzh * 1000 * 0.85
    }
  ];

  const fbLiveSubAdvList = [
    'Запуск в течение 1 часа',
    'Живые люди',
    'Гарантия результата',
    // 'Без банов, без списаний',
    'Скорость до 200 в сутки'
  ];


  // youtube

  const ytLiveSubPrice = [
    {
      amount: 1000,
      title: 'подписчики живые',
      discount: 0,
      price: yopzh * 1000
    },
    {
      amount: 2000,
      title: 'подписчики живые',
      discount: 5,
      price: yopzh * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'подписчики живые',
      discount: 10,
      price: yopzh * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'подписчики живые',
      discount: 15,
      price: yopzh * 1000 * 0.85
    }
  ];

  const ytLiveSubAdvList = [
    'Запуск в течение 2 часов',
    'Скорость до 1000 в сутки',
    'Подписчики живые люди',
    //'Гарантия бессрочная',
    'Можно заказывать повторно после выполнения'
  ];


  const ytLiveLikesPrice = [
    {
      amount: 1000,
      title: 'лайки живые',
      discount: 0,
      price: yolzh * 1000
    },
    {
      amount: 2000,
      title: 'лайки живые',
      discount: 5,
      price: yolzh * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'лайки живые',
      discount: 10,
      price: yolzh * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'лайки живые',
      discount: 15,
      price: yolzh * 1000 * 0.85
    }
  ];

  const ytLiveLikesAdvList = [
    'Запуск в течение 2 часов',
    'Скорость до 1000 в сутки',
    'Живые люди',
    //'Гарантия бессрочная',
    'Можно заказывать повторно после выполнения'
  ];


  const ytLiveViewsPrice = [
    {
      amount: 1000,
      title: 'просмотры живые',
      discount: 0,
      price: yoprzh * 1000
    },
    {
      amount: 2000,
      title: 'просмотры живые',
      discount: 5,
      price: yoprzh * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'просмотры живые',
      discount: 10,
      price: yoprzh * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'просмотры живые',
      discount: 15,
      price: yoprzh * 1000 * 0.85
    }
  ];

  const ytLiveViewsAdvList = [
    'Запуск в течение 2 часов',
    'Скорость до 10000 в сутки',
    'Живые люди',
    //'Гарантия бессрочная',
    '100% уникальный трафик'
  ];


  const ytLiveDislikesPrice = [
    {
      amount: 1000,
      title: 'дизлайки',
      discount: 0,
      price: yodz * 1000
    },
    {
      amount: 2000,
      title: 'дизлайки',
      discount: 5,
      price: yodz * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'дизлайки',
      discount: 10,
      price: yodz * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'дизлайки',
      discount: 15,
      price: yodz * 1000 * 0.85
    }
  ];

  const ytLiveDislikesAdvList = [
    'Запуск в течение 2 часов',
    'Скорость до 1000 в сутки',
    'Живые люди',
    //'Гарантия бессрочная',
    'Можно заказывать повторно после выполнения'
  ];


  // instagram

  const igSubPrice = [
    {
      amount: 1000,
      title: 'подписчики обычные',
      discount: 0,
      price: inspob * 1000
    },
    {
      amount: 2000,
      title: 'подписчики обычные',
      discount: 5,
      price: inspob * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'подписчики обычные',
      discount: 10,
      price: inspob * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'подписчики обычные',
      discount: 15,
      price: inspob * 1000 * 0.85
    }
  ];

  const igSubAdvList = [
     'Запуск  в течение 1 часа',
     'Скорость до 5000 в сутки',
     'Подписчики частично русские и с аватарками',
     //'Гарантия бессрочная',
     'Можно заказывать повторно после выполнения'
  ];


  const igLiveSubPrice = [
    {
      amount: 1000,
      title: 'подписчики живые',
      discount: 0,
      price: inspzh * 1000
    },
    {
      amount: 2000,
      title: 'подписчики живые',
      discount: 5,
      price: inspzh * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'подписчики живые',
      discount: 10,
      price: inspzh * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'подписчики живые',
      discount: 15,
      price: inspzh * 1000 * 0.85
    }
  ];

  const igLiveSubAdvList = [
     'Запуск в течение 2 часов',
     'Скорость до 3000 в сутки',
     'Подписчики живые люди',
     //'Гарантия бессрочная',
     'Можно заказывать повторно после выполнения'
  ];


  const igLikesPrice = [
    {
      amount: 1000,
      title: 'лайки обычные',
      discount: 0,
      price: inslob * 1000
    },
    {
      amount: 2000,
      title: 'лайки обычные',
      discount: 5,
      price: inslob * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'лайки обычные',
      discount: 10,
      price: inslob * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'лайки обычные',
      discount: 15,
      price: inslob * 1000 * 0.85
    }
  ];

  const igLikesAdvList = [
     'Запуск в течение 1 часа',
     'Аккаунты среднего качества',
     //'Гарантия результата',
     'Без банов, без списаний',
     'Можно заказывать повторно'
  ];


  const igLiveLikesPrice = [
    {
      amount: 1000,
      title: 'лайки живые',
      discount: 0,
      price: inslzh * 1000
    },
    {
      amount: 2000,
      title: 'лайки живые',
      discount: 5,
      price: inslzh * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'лайки живые',
      discount: 10,
      price: inslzh * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'лайки живые',
      discount: 15,
      price: inslzh * 1000 * 0.85
    }
  ];

  const igLiveLikesAdvList = [
     'Запуск в течение 2 часов',
     'Живые люди',
     //'Гарантия результата',
     'Без банов, без списаний',
     'Можно заказывать повторно'
  ];


  const igAutoLikesPrice = [
    {
      amount: 1000,
      title: 'автолайки',
      discount: 0,
      price: insaul * 1000
    },
    {
      amount: 2000,
      title: 'автолайки',
      discount: 5,
      price: insaul * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'автолайки',
      discount: 10,
      price: insaul * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'автолайки',
      discount: 15,
      price: insaul * 1000 * 0.85
    }
  ];

  const igAutoLikesAdvList = [
     'Запуск в течение 1 часа',
     'Скорость 1500-3000 в сутки',
     //'Автоматические лайки на новые публикации',
     'Активация авто-лайков в течении 4-х часов, затем можно выпускать новые посты',
     'Минимальное количество лайков на новый пост 30, максимальное - 7000'
  ];


  const igViewsIGTVPrice = [
    {
      amount: 1000,
      title: 'просмотры видео ig tv',
      discount: 0,
      price: insprvi * 1000
    },
    {
      amount: 5000,
      title: 'просмотры видео ig tv',
      discount: 5,
      price: insprvi * 1000 * 0.95
    },
    {
      amount: 10000,
      title: 'просмотры видео ig tv',
      discount: 10,
      price: insprvi * 1000 * 0.90
    },
    {
      amount: 20000,
      title: 'просмотры видео ig tv',
      discount: 15,
      price: insprvi * 1000 * 0.85
    }
  ];

  const igViewsIGTVAdvList = [
    'Запуск в течение 1 часа',
    'Живые люди',
    'Накрутка на IGTV видео в ленте',
    //'Без банов, без списаний',
    'Вместе с просмотрами идут показы и охват (для бизнес профилей)'
  ];




  const igHistViewsPrice = [
    {
      amount: 1000,
      title: 'просмотры историй',
      discount: 0,
      price: inspris * 1000
    },
    {
      amount: 5000,
      title: 'просмотры историй',
      discount: 5,
      price: inspris * 1000 * 0.95
    },
    {
      amount: 10000,
      title: 'просмотры историй',
      discount: 10,
      price: inspris * 1000 * 0.90
    },
    {
      amount: 20000,
      title: 'просмотры историй',
      discount: 15,
      price: inspris * 1000 * 0.85
    }
  ];

  const igHistViewsAdvList = [
    'Запуск в течение 1 часа',
    'Живые люди',
    'Плавная скорость выполнения',
    //'Без банов, без списаний',
    'Накрутка охвата и показов на публикацию с главной и "других"'
  ];


  const igSavePrice = [
    {
      amount: 1000,
      title: 'сохранение',
      discount: 0,
      price: inssohr * 1000
    },
    {
      amount: 2000,
      title: 'сохранение',
      discount: 5,
      price: inssohr * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'сохранение',
      discount: 10,
      price: inssohr * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'сохранение',
      discount: 15,
      price: inssohr * 1000 * 0.85
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
      title: 'подписчики на канал',
      discount: 0,
      price: tepnk * 1000
    },
    {
      amount: 2000,
      title: 'подписчики на канал',
      discount: 5,
      price: tepnk * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'подписчики на канал',
      discount: 10,
      price: tepnk * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'подписчики на канал',
      discount: 15,
      price: tepnk * 1000 * 0.85
    }
  ];

  const tgChannelSubAdvList = [
    'Скорость до 5000 в сутки',
    'Накрутка выполняется с запасом',
    'Старт в течении 0-12 часов',
    'Принимаются только открытые ссылки на канал'
  ];


  // const tgGroupSubPrice = [
  //   {
  //     amount: 1000,
  //     title: 'просмотры живые',
  //     discount: 0,
  //     price: tepvgich * 1000
  //   },
  //   {
  //     amount: 2000,
  //     title: 'просмотры живые',
  //     discount: 5,
  //     price: tepvgich * 1000 * 0.95
  //   },
  //   {
  //     amount: 5000,
  //     title: 'просмотры живые',
  //     discount: 10,
  //     price: tepvgich * 1000 * 0.90
  //   },
  //   {
  //     amount: 10000,
  //     title: 'просмотры живые',
  //     discount: 15,
  //     price: tepvgich * 1000 * 0.85
  //   }
  // ];

  // const tgGroupSubAdvList = [
  //   'Скорость до 10000 в сутки',
  //   'Накрутка выполняется с запасом',
  //   'Запуск в течение 1 часа'
  // ];


  const tgViewsPrice = [
    {
      amount: 1000,
      title: 'просмотры',
      discount: 0,
      price: tepr * 1000
    },
    {
      amount: 5000,
      title: 'просмотры',
      discount: 5,
      price: tepr * 1000 * 0.95
    },
    {
      amount: 10000,
      title: 'просмотры',
      discount: 10,
      price: tepr * 1000 * 0.90
    },
    {
      amount: 20000,
      title: 'просмотры',
      discount: 15,
      price: tepr * 1000 * 0.85
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
      price: twpnk * 1000
    },
    {
      amount: 2000,
      title: 'подписчики на канал',
      discount: 5,
      price: twpnk * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'подписчики на канал',
      discount: 10,
      price: twpnk * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'подписчики на канал',
      discount: 15,
      price: twpnk * 1000 * 0.85
    }
  ];

  const twSubAdvList = [
    'Запуск  в течение 3 часов',
    'Скорость от 2000 до 10000 в сутки',
    'Накрутка подписчиков на канал Twitch',
    //'Гарантия бессрочная',
    'Можно заказывать повторно после выполнения'
  ];


  const twViewsPrice = [
    {
      amount: 1000,
      title: 'просмотры канала',
      discount: 0,
      price: twprk * 1000
    },
    {
      amount: 2000,
      title: 'просмотры канала',
      discount: 5,
      price: twprk * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'просмотры канала',
      discount: 10,
      price: twprk * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'просмотры канала',
      discount: 15,
      price: twprk * 1000 * 0.85
    }
  ];

  const twViewsAdvList = [
    'Запуск в течение 1 часа',
    'Скорость 1000-5000 в сутки',
    //'Гарантия результата',
    'Без банов, без списаний',
    'Можно заказывать повторно'
  ];



  // tik-tok

  const ttLiveSubPrice = [
    {
      amount: 1000,
      title: 'подписчики живые',
      discount: 0,
      price: tipzh * 1000
    },
    {
      amount: 2000,
      title: 'подписчики живые',
      discount: 5,
      price: tipzh * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'подписчики живые',
      discount: 10,
      price: tipzh * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'подписчики живые',
      discount: 15,
      price: tipzh * 1000 * 0.85
    }
  ];

  const ttLiveSubAdvList = [
    'Запуск в течение 2 часов',
    'Живые люди',
    //'Гарантия результата',
    'Без банов, без списаний',
    'Можно заказывать повторно'
  ];


  const ttLiveLikesPrice = [
    {
      amount: 1000,
      title: 'лайки живые',
      discount: 0,
      price: tilzh * 1000
    },
    {
      amount: 2000,
      title: 'лайки живые',
      discount: 5,
      price: tilzh * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'лайки живые',
      discount: 10,
      price: tilzh * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'лайки живые',
      discount: 15,
      price: tilzh * 1000 * 0.85
    }
  ];

  const ttLiveLikesAdvList = [
    'Запуск в течение 2 часов',
    'Живые люди',
    //'Гарантия результата',
    'Без банов, без списаний',
    'Можно заказывать повторно'
  ];


  const ttVideoViewsPrice = [
    {
      amount: 1000,
      title: 'просмотры видео',
      discount: 0,
      price: tiprvi * 1000
    },
    {
      amount: 5000,
      title: 'просмотры видео',
      discount: 5,
      price: tiprvi * 1000 * 0.95
    },
    {
      amount: 10000,
      title: 'просмотры видео',
      discount: 10,
      price: tiprvi * 1000 * 0.90
    },
    {
      amount: 20000,
      title: 'просмотры видео',
      discount: 15,
      price: tiprvi * 1000 * 0.85
    }
  ];

  const ttVideoViewsAdvList = [
    'Запуск в течение 1 часа',
    'Живые люди',
    //'Гарантия результата',
    'Без банов, без списаний',
    'Можно заказывать повторно'
  ];


  // vk

  const vkSubPrice = [
    {
      amount: 1000,
      title: 'подписчики обычные',
      discount: 0,
      price: vkpob * 1000
    },
    {
      amount: 2000,
      title: 'подписчики обычные',
      discount: 5,
      price: vkpob * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'подписчики обычные',
      discount: 10,
      price: vkpob * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'подписчики обычные',
      discount: 15,
      price: vkpob * 1000 * 0.85
    }
  ];

  const vkSubAdvList = [
     'Запуск в течение 1 часа',
     'Аккаунты среднего качества',
     //'Гарантия результата',
     'Без банов, без списаний',
     'Можно заказывать повторно'
  ];


  const vkLiveSubPrice = [
    {
      amount: 1000,
      title: 'подписчики живые',
      discount: 0,
      price: vkpzh * 1000
    },
    {
      amount: 2000,
      title: 'подписчики живые',
      discount: 5,
      price: vkpzh * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'подписчики живые',
      discount: 10,
      price: vkpzh * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'подписчики живые',
      discount: 15,
      price: vkpzh * 1000 * 0.85
    }
  ];

  const vkLiveSubAdvList = [
     'Запуск в течение 4 часов',
     'Живые люди',
     //'Гарантия результата',
     'Без банов, без списаний',
     'Можно заказывать повторно'
  ];


  const vkFriendsPrice = [
    {
      amount: 500,
      title: 'друзья в профиль',
      discount: 0,
      price: vkdrvpr * 1000
    },
    {
      amount: 1000,
      title: 'друзья в профиль',
      discount: 5,
      price: vkdrvpr * 1000 * 0.95
    },
    {
      amount: 2000,
      title: 'друзья в профиль',
      discount: 10,
      price: vkdrvpr * 1000 * 0.90
    },
    {
      amount: 5000,
      title: 'друзья в профиль',
      discount: 15,
      price: vkdrvpr * 1000 * 0.85
    }
  ];

  const vkFriendsAdvList = [
     'Запуск в течение 1 часа',
     'Скорость до 1000 в день',
     //'Гарантия бессрочная',
     'Аватарки имеют 60% аккаунтов',
     'Можно заказывать повторно'
  ];


  const vkLiveLikesPrice = [
    {
      amount: 1000,
      title: 'лайки живые',
      discount: 0,
      price: vklzh * 1000
    },
    {
      amount: 2000,
      title: 'лайки живые',
      discount: 5,
      price: vklzh * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'лайки живые',
      discount: 10,
      price: vklzh * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'лайки живые',
      discount: 15,
      price: vklzh * 1000 * 0.85
    }
  ];

  const vkLiveLikesAdvList = [
     'Запуск в течение 2 часов',
     'Живые люди',
     //'Гарантия результата',
     'Без банов, без списаний',
     'Можно заказывать повторно'
  ];


  const vkLiveViewsPrice = [
    {
      amount: 1000,
      title: 'просмотры живые (глазик)',
      discount: 0,
      price: vkprzh * 1000
    },
    {
      amount: 5000,
      title: 'просмотры живые (глазик)',
      discount: 5,
      price: vkprzh * 1000 * 0.95
    },
    {
      amount: 10000,
      title: 'просмотры живые (глазик)',
      discount: 10,
      price: vkprzh * 1000 * 0.90
    },
    {
      amount: 20000,
      title: 'просмотры живые (глазик)',
      discount: 15,
      price: vkprzh * 1000 * 0.85
    }
  ];

  const vkLiveViewsAdvList = [
     'Запуск в течение 1 часа',
     'Живые люди',
     //'Гарантия результата',
     'Без банов, без списаний',
     'Можно заказывать повторно'
  ];


  const vkRepPrice = [
    {
      amount: 1000,
      title: 'репосты',
      discount: 0,
      price: vkre * 1000
    },
    {
      amount: 2000,
      title: 'репосты',
      discount: 5,
      price: vkre * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'репосты',
      discount: 10,
      price: vkre * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'репосты',
      discount: 15,
      price: vkre * 1000 * 0.85
    }
  ];

  const vkRepAdvList = [
     'Запуск в течение 1 часа',
     'Живые люди',
     //'Гарантия результата',
     'Без банов, без списаний',
     'Можно заказывать повторно'
  ];


  const vkOprPrice = [
    {
      amount: 1000,
      title: 'опросы',
      discount: 0,
      price: vkop * 1000
    },
    {
      amount: 2000,
      title: 'опросы',
      discount: 5,
      price: vkop * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'опросы',
      discount: 10,
      price: vkop * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'опросы',
      discount: 15,
      price: vkop * 1000 * 0.85
    }
  ];

  const vkOprAdvList = [
     'Запуск в течение 1 часа',
     'Живые люди',
     //'Гарантия результата',
     'Без банов, без списаний',
     'Можно заказывать повторно'
  ];


  const vkVideoViewsPrice = [
    {
      amount: 1000,
      title: 'просмотры видео',
      discount: 0,
      price: vkprvi * 1000
    },
    {
      amount: 5000,
      title: 'просмотры видео',
      discount: 5,
      price: vkprvi * 1000 * 0.95
    },
    {
      amount: 10000,
      title: 'просмотры видео',
      discount: 10,
      price: vkprvi * 1000 * 0.90
    },
    {
      amount: 20000,
      title: 'просмотры видео',
      discount: 15,
      price: vkprvi * 1000 * 0.85
    }
  ];

  const vkVideoViewsAdvList = [
     'Запуск в течение 1 часа',
     'Живые люди',
     //'Гарантия результата',
     'Без банов, без списаний',
     'Можно заказывать повторно'
  ];


  // ok

  const okLiveSubPrice = [
    {
      amount: 1000,
      title: 'подписчики живые',
      discount: 0,
      price: odpzh * 1000
    },
    {
      amount: 2000,
      title: 'подписчики живые',
      discount: 5,
      price: odpzh * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'подписчики живые',
      discount: 10,
      price: odpzh * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'подписчики живые',
      discount: 15,
      price: odpzh * 1000 * 0.85
    }
  ];

  const okLiveSubAdvList = [
    'Запуск в течение 2 часов',
    'Живые люди',
    //'Гарантия результата',
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

    $('.advant-list__col').remove();
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
      let newItem = $(`<div class="advant-list__col"></div>`).append(itemAdvant);

      $('.advant-list').append(newItem);
      if(list.length === 3 && i === 2) {
        $('.advant-list').append(`<div class="advant-list__col"></div>`);
      }

    });
  }

  function insertPrice(price) {
    price.forEach(item => {
      let newElem = $(`<div class="serv-box"></div>`)
        .append(`<p class="serv-box__val">${item.amount}</p>`)
        .append(`<p class="serv-box__name">${item.title}</p>`)
        .append(`<p class="serv-box__discount">скидка ${item.discount}%</p>`)
        .append(`<p class="serv-box__price">${(item.price).toFixed(2)} рублей за 1000</p>`)
        .append(`<a href="/order" class="serv-box__buy">КУПИТЬ ЗА ${(item.amount / 1000 * item.price).toFixed(2)} РУБ</a>`)
      $('.serv-box-items').append(newElem);
      
    });
  }

  function initSocialNet() {
    $('.service__more').click(
      function() {

        switch($(this).attr('data-targ')) {
          case 'fb': 
            $("#input-serv-facebook-2").prop("checked", true);
            insertPrice(fbLiveSubPrice);
            insertAdvList(fbLiveSubAdvList);
          break;

          case 'youtube': 
            $("#input-serv-youtube-2").prop("checked", true);
            insertPrice(ytLiveSubPrice);
            insertAdvList(ytLiveSubAdvList);
          break;

          case 'instagram':
            $("#input-serv-inst-1").prop("checked", true);
            insertPrice(igSubPrice);
            insertAdvList(igSubAdvList);
          break;

          case 'telegram': 
            $("#input-serv-tg-1").prop("checked", true);
            insertPrice(tgChannelSubPrice);
            insertAdvList(tgChannelSubAdvList);
          break;

          case 'twitch':
            $("#input-serv-twitch-1").prop("checked", true);
            insertPrice(twSubPrice);
            insertAdvList(twSubAdvList);
          break;

          case 'tiktok':
            $("#input-serv-tiktok-2").prop("checked", true);
            insertPrice(ttLiveSubPrice);
            insertAdvList(ttLiveSubAdvList);
          break;
          
          case 'vk':
            $("#input-serv-vk-1").prop("checked", true);
            insertPrice(vkSubPrice);
            insertAdvList(vkSubAdvList);
          break;

          case 'ok':
            $("#input-serv-ok-2").prop("checked", true);
            insertPrice(okLiveSubPrice);
            insertAdvList(okLiveSubAdvList);
          break;
        }
        
      }
    )
  }

  function selectSocialNet(socialNet, snPrice, snAdvList, inputNum) {
 
    $('input:radio[name="serv"]').change(
      function() {
        if (this.checked && this.id == `input-serv-${socialNet}-${inputNum}`) {
          $('.serv-box').remove();
          $('.advant-list__col').remove();
          insertPrice(snPrice);
          insertAdvList(snAdvList);
        }
        
      });
  }

  // selectSocialNet('имя соцсети', список_с_ценами, список_с_описанием, номер_инпута, номер_колонки)

  initSocialNet();

  selectSocialNet('facebook', fbLiveSubPrice, fbLiveSubAdvList, 2);

  selectSocialNet('youtube', ytLiveSubPrice, ytLiveSubAdvList, 2);
  selectSocialNet('youtube', ytLiveLikesPrice, ytLiveLikesAdvList, 4);
  selectSocialNet('youtube', ytLiveViewsPrice, ytLiveViewsAdvList, 6);
  selectSocialNet('youtube', ytLiveDislikesPrice, ytLiveDislikesAdvList, 8);

  selectSocialNet('inst', igSubPrice, igSubAdvList, 1);
  selectSocialNet('inst', igLiveSubPrice, igLiveSubAdvList, 2);
  selectSocialNet('inst', igLikesPrice, igLikesAdvList, 3);
  selectSocialNet('inst', igLiveLikesPrice, igLiveLikesAdvList, 4);
  selectSocialNet('inst', igAutoLikesPrice, igAutoLikesAdvList, 5);
  selectSocialNet('inst', igViewsIGTVPrice, igViewsIGTVAdvList, 6);
  selectSocialNet('inst', igHistViewsPrice, igHistViewsAdvList, 7);
  selectSocialNet('inst', igSavePrice, igSaveAdvList, 8);

  selectSocialNet('tg', tgChannelSubPrice, tgChannelSubAdvList, 1);
  // selectSocialNet('tg', tgGroupSubPrice, tgGroupSubAdvList, 2);
  selectSocialNet('tg', tgViewsPrice, tgViewsAdvList, 3);

  selectSocialNet('twitch', twSubPrice, twSubAdvList, 1);
  selectSocialNet('twitch', twViewsPrice, twViewsAdvList, 2);

  selectSocialNet('tiktok', ttLiveSubPrice, ttLiveSubAdvList, 2);
  selectSocialNet('tiktok', ttLiveLikesPrice, ttLiveLikesAdvList, 4);
  selectSocialNet('tiktok', ttVideoViewsPrice, ttVideoViewsAdvList, 6);

  selectSocialNet('vk', vkSubPrice, vkSubAdvList, 1);
  selectSocialNet('vk', vkLiveSubPrice, vkLiveSubAdvList, 2);
  selectSocialNet('vk', vkFriendsPrice, vkFriendsAdvList, 3);
  selectSocialNet('vk', vkLiveLikesPrice, vkLiveLikesAdvList, 4);
  selectSocialNet('vk', vkLiveViewsPrice, vkLiveViewsAdvList, 5);
  selectSocialNet('vk', vkRepPrice, vkRepAdvList, 6);
  selectSocialNet('vk', vkOprPrice, vkOprAdvList, 7);
  selectSocialNet('vk', vkVideoViewsPrice, vkVideoViewsAdvList, 8);

  selectSocialNet('ok', okLiveSubPrice, okLiveSubAdvList, 2);




  
  $('li').on('click', function () {
    let targName = $(this).attr('data-targ');

    // facebook
    if($(this).attr('id') === 'sl' && $(this).attr('data-targ') === 'fb') {   
      $('.serv-box').remove();
      insertPrice(fbLiveSubPrice);
      insertAdvList(fbLiveSubAdvList);
      $(`.wrap-modal[data-name="${targName}"]`).fadeIn();
      $("#input-serv-facebook-2").prop("checked", true);
    }

    // twitch 
    else if($(this).attr('id') === 'sc' && $(this).attr('data-targ') === 'twitch') {   
      $('.serv-box').remove();
      insertPrice(twSubPrice);
      insertAdvList(twSubAdvList);
      $(`.wrap-modal[data-name="${targName}"]`).fadeIn();
      $("#input-serv-twitch-1").prop("checked", true);
    }
    else if($(this).attr('id') === 'vc' && $(this).attr('data-targ') === 'twitch') {   
      $('.serv-box').remove();
      insertPrice(twViewsPrice);
      insertAdvList(twViewsAdvList);
      $(`.wrap-modal[data-name="${targName}"]`).fadeIn();
      $("#input-serv-twitch-2").prop("checked", true);
    }

    // tiktok
    else if($(this).attr('id') === 'sl' && $(this).attr('data-targ') === 'tiktok') {   
      $('.serv-box').remove();
      insertPrice(ttLiveSubPrice);
      insertAdvList(ttLiveSubAdvList);
      $(`.wrap-modal[data-name="${targName}"]`).fadeIn();
      $("#input-serv-tiktok-2").prop("checked", true);
    }
    else if($(this).attr('id') === 'll' && $(this).attr('data-targ') === 'tiktok') {   
      $('.serv-box').remove();
      insertPrice(ttLiveLikesPrice);
      insertAdvList(ttLiveLikesAdvList);
      $(`.wrap-modal[data-name="${targName}"]`).fadeIn();
      $("#input-serv-tiktok-4").prop("checked", true);
    }
    else if($(this).attr('id') === 'vv' && $(this).attr('data-targ') === 'tiktok') {   
      $('.serv-box').remove();
      insertPrice(ttVideoViewsPrice);
      insertAdvList(ttVideoViewsAdvList);
      $(`.wrap-modal[data-name="${targName}"]`).fadeIn();
      $("#input-serv-tiktok-6").prop("checked", true);
    }

    // youtube
    else if($(this).attr('id') === 'sl' && $(this).attr('data-targ') === 'youtube') {   
      $('.serv-box').remove();
      $('.advant-list__col').remove();
      insertPrice(ytLiveSubPrice);
      insertAdvList(ytLiveSubAdvList);
      $(`.wrap-modal[data-name="${targName}"]`).fadeIn();
      $("#input-serv-youtube-2").prop("checked", true);
    }
    else if($(this).attr('id') === 'll' && $(this).attr('data-targ') === 'youtube') {   
      $('.serv-box').remove();
      $('.advant-list__col').remove();
      insertPrice(ytLiveLikesPrice);
      insertAdvList(ytLiveLikesAdvList);
      $(`.wrap-modal[data-name="${targName}"]`).fadeIn();
      $("#input-serv-youtube-4").prop("checked", true);
    }
    else if($(this).attr('id') === 'vl' && $(this).attr('data-targ') === 'youtube') {   
      $('.serv-box').remove();
      $('.advant-list__col').remove();
      insertPrice(ytLiveViewsPrice);
      insertAdvList(ytLiveViewsAdvList);
      $(`.wrap-modal[data-name="${targName}"]`).fadeIn();
      $("#input-serv-youtube-6").prop("checked", true);
    }
    else if($(this).attr('id') === 'd' && $(this).attr('data-targ') === 'youtube') {   
      $('.serv-box').remove();
      $('.advant-list__col').remove();
      insertPrice(ytLiveDislikesPrice);
      insertAdvList(ytLiveDislikesAdvList);
      $(`.wrap-modal[data-name="${targName}"]`).fadeIn();
      $("#input-serv-youtube-8").prop("checked", true);
    }

    // telegram
    else if($(this).attr('id') === 'sc' && $(this).attr('data-targ') === 'tg') {   
      $('.serv-box').remove();
      insertPrice(tgChannelSubPrice);
      insertAdvList(tgChannelSubAdvList);
      $(`.wrap-modal[data-name="${'telegram'}"]`).fadeIn();
      $("#input-serv-tg-1").prop("checked", true);
    }
    // else if($(this).attr('id') === 'sg' && $(this).attr('data-targ') === 'tg') {   
    //   $('.serv-box').remove();
    //   insertPrice(tgGroupSubPrice);
    //   insertAdvList(tgGroupSubAdvList);
    //   $(`.wrap-modal[data-name="${'telegram'}"]`).fadeIn();
    //   $("#input-serv-tg-2").prop("checked", true);
    // }
    else if($(this).attr('id') === 'v' && $(this).attr('data-targ') === 'tg') {   
      $('.serv-box').remove();
      insertPrice(tgViewsPrice);
      insertAdvList(tgViewsAdvList);
      $(`.wrap-modal[data-name="${'telegram'}"]`).fadeIn();
      $("#input-serv-tg-3").prop("checked", true);
    }


    // vk
    else if($(this).attr('id') === 'sc' && $(this).attr('data-targ') === 'vk') {   
      $('.serv-box').remove();
      insertPrice(vkSubPrice);
      insertAdvList(vkSubAdvList);
      $(`.wrap-modal[data-name="${targName}"]`).fadeIn();
      $("#input-serv-vk-1").prop("checked", true);
    }
    else if($(this).attr('id') === 'sl' && $(this).attr('data-targ') === 'vk') {   
      $('.serv-box').remove();
      insertPrice(vkLiveSubPrice);
      insertAdvList(vkLiveSubAdvList);
      $(`.wrap-modal[data-name="${targName}"]`).fadeIn();
      $("#input-serv-vk-2").prop("checked", true);
    }
    else if($(this).attr('id') === 'fp' && $(this).attr('data-targ') === 'vk') {   
      $('.serv-box').remove();
      insertPrice(vkFriendsPrice);
      insertAdvList(vkFriendsAdvList);
      $(`.wrap-modal[data-name="${targName}"]`).fadeIn();
      $("#input-serv-vk-3").prop("checked", true);
    }
    else if($(this).attr('id') === 'll' && $(this).attr('data-targ') === 'vk') {   
      $('.serv-box').remove();
      insertPrice(vkLiveLikesPrice);
      insertAdvList(vkLiveLikesAdvList);
      $(`.wrap-modal[data-name="${targName}"]`).fadeIn();
      $("#input-serv-vk-4").prop("checked", true);
    }
    else if($(this).attr('id') === 'vl' && $(this).attr('data-targ') === 'vk') {   
      $('.serv-box').remove();
      insertPrice(vkLiveViewsPrice);
      insertAdvList(vkLiveViewsAdvList);
      $(`.wrap-modal[data-name="${targName}"]`).fadeIn();
      $("#input-serv-vk-5").prop("checked", true);
    }
    else if($(this).attr('id') === 're' && $(this).attr('data-targ') === 'vk') {   
      $('.serv-box').remove();
      insertPrice(vkRepPrice);
      insertAdvList(vkRepAdvList);
      $(`.wrap-modal[data-name="${targName}"]`).fadeIn();
      $("#input-serv-vk-6").prop("checked", true);
    }
    else if($(this).attr('id') === 'op' && $(this).attr('data-targ') === 'vk') {   
      $('.serv-box').remove();
      insertPrice(vkOprPrice);
      insertAdvList(vkOprAdvList);
      $(`.wrap-modal[data-name="${targName}"]`).fadeIn();
      $("#input-serv-vk-7").prop("checked", true);
    }
    else if($(this).attr('id') === 'vv' && $(this).attr('data-targ') === 'vk') {   
      $('.serv-box').remove();
      insertPrice(vkVideoViewsPrice);
      insertAdvList(vkVideoViewsAdvList);
      $(`.wrap-modal[data-name="${targName}"]`).fadeIn();
      $("#input-serv-vk-8").prop("checked", true);
    }


    // instagram
    else if($(this).attr('id') === 'sc' && $(this).attr('data-targ') === 'ig') {   
      $('.serv-box').remove();
      insertPrice(igSubPrice);
      insertAdvList(igSubAdvList);
      $(`.wrap-modal[data-name="${'instagram'}"]`).fadeIn();
      $("#input-serv-inst-1").prop("checked", true);
    }
    else if($(this).attr('id') === 'sl' && $(this).attr('data-targ') === 'ig') {   
      $('.serv-box').remove();
      insertPrice(igLiveSubPrice);
      insertAdvList(igLiveSubAdvList);
      $(`.wrap-modal[data-name="${'instagram'}"]`).fadeIn();
      $("#input-serv-inst-2").prop("checked", true);
    }
    else if($(this).attr('id') === 'lc' && $(this).attr('data-targ') === 'ig') {   
      $('.serv-box').remove();
      insertPrice(igLikesPrice);
      insertAdvList(igLikesAdvList);
      $(`.wrap-modal[data-name="${'instagram'}"]`).fadeIn();
      $("#input-serv-inst-3").prop("checked", true);
    }
    else if($(this).attr('id') === 'll' && $(this).attr('data-targ') === 'ig') {   
      $('.serv-box').remove();
      insertPrice(igLiveLikesPrice);
      insertAdvList(igLiveLikesAdvList);
      $(`.wrap-modal[data-name="${'instagram'}"]`).fadeIn();
      $("#input-serv-inst-4").prop("checked", true);
    }
    else if($(this).attr('id') === 'al' && $(this).attr('data-targ') === 'ig') {   
      $('.serv-box').remove();
      insertPrice(igAutoLikesPrice);
      insertAdvList(igAutoLikesAdvList);
      $(`.wrap-modal[data-name="${'instagram'}"]`).fadeIn();
      $("#input-serv-inst-5").prop("checked", true);
    }
    else if($(this).attr('id') === 'vv' && $(this).attr('data-targ') === 'ig') {   
      $('.serv-box').remove();
      insertPrice(igViewsIGTVPrice);
      insertAdvList(igViewsIGTVAdvList);
      $(`.wrap-modal[data-name="${'instagram'}"]`).fadeIn();
      $("#input-serv-inst-6").prop("checked", true);
    }
    else if($(this).attr('id') === 'vh' && $(this).attr('data-targ') === 'ig') {   
      $('.serv-box').remove();
      insertPrice(igHistViewsPrice);
      insertAdvList(igHistViewsAdvList);
      $(`.wrap-modal[data-name="${'instagram'}"]`).fadeIn();
      $("#input-serv-inst-7").prop("checked", true);
    }
    else if($(this).attr('id') === 's' && $(this).attr('data-targ') === 'ig') {   
      $('.serv-box').remove();
      insertPrice(igSavePrice);
      insertAdvList(igSaveAdvList);
      $(`.wrap-modal[data-name="${'instagram'}"]`).fadeIn();
      $("#input-serv-inst-8").prop("checked", true);
    }
    

    // ok
    else if($(this).attr('id') === 'sl' && $(this).attr('data-targ') === 'ok') {   
      $('.serv-box').remove();
      insertPrice(okLiveSubPrice);
      insertAdvList(okLiveSubAdvList);
      $(`.wrap-modal[data-name="${targName}"]`).fadeIn();
      $("#input-serv-ok-2").prop("checked", true);
    }

  });
  
});
