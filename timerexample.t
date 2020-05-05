fun init() {
	var t1, t2

	sprint("Timer 1 Started")
    nl()
    t1 : timer(3000, hello)


    sprint("Timer 2 Started")
    nl()
	t2 : timer(5000, goodbye)


    stoptimer(.t2)
    sprint("Timer 2 Stopped Prematurely")
    nl()
}

fun hello() {
    sprint("Timer 1 Completed")
    nl()
    sprint("Hello")
}

fun goodbye() {
    sprint("Timer 2 Completed")
    nl()
    sprint("Goodbye")
}
