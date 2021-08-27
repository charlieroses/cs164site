# Boolean Algebra

Answer all questions in a *plain text file* named questions2.txt . At
the top of your plain text file, include your name, user id, and lab
section. Last week you learned how to use nano. Try using nano on Tux to
answer these questions instead of using a GUI editor.

---

### Question 1 (10pts)

Your first step in this lab is to complete the interactive tutorial on
Boolean algebra found at [this
link](https://www.cs.drexel.edu/~bls96/cs164/logtut/logic.html). Were
you successfully able to complete the tutorial? What issues did you have
in completing it? What was the answer for Part 5?

### Question 2 (10pts)

Open a window or tab with the [digital logic
workbench](https://www.cs.drexel.edu/~bls96/cs164/logwb/logwb.html).
Drag a DC component, a Toggle component, and an LED component into the
workspace. Draw a connection between the open circle of the DC component
and the yellow circle of the Toggle component. Then draw a connection
between the open circle of the Toggle component to the yellow circle of
the LED component. Describe what happens when you click on the button in
the middle of the Toggle component.

### Question 3 (10pts)

Modify your circuit so that you have an inverter between the toggle
switch and the LED. How does the addition of the inverter change the
behavior of the circuit?

### Question 4 (10pts)

Wire up the half adder from the lecture slides. You\'ll need two toggle
switches and two LEDs. You can remove components from your circuit by
dragging them to the toolbar on the left. Also note that in this
simulator, the exclusive-OR device is labeled EOR, rather than XOR. Use
the toggle switches to try all combinations of input. Record the output
values to create a truth table for both the sum and carry. DO NOT use
the built in half-adder.

### Question 5 (10pts)

Add a 4bit7seg device to your circuit. You should connect the top yellow
circle of the display to the sum of your adder and the second one to the
carry. What happens now when you go through all combinations of the
toggle switch settings?

### Question 6 (10pts)

Keep your adder circuit on your worksheet and create a separate circuit
that implements the Boolean expression ¬(x ∧ ¬y). Verify your circuit by
testing all combinations of inputs and enter the truth table here.

### Question 7 (15pts)

A mathematician who was a contemporary of George Boole was Augustus
DeMorgan. He was one of Ada Lovelace\'s mathematics tutors. DeMorgan is
best known for the following two laws:

```
¬(x ∧ y) = ¬x ∨ ¬y

¬(x ∨ y) = ¬x ∧ ¬y
```

Use these equalities to write a simpler version of the expression from
the last question. It should involve one fewer NOT operators.

### Question 8 (10pts)

Add a third circuit in the workbench that implements your simpler
expression. Verify that it produces the correct results by generating a
truth table and put it in the answer box.

### Question 9 (15pts)

You should now have three circuits on your worksheet: a half-adder with
a display and two different circuits that compute the same Boolean
function. Print your final workspace to a PDF file and upload that PDF
file along with your answer sheet.

---

## Submission Conventions

##### Submit on BBLearn

questions2.txt : A plain text file with your answers to the questions

circuit2.pdf : A PDF of a screenshot of the circuit from Question 9

