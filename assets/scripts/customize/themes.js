// This flag will help us know if we need to clear the display input
var reset = false;

$( 'button' ).click( function ( ) {

    // What button was just clicked?
    var value = $( this ).html( );

    // If they clicked equal, time to do the equation...
    if ( value == "=" ) {

        // Evaluate everything in the display input, coming up with a total
        var total = eval( $( '#display' ).val( ) );

        // Inject the total back in the display input
        $( '#display' ).val( total );

        // Set a flag, so the next time we know to reset the display input
        reset = true;
    }
    // Otherwise, they clicked a number or an operator ( + - * / )
    else {
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
    }
} );
var total;
$( '#display' ).keypress(function (e) {
	var value = $( this ).val();

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



