(function(){
	var alphabet = [
	    ' ', '~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+',
	    '0' ,'1', '2', '3', '4', '5', '6', '7', '8', '9',
	    'a', 'A', 'ą', 'Ą', 'b', 'B', 'c', 'C', 'ć', 'Ć', 'd', 'D', 'e', 'E', 'ę', 'Ę',
	    'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'ł', 'Ł',
	    'm', 'M', 'n', 'N', 'ń', 'Ń', 'o', 'O', 'ó', 'Ó', 'p', 'P', 'q', 'Q', 'r', 'R',
	    's', 'S', 'ś', 'Ś', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y',
	    'z', 'Z', 'ź', 'Ź', 'ż', 'Ż'
	];

	function polishSort(a, b, method) {
	    if(a == b){
		return 0;
	    }
	    var d = 0;
	    while(a[d] == b[d]) {
		d++;
	    }
	    a_position = 0; 
	    b_position = 0;

	    for(var i = 0; i < alphabet.length; i++) {
		    if(alphabet[i] == a[d]){
			a_position = i;
		    }

		    if(alphabet[i] == b[d]){
			b_position = i;
		    }
	    }
	    var less = -1;
	    var greater = 1;
	    
	    if (method == 'desc') {
		less = 1;
		greater = -1;
	    }
	    return a_position < b_position ? less : greater;
	}
	
	$.extend($.fn.dataTableExt.oSort, {

	    "polstring-asc": function ( a, b ) {
		
		return polishSort(a, b, 'asc');
	    },   

	    "polstring-desc": function (a, b) {
		
		return polishSort(a, b, 'desc');
	    },
	
	});
}());