# Running the Numbers

As usual, answer all questions in a *plain text file* named
`questions3.txt`. Failure to do so will result in a 0. At the top of
your plain text file, include your name, student ID, and lab section.

------------------------------------------------------------------------

### Question 1 (5pts)

In class, we discussed hexadecimal as a convenient representation of
numbers. One place where that gets used frequently is specifying colors
on web pages. For the next several questions, you are encouraged to use
the web to find any answers you don\'t already know.\
\
How many hexadecimal digits are used to specify a color in a web page?
How many bits do these hexadecimal digits correspond to?

\

### Question 2 (10pts)

What are the primary colors specified by these hexadecimal values? How
many bits are assigned to each color? What is the range of values for
each of the primary colors used on web pages?

\

### Question 3 (10pts)

There are about 16 million possible colors that can be specified in this
way. A relatively small subset have been given standard names. What are
the hexadecimal values for the following colors: Heliotrope Purple,
Dimorphotheca Magenta, and Rubber Ducky Yellow? For each of those
hexadecimal values, what are the corresponding RGB values?

\

### Question 4 (5pts)

In HTML, we can include any Unicode characters. All special characters
in HTML are specified in the form:\
\
```
&spec;\
```
\
These special characters all start with the ampersand and end with a
semicolon. How would you specify the symbols ¬ , ∨ , and ∧ in HTML?

\

### Question 5 (15pts)

You\'ve had some fun playing with the applications of hexadecimal. Now,
let\'s take a deeper look at the fundamentals of hex. Make a table with
16 rows and 4 columns. The columns should be Base 10, Base 2, Base 4,
and Base 16. The rows should be the numerical values for 0 through
15~10~ in each base. Each number in each column should have the same
number of digits, so pad as necessary.

\

### Question 6 (5pts)

So if you did the table properly and padded properly, you might start to
notice some patterns. What patterns did you find?

\

### Question 7 (10pts)

If you found the patterns, this question will be super easy. Convert
this binary number to hexadecimal. Then, convert it to base-4.

`011010011101101011011011111011101111010000100000`

\

### Question 8 (10pts)

In the past few labs, we\'ve been introducing HTML. We\'re gonna take
the table you just wrote for Question 5, and make it in HTML. In an HTML
file called `numbers.html` recreate the table from Question 5.\
\
A table begins with the string:\
\
`<table>`\
\
and ends with the string:\
\
`</table>`\
\
This is typical of many parts of HTML. In HTML, things enclosed in angle
brackets are called tags. Many tags come in pairs where the first opens
a structure and the structue is closed by the same tag with a slash
prepended. Here, the table is specified between the `<table>` tag and
the `</table>` tag.\
\
Tables are composed of rows, each of which has a number elements. What
are the tags used to start and end a row of a table? What are the tags
used to begin and end a table data element?

\

### Question 9 (30pts)

Let\'s talk more about colors. In particular, we\'re going to manipulate
the binary numbers that describe the colors. The numbers are generally
taken to be unsigned, but just for fun, we\'re going to treat them as
signed numbers. Then after negating them, we\'ll treat the resulting bit
patterns as unsigned numbers and display the resulting colors.\
\
What we\'ve been doing is looking at them as hexadecimal values like
\#FFFFFF or as base-10 RGB values. Let\'s look more into the binary. The
reason we have 256 shades of colors is because that fits very nicely
with a power of 2. This means, it\'s much easier to represent colors in
binary. Let\'s look at plain red. Plain red has a hex value of \#FF0000
and an RGB value of (255, 0, 0). Red, as a binary RGB value is
(11111111, 00000000, 00000000). As we learned in class, there is a
variety of ways to represent binary numbers. Right now, we are using an
unsigned approach. What if we took a signed approach?\
\
Let\'s take all our values and negate them using sign magnitude.
11111111 would become 01111111 which is now 127. 00000000 would become
10000000 which is now -0, or just normal 0. However, RGB values only
take unsigned numbers. If we interpret our signed 10000000 and interpret
it as unsigned, it\'s 128. Our new RGB value for negative red is now
(127, 128, 128).\
\
Let\'s do the same thing with one\'s complement! 11111111 would become
00000000 which is 0. 00000000 would become 11111111 which is -0. Since
RGB doesn\'t take negative values, we\'ll just interpret this as
unsigned and use 255. So now the RGB value for one\'s complement
negative red is (0, 255, 255).\
\
Finally, let\'s do this all again with two\'s complement. 11111111 will
become 00000001 which is 1. 00000000 will become 00000000 which is 0.
Negative red in two\'s complement is now (1,0,0). I made a table below
of the colors.

<center>
<table>
<tr>
<th>Unsigned</th>
<th>Sign Magnitude</th>
<th>One's Complement</th>
<th>Two's Complement</th>
</tr>
<tr>
<td bgcolor="#FF0000">#FF0000</td>
<td bgcolor="#7F8080">#7F8080</td>
<td bgcolor="#00FFFF">#00FFFF</td>
<td bgcolor="#010000">#010000</td>
</tr>
</table>
</center>

For the grand finale of this lab, complete this table with blue
(\#0000FF), green (\#00FF00), rubber ducky yellow, heliotrope purple,
dimorphotheca magenta, and at least two more colors of your own
choosing. You can put this table in your numbers.html file. Include a
link to this on your index.html

*PSSST! To specify the background color of a table data element, you can
use the bgcolor property.*

\

------------------------------------------------------------------------

Submission Conventions
----------------------

**Submit on BBLearn**\
questions3.txt : A plain text file with your answers to the questions\
\
**Webpage on tux**\
numbers.html : Your resulting webpage you make in Question 8 and 9.

\
