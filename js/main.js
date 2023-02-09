// ハンバーガーメニュー実装

$('.drawer-icon').click(function() {
    $('body').toggleClass('open');
});

$('.drawer-background').click(function() {
    $('body').removeClass('open');
});


// #から始まるURLがクリックされた時

$('a[href^="#"]').click(function() {
    // .headerクラスがついた要素の高さを取得
    const header = $(".header").innerHeight();
    
    // 移動速度を指定（ミリ秒）
    const speed = 300;
    
    // hrefで指定されたidを取得
    const id = $(this).attr("href");
    
    // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
    const target = $("#" == id ? "html" : id);
    
    // ページのトップを基準にターゲットの位置を取得からトップからの距離からヘッダー分の高さを引く
    const position = $(target).offset().top - header;
    
    // ターゲットの位置までspeedの速度で移動
    
    $("html, body").animate(
      {
        scrollTop: position
     },
      speed
    );
    return false;
    
  });

  //   wow.js
new WOW().init();