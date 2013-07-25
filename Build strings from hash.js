function solution(pairs){
	// TODO: complete
	var r = [];
	for (var i in pairs) {
		r.push(i + ' = ' + pairs[i]);
	}
	return r.join(',');
}
