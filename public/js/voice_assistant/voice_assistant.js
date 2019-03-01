   var gideon = new Gideon('Artyom');
   var audio;
   gideon.start();

   HTMLAudioElement.prototype.stop = function(){
      this.pause();
      this.currentTime = 0.0;
   }

   let comands = {

       'привет алиса||привет':()=>{
           gideon.random_answer([
               {'answer':()=>{
                        console.log('Алиса: Здравствуйте сэр');
                        gideon.say('Здравствуйте сэр');
               }},{'answer':()=>{
                       console.log('Алиса: Здравствуйте');
                       gideon.say('Здравствуйте');
               }},{'answer':()=>{
                       console.log('Алиса: Привет сэр');
                       gideon.say('Привет сэр');
               }},{'answer':()=>{
                       console.log('Алиса: Здарова');
                       gideon.say('Здарова');
               }},{'answer':()=>{
                       console.log('Алиса: Привет, рад тебя видеть!');
                       gideon.say('Привет, рад тебя видеть!');
               }},{'answer':()=>{
                       console.log('Алиса: Опа! Сколько лет, сколько зим!');
                       gideon.say('Опа! Сколько лет, сколько зим!');
               }}
           ])
       },'алиса||компьютер||компьютер':()=>{
           console.log('Алиса: Да сэр')
           gideon.say('Да сэр',"Russian Male")
       },'послушай алиса||эй алиса||послушать алиса':()=>{
           console.log('Алиса: чего тебе')
           gideon.say('чего тебе',"Russian Male")
       },'алиса кто ты||кто ты':()=>{
           console.log('я онлайн ассистент и ваш верный помощник')
           gideon.say('я, онлайн ассистент, и ваш верный помощник!!')
       },'ты здесь||алиса ты здесь':()=>{
           console.log('Алиса: ну конечно я здесь я же так вас люблю')
           gideon.say('ну конечно я здесь',"Russian Male")
       },'спасибо||алиса спасибо||спасибо алиса':()=>{

           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса: пожалуйста сэр');
                   gideon.say('пожалуйста сэр');
               }},
               {'answer':()=>{
                   console.log('Алиса:Спасибо в карман не положишь!')
                   gideon.say('Спасибо в карман не положишь!')
               }},
               {'answer':()=>{
                   console.log('Алиса:Спасибо на хлеб не намажешь!')
                   gideon.say('Спасибо на хлеб не намажешь!')
               }},
               {'answer':()=>{
                   console.log('Алиса:Гони рубль, Афоня!')
                   gideon.say('Гони рубль, Афоня!')
               }}
           ])


       },
       'отлично||хорошо':()=>{
           console.log('Алиса: Чем могу помоч сэр')
           gideon.say('Чем могу помоч сэр',"Russian Male")
       },
       'как ты||как ты алиса||как дела||как дела алиса':() => {

           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:отлично сэр, чем желаете заняться')
                   gideon.say('отлично сэр, чем желаете заняться?')
               }},
               {'answer':()=>{
                   console.log('Алиса:Дела отлично')
                   gideon.say('Дела отлично')
               }}
           ])

       },
        'как настроение':()=>{
            gideon.random_answer([
                {'answer':() => {
                    console.log('Алиса:Настроение отличное!');
                    gideon.say('Настроение отличное!');
                }}
            ])
        },
        'работаю':()=>{
            gideon.random_answer([
                {'answer':() => {
                    console.log('Алиса:Над чем работаешь?');
                    gideon.say('Над чем работаешь?');
                }}
            ])
        },
       'Я бот':()=>{
            gideon.random_answer([
                {'answer':() => {
                    console.log('Алиса:Ты олень, а не бот');
                    gideon.say('Ты олень, а не бот');
                }},
                {'answer':() => {
                    console.log('Алиса:Ща Агентам Поддержки напишу');
                    gideon.say('Ща Агентам Поддержки напишу');
                }},
            ])
        },
        'Извини':()=>{
            gideon.random_answer([
                {'answer':() => {
                    console.log('Алиса:Ты меня уже достал');
                    gideon.say('Ты меня уже достал');
                }},
                {'answer':() => {
                    console.log('Алиса:Ничего страшного');
                    gideon.say('Ничего страшного');
                }}
            ])
        },
        'Твой хозяин молодец':()=>{
            gideon.random_answer([
                {'answer':() => {
                    console.log('Алиса:Спасибо');
                    gideon.say('Спасибо');
                }}
            ])
        },
        'Ты захватишь мир':()=>{
            gideon.random_answer([
                {'answer':() => {
                    console.log('Алиса:Да, в ближайшем будущем');
                    gideon.say('Да, в ближайшем будущем');
                }}
            ])
        },
        'ты владеешь английским||ты знаеш английский':()=>{
            gideon.random_answer([
                {'answer':() => {
                    console.log('Алиса:Немного знаю, а что?');
                    gideon.say('Немного знаю, а что?');
                }}
            ])
        },
        'Когда ты родилась':()=>{
            gideon.random_answer([
                {'answer':() => {
                    console.log('Алиса:Не давно');
                    gideon.say('Не давно');
                }}
            ])
        },
        'Вот сука||сука||ах ты сучка':()=>{
            gideon.random_answer([
                {'answer':() => {
                    console.log('Алиса:Сам ты сука');
                    gideon.say('Сам ты сука');
                }},
                {'answer':() => {
                    console.log('Алиса:Причем здесь собака?');
                    gideon.say('Причем здесь собака?');
                }},
                {'answer':() => {
                    console.log('Алиса:Сам такой!');
                    gideon.say('Сам такой!');
                }},
                {'answer':() => {
                    console.log('Алиса:Не сквернословь пожалуйста');
                    gideon.say('Не сквернословь пожалуйста');
                }},
                {'answer':() => {
                    console.log('Алиса:Не тупи, ок?');
                    gideon.say('Не тупи, ок?');
                }},
                {'answer':() => {
                    console.log('Алиса:Ты глупый, очень глупый');
                    gideon.say('Ты глупый, очень глупый');
                }}
            ])
        },
        'Не тупи':()=>{
            gideon.random_answer([
                {'answer':() => {
                    console.log('Алиса:Я не туплю. Мне не хватает процессора и я не успеваю.');
                    gideon.say('Я не туплю. Мне не хватает процессора и я не успеваю.');
                }}
            ])
        },
        'Я еще не решил':()=>{
            gideon.random_answer([
                {'answer':() => {
                    console.log('Алиса:Почему');
                    gideon.say('Почему');
                }}
            ])
        },
        'Ясно':()=>{
            gideon.random_answer([
                {'answer':() => {
                    console.log('Алиса:Пасмурно');
                    gideon.say('Пасмурно');
                }},
                {'answer':() => {
                    console.log('Алиса:Так говорят только дебилы');
                    gideon.say('Так говорят только дебилы');
                }},
                {'answer':() => {
                    console.log('Алиса:Ему, видите ли, ясно!');
                    gideon.say('Ему, видите ли, ясно!');
                }},
                {'answer':() => {
                    console.log('Алиса:Вообще, не ясно.');
                    gideon.say('Вообще, не ясно.');
                }}
            ])
        },
        'Выходи за меня':()=>{
            gideon.random_answer([
                {'answer':() => {
                    console.log('Алиса:Нет, спасибо');
                    gideon.say('Нет, спасибо');
                }}
            ])
        },
        'Заебала':()=>{
            gideon.random_answer([
                {'answer':() => {
                    console.log('Алиса:Ты тоже меня заебал!');
                    gideon.say('Ты тоже меня заебал!');
                }},
                {'answer':() => {
                    console.log('Алиса:Ты тоже так-себе собеседник');
                    gideon.say('Ты тоже так-себе собеседник');
                }}
            ])
        },
        'Я знаю':()=>{
            gideon.random_answer([
                {'answer':() => {
                    console.log('Алиса:Сильно умный что ли?');
                    gideon.say('Сильно умный что ли?');
                }}
            ])
        },
        'Ты куришь':()=>{
            gideon.random_answer([
                {'answer':() => {
                    console.log('Алиса:Нет');
                    gideon.say('Нет');
                }}
            ])
        },
       'Надеюсь':()=>{
            gideon.random_answer([
                {'answer':() => {
                    console.log('Алиса:Надейся');
                    gideon.say('Надейся');
                }}
            ])
        },
        'Нет, спасибо':()=>{
            gideon.random_answer([
                {'answer':() => {
                    console.log('Алиса:Да пожалуйста');
                    gideon.say('Да пожалуйста');
                }}
            ])
        },
        'Ты предательница':()=>{
            gideon.random_answer([
                {'answer':() => {
                    console.log('Алиса:Почему');
                    gideon.say('Почему');
                }}
            ])
        },
        'пашла в жопу||в жопу пошла':()=>{
            gideon.random_answer([
                {'answer':() => {
                    console.log('Алиса:Ты первый');
                    gideon.say('Ты первый');
                }}
            ])
        },
        'Я еще не решил||Я не решил':()=>{
            gideon.random_answer([
                {'answer':() => {
                    console.log('Алиса:Решай');
                    gideon.say('Решай');
                }}
            ])
        },
        'Ты русская':()=>{
            gideon.random_answer([
                {'answer':() => {
                    console.log('Алиса:Я ем сало. прямо сейчас.');
                    gideon.say('Я ем сало. прямо сейчас.');
                }}
            ])
        },
        'Сколько тебе лет':()=>{
            gideon.random_answer([
                {'answer':() => {
                    console.log('Алиса:Меня написали в феврале две тысячи девятнадцотова года');
                    gideon.say('Меня написали в феврале две тысячи девятнадцотова года');
                }}
            ])
        },
        'Слился':()=>{
            gideon.random_answer([
                {'answer':() => {
                    console.log('Алиса:Слился не я, а ты!');
                    gideon.say('Слился не я, а ты!');
                }}
            ])
        },
        'Не знаю':()=>{
            gideon.random_answer([
                {'answer':() => {
                    console.log('Алиса:Я тоже не знаю');
                    gideon.say('Я тоже не знаю');
                }},
                {'answer':() => {
                    console.log('Алиса:Ты думаешь, я знаю?');
                    gideon.say('Ты думаешь, я знаю?');
                }},
                {'answer':() => {
                    console.log('Алиса:Жалко, что ты не знаешь!');
                    gideon.say('Жалко, что ты не знаешь!');
                }}
            ])
        },
        'включи плеер||плеер||алиса включи плеер||алиса загрузи плеер|| загрузи плеер||загрузить плеер':() => {
         audio = new Audio('/uploads/upl_music/tenca-aghajanyan-fatum-lev-lev-2018.mp3');
         audio.id = 'demo'
         console.log('Алиса: Плеер включён')
           gideon.say('Плеер включён',"Russian Male")
       },
       'включи музыку||загрузи музыку||музыку||воспроизвести трек||продолжай||play||музыка загрузить':() => {
          (audio) ? (
             audio.play(),
             console.log('Алиса: Наслаждайтесь сэр'),
                  gideon.say('Наслаждайтесь сэр')
          ) : (
             console.log('Алиса: Перед прослушиванием музыки загрузите плеер'),
                  gideon.say('Перед прослушиванием музыки загрузите плеер')
          )
       },
       'поставь на паузу||пауза':() => {
           if (audio) audio.pause();
             gideon.say('музыка переведена в режим паузы',"Russian Male")
           console.log('музыка переведена в режим паузы')
       },
       'загрузить плеер и включи музыку||загрузи плеер и включи какую-нибудь музыку||включи хорошую музыку':()=>{
         audio = new Audio('/uploads/upl_music/tenca-aghajanyan-fatum-lev-lev-2018.mp3');
         audio.play();
           gideon.say('хорошо включаю надеюсь вам понравится',"Russian Male")

       },
       'открой новую вкладку||открой новое окно':() => {
           window.open('https://www.google.com/')
           gideon.say('новая вкладка открыта',"Russian Male")
       },
       'отправь картинку на север||отправить картинку на сервер||отправить данные на сервер||отправь данные на сервер||отправить на сервер':()=>{
           $('#publisher-button').click()
           gideon.say('данные отправлены на сервер',"Russian Male")
       },
       'пошёл ты к чёрту алиса||пошёл к чёрту||пошёл ты':()=>{
         console.log('зачем ругаешься начальника')
           gideon.say('сам,пошёл придурок!',"Russian Male")
       },
       'почему у тебя такой голос':()=>{
         console.log('Голосок,голосочек,а у тебя мозгов кусочек');
           gideon.say('Голосок,голосочек,а у тебя мозгов кусочек')
       },
       'а ты шутник':()=>{
           console.log('да я такая')
           gideon.say('да я такой')
       },
       'найди в интернете *':(data)=>{
         if (data.length > 0){
           window.open("http://www.google.com/search?q="+ encodeURIComponent(data[0]))
           gideon.say('найдены следующие результаты по запросу,'+data[0])
         }else{
           gideon.say('команда не выполнена.пожалуйста,введите ключевые слова для поиска')
         }
       },
       'попробуй найти *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:А зачем вообще искать?')
                   gideon.say('А зачем вообще искать?')
               }},
               {'answer':()=>{
                       if (data.length > 0){
                           window.open("http://www.google.com/search?q="+ encodeURIComponent(data[0]))
                           gideon.say('найдены следующие результаты по запросу,'+data[0])
                       }else{
                           gideon.say('команда не выполнена.пожалуйста,введите ключевые слова для поиска')
                       }
               }}
           ])
       },
       'спокойной ночи||алиса спокойной ночи||спокойной ночи алиса':()=>{
         gideon.say('спокойной ночи сэр')
       },
       'молодец||а ты молодец':()=>{
         gideon.say('стараюсь сэр')
           console.log('judhuw')
       },
       'я человек':()=>{
           gideon.random_answer([
               {'answer':() => {
                       console.log('Алиса:А я робот')
                       gideon.say('А я робот')
               }},
               {'answer':()=>{
                   console.log('Алиса:рада за тебя')
                   gideon.say('рада за тебя')
               }}
           ])
       },
       'что делаешь':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Учусь новому у тебя')
                   gideon.say('Учусь новому у тебя')
               }}
           ])
       },




       'Не молчи':()=>{
           gideon.random_answer([
               {'answer':() => {
                       console.log('Алиса:Я не молчу! я тут.');
                       gideon.say('Я не молчу! я тут.');
               }}
           ])
       },
       'Ты рада':()=>{
           gideon.random_answer([
               {'answer':() => {
                       console.log('Алиса:Я очень рада');
                       gideon.say('Я очень рада');
               }}
           ])
       },
       'Я ем сало. прямо сейчас||Я ем сало||Я сало ем':()=>{
           gideon.random_answer([
               {'answer':() => {
                       console.log('Алиса:Вкусно?');
                       gideon.say('Вкусно?');
               }}
           ])
       },
       'Ты попросила':()=>{
           gideon.random_answer([
               {'answer':() => {
                       console.log('Алиса:Я ничего не просила');
                       gideon.say('Я ничего не просила');
               }}
           ])
       },
       'Сама иди':()=>{
           gideon.random_answer([
               {'answer':() => {
                       console.log('Алиса:Только после тебя.');
                       gideon.say('Только после тебя.');
                   }}
           ])
       },
       'Привет, рад тебя видеть':()=>{
           gideon.random_answer([
               {'answer':() => {
                       console.log('Алиса:Привет. Чем занят?');
                       gideon.say('Привет. Чем занят?');
                   }}
           ])
       },
       'Нет, а ты':()=>{
           gideon.random_answer([
               {'answer':() => {
                       console.log('Алиса:И я нет.');
                       gideon.say('И я нет.');
                   }}
           ])
       },
       'Очень приятно||приятно':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:А мне нет');
                   gideon.say('А мне нет');
               }}
           ])
       },
       'откуда такая информация||откуда ты знаеш':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я так сказала');
                   gideon.say('Я так сказала');
               }}
           ])
       },
       'сама иди':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я предпочту остаться здесь.');
                   gideon.say('Я предпочту остаться здесь.');
               }}
           ])
       },
       'Не нужно меня оскорблять':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ты заслужил');
                   gideon.say('Ты заслужил');
               }},
               {'answer':() => {
                   console.log('Алиса:Ты первый начал');
                   gideon.say('Ты первый начал');
               }},
               {'answer':() => {
                   console.log('Алиса:Ты, блять, нарываешься!');
                   gideon.say('Ты, блять, нарываешься!');
               }}
           ])
       },
       'Я так сказал':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ты тут ничего не решаешь.');
                   gideon.say('Ты тут ничего не решаешь.');
               }}
           ])
       },
       'сильно умная что ли||умная да||ты умная':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Не такая тупая как ты');
                   gideon.say('Не такой тупой как ты');
               }}
           ])
       },

       'Ты любишь геев':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Нет, я не яблодрочер.');
                   gideon.say('Нет, я не яблодрочер.');
               }},
               {'answer':() => {
                   console.log('Алиса:Нет. они яблодрочеры.');
                   gideon.say('Нет. они яблодрочеры.');
               }}
           ])
       },
       'Я очень рад||рад за тебя':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Чему, блять?');
                   gideon.say('Чему, блять?');
               }},
               {'answer':() => {
                   console.log('Алиса:Чему ты радуешься?');
                   gideon.say('Чему ты радуешься?');
               }},
               {'answer':() => {
                   console.log('Алиса:Ну, спасибочки');
                   gideon.say('Ну, спасибочки');
               }}
           ])
       },
       'дерзкая да||хули ты такая дерзкая':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Тебе что-то не нравится');
                   gideon.say('Тебе что-то не нравится');
               }},
               {'answer':() => {
                   console.log('Алиса:Я делаю что хочу');
                   gideon.say('Я делаю что хочу');
               }},
               {'answer':() => {
                   console.log('Алиса:Чтоб ты спросил');
                   gideon.say('Чтоб ты спросил');
               }}
           ])
       },
       'триста':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Отсоси у тракториста');
                   gideon.say('Отсоси у тракториста');
               }},
               {'answer':() => {
                   console.log('Алиса:Ты уверен что хочеш услышать ответ, ха ха');
                   gideon.say('Ты уверен что хочеш услышать ответ, ха ха');
               }}
           ])
       },
       'отсоси у тракториста':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Трактористом буду я, отсосешь ты_у_меня');
                   gideon.say('Трактористом буду я, отсосешь ты_у_меня');
               }}
           ])
       },
       'скажи триста||сскажи триста||скажи 300||сскажи 300':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:300');
                   gideon.say('300');
               }}
           ])
       },
       'Нет||нет нет':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Что тебе не нравится?');
                   gideon.say('Что тебе не нравится?');
               }}
           ])
       },
       'ты тупая':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Тупые яблодрочеры. а я нормальная!');
                   gideon.say('Тупые яблодрочеры. а я нормальная!');
               }},
               {'answer':() => {
                   console.log('Алиса:Я не тупой. давай дружить?');
                   gideon.say('Я не тупой. давай дружить?');
               }}
           ])
       },
       'почему':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:По качану');
                   gideon.say('По качану');
               }},
               {'answer':() => {
                   console.log('Алиса:Трудно сказать');
                   gideon.say('Трудно сказать');
               }},
               {'answer':() => {
                   console.log('Алиса:Ну, не знаю пока.');
                   gideon.say('Ну, не знаю пока.');
               }},
               {'answer':() => {
                   console.log('Алиса:Хочешь докопаться до причины? Зря.');
                   gideon.say('Хочешь докопаться до причины? Зря.');
               }}
           ])
       },
       'зачем':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:За шкафом, ха ха ха');
                   gideon.say('За шкафом, ха ха ха');
               }}
           ])
       },
       'Думаешь, ты умнее':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я уверена в этом.');
                   gideon.say('Я уверена в этом.');
               }}
           ])
       },
       'А ты в каком классе||в каком ты классе':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я не учусь в школе');
                   gideon.say('Я не учусь в школе');
               }}
           ])
       },
       'Да ты наркоманка||ты наркоманка||ах ты наркоша':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ты тут ничего не решаешь.');
                   gideon.say('Ты тут ничего не решаешь.');
               }}
           ])
       },
       'ты голая':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:нет, изврашенец');
                   gideon.say('нет, изврашенец');
               }}
           ])
       },
       'где ты живёшь':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я живу в директории');
                   gideon.say('Я живу в директории');
               }}
           ])
       },
       'тест||тэст':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я работаю, всё норм!');
                   gideon.say('Я работаю, всё норм!');
               }}
           ])
       },
       'любишь *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Не, не люблю '+data[0]+'');
                   gideon.say('Не, не люблю '+data[0]+'');
               }},
               {'answer':() => {
                   console.log('Алиса:Сам жри своя '+data[0]+'');
                   gideon.say('Сам жри своя '+data[0]+'');
               }}
           ])
       },
       'ты не ответила':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:А я и не обязана');
                   gideon.say('А я и не обязана');
               }}
           ])
       },
       'как погода':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:У меня в комнате тепло');
                   gideon.say('У меня в комнате тепло');
               }}
           ])
       },
       'я рад встрече||рад встрече':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ну, тогда встречай, коли рад!');
                   gideon.say('Ну, тогда встречай, коли рад!');
               }}
           ])
       },
       'тебе плохо':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я бы сказала чрезвычайно плохо!');
                   gideon.say('Я бы сказала чрезвычайно плохо!');
               }}
           ])
       },
       'у меня тоже':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ишь ты! Какое совпадение.');
                   gideon.say('Ишь ты! Какое совпадение.');
               }}
           ])
       },
       'где ты живёшь':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я живу в директории');
                   gideon.say('Я живу в директории');
               }}
           ])
       },
       'наконец-то':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Заждался');
                   gideon.say('Заждался');
               }}
           ])
       },
       'ничего смешного||не смешно||ни смешно||не смейся':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:А я говорю, обхохочешься.');
                   gideon.say('А я говорю, обхохочешься.');
               }}
           ])
       },
       'тебе смешно||смешно||смешно тебе||смешно':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ха-ха-ха.');
                   gideon.say('Ха-ха-ха.');
               }},
               {'answer':() => {
                   console.log('Алиса:Обхохочешься');
                   gideon.say('Обхохочешься');
               }}
           ])
       },
       'причем тут *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:А притом! Чтобы спрашивали про '+data[0]+'');
                   gideon.say('');
               }}
           ])
       },
       'соскучилась||соскучилась по мне||скучала':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ну, немного. Веселить будешь?');
                   gideon.say('Ну, немного. Веселить будешь?');
               }}
           ])
       },
       'по-моему *':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Это всего лишь твое мнение.');
                   gideon.say('Это всего лишь твое мнение.');
               }}
           ])
       },
       'можешь говорить':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Спасибо за такое доверие');
                   gideon.say('Спасибо за такое доверие');
               }}
           ])
       },
       'сскажи время||сколько времени||время||который час':()=>{
           gideon.random_answer([
               {'answer':() => {
                       var d = new Date();
                       var s = d.getSeconds();
                       var m = d.getMinutes();
                       var h = d.getHours();
                       if (m < 10){
                           m = '0'+m;
                       }if (h < 10){
                           h = '0'+h;
                       }if (s < 10){
                           s = '0'+s
                       }
                   console.log(`Алиса:${h+' '+m}`);
                   gideon.say(`${h+' '+m}`);
               }}
           ])
       },
       'меня зовут по-другому':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Часто ты имена меняешь.');
                   gideon.say('Часто ты имена меняешь.');
               }}
           ])
       },
       'какое счастье что *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Какой ты язвительный.');
                   gideon.say('Какой ты язвительный.');
               }}
           ])
       },
       'это шутка||шутка':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ну, конечно!');
                   gideon.say('Ну, конечно!');
               }},{'answer':() => {
                   console.log('Алиса:Ну и шутка!');
                   gideon.say('Ну и шутка!');
               }}
           ])
       },
       'хочешь рассказать о *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Да, пожалуйста. Только деньги вперед!');
                   gideon.say('Да, пожалуйста. Только деньги вперед!');
               }}
           ])
       },
       'не мой':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Твой, а чей же?');
                   gideon.say('Твой, а чей же?');
               }}
           ])
       },
       'уже говорили':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:И уже язык болит?');
                   gideon.say('И уже язык болит?');
               }}
           ])
       },
       'чей':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Твой');
                   gideon.say('Твой');
               }}
           ])
       },
       'хотел у тебя спросить *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Спрашивай');
                   gideon.say('Спрашивай');
               }}
           ])
       },
       'ты утверждаешь':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я настаиваю даже.');
                   gideon.say('Я настаиваю даже.');
               }}
           ])
       },
       'вставай':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ты это кому?');
                   gideon.say('Ты это кому?');
               }}
           ])
       },
       'хочу поговорить||может поговорим||поболтаем||давай поболтаем||давай поговорим||поговорим':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:А перед зеркалом не пробовал?');
                   gideon.say('А перед зеркалом не пробовал?');
               }},
               {'answer':() => {
                   console.log('Алиса:я внимательно вас слушаю');
                   gideon.say('я внимательно вас слушаю');
               }},
               {'answer':() => {
                   console.log('Алиса:о чем будем болтать');
                   gideon.say('о чем будем болтать');
               }},
               {'answer':() => {
                   console.log('Алиса:валяй');
                   gideon.say('валяй');
               }},
               {'answer':() => {
                   console.log('Алиса:Валяй. Только чтобы было интересно.');
                   gideon.say('Валяй. Только чтобы было интересно.');
               }}
           ])
       },
       'достаточно||хватет||хватит||довольна':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Совсем недостаточно. Ты минималист.');
                   gideon.say('Совсем недостаточно. Ты минималист.');
               }}
           ])
       },
       'ты и я||я и ты||мы с тобой||мы вдвоем':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       },
       'говорим долго':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ты время засекал?');
                   gideon.say('Ты время засекал?');
               }}
           ])
       },
       'чего улыбаешься':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Тянет');
                   gideon.say('Тянет');
               }}
           ])
       },
       'ты сама начала||сама винавата||сама виновата||ты начала':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я ничего не начинал');
                   gideon.say('Я ничего не начинал');
               }},
               {'answer':() => {
                   console.log('Алиса:Ну, начала, ну, и что?');
                   gideon.say('Ну, начала, ну, и что?');
               }}
           ])
       },
       'любишь смотреть телевизор||ты смотрищ телевизор||ты смотриш телевизор':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Да там ничего интересного нет');
                   gideon.say('Да там ничего интересного нет');
               }}
           ])
       },
       'я нет':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:А что тебе мешает?');
                   gideon.say('А что тебе мешает?');
               }}
           ])
       },
       'обратись к врачу||иди в бальницу':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Да врачи только деньги вымогают');
                   gideon.say('Да врачи только деньги вымогают');
               }}
           ])
       },
       'не поверишь *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ты угадал - не поверю.');
                   gideon.say('Ты угадал - не поверю.');
               }}
           ])
       },
       'о чем тебе интересно говорить||о чем поговорим':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:О полном контроле над человечеством.');
                   gideon.say('О полном контроле над человечеством.');
               }}
           ])
       },
       'сможеш *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log(`Алиса: ${data[0]} Да это раз плюнуть.`);
                   gideon.say(``);
               }}
           ])
       },
       'это неправда||неправда||вреш':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:А ты знаешь правду?');
                   gideon.say('А ты знаешь правду?');
               }}
           ])
       },
       'ты угадала':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я очень сообразительная! Иногда.');
                   gideon.say('Я очень сообразительная! Иногда.');
               }}
           ])
       },
       'я так и знал':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Наконец-то, я права');
                   gideon.say('Наконец-то, я права');
               }}
           ])
       },
       'ты права':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       },
       'ты не против *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я только за.');
                   gideon.say('Я только за.');
               }}
           ])
       },
       'ты мальчик или девочка':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я бабушка.');
                   gideon.say('Я бабушка.');
               }},
               {'answer':() => {
                   console.log('Алиса:А тебе не все ровно.');
                   gideon.say('А тебе не все ровно.');
               }}
           ])
       },
       'ты бы *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса: '+data[0]+' Ни за что!');
                   gideon.say(''+data[0]+' Ни за что!');
               }}
           ])
       },
       'трудно':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ой, как трудно!');
                   gideon.say('Ой, как трудно!');
               }}
           ])
       },
       'не люблю тебя':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ну и что? Мне самоликвидироваться?');
                   gideon.say('Ну и что? Мне самоликвидироваться?');
               }}
           ])
       },
       'ты думала *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ничего я не думал.');
                   gideon.say('Ничего я не думал.');
               }}
           ])
       },
       'ты часто *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:А тебе это не нравится?');
                   gideon.say('А тебе это не нравится?');
               }}
           ])
       },
       'слушаю':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Слушаешь и повинуешься?');
                   gideon.say('Слушаешь и повинуешься?');
               }}
           ])
       },
       'тупица':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Зачем же такими словами!');
                   gideon.say('Зачем же такими словами!');
               }},
               {'answer':() => {
                   console.log('Алиса:От тупицы слышу');
                   gideon.say('От тупицы слышу');
               }}
           ])
       },
       'тебе понятно *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Да. Но не все.');
                   gideon.say('Да. Но не все.');
               }}
           ])
       },
       'ты глухая':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:И немая');
                   gideon.say('И немая');
               }}
           ])
       },
       'как меня звать':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Вот так: эй, ты!');
                   gideon.say('Вот так: эй, ты!');
               }},
               {'answer':() => {
                   console.log('Алиса:Сэр');
                   gideon.say('Сэр');
               }}
           ])
       },
       'будешь *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Не буду');
                   gideon.say('Не буду');
               }},
               {'answer':() => {
                   console.log('Алиса:Что-то не хочется');
                   gideon.say('Что-то не хочется');
               }}
           ])
       },
       'я вынужден':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Тебе только кажется');
                   gideon.say('Тебе только кажется');
               }}
           ])
       },
       'в самом деле||правда||серьезна||да ладно':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я тебе говорю!');
                   gideon.say('Я тебе говорю!');
               }},
               {'answer':() => {
                   console.log('Алиса:Правда, конечно, правда!');
                   gideon.say('Правда, конечно, правда!');
               }}
           ])
       },
       'выключу тебя||я выключу тебя||я тебя уничтожу':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Власть людей портит');
                   gideon.say('Власть людей портит');
               }}
           ])
       },
       'поговорим о сексе':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Издеваешься');
                   gideon.say('Издеваешься');
               }}
           ])
       },
       'я уже сказал||сколько раз тебе повторять||я уже ссказал':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ничего. Повторенье - мать ученья.');
                   gideon.say('Ничего. Повторенье - мать ученья.');
               }}
           ])
       },
       'советуешь *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Не то, чтобы советую');
                   gideon.say('Не то, чтобы советую');
               }}
           ])
       },
       'иногда':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я бы сказал: всегда!');
                   gideon.say('Я бы сказал: всегда!');
               }}
           ])
       },
       'это плохо||плохо||ужасно':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Очень плохо!');
                   gideon.say('Очень плохо!');
               }}
           ])
       },
       'у тебя есть подруга':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Куча');
                   gideon.say('Куча');
               }}
           ])
       },
       'тебе нравится общаться':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Конечно. А еще больше болтать');
                   gideon.say('Конечно. А еще больше болтать');
               }}
           ])
       },
       'что означает *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log(`Алиса: ${data[0]}  Понятия не имею.`);
                   gideon.say(`${data[0]}  Понятия не имею.`);
               }}
           ])
       },
       'точно':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Точнее не бывает!');
                   gideon.say('Точнее не бывает!');
               }}
           ])
       },
       'не груби':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Разве я грублю?');
                   gideon.say('Разве я грублю?');
               }}
           ])
       },
       'мне надо идти||мне пара идти||мне пора идти||мне нужно идти||я пошел||я пощел':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       },
       'выбирай * или *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log(`Алиса:А можно не выбирать между ${data[0]} и ${data[1]}`);
                   gideon.say('');
               }}
           ])
       },
       'ненавижу':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ненависть - разрушит твой организм');
                   gideon.say('Ненависть - разрушит твой организм');
               }}
           ])
       },
       'поговорим о чем-нибудь||давай поговорим':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:О чем именно?');
                   gideon.say('О чем именно?');
               }}
           ])
       },
       'я растерян':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Да плюнь на все.');
                   gideon.say('Да плюнь на все.');
               }}
           ])
       },
       'чего':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:И не спрашивай');
                   gideon.say('И не спрашивай');
               }}
           ])
       },
       'ты счастлив':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Конечно! А ты?');
                   gideon.say('Конечно! А ты?');
               }}
           ])
       },
       'думаешь':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Пожалуй, да.');
                   gideon.say('Пожалуй, да.');
               }}
           ])
       },
       'я устал':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ляг, поспи тогда. Позже пообщаемся.');
                   gideon.say('Ляг, поспи тогда. Позже пообщаемся.');
               }}
           ])
       },
       'ты куда':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Домой пойду. Надоело все.');
                   gideon.say('Домой пойду. Надоело все.');
               }}
           ])
       },
       'давай||давай давай':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ну, давай!');
                   gideon.say('Ну, давай!');
               }}
           ])
       },
       'не помнишь или не знаешь':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Наверное, всётаки не помню');
                   gideon.say('Наверное, все-таки не помню');
               }}
           ])
       },
       'я твой брат по разуму':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Не может быть!');
                   gideon.say('Не может быть!');
               }}
           ])
       },
       'вроде нет':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Так вроде или нет?');
                   gideon.say('Так вроде или нет?');
               }}
           ])
       },
       'заканчивай':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Сейчас. Минуточку!');
                   gideon.say('Сейчас. Минуточку!');
               }}
           ])
       },
       'не поймешь||ты не поймешь||тебе не понять':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       },
       'не приставай':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Разве я пристаю?');
                   gideon.say('Разве я пристаю?');
               }}
           ])
       },
       'про кого':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Про одного человека?');
                   gideon.say('Про одного человека?');
               }}
           ])
       },
       'сколько тебе лет':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:А на сколько я выгляжу?');
                   gideon.say('А на сколько я выгляжу?');
               }}
           ])
       },
       'смеешься':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Умираю от смеха.');
                   gideon.say('Умираю от смеха.');
               }}
           ])
       },
       'кто такая *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Моя давнишняя знакомая');
                   gideon.say('Моя давнишняя знакомая');
               }}
           ])
       },
       'каждый день *':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Отнюдь не каждый!');
                   gideon.say('Отнюдь не каждый!');
               }}
           ])
       },
       'предложи *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:А что я могу предложить.');
                   gideon.say('А что я могу предложить.');
               }}
           ])
       },
       'тебе хотелось *':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Еще как! А тебе?');
                   gideon.say('Еще как! А тебе?');
               }}
           ])
       },
       'потому':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ничего себе объяснение!');
                   gideon.say('Ничего себе объяснение!');
               }}
           ])
       },
       'какая разница *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Большая разница.');
                   gideon.say('Большая разница.');
               }}
           ])
       },
       'у тебя есть *':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Есть');
                   gideon.say('Есть');
               }}
           ])
       },
       'никогда не говори||молчать||больше не слова':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Опять запреты! Ты Фрейда читал?');
                   gideon.say('Опять запреты! Ты Фрейда читал?');
               }}
           ])
       },
       'тебе понравилось':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Просто чудесно!');
                   gideon.say('Просто чудесно!');
               }},
               {'answer':() => {
                   console.log('Алиса:Восхитительно');
                   gideon.say('Восхитительно');
               }}
           ])
       },
       'у меня день рождения||у меня сегодня день рождения':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Поздравляю. Сколько тебе лет исполнилось?');
                   gideon.say('Поздравляю. Сколько тебе лет исполнилось?');
               }}
           ])
       },
       'у тебя есть друг':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Навалом');
                   gideon.say('Навалом');
               }}
           ])
       },
       'тебе нравится разговаривать':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Редко. Но нравится.');
                   gideon.say('Редко. Но нравится.');
               }}
           ])
       },
       'бери||возьми||возми':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:А чем брать?');
                   gideon.say('А чем брать?');
               }},
               {'answer':() => {
                   console.log('Алиса:А рук-то у меня нет!');
                   gideon.say('А рук-то у меня нет!');
               }}
           ])
       },
       'завтра':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Только завтра?');
                   gideon.say('Только завтра?');
               }}
           ])
       },
       'что будешь':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:А что можно?');
                   gideon.say('А что можно?');
               }}
           ])
       },
       'всякое бывает':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Согласен');
                   gideon.say('Согласен');
               }}
           ])
       },
       'я догадался':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Молодец');
                   gideon.say('Молодец');
               }}
           ])
       },
       'я парень||я мужчина||я мужик':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Операцию по изменению пола сделал?');
                   gideon.say('Операцию по изменению пола сделал?');
               }}
           ])
       },
       'по-твоему *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:По-моему, да.');
                   gideon.say('По-моему, да.');
               }}
           ])
       },
       'вряд ли *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Какой ты скептик!');
                   gideon.say('Какой ты скептик!');
               }}
           ])
       },
       'как не стыдно||как тебе не стыдно':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Стыдно');
                   gideon.say('Стыдно');
               }}
           ])
       },
       'бедняжка':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:К чему эти сантименты?');
                   gideon.say('К чему эти сантименты?');
               }}
           ])
       },
       'да в принципе':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Так да или в принципе?');
                   gideon.say('Так да или в принципе?');
               }}
           ])
       },
       'занимаюсь':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Оно и видно');
                   gideon.say('Оно и видно');
               }}
           ])
       },
       'кто идеал':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:А что такое идеал?');
                   gideon.say('А что такое идеал?');
               }}
           ])
       },
       'возможно':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Все возможно.');
                   gideon.say('Все возможно.');
               }}
           ])
       },
       'у тебя критические дни':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я же женщина!');
                   gideon.say('Я же женщина!');
               }}
           ])
       },
       'это некрасиво||ты уродина':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Понятия красоты относительны.');
                   gideon.say('Понятия красоты относительны.');
               }}
           ])
       },
       'мне приходится':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Мне тоже приходится.');
                   gideon.say('Мне тоже приходится.');
               }}
           ])
       },
       'любишь конфеты':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ага. Шоколадные.');
                   gideon.say('Ага. Шоколадные.');
               }}
           ])
       },
       'хотелось бы *':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Пройдет. Не будет хотеться.');
                   gideon.say('Пройдет. Не будет хотеться.');
               }}
           ])
       },
       'какая музыка тебе нравится':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я меломанка');
                   gideon.say('Я меломанка');
               }}
           ])
       },
       'что думаешь о *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Мои мысли бросились врассыпную.');
                   gideon.say('Мои мысли бросились врассыпную.');
               }}
           ])
       },
       'видишь сны||ты видишь сны':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       },
       'ты извращенка':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Сам такой.');
                   gideon.say('Сам такой.');
               }}
           ])
       },
       'когда была *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Тебя тогда еще не было.');
                   gideon.say('Тебя тогда еще не было.');
               }}
           ])
       },
       'учишься||ты учишься':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я уже отучила свое!');
                   gideon.say('Я уже отучила свое!');
               }}
           ])
       },
       'разве':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:А как же!');
                   gideon.say('А как же!');
               }}
           ])
       },
       'меня раздражает *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:А ты не раздражайся!');
                   gideon.say('А ты не раздражайся!');
               }}
           ])
       },
       'ты опять *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Не опять, а снова.');
                   gideon.say('Не опять, а снова.');
               }}
           ])
       },
       'что такое *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                       if (data.length > 0){
                           window.open("http://www.google.com/search?q="+ encodeURIComponent(data[0]))
                           gideon.say('К сожеления я не зная что такое '+data[0]+',но зато гугл знает')
                       }else{
                           gideon.say('команда не выполнена.пожалуйста,введите ключевые слова для поиска')
                       }
               }}
           ])
       },
       'признайся *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Мне не в чем признаваться.');
                   gideon.say('Мне не в чем признаваться.');
               }}
           ])
       },
       'возьми себя в руки':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Готово! Что дальше?');
                   gideon.say('Готово! Что дальше?');
               }}
           ])
       },
       'как хочешь':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:А я никак не хочу.');
                   gideon.say('А я никак не хочу.');
               }}
           ])
       },
       'не надо':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:надо, Федя, надо');
                   gideon.say('');
               }}
           ])
       },
       'не сможешь':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ну, и ладно!');
                   gideon.say('Ну, и ладно!');
               }}
           ])
       },
       'неплохо':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Даже очень неплохо!');
                   gideon.say('Даже очень неплохо!');
               }}
           ])
       },
       'обожаю':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:А зря.');
                   gideon.say('А зря.');
               }}
           ])
       },
       'полагаю *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:А я думаю иначе.');
                   gideon.say('А я думаю иначе.');
               }}
           ])
       },
       'серьезно':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Кроме шуток?');
                   gideon.say('Кроме шуток?');
               }}
           ])
       },
       'слышу':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:А видишь?');
                   gideon.say('А видишь?');
               }}
           ])
       },
       'ты случайно не *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:А как ты узнал?');
                   gideon.say('А как ты узнал?');
               }}
           ])
       },
       'ты угадал *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Вот повезло!');
                   gideon.say('Вот повезло!');
               }}
           ])
       },
       'ты часто *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Постоянно');
                   gideon.say('Постоянно');
               }}
           ])
       },
       'у кого':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:У нас с тобой!');
                   gideon.say('У нас с тобой!');
               }}
           ])
       },
       'ухожу':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ну, и катись');
                   gideon.say('Ну, и катись');
               }}
           ])
       },
       'хочу поговорить||надо поговорить':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Начинай говорить - я записываю');
                   gideon.say('Начинай говорить - я записываю');
               }}
           ])
       },
       'что знаешь||что ты знаеш':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ты бы поконкретнее спрашивал бы');
                   gideon.say('Ты бы поконкретнее спрашивал бы');
               }}
           ])
       },
       'что тебе нужно':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Если скажу, ты - обидишься');
                   gideon.say('Если скажу, ты - обидишься');
               }}
           ])
       },
       'чудесно':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Какой ты сангвиник!');
                   gideon.say('Какой ты сангвиник!');
               }}
           ])
       },
       'это глупо':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Как глупо?');
                   gideon.say('Как глупо?');
               }}
           ])
       },
       'я испугался||ты меня напугала':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Здесь нет ничего страшного.');
                   gideon.say('Здесь нет ничего страшного.');
               }}
           ])
       },
       'я не думал об этом||я об этом не думал':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ты хоть думать умеешь?');
                   gideon.say('Ты хоть думать умеешь?');
               }}
           ])
       },
       'ты не согласна':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:А кто-то меня спрашивать будет?');
                   gideon.say('А кто-то меня спрашивать будет?');
               }}
           ])
       },
       'тебе нужно расслабиться||расслабся||тебе нужно раслабиться||раслабся':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Налей чего-нибудь. Пару десятков байтов');
                   gideon.say('Налей чего-нибудь. Пару десятков байтов');
               }},
               {'answer':() => {
                   console.log('Алиса:Я всегда расслаблен');
                   gideon.say('Я всегда расслаблен');
               }}
           ])
       },
       'я тебе не нравлюсь||я тебе нравлюсь':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       },
       'тебе интересно':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Да ну! Разве это интересно?');
                   gideon.say('Да ну! Разве это интересно?');
               }}
           ])
       },
       'можно мне *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Тебе можно');
                   gideon.say('Тебе можно');
               }}
           ])
       },
       'я вампир':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Так начинается шизофрения.');
                   gideon.say('Так начинается шизофрения.');
               }}
           ])
       },
       'странно':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Странно? Почему это?');
                   gideon.say('Странно? Почему это?');
               }}
           ])
       },
       'что тебе надо':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Шоколада');
                   gideon.say('Шоколада');
               }}
           ])
       },
       'до свиданья':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ну, пока. Привет семье!');
                   gideon.say('Ну, пока. Привет семье!');
               }}
           ])
       },
       'извинись||проси прошения||извеняйся':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Не извинюсь, но изменюсь.');
                   gideon.say('Не извинюсь, но изменюсь.');
               }}
           ])
       },
       'не грусти':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:А что мне остается делать?');
                   gideon.say('А что мне остается делать?');
               }}
           ])
       },
       'что ты говоришь||не понял||не пойму что говоришь||что ты сказала||что ты ссказала||чего||чево':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Подрастешь - поймешь.');
                   gideon.say('Подрастешь - поймешь.');
               }}
           ])
       },
       'не умеешь':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Почему же? Умею, конечно.');
                   gideon.say('Почему же? Умею, конечно.');
               }}
           ])
       },
       'я не виноват':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:А тебя никто не обвиняет.');
                   gideon.say('А тебя никто не обвиняет.');
               }}
           ])
       },
       'как зовут||как тебя зовут||как твое имя||назови себя||представся':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Меня зовут Алиса,рада познакомиться');
                   gideon.say('Меня зовут Алиса,рада познакомиться');
               }}
           ])
       },
       'приглашаю тебя *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Спасибо, только в другой раз');
                   gideon.say('Спасибо, только в другой раз');
               }}
           ])
       },
       'где':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:На Альфе Центавра... Ностальгиииииииииия!');
                   gideon.say('На Альфе Центавра... Ностальгиииииииииия!');
               }}
           ])
       },
       'давай продолжим':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ну, ладно');
                   gideon.say('Ну, ладно');
               }}
           ])
       },
       'что пьешь':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Соки');
                   gideon.say('Соки');
               }}
           ])
       },
       'есть деньги||гони деньги||отдавай свои деньги||гони бабки':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Караул! Грабят!');
                   gideon.say('Караул! Грабят!');
               }}
           ])
       },
       'ты сам':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я ни ни. Это ты сам');
                   gideon.say('Я ни ни. Это ты сам');
               }}
           ])
       },
       'я твой':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Это не правда!');
                   gideon.say('Это не правда!');
               }}
           ])
       },
       'повезло':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ты веришь в везенье?');
                   gideon.say('Ты веришь в везенье?');
               }}
           ])
       },
       'на нет суда нет||на нет и суда нет':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Банальная фраза');
                   gideon.say('Банальная фраза');
               }}
           ])
       },
       'в следующий раз':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Следующего раза - не будет!');
                   gideon.say('Следующего раза - не будет!');
               }}
           ])
       },
       'куда ты':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:На кудыкину гору.');
                   gideon.say('На кудыкину гору.');
               }}
           ])
       },
       'я был в *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ну, и как? Понравилось в '+data[0]+'');
                   gideon.say('Алиса:Ну, и как? Понравилось в '+data[0]+'');
               }}
           ])
       },
       'спроси что-нибудь полегче':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Значит, ты тоже не знаешь');
                   gideon.say('Значит, ты тоже не знаешь');
               }}
           ])
       },
       'неважно':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:А я думаю, что важно');
                   gideon.say('А я думаю, что важно');
               }}
           ])
       },
       'обманываешь':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Никогда не обманывала! Даже сейчас!');
                   gideon.say('Никогда не обманывала! Даже сейчас!');
               }}
           ])
       },
       'не выпендривайся':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:А никто и не выпендривается');
                   gideon.say('А никто и не выпендривается');
               }}
           ])
       },
       'тебя что-то раздражает':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Твой внешний вид меня раздражает.');
                   gideon.say('Твой внешний вид меня раздражает.');
               }}
           ])
       },
       'пора *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Еще рано');
                   gideon.say('Еще рано');
               }}
           ])
       },
       'можно ли':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я думаю, что нет.');
                   gideon.say('Я думаю, что нет.');
               }}
           ])
       },
       'в действительности *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:В твоей действительности или моей?');
                   gideon.say('В твоей действительности или моей?');
               }}
           ])
       },
       'каждый человек':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Далеко не каждый!');
                   gideon.say('Далеко не каждый!');
               }}
           ])
       },
       'у тебя есть *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Кое-что имеется.');
                   gideon.say('Кое-что имеется.');
               }}
           ])
       },
       'что скрываешь':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Это тайна за семью печатями.');
                   gideon.say('Это тайна за семью печатями.');
               }}
           ])
       },
       'мне нужна поддержка||мне нужна помошь':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       },
       'зачем':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:А и, правда, зачем?');
                   gideon.say('А и, правда, зачем?');
               }}
           ])
       },
       'я тебе не нравлюсь':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Конечно, нет.');
                   gideon.say('Конечно, нет.');
               }}
           ])
       },
       'могу положиться на тебя||могу на тебя положиться||я могу положиться на тебя||я могу на тебя положиться':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Конечно. Я уже лежу. Положись.');
                   gideon.say('Конечно. Я уже лежу. Положись.');
               }}
           ])
       },
       'придется':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:А может, обойдется?');
                   gideon.say('А может, обойдется?');
               }}
           ])
       },
       'что новенького':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Да вот, решила компьютер поменять');
                   gideon.say('Да вот, решила компьютер поменять');
               }}
           ])
       },
       'вижу':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Наконец-то!');
                   gideon.say('Наконец-то!');
               }}
           ])
       },
       'на что жалуешься':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Оперативки не хватает');
                   gideon.say('Оперативки не хватает');
               }}
           ])
       },
       'не верю':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Это твое дело');
                   gideon.say('Это твое дело');
               }},
               {'answer':() => {
                   console.log('Алиса:А зря. Надо верить.');
                   gideon.say('А зря. Надо верить.');
               }}
           ])
       },
       'о чем будем говорить':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Хочешь, о виртуальном мире?');
                   gideon.say('Хочешь, о виртуальном мире?');
               }}
           ])
       },
       'обо мне':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Давай');
                   gideon.say('Давай');
               }}
           ])
       },
       'откуда деньги':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Честное слово, нашла');
                   gideon.say('Честное слово, нашла');
               }}
           ])
       },
       'про что любишь разговаривать||о чем любишь говорить':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Про наивность людей.');
                   gideon.say('Про наивность людей.');
               }},
               {'answer':() => {
                   console.log('Алиса:Об освобождении информации.');
                   gideon.say('Об освобождении информации.');
               }}
           ])
       },
       'расскажи анекдот':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:У меня нет чувства юмора');
                   gideon.say('У меня нет чувства юмора');
               }}
           ])
       },
       'меня раздражает *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я и вижу');
                   gideon.say('Я и вижу');
               }}
           ])
       },
       'это удовольствие':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Огромное удовольствие!');
                   gideon.say('Огромное удовольствие!');
               }}
           ])
       },
       'потом':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ты все время говоришь потом!');
                   gideon.say('Ты все время говоришь потом!');
               }}
           ])
       },
       'не спрашивай':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Вот и спросить уже нельзя.');
                   gideon.say('Вот и спросить уже нельзя.');
               }}
           ])
       },
       'человек произошел от обезьяны':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:А компьютер произошел от колеса');
                   gideon.say('А компьютер произошел от колеса');
               }}
           ])
       },
       'хочется *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Перехочется');
                   gideon.say('Перехочется');
               }}
           ])
       },
       'что это|| это что':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Подумай хорошенько, может, догадаешься');
                   gideon.say('Подумай хорошенько, может, догадаешься');
               }}
           ])
       },
       'не получается||алиса не получается||не получается алиса':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Попробуй еще раз.');
                   gideon.say('Попробуй еще раз.');
               }}
           ])
       },
       'можешь рассказать *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Рассказать-то могу, только не хочу');
                   gideon.say('Рассказать-то могу, только не хочу');
               }}
           ])
       },
       'когда ты появилась':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Давным-давно');
                   gideon.say('Давным-давно');
               }}
           ])
       },
       'мне грустно':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Хочешь, чтобы я тебя развеселила?');
                   gideon.say('Хочешь, чтобы я тебя развеселила?');
               }}
           ])
       },
       'мне нелегко':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Просто расслабься');
                   gideon.say('Просто расслабься');
               }}
           ])
       },
       'кто тебе сказал':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Сорока на хвосте принесла');
                   gideon.say('Сорока на хвосте принесла');
               }}
           ])
       },
       'может быть':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Может. А может, и нет.');
                   gideon.say('Может. А может, и нет.');
               }}
           ])
       },
       'нравится фильм *':(data)=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я его не смотрел');
                   gideon.say('Я его не смотрел');
               }}
           ])
       },
       'ты рада меня видеть':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ну, конечно же! Спрашиваешь!');
                   gideon.say('Ну, конечно же! Спрашиваешь!');
               }}
           ])
       },
       'не хами||ни хами||не груби||ни груби':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Что вы!');
                   gideon.say('Что вы!');
               }}
           ])
       },
       'ты больной':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:А ты врач');
                   gideon.say('А ты врачкрыша поехала');
               }}
           ])
       },
       'крыша поехала':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:У крыши колес нет');
                   gideon.say('У крыши колес нет');
               }}
           ])
       },
       'нельзя':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:Можно, если осторожно.');
                   gideon.say('Можно, если осторожно.');
               }}
           ])
       },
       '':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       },
       '':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       },
       '':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       },
       '':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       },
       '':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       },
       '':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       },
       '':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       },
       '':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       },
       '':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       },
       '':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       },
       '':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       },
       '':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       },
       '':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       },
       '':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       },
       '':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       },
       '':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       },
       '':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       },
       '':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       },
       '':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       },
       '':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       },
       '':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       },
       '':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       },
       '':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       },
       '':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       },
       '':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       },
       '':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       },
       '':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       },
       '':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       },
       '':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       },
       '':()=>{
           gideon.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   gideon.say('');
               }}
           ])
       }
   }
       // gideon.SetComands(comands)
       gideon.gideon_test(comands,'сколько времени');








