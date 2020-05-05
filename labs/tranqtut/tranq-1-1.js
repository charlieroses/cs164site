function check_1_1(form) {
	for(i = 0; i < 3; ++i) {
		if(form.ans[i].checked) {
			subans = i+1
			break
		}
	}
	if(subans == 1) {
		window.open("tranq-1-1.wrong1", "_self", false);
	}
	else if(subans == 2) {
		window.open("tranq-1-1.right2", "_self", false);
	}
	else if(subans == 3) {
		window.open("tranq-1-1.wrong3", "_self", false);
	}
	else {
		window.open("tranq-1-1.none", "_self", false);
	}
}
