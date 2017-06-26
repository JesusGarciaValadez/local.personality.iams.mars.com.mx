( function () {
  var $next_height  = document.getElementById( 'next-height' ),
      $form         = document.getElementById( 'form' ),
      $fieldset__li = document.getElementsByClassName( 'fieldset__li' ),
      $footer       = document.getElementById( 'footer__nav' );

  $next_height.addEventListener( "click", function ( event ) {
    $form.classList.add( "form--active" );

    $footer.classList.add( "footer__nav--active" );
  } );

  Array.from( $fieldset__li ).forEach( function( element ) {
    element.addEventListener( "click", function ( event ) {
      console.log( event );
      console.log( event.currentTarget.parentElement );

      $fieldset__li_active  = document.getElementsByClassName( "fieldset__li" );

      Array.from( $fieldset__li_active ).forEach( function( element ) {
        element.classList.remove( "fieldset__li--active" );
      } );

      event.currentTarget.classList.add( "fieldset__li--active" );
      const $fieldset__next = event.currentTarget.parentElement.parentElement.children[ 2 ].children[ 1 ];
      $fieldset__next.classList.remove( "fieldset__next--inactive" );
      $fieldset__next.classList.add( "fieldset__next--active" );
    } );
  } );
} )();