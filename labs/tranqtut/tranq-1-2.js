function check_1_2(form) {
	var subans = form.ans.value
	if(/var/.test(subans)) {
		window.open("tranq-1-2.right1", "_self", false);
	}
	else {
		window.open("tranq-1-2.wrong", "_self", false);
	}
}
