const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');  //href=”#”のaタグを取得
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();                                              //デフォルトの動作をキャンセル
      let href = smoothScrollTrigger[i].getAttribute('href');          //href=””の中身を取得
      console.log(href)                                                //結果確認
      let targetElement = document.getElementById(href.replace('#', ''));
      console.log(targetElement)                                       //結果確認
      const rect = targetElement.getBoundingClientRect().top;          // ブラウザからの高さを取得
      const offset = window.pageYOffset;                               // 現在のスクロール量を取得
      const gap = 60;   
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  }