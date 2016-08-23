/*-----------------
   Custom filters 
-----------------*/

// Filter for cutting off strings that are too long.
export function truncate(value) {
	var length = 144;

	if(value.length <= length) {
		return value;
	}
	else {
		return value.substring(0, length) + '...';			
	}
}


// Filter that takes an image url and creates a CSS style.
export function setAsBackground(value) {
	if(value && value!='self' && value !='nsfw' && value != 'default' ) {
		return 'background-image: url(' + value + ')';	
	}
	else {
		return 'background-image: url(http://placehold.it/60x60)';	
	}
}
