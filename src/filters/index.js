/*-----------------
   Custom filters 
-----------------*/
var moment = require('moment');

// Filter for cutting off strings that are too long.
export function truncate(value) {
	var length = 124;

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
}


// Filter that takes an epoch based UTC date and creates date time value.
export function epochToDate(value) {
	return new moment.utc(value * 1000).fromNow();
}
