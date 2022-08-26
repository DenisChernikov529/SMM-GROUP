$(function() {
  // facebook
  const fbLiveSubPrice = [
    {
      amount: 1000,
      title: 'подписчики обычные',
      discount: 0,
      price: 0.498 * 1000
    },
    {
      amount: 2000,
      title: 'подписчики обычные',
      discount: 5,
      price: 0.498 * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'подписчики обычные',
      discount: 10,
      price: 0.498 * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'подписчики обычные',
      discount: 15,
      price: 0.498 * 1000 * 0.85
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
      price: 0.55 * 1000
    },
    {
      amount: 2000,
      title: 'лайки живые',
      discount: 5,
      price: 0.55 * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'лайки живые',
      discount: 10,
      price: 0.55 * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'лайки живые',
      discount: 15,
      price: 0.55 * 1000 * 0.85
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
      price: 0.22 * 1000
    },
    {
      amount: 2000,
      title: 'просмотры живые',
      discount: 5,
      price: 0.22 * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'просмотры живые',
      discount: 10,
      price: 0.22 * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'просмотры живые',
      discount: 15,
      price: 0.22 * 1000 * 0.85
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
      price: 0.55 * 1000
    },
    {
      amount: 2000,
      title: 'дизлайки',
      discount: 5,
      price: 0.55 * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'дизлайки',
      discount: 10,
      price: 0.55 * 1000 * 0.90
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
      price: 0.22 * 1000
    },
    {
      amount: 2000,
      title: 'подписчики обычные',
      discount: 5,
      price: 0.22 * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'подписчики обычные',
      discount: 10,
      price: 0.22 * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'подписчики обычные',
      discount: 15,
      price: 0.22 * 1000 * 0.85
    }
  ];

  const igSubAdvList = [
     'Запуск  в течение 1 часа',
     'Скорость до 5000 в сутки',
     'Подписчики частично русские и с аватарками',
     //'Гарантия бессрочная',
     'Можно заказывать повторно после выполнения'
  ];

  const igLikesPrice = [
    {
      amount: 1000,
      title: 'лайки обычные',
      discount: 0,
      price: 0.09 * 1000
    },
    {
      amount: 2000,
      title: 'лайки обычные',
      discount: 5,
      price: 0.09 * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'лайки обычные',
      discount: 10,
      price: 0.09 * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'лайки обычные',
      discount: 15,
      price: 0.09 * 1000 * 0.85
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
      price: 0.18 * 1000
    },
    {
      amount: 2000,
      title: 'лайки живые',
      discount: 5,
      price: 0.18 * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'лайки живые',
      discount: 10,
      price: 0.18 * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'лайки живые',
      discount: 15,
      price: 0.18 * 1000 * 0.85
    }
  ];

  const igLiveLikesAdvList = [
     'Запуск в течение 2 часов',
     'Живые люди',
     //'Гарантия результата',
     'Без банов, без списаний',
     'Можно заказывать повторно'
  ];

  const igViewsIGTVPrice = [
    {
      amount: 1000,
      title: 'просмотры видео ig tv',
      discount: 0,
      price: 0.019 * 1000
    },
    {
      amount: 5000,
      title: 'просмотры видео ig tv',
      discount: 5,
      price: 0.019 * 1000 * 0.95
    },
    {
      amount: 10000,
      title: 'просмотры видео ig tv',
      discount: 10,
      price: 0.019 * 1000 * 0.90
    },
    {
      amount: 20000,
      title: 'просмотры видео ig tv',
      discount: 15,
      price: 0.019 * 1000 * 0.85
    }
  ];

  const igViewsIGTVAdvList = [
    'Запуск в течение 1 часа',
    'Живые люди',
    'Накрутка на IGTV видео в ленте',
    //'Без банов, без списаний',
    'Вместе с просмотрами идут показы и охват (для бизнес профилей)'
  ];

  // telegram

  const tgChannelSubPrice = [
    {
      amount: 1000,
      title: 'подписчики на канал',
      discount: 0,
      price: 0.198 * 1000
    },
    {
      amount: 2000,
      title: 'подписчики на канал',
      discount: 5,
      price: 0.198 * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'подписчики на канал',
      discount: 10,
      price: 0.198 * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'подписчики на канал',
      discount: 15,
      price: 0.198 * 1000 * 0.85
    }
  ];

  const tgChannelSubAdvList = [
    'Скорость до 5000 в сутки',
    'Накрутка выполняется с запасом',
    'Старт в течении 0-12 часов',
    'Принимаются только открытые ссылки на канал'
  ];

  const tgViewsPrice = [
    {
      amount: 1000,
      title: 'просмотры',
      discount: 0,
      price: 0.039 * 1000
    },
    {
      amount: 5000,
      title: 'просмотры',
      discount: 5,
      price: 0.039 * 1000 * 0.95
    },
    {
      amount: 10000,
      title: 'просмотры',
      discount: 10,
      price: 0.039 * 1000 * 0.90
    },
    {
      amount: 20000,
      title: 'просмотры',
      discount: 15,
      price: 0.039 * 1000 * 0.85
    }
  ];

  const tgViewsAdvList = [
    'Запуск в течение 1 часа',
    'Cкорость до 10000 в сутки',
    'Накрутка просмотров поста на канале',
    'Чтобы найти ссылку на пост нужно перейти в канал, возле нужного поста нажмите кнопку "поделиться" и затем внизу нажмите "скопировать ссылку" и вставьте её в поле'
  ];

  const tgSubChatPrice = [
    {
      amount: 1000,
      title: 'просмотры',
      discount: 0,
      price: 0.198 * 1000
    },
    {
      amount: 5000,
      title: 'просмотры',
      discount: 5,
      price: 0.198 * 1000 * 0.95
    },
    {
      amount: 10000,
      title: 'просмотры',
      discount: 10,
      price: 0.198 * 1000 * 0.90
    },
    {
      amount: 20000,
      title: 'просмотры',
      discount: 15,
      price: 0.198 * 1000 * 0.85
    }
  ];

  const tgSubAdvList = [
    'Запуск в течение 1 часа',
    'Cкорость до 10000 в сутки',
    'Накрутка просмотров поста на канале',
    'Чтобы найти ссылку на пост нужно перейти в канал, возле нужного поста нажмите кнопку "поделиться" и затем внизу нажмите "скопировать ссылку" и вставьте её в поле'
  ];


  // twitter

  const twSubPrice = [
    {
      amount: 1000,
      title: 'подписчики обычные',
      discount: 0,
      price: 0.29 * 1000
    },
    {
      amount: 2000,
      title: 'подписчики обычные',
      discount: 5,
      price: 0.29 * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'подписчики обычные',
      discount: 10,
      price: 0.29 * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'подписчики обычные',
      discount: 15,
      price: 0.29 * 1000 * 0.85
    }
  ];

  const twSubAdvList = [
    'Запуск  в течение 3 часов',
    'Скорость от 2000 до 10000 в сутки',
    //'Гарантия бессрочная',
    'Можно заказывать повторно после выполнения'
  ];

  const twRetPostaPrice = [
    {
      amount: 1000,
      title: 'Ретвит твита (поста)',
      discount: 0,
      price: 0.88 * 1000
    },
    {
      amount: 2000,
      title: 'Ретвит твита (поста)',
      discount: 5,
      price: 0.88 * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'Ретвит твита (поста)',
      discount: 10,
      price: 0.88 * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'Ретвит твита (поста)',
      discount: 15,
      price: 0.88 * 1000 * 0.85
    }
  ];

  const twRetPostaAdvList = [
    'Запуск в течение 1 часа',
    'Скорость 1000-5000 в сутки',
    //'Гарантия результата',
    'Без банов, без списаний',
    'Можно заказывать повторно'
  ];

  const twLikePostaPrice = [
    {
      amount: 1000,
      title: 'Ретвит твита (поста)',
      discount: 0,
      price: 0.55 * 1000
    },
    {
      amount: 2000,
      title: 'Ретвит твита (поста)',
      discount: 5,
      price: 0.55 * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'Ретвит твита (поста)',
      discount: 10,
      price: 0.55 * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'Ретвит твита (поста)',
      discount: 15,
      price: 0.55 * 1000 * 0.85
    }
  ];

  const twLikePostaAdvList = [
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
      price: 0.55 * 1000
    },
    {
      amount: 2000,
      title: 'подписчики живые',
      discount: 5,
      price: 0.55 * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'подписчики живые',
      discount: 10,
      price: 0.55 * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'подписчики живые',
      discount: 15,
      price: 0.55 * 1000 * 0.85
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
      price: 0.22 * 1000
    },
    {
      amount: 2000,
      title: 'лайки живые',
      discount: 5,
      price: 0.22 * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'лайки живые',
      discount: 10,
      price: 0.22 * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'лайки живые',
      discount: 15,
      price: 0.22 * 1000 * 0.85
    }
  ];

  const ttLiveLikesAdvList = [
    'Запуск в течение 2 часов',
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
      price: 0.22 * 1000
    },
    {
      amount: 2000,
      title: 'подписчики обычные',
      discount: 5,
      price: 0.22 * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'подписчики обычные',
      discount: 10,
      price: 0.22 * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'подписчики обычные',
      discount: 15,
      price: 0.22 * 1000 * 0.85
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
      price: 0.695 * 1000
    },
    {
      amount: 2000,
      title: 'подписчики живые',
      discount: 5,
      price: 0.695 * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'подписчики живые',
      discount: 10,
      price: 0.695 * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'подписчики живые',
      discount: 15,
      price: 0.695 * 1000 * 0.85
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
      price: 0.36 * 1000
    },
    {
      amount: 1000,
      title: 'друзья в профиль',
      discount: 5,
      price: 0.36 * 1000 * 0.95
    },
    {
      amount: 2000,
      title: 'друзья в профиль',
      discount: 10,
      price: 0.36 * 1000 * 0.90
    },
    {
      amount: 5000,
      title: 'друзья в профиль',
      discount: 15,
      price: 0.36 * 1000 * 0.85
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
      price: 0.125 * 1000
    },
    {
      amount: 2000,
      title: 'лайки живые',
      discount: 5,
      price: 0.125 * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'лайки живые',
      discount: 10,
      price: 0.125 * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'лайки живые',
      discount: 15,
      price: 0.125 * 1000 * 0.85
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
      price: 0.039 * 1000
    },
    {
      amount: 5000,
      title: 'просмотры живые (глазик)',
      discount: 5,
      price: 0.039 * 1000 * 0.95
    },
    {
      amount: 10000,
      title: 'просмотры живые (глазик)',
      discount: 10,
      price: 0.039 * 1000 * 0.90
    },
    {
      amount: 20000,
      title: 'просмотры живые (глазик)',
      discount: 15,
      price: 0.039 * 1000 * 0.85
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
      price: 0.29 * 1000
    },
    {
      amount: 2000,
      title: 'репосты',
      discount: 5,
      price: 0.29 * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'репосты',
      discount: 10,
      price: 0.29 * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'репосты',
      discount: 15,
      price: 0.29 * 1000 * 0.85
    }
  ];

  const vkRepAdvList = [
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
      price: 0.045 * 1000
    },
    {
      amount: 5000,
      title: 'просмотры видео',
      discount: 5,
      price: 0.045 * 1000 * 0.95
    },
    {
      amount: 10000,
      title: 'просмотры видео',
      discount: 10,
      price: 0.045 * 1000 * 0.90
    },
    {
      amount: 20000,
      title: 'просмотры видео',
      discount: 15,
      price: 0.045 * 1000 * 0.85
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
      price: 0.55 * 1000
    },
    {
      amount: 2000,
      title: 'подписчики живые',
      discount: 5,
      price: 0.55 * 1000 * 0.95
    },
    {
      amount: 5000,
      title: 'подписчики живые',
      discount: 10,
      price: 0.55 * 1000 * 0.90
    },
    {
      amount: 10000,
      title: 'подписчики живые',
      discount: 15,
      price: 0.55 * 1000 * 0.85
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
            insertPrice(ytLiveLikesPrice);
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

  selectSocialNet('youtube', ytLiveLikesPrice, ytLiveSubAdvList, 4);
  selectSocialNet('youtube', ytLiveViewsPrice, ytLiveViewsAdvList, 6);
  selectSocialNet('youtube', ytLiveDislikesPrice, ytLiveDislikesAdvList, 8);

  selectSocialNet('inst', igSubPrice, igSubAdvList, 1);
  selectSocialNet('inst', igLikesPrice, igLikesAdvList, 3);
  selectSocialNet('inst', igLiveLikesPrice, igLiveLikesAdvList, 4);
  selectSocialNet('inst', igViewsIGTVPrice, igViewsIGTVAdvList, 6);

  selectSocialNet('tg', tgChannelSubPrice, tgChannelSubAdvList, 1);
  // selectSocialNet('tg', tgGroupSubPrice, tgGroupSubAdvList, 2);
  selectSocialNet('tg', tgViewsPrice, tgViewsAdvList, 3);

  selectSocialNet('twitch', twSubPrice, twSubAdvList, 1);
  selectSocialNet('twitch', twRetPosta, twSubAdvList, 2);

  selectSocialNet('tiktok', ttLiveSubPrice, ttLiveSubAdvList, 2);
  selectSocialNet('tiktok', ttLiveLikesPrice, ttLiveLikesAdvList, 4);

  selectSocialNet('vk', vkSubPrice, vkSubAdvList, 1);
  selectSocialNet('vk', vkLiveSubPrice, vkLiveSubAdvList, 2);
  selectSocialNet('vk', vkFriendsPrice, vkFriendsAdvList, 3);
  selectSocialNet('vk', vkLiveLikesPrice, vkLiveLikesAdvList, 4);
  selectSocialNet('vk', vkLiveViewsPrice, vkLiveViewsAdvList, 5);
  selectSocialNet('vk', vkRepPrice, vkRepAdvList, 6);
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
    };
    

  });
  
});
