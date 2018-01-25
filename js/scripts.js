function drawXmasTree(height) {
	for (var i = 1; i < (height + 1); i++) {
		var star = "";
		for (var j = 0; j < (height - i); j++) {
			star += " ";
		}
		for (var k = 0; k < i; k++) {
			if (i % 2 === 1 && k % 2 === 0) {
				star += "o ";
			} else {
				star += "* ";
			}
		}
		console.log(star);
	}
}

drawXmasTree(15);