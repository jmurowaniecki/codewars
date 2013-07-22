function solution(input, markers){
	pattern = [];
	for (var i in markers) {
		marker = markers[i];
		switch (marker) {
			case '!' : pattern.push('([!][a-zA-Z0-9]*)'); break;
			case '#' : pattern.push('([#].*)'); break;
			default: pattern.push('([' + marker + '].*)'); break;
		}
	}
	pattern = pattern.join('|');
	return input.replace(new RegExp(pattern, 'g'), '').replace(/\ \ /g, ' ').replace(/\ +\n/g, "\n").replace(/(^\ +)|(\ +$)/g, '');
}
