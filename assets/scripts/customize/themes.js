(function() {
	'use strict';

	var button   = document.getElementsByTagName('button');
	var answer   = 0;
	var operator = '';
	var point    = 0;

	document.getElementById('display').value = 0;

	var buttonClick = function () {
		point = (document.getElementById('display').value).match(/\./g);

		if( point !== null && this.value === '.' || this.value === 'clear' ) {
			if( this.value === 'clear' ) {
				document.getElementById('display').value  = 0;
				operator = '';
				document.getElementById('operator').value = operator;
			}
			return false;
		}

		if (document.getElementById('display').value === '0' && this.value !== '.') {
			document.getElementById('display').value = '';
		}

		if (this.value === '+' ||
			this.value === '-' ||
			this.value === '/' ||
			this.value === '*' ) {
			operator = this.value;
			document.getElementById('operator').innerHTML = operator;

			if(document.getElementById('display').value > 0) {
				answer = document.getElementById('display').value;
			}

			document.getElementById('display').value = 0;
			console.log(answer);
		} else {
			if( this.value === '=' ) {
				document.getElementById('display').value = eval ( answer + operator + document.getElementById('display').value );
				answer = document.getElementById('display').value;
				operator = this.value;
				document.getElementById('operator').innerHTML = operator;
			} else {
				document.getElementById('display').value += this.value;
			}
		}

	};

	for( var inc = 0; inc < button.length; inc++) {
		button[inc].addEventListener('click', buttonClick, false);
	}

})(document.onLoad);