( function () {
  var $next_height              = document.getElementById( "next-height" ),
      $form                     = document.getElementById( "form" ),
      $fieldset                 = document.getElementsByClassName( "fieldset" ),
      $fieldset__li             = document.getElementsByClassName( "fieldset__li" ),
      $fieldset__next           = document.getElementsByClassName( "fieldset__next" ),
      $fieldset__next__inactive = document.getElementsByClassName( "fieldset__next--inactive" ),
      $footer                   = document.getElementById( "footer__nav" );

  $next_height.addEventListener( "click", function ( event ) {
    event.preventDefault();
    event.stopPropagation();

    $form.classList.add( "form--active" );

    $fieldset[ 0 ].classList.remove( "fieldset--inactive" );
    $fieldset[ 0 ].classList.add( "fieldset--active" );

    $footer.classList.add( "footer__nav--active" );
  } );

  Array.from( $fieldset__li ).forEach( function( element ) {
    element.addEventListener( "click", function ( event ) {
      event.preventDefault();
      event.stopPropagation();

      $fieldset__li_active  = document.getElementsByClassName( "fieldset__li" );

      Array.from( $fieldset__li_active ).forEach( function( element ) {
        element.classList.remove( "fieldset__li--active" );
      } );

      event.currentTarget.classList.add( "fieldset__li--active" );
      const $fieldset__next = event.currentTarget.parentElement.parentElement.children[ 2 ].children[ 1 ];
      $fieldset__next.classList.remove( "fieldset__next--inactive" );
      $fieldset__next.classList.add( "fieldset__next--active" );
      $fieldset__next.removeAttribute( "disabled" );
    } );
  } );

  Array.from( $fieldset__next__inactive ).forEach( function( element ) {
    element.addEventListener( "click", function ( event ) {
      event.preventDefault();
      event.stopPropagation();
    } );
  } );
} )();

$( function () {
  var $form             = $( ".form" ),
      $fieldset         = $( "fieldset" ),
      $fieldset__li     = $( ".fieldset__li" ),
      $fieldset__next   = $( ".fieldset__next" ),
      $results          = $( ".results" ),
      $results__clear   = $( ".results__clear" ),
      $footer__li       = $( ".footer__li" ),
      counter           = 0;

  $fieldset__next.on( 'click', function ( event ) {
    event.preventDefault();
    event.stopPropagation();

    var $section            = "#" + $( event.currentTarget ).data( "section" ),
        $slideClassActive   = "fieldset--active";
        $slideClassInactive = "fieldset--inactive";

    counter++;

    $footer__li.eq( counter ).addClass( "footer__li--active" );

    if ( $section == "#results" ) {
      $slideClassActive   = "results--active";
      $slideClassInactive = "results--inactive";
    }

    if ( $( event.currentTarget ).hasClass( "last" ) ) {
      $.ajax( {
        url: "assets/js/response.min.json",
        method: "POST",
        dataType: "json",
        data: {},
        contentType: "application/json; charset=UTF-8",
        error: function ( jqXHR, textStatus, errorThrown ) {},
      } ).fail( function ( jqXHR, textStatus, errorThrown ) {
        console.log( "fail" );
        console.log( "jqXHR: ", jqXHR );
        console.log( "textStatus: ", textStatus );
        console.log( "errorThrown: ", errorThrown );
      } ).done( function ( data, textStatus, jqXHR ) {
        var dogImg            = data.dogImg,
            dogImgAlt         = data.dogImgAlt,
            title             = data.title,
            message           = data.message,
            productImg        = data.productImg,
            productImgAlt     = data.productImgAlt,
            $dog_img          = $( "#dog-img" ),
            $results_title    = $( "#results-title" ),
            $results_message  = $( ".results__message" ),
            $product_img      = $( "#product-img" );

        $dog_img.attr( "src", "" );
        $dog_img.attr( "alt", "" );
        $results_title.text( "" );
        $results_message.empty();
        $product_img.attr( "src", "" );
        $product_img.attr( "alt", "" );

        $dog_img.attr( "src", dogImg );
        $dog_img.attr( "alt", dogImgAlt );
        $results_title.text( title );
        $results_message.append( message );
        $product_img.attr( "src", productImg );
        $product_img.attr( "alt", productImg );

        $( $section ).toggleClass( $slideClassActive, true );
        $( $section ).toggleClass( $slideClassInactive, false );
      } );
    } else {
      $( $section ).toggleClass( $slideClassActive, true );
      $( $section ).toggleClass( $slideClassInactive, false );
    }
  } );

  $results__clear.on( "click", function ( event ) {
    event.preventDefault();
    event.stopPropagation();

    $form.addClass( "form--active" );
    $results.removeClass( "results--active" );

    $fieldset.removeClass( "fieldset--active" );
    $fieldset.addClass( "fieldset--inactive" );
    $fieldset.eq( 0 ).removeClass( "fieldset--inactive" );
    $fieldset.eq( 0 ).addClass( "fieldset-down fieldset--active-down" );
    $footer__li.removeClass( "footer__li--active" );
    $footer__li.eq( 0 ).addClass( "footer__li--active" );

    setTimeout( function () {
      $results.addClass( "results--inactive" );
    }, 3000 );
  } );

  function restartForm ( ) {
    $form.clear();
    $form.removeClass( "form--active" );
    $fieldset.removeClass( "fieldset--active fieldset-down fieldset--active-down" );
    $fieldset__li.removeClass( "fieldset__li--active" );
    $fieldset__next.removeClass( "fieldset__next--active" );
    $results.removeClass( "results--active" );
  }
} );