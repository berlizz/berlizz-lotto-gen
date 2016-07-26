function generate() {
	var numbers = [];
	for(var i=0; i<6; i++) {
		var number = numbers.push(Math.floor(Math.random() * 45) + 1);
		if(contains(numbers, number)) {
			i--;
		} else {
			numbers.push(number);
		}

	}
	return numbers;
}

function contains(numbers, number) {
	for(var i=0; i<numbers.length; i++) {
		if(numbers[i] === number) {
			return true;
		}
	}
	return false;
}

