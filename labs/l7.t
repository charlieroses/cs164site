var t, h, g, v

fun cycle() {
	if (.h >= 0 ) {
		t : .t + 1
		calc()
		cycle()
	}

	return 0
}

fun calc() {
	h : ((.g/2) * pow(.t, 2)) + (.v * .t)
}

fun pow(a, b) {
	var r
	r : 1

	loop {
		until .b <= 0
		r : .r * .a
		b : .b - 1
	}

	return .r
}

fun init() {
	var ui

	ui : iread("Enter an initial velocity")

	t : 0
	h : 0
	v : .ui
	g : -10

	cycle()
}
