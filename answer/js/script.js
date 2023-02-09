$(function() {
    // drawerjs
    $( '.drawer' ).drawer();
});

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

  // wowjs

  new WOW().init();

  //googleform

  let $form = $('#js-form');
  $form.submit(function(e) { 
    $.ajax({ 
     url: $form.attr('action'), 
     data: $form.serialize(), 
     type: "POST", 
     dataType: "xml", 
     statusCode: { 
        0: function() { 
          //送信に成功したときの処理 
          $form.slideUp();
          $('#js-success').slideDown();
        }, 
        200: function() { 
          //送信に失敗したときの処理 
          $('#js-error').slideDown();
        }
      } 
    });
    return false; 
  }); 
    
  // formの入力確認
  let $submit = $('#js-submit');
  $('#js-form input, #js-form textarea').on( 'change', function() {
    if(
      $( '#js-form input[type="text"]').val() !== "" &&
      $( '#js-form input[type="email"]').val() !== "" &&
      $( '#js-form input[name="entry.839448592"]').prop( 'checked') === true
    ) {
      //全て入力された時
      $submit.prop('disabled', false);
      $submit.addClass( '-active');
    } else {
      //入力されていない時
      $submit.prop('disabled', true);
      $submit.removeClass( '-active');
    }
  });