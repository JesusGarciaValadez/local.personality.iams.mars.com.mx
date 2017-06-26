( function () {
  var $next_height              = document.getElementById( "next-height" ),
      $form                     = document.getElementById( "form" ),
      $fieldset                 = document.getElementsByClassName( "fieldset" ),
      $fieldset__li             = document.getElementsByClassName( "fieldset__li" ),
      $fieldset__next           = document.getElementsByClassName( "fieldset__next" ),
      $fieldset__next__inactive = document.getElementsByClassName( "fieldset__next--inactive" ),
      $footer                   = document.getElementById( "footer__nav" );

  $next_height.addEventListener( "click", function ( event ) {
    $form.classList.add( "form--active" );

    $fieldset[ 0 ].classList.remove( "fieldset--inactive" );
    $fieldset[ 0 ].classList.add( "fieldset--active" );

    $footer.classList.add( "footer__nav--active" );
  } );

  Array.from( $fieldset__li ).forEach( function( element ) {
    element.addEventListener( "click", function ( event ) {
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
  var $fieldset__next = $( ".fieldset__next" );

  $fieldset__next.on( 'click', function ( event ) {
    event.preventDefault();
    event.stopPropagation();

    var $section            = "#" + $( event.currentTarget ).data( "section" ),
        $slideClassActive   = "fieldset--active";
        $slideClassInactive = "fieldset--inactive";

    if ( $section == "#results" ) {
      $slideClassActive   = "results--active";
      $slideClassInactive = "results--inactive";
    }

    $( $section ).toggleClass( $slideClassActive, true );
    $( $section ).toggleClass( $slideClassInactive, false );
  } );

  $( ".results__clear" ).on( "click", function ( event ) {
    event.preventDefault();
    event.stopPropagation();

    var $form__active = $( ".form--active" );
    $form__active.toggleClass( "form--active" );
    $form__active.toggleClass( "form" );

    var $fieldset__active = $( ".fieldset--active" );
    $fieldset__active.toggleClass( "fieldset--active", false );
    $fieldset__active.toggleClass( "fieldset--inactive", true );

    var $results__active = $( ".results--active" );
    $results__active.toggleClass( "results--active", false );
    $results__active.toggleClass( "results--inactive", true );

    $( "#next-height" ).click();
  } );
} );