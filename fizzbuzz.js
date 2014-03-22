function fizzbuzz(n) {
	for (var i = 1; i <= n; i++) {
		var s = '';
		if (i % 3 === 0) {
			s += 'fizz';
		}
		if (i % 5 === 0) {
			s += 'buzz';
		}
		if (s === '') {
			s = i;
		}
		console.log(s);
	};
}