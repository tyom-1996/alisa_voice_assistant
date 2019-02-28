   var gideon = new Gideon('Artyom');
   var audio;
   gideon.start();

   HTMLAudioElement.prototype.stop = function(){
      this.pause();
      this.currentTime = 0.0;
   }

   let comands = {

       'привет гидеон||привет':()=>{
           gideon.random_answer([
               {'answer':()=>{
                        console.log('Гидеон: Здравствуйте сэр');
                        gideon.say('Здравствуйте сэр');
               }},{'answer':()=>{
                       console.log('Гидеон: Здравствуйте');
                       gideon.say('Здравствуйте');
               }},{'answer':()=>{
                       console.log('Гидеон: Привет сэр');
                       gideon.say('Привет сэр');
               }},{'answer':()=>{
                       console.log('Гидеон: Здарова');
                       gideon.say('Здарова');
               }}
           ])
       },'гидеон||компьютер||компьютер':()=>{
           console.log('Гидеон: Да сэр')
           gideon.say('Да сэр',"Russian Male")
       },'послушай гидеон||эй гидеон||послушать гидеон':()=>{
           console.log('Гидеон: чего тебе')
           gideon.say('чего тебе',"Russian Male")
       },'гидеон кто ты||кто ты':()=>{
           console.log('я онлайн ассистент и ваш верный помощник')
           gideon.say('я, онлайн ассистент, и ваш верный помощник!!')
       },'ты здесь||гидеон ты здесь':()=>{
           console.log('Гидеон: ну конечно я здесь я же так вас люблю')
           gideon.say('ну конечно я здесь',"Russian Male")
       },'спасибо||гидеон спасибо':()=>{
           console.log('Гидеон: пожалуйста сэр')
           gideon.say('пожалуйста сэр',"Russian Male")
       },
       'отлично||хорошо':()=>{
           console.log('Гидеон: Чем могу помоч сэр')
           gideon.say('Чем могу помоч сэр',"Russian Male")
       },
       'как ты||как ты гидеон||как дела||как дела гидеон': function() {
           console.log('Гидеон:отлично сэр, чем желаете заняться')
           gideon.say('отлично сэр, чем желаете заняться?')
       },
       'включи плеер||плеер||гидеон включи плеер||гидеон загрузи плеер|| загрузи плеер||загрузить плеер':() => {
         audio = new Audio('/uploads/upl_music/tenca-aghajanyan-fatum-lev-lev-2018.mp3');
         audio.id = 'demo'
         console.log('Гидеон: Плеер включён')
           gideon.say('Плеер включён',"Russian Male")
       },
       'включи музыку||загрузи музыку||музыку||воспроизвести трек||продолжай||play||музыка загрузить':() => {
          (audio) ? (
             audio.play(),
             console.log('Гидеон: Наслаждайтесь сэр'),
                  gideon.say('Наслаждайтесь сэр')
          ) : (
             console.log('Гидеон: Перед прослушиванием музыки загрузите плеер'),
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
       'пошёл ты к чёрту гидеон||пошёл к чёрту||пошёл ты':()=>{
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
       'привет * я *':(data)=>{
         gideon.say(`здравствуй ${data[1]} я ${data[0]}`)
         console.log(`здравствуй ${data[1]} я ${data[0]}`)
       },
       'спокойной ночи||гидеон спокойной ночи||спокойной ночи гидеон':()=>{
         gideon.say('спокойной ночи сэр')
       },
       'молодец||а ты молодец':()=>{
         gideon.say('стараюсь сэр')
           console.log('judhuw')
       }
   }
       gideon.SetComands(comands)
       // gideon.gideon_test(comands,'найди в интернете hello');








