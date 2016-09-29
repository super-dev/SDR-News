/*-----------------
   Custom filters
-----------------*/
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
	else {
		return "background-image: url('/img/default-icon.png')";
	}
}

// Filter that unescape URL
export function unescape(value) {
	var textArea = document.createElement('textarea');
	textArea.innerHTML = value;
	return textArea.value;
}

// Filter that takes an epoch based UTC date and creates date time value.
export function timeAgo(time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

function pluralize (time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}
