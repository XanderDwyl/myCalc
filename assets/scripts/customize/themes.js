// This flag will help us know if we need to clear the display input
var reset = false;
var total;

$( 'button' ).click( function ( ) {

    // What button was just clicked?
    var value = $( this ).val( );

    switch (value){
		case 'clear':
			$( '#display' ).val( '' );
			break;
		case '=':
			// Evaluate everything in the display input, coming up with a total
			total = eval( $( '#display' ).val( ) );

			// Inject the total back in the display input
			$( '#display' ).val( total );

			// Set a flag, so the next time we know to reset the display input
			reset = true;
			break;
		default:
			// If the last time around we set this flag to be true, then we need to clear the display input
			if ( reset ) {
			$( '#display' ).val( value );
			reset = false;
			}
			// Just append the number or an operator ( + - * / ) to the display input
			else {
			var displayVal = $('#display').val() + value;
			$( '#display' ).val( displayVal );
			}
			break;
    }
} );

$( '#display' ).keypress(function (e) {
	var value = $( this ).val();
	console.log(e.charCode);

	if(e.charCode == 61) {

		// Evaluate everything in the display input, coming up with a total
        total = eval( $( '#display' ).val( ) );

        // Inject the total back in the display input
        $( '#display' ).val( total );

        // Set a flag, so the next time we know to reset the display input
        reset = true;
	}
	else {
		if ( reset ) {
			reset = false;
		}
	}

}).keyup(function () {
	if( reset ) {
		$( '#display' ).val( total );
	}
});



