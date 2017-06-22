( function () {
  var button__a     = document.getElementsByClassName( 'section__a' )[ 0 ],
      form          = document.getElementsByClassName( 'form' )[ 0 ],
      fieldset__li  = document.getElementsByClassName( 'fieldset__li' )[ 0 ],
      footer        = document.getElementsByClassName( 'footer__nav' )[ 0 ];

  button__a.addEventListener( "click", function ( event ) {
    //console.log( event.currentTarget );
    console.log( footer );
    form.classList.toggle( "form--inactive" );
    form.classList.toggle( "form--active" );

    footer.classList.toggle( "footer__nav--inactive" );
    footer.classList.toggle( "footer__nav--active" );
  } );

  fieldset__li.addEventListener( "click", function ( event ) {
    //console.log( event.currentTarget );
    console.log( event.currentTarget.parentElement );
    event.currentTarget.classList.toggle( "fieldset__li--active" );
    event.currentTarget.parentElement.classList.toggle( "fieldset__li--active" );
  } );
} )();