function check_1_4(form) {
	for(i = 0; i < 4; ++i) {
		if(form.ans[i].checked) {
			subans = i+1
			break
		}
	}
	if(subans == 1) {
		window.open("tranq-1-4.wrong1", "_self", false);
	}
	else if(subans == 2) {
		window.open("tranq-1-4.right2", "_self", false);
	}
	else if(subans == 3) {
		window.open("tranq-1-4.wrong3", "_self", false);
	}
	else if(subans == 4) {
		window.open("tranq-1-4.wrong4", "_self", false);
	}
	else {
		window.open("tranq-1-4.none", "_self", false);
	}
}
