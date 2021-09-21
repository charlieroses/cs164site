# Drexel Computing Environment

Are you ready kids?
_(Aye aye captain!)_

You are going to answer these questions in a plaintext file called **questions1.txt**
DO NOT use Microsoft Word.
DO NOT use TextEdit.
If you submit a docx or pdf or rtf file or ANYTHING that isn't a ***PLAIN TEXT FILE*** you will recieve a 0 for the lab.
Write all your answers in a *plain text file*.
You can use Notepad or SublimeText or a GUI text editor.
We would prefer you use a command line editor like nano or vim or emacs or nano, but we don't talk about those til later in the lab,
so it is acceptable to not use that option until you learn it.
Just please, put your answers in a ***plain text file.***

If you choose to work with a partner on this lab, you may work with only one other person.
Put your partners name in your header too. You both must submit separate lab sheets in your BBLearn shell.

You will submit questions1.txt on BBLearn under the Lab1 assignment.
At the top of your plain text file, make sure to include your name, user id, and lab section.

---

### Question 1 - Make Friends (5pts)

I'm rewriting this lab in the Spring under the impression that Fall term is
in person. Assuming this is true, turn to the person sitting next to you, this
is your partner for the lab. Y'all are allowed to talk through questions and
concerns, work through problems together, and collaborate on this lab. You are
not allowed to submit the same, character for character answer sheet. You are
not allowed to copy and paste each other's answers. You'll learn more by sharing
thoughts and teaching each other than just copying and pasting. You must submit
separate lab sheets on BlackBoard (BBLearn). If only one partner submits, only
the partner who submitted will get credit.

For this question, write down your partners name, pronouns, and email. Say
something nice about them.

### Question 2 - Meet your TAs (10pts)

Your TAs should have identified themselves by writing their names, pronouns,
emails, and office hours on the whiteboard or whatever screen is available. If
they have not done this, hound them endlessly until they do. Record your TAs
names, pronouns, email addresses, and office hours for question 2, and also
somewhere for your future reference throughout the term. Whenever struggling in
this class, your TAs are your best resources for help.

(Note: some reassignment of teaching assistants may occur before next week.)

### Question 3 - Your Drexel Account (10pts)

You should already have been issued a userid and password and an email address.
We will refer to it as your userid here, but you may hear it called your Drexel
One ID or login or your single signon ID or login. It is what you used to log
into this Blackboard session to do this lab. It also permits you access to file
space on the tux server (also referred to as the `tux.cs.drexel.edu` server).

You should recognize that the Blackboard server is a different machine than the
`tux.cs.drexel.edu` server, and you have accounts on both machines. (See picture 
below.) The Blackboard server is used for managing this course (CS 164): your class
interactions are stored on this machine; your homework assignments and labs are
submitted for grading by your instructors and teaching assistants; and your grades
for this course will be stored on this machine. The personal nature of these
activities explains the need for your userid and password on this server.

The Blackboard server does not permit your files to be accessed via the World Wide
Web. For this, you need to use the `tux.cs.drexel.edu` server.

<center>
<img src="labs/WebCT.png">
</center>

Your userid on tux permits you to store files on these computers in CCI. In
addition to storing these files, you can create and maintain your own web site. While
the design of a home page, etc. is beyond the extent of today's lab, you will 
create the site and post a public file on it. In this section you will perform
some steps that should only need to be done once for the lifetime of your account,
to set it up properly. In later sections, you will create a file and post it at
your site.

In order to create a Tux account, you should have recieved an email from Brian
Bijeau. This email will let you know an account has been created for you, and
gives you a userid. It will direct you to
[this website](https://support.cci.drexel.edu/act/tux/reset/) where you can create
a password for yourself. If you did not get
that email, let your TA know and email Brian Bijeau at bjb344@drexel.edu or
iCommons at ihelp@drexel.edu

**NOTE: Brian Bijeau's email may tell you to install PuTTY. IGNORE THIS. Use the
email to get your login credentials and nothing else**

For this question, explain any similarities and/or differences between Tux and
BBLearn.

### Question 4 - Log Into Tux (10pts)

##### Step 1: Cloak and Dagger

Now that you have created your tux account, it's time to log into it and issue
some commands. The protocol we will be using to communicate between your computer
and tux is called the Secure Shell (`SSH`). This system supports multiple methods
of authenticating your identity with the server and provides a mechanism for
encrypting all of the communication between machines. There exist `ssh`
implementations for nearly any platform you would like to use, including, but
not limited to Linux, BSD, Mac OS X, Windows, Android, iOS, Plan9, etc.

If you are running any of the UNIX variants (e.g. Linux, BSD, or Mac OS X), you
already have an implementation of `ssh` installed. For most distributions of
these systems, the implementation included is called OpenSSH.  This package has
also been ported to Windows by the Microsoft PowerShell developers. If you are
running Windows 10, you should already have OpenSSH installed. If you do not have
OpenSSH, you can download and install OpenSSH from:
[http://github.com/PowerShell/Win32-OpenSSH/releases](http://github.com/PowerShell/Win32-OpenSSH/releases)

Or you can install OpenSSH as part of the Windows Subsystem for Linux. If you
wish to install the Windows Subsystem for Linux, 
[this page](https://www.cs.drexel.edu/~bls96/cs164/winlin.html)
will walk you through the process. It's a process that's much more in depth than
this lab needs and will take a good amount of time. If interested, I suggest
coming back to this after you've completed this lab.

For all environments, open a terminal (command) window and issue the command:

```
ssh [userid]@[address]
```

On Windows, if you are running the power shell instead of the classic command prompt,
you'll need to prefix the ssh command with `./` (i.e. `./ssh` )

If you copied and pasted that command, you probably got an error like the one
below. Error messages may vary by user, but the general gist is that the
message should tell you that `[address]` is not a host that exists.

```
ssh: Could not resolve hostname [address]: Name or service not known
```

We're trying to `ssh` into tux. As mentioned in Question 3, tux is a remote
server, which means we need an address to access it at. Read through Question 3
again. What is the address for tux? What is your userid? Reenter the command
with the corect information.

The result of a successful `ssh` this should look like:

<center>
<img src="labs/tux_login.png">
</center>

Note that the dialog regarding the server's fingerprint will only appear  the
first time to connect to that host. All subsequent times you log in, you'll go
directly to the password prompt. Also note that the details of the login in
message printed before the command prompt will differ for each person.

If any member of your team is unable to get to this point, stop and get help
from a TA. For Step 1, write down the `ssh` command you used to get into tux.

**NOTE: Once you're on tux, it would be smart to run the `passwd` command to
change your password to something more memorable**

##### Step 2: Server Farms

Tux is actually a set of systems and you won't always connect to the same one
every time. The last line printed on the screen is shown above as `bls96@tux2:~$`
This the prompt for you to type a command to the shell you selected earlier.
The tux2 part of the prompt indicates that I'm logged into the second member of
the collection. Which tux instance did you log in to? Record your answer.

##### Step 3: Running Nonstop

At the prompt use the command `uptime` to find out how long it's been since
this tux was last rebooted. How long has this tux been up? Record your answer.

### Question 5 - Scavenger Hunt (5pts)

At this point, you are logged into tux and ready to create a web site. Before we
go through the steps to create it, you'll notice tux is different from the point
and click desktops many of you may be used to. You won't be able to point and
click on folders and files to open them and explore. You need to use commands in
order to navigate and perform actions. Here's a quick list of commands that will
be helpful in this lab:

`cat` : Concatenate files and print them to the standard output.

`cd` : Change current directory.  This is used to move to a different directory
(folder)

`chmod` : Change file mode.  You use this command to change what protections are
applied to a file or directory.

`cp` : Copy a file from one place to another

`logout` : Terminate the connection to tux and return to the local command prompt
on your computer.

`ls` : List the contents of a directory.

`man` : Print out the manual page about a command.

`mkdir` : Create a new directory.

`mv` : Move or rename a file.

`nano` : Edit a file.

`passwd` : Change your tux password

`rm` : Remove a file.

`scp` : Copy a file across remote computers

`ssh` : Log into a remote computer

`uptime` : Print out how long the system has been up and how much load it
currently has.

For a larger list of commands, check out
[Kurt's Unix for Newbies](https://www.cs.drexel.edu/~kschmidt/Ref/unix_reference.html)


Now this is a lot to take in all at once. Don't try and memorize these commands.
Learn them by using them. Test them out. Practice with them.


You've already used the `uptime` command in the last question, and `ssh` in the
one before it. Notice how uptime was  used by itself with no other information.
When you used `ssh` you had to provide an argument, an extra parameter specific
to what `ssh` required. Most of the commands above require arguements in
addition to the commands. How are you supposed to know how to use those commands
then? Well if you want to learn more about the `uptime` command, you can issue
the command:

```
man uptime
```

and you'll be treated to a description of the command, information about the
various options, and how to interpret the output of the command. The same is true
of most commands on the system. Issuing the command `man` giving it the name of
another command as an argument will result in documentation about that command.
You can even get documentation about the `man` command by entering:

```
man man
```

So for this question, we're gonna send you on a scavenger hunt.  The scavenger
hunt is a maze of directories (folders) and files that you'll read and navigate
through. The starting directory is `~src322/cs164maze`. This will get
you used to navigating a file system via command line. Helpful commands for this
are `ls`, `cat`, and `cd`. At the end of your little scavenger hunt, you'll find
a secret message. The secret message is a random phrase that is clearly marked as
the answer for this question.

To start the hunt, you need to **change directories** to the starting directory.
Knowing commands take the following format:

```
[command] [argument]
```

what command do we use to change directories to the starting directory for the
scavenger hunt? When you're done the hunt, what secret message did you find?


### Question 6 (10pts)

Assuming you've completed the scavenger hunt, make sure to return to your home
directory with the command `cd` with no arguments. The scavenger hunt took place
in my (Charlie) user files. You used `cd` to navigate through my directories and
files. When you used `cd` previously, you added arguments to specify where you'd
like to go. When you use `cd` without arguments, it automatically takes you back
to your own home directory.

This and the next few questions will walk you through the process of creating
an initial web page.

The first thing to do is to make some configurations on Tux. Do this with the
command:

```
~bls96/cs164/bin/cs164setup
```

This command is a little special and not like the ones we've used previously.
This is a script Dr. Stuart wrote to set up some configurations we want you to
use for our class. The command will not print anything out if you do it
correctly. It is important to note, just because something is not printing out,
does not mean something isn't happening.

Next, issue the command `ls` to get a list of the current contents of your home
directory. This command will probably return without printing anything,
indicating that there are currently no files or directories in your home
directory. (It turns out this is not strictly true, but the difference is
unimportant for now.)

Now, the convention for web servers on UNIX is that web pages for individual
users should all be in a directory called `public_html`. Assuming you have no
such directory already, then create one with the command:

```
mkdir [directoryname]
```

Remember what you learned with previous commands. You're not gonna be able to
copy and paste that above. Build the command yourself.

Next, we will set some characteristics of our new directory. Start by issuing
the command:

```
ls -l
```

This is the same command we used earlier to see that there were no files in 
the home directory except that this time we've added the `-l` flag. This option
tells `ls` to print out extra information about each file in the list. You 
should get a line of output that looks something like:

```
drwxrwxr-x 2 qqq42 qqq42  6 Sept 25 11:38 public_html/
```

If a directory named `[directoryname]` appears, you incorrectly ran the `mkdir`
command and need to remove it with `rm -d [directoryname]`.

Going back to the information at hand, although you won't use all these details
directly, understanding what's happening under the covers is always a good
thing. The first character on the line is `d` which indicates that the item is a
directory. Following the `d` are the characters `rwxrwxr-x`. These 9 characters
are divided into 3 sets of 3. Each set is composed of some combination of `r`,
`w`, `x`, and `-`. An `r` indicates that the file can be read, a `w` that it can
be written, and an `x` that it can be executed or searched in the case of a
directory. Places where the `-` character appears indicate that the corresponding
operation is not permitted. The three groups list the privileges for the owner,
the group, and everyone else (called the world). The next item in the line is the
number of links to the file, which has to do with the internal design of the file 
system. The third item on the line is the name of the owner of the file, and the
fourth is the group that owns the file. Following the ownership information is
the size of the file, the last modification date of the file, and its name.

For an answer, enter the line you got as a result of the `ls -l` command. Type it
manually. Don't try and copy and paste.

### Question 7 - Create a Website (5pts)

You have created the environment in which your web pages will live. 
The next step is to put some content into your web presence.
To make the next several steps easier, we'll first move to the directory we just
created with a `cd` command. You've used `cd` multiple times up to this point.
Use `cd` to move into your `public_html` directory.

You can use `ls` to see there is most likely nothing in this directory.
Let's fill this directory with some files.
We've made available a file for you to use as a starting point for your web
content. The file is located at `~bls96/classes/cs164/template.html`. You are
going to want to put this file in your current directory `./` and name it
`index.html` To copy it to your `public_html` directory, build the `cp` copy
command:

```
cp [location of file] [destination and name if being changed]
```

The result of this command is that you have copied a file called template.html 
from the instructor's account into your `public_html` directory with the name
`index.html`.
By convention, `index.html` is the name of the file that web servers provide 
when a URL is requsted that contains no file name.

Now that you've put some content on your web site, let's take a look at it.
Open a web browser on your computer and go to the URL:

```
http://www.cs.drexel.edu/~[userid]
```

here you'll replace userid with your username on tux.
The resulting page should look something like this:

<center>
<img src="labs/template.jpg">
</center>

Depending on whether you got all the details correct and some configuration
defaults,
it's possible you might get an error here instead of the desired page.
Errors such as "File not found," "Forbidden," or "Permission Denied" indicate
that something is not quite right.
This is a good example of how finding and fixing problem generally involves
thinking at a lower level of abstraction.
To find and fix any problems you need to make sure you have a clear sense of
how the files are organized on tux and of how permissions are assigned.
Once you figure out what's wrong,
commands like `chmod` and `mv` will be useful for correcting things.
The key things that need to be true here are:

- Your `index.html` file must be in your `public_html` directory
- Your `public_html` directory must be world readable and executable (e.g. 
	permissions of `rwxrwxr-x`)
- Your `index.html` file must be world readable (e.g. permissions of `rw-rw-r--`)

As an answer, describe any problems you had getting the correct page to appear.
If there were no problems, simply state "No problems".

### Question 8 (10pts)

Obviously, this isn't the actual web page we want to serve.
So it's time to edit it to make the information on it relevant to us.
We are going to edit the `index.html` file with the file editor `nano`.
To edit a file with `nano` run the following command:

```
nano [file to edit]
```

If the command ran successfully, you should get something looking like the image
below.

<center>
<img src="labs/pico.jpg">
</center>

This is a text editor called nano.
Like most text editing environments you've probably experienced,
you can move around in the text with the arrow keys 
(though arrow keys are one of the things that has been problematic with the
Windows port of OpenSSH in the past).
The cursor can also be moved with the control characters:
`^P` for the previous line,
`^N` for the next line,
`^F` to move forward one character and
`^B` to move back one character.
Plain text that you type is inserted at the point in the text where the cursor
is.

For those who are familiar with (or want to learn) other editors like emacs and
vi, they are also available on tux.
In fact, you will be strongly encouraged to learn and to use such  editors when
you use tux in later courses, such as CS265. If you want to learn about emacs 
or vim, talk to your TA.

What may be different from your previous experience is that there are no
drop-down menus for other operations. As indicated by the bottom two lines of
the screen, there are a number of operations that can be triggered by control
characters. These characters are typed by holding down the control key (often
labeled Ctrl) and while holding it, typing the corresponding letter. For example,
as indicated by the left-most prompt on the next to last line of the screen,
typing `control-G` will result in a help screen being printed.

Another aspect of this editor that sometimes throws students off is that it is
not mouse-based. You can't position the cursor or select text with the mouse.
You'll want to use the various control characters or arrow keys to move the the
cursor. Similarly, don't assume that the scroll bar in your terminal window has
any effect on the editor. If you've scrolled things so that the help information
is missing from the bottom two lines, then what you see isn't what the editor is
seeing.

The thing to keep in mind with both of these points is that the editor is running
on tux, not on your computer. What's running on your computer is a terminal
emulator. Things you tell the terminal emulator to do aren't seen by the editor
on tux. So when you want to save the file or scroll, you need to tell the editor
to do so, and that's done with the control character commands listed at the
bottom of the screen and documented in the help screens.

Spend some time getting comfortable with `nano`. Make sure all members of your
group are able to start nano, make changes, and save those changes. For an answer,
describe how you would go about searching for a string of text that you might
want to change. Based on the control keys talked about above, what would be the
fastest way to find a string of text in a document?

### Question 9 (5pts)

Now you will need to modify this file, according to the lines that contain the 
`"DELETE"` phrases. These phrases should be easy to find given your answer to
Question 8.
The first two are simple - delete the lines and replace them with your name and 
today's date.
These lines are comments, meaning they are encoded in the file, but do not
appear on the web page when viewed by a browser.

The second should say "DELETE AND ENTER LAB#".
Replace this text with "Lab 1".
The next two statements require you to enter your name (again) and Lab Section #.
Your lab section is the CS-164-### where ### is a number, not a single letter.

The last place requires you to enter the URL (Uniform Resource Locator) for the
CS-164 instructor web site. Enter this text between the quote symbols:

```
http://www.cs.drexel.edu/~bls96/
```

Save the file, and test it with your browser. As mentioned in Question 8 (which
you probably didn't read) there's no File > Save option. Use what you learned in
Question 8 to figure out how to save your file.

Answer these questions:

- Does the text "Lab 1" appear in the title bar of the browser window?
- Does the document part contain your name in large bold print,
	your section number on the next line, and a link to the CS 164 web site on
	the third?
- When you click on the underlined text, does your browser open up the CS 164
	instructor page?

If you answered "no" to any of these questions, you need to make corrections in
your file.

Once you've fulfilled the required parts, make this homepage your own. We're
gonna be using this in the future on future labs. If you know
[HTML](https://www.w3schools.com/HTML/)
or
[CSS](https://www.w3schools.com/css/)
, then go crazy. Grading gets so boring when everyone uses the same black and
white template.

### Question 10 (10pts)

The last step is to copy the new HTML file you've created to your computer.
Start that process by logging out of tux.
You should log out of it each time you're finished using it.
Either the `exit` or `logout` command can be used for this.
When you issue that command, you'll be returned to the local command prompt on
your computer. You can navigate your local computers command prompt the same
way you navigated tux with commands. It is the exact same file system that
you're used to pointing and clicking around, however, your terminal is MUCH more
powerful than your point and click file explorer.

We now want to get experience copying files from tux to your computer. Remember
in Question 4, we mentioned your computer and tux are separate computers that
cannot interact without the `ssh` protocol. In Question 5, we list a command
from the `ssh` protocol that allows you to copy files between computers. It's
called `scp`, it's usage is the following.

```
scp [location of file] [destination and name if being changed]
```

As you may notice, it's usage is nearly exactly the same as `cp`. But how do
we specify a file on a remote computer? We can specify a file on a remote
computer with the following:

```
[userid]@[address]:[file]
```

Now we should have all the tools we need to build the `scp` command that you
will run on at your local computers prompt. Use this command to copy your
`index.html` file to somewhere on your local computer.

f you are running Windows and have not been able to install and run OpenSSH,
then use the file transfer capability of the software that you did install.

You'll have to enter your password again to complete the copy. The `scp`
program uses the same authentication mechanisms and encryption protocols as
`ssh` does for copying files between two computers.

Not only does this give you a local copy of the file, it is the first step if
you wish you use a different mode of operation. In particular, instead of
logging into tux to to edit your files, it's possible to edit your files on your
local computer and then copy them to tux. The benefit to doing so is that you
can use whatever editor you're comfortable with on your local computer. The
downside is that you'll have to be conscious of which version of which file is
on which computer and you'll have to be careful about actions that can cause
protection modes to be changed. Now that you're familiar with how to connect to
a remote machine and manipulate the files there, you are welcome to work in
whichever mode you feel more comfortable.

If you would like more information on `scp` and `ssh`, there is a link on
BBLearn under "Course Resources".

For your answer, give the full path for the location of the file on your local
system.

### Question 11 (5pts)

Before we move on to complete this lab, you may be wondering why we're using
command-line tools. After all, they're soooo 20th century. The reality is that
experienced professionals should be comfortable with a wide variety of tools and
choose the tools appropriate to each situation. There's an old saying that when
the only tool in your toolbox is a hammer, all the world looks like a nail.

Now that you've gotten some familiarity with using command-line tools, you are
free to explore options that have a point-and-click flavor to them. We start
with some tools that are available to you at
[http://software.drexel.edu](http://software.drexel.edu).
For Mac users, there's a package called Fetch that you can download and install
to connect and transfer files via ssh.
Those using Windows, can download and install a package called SSHSecureS.
Outside of the packages available on Drexel's software distribution, there's a
package called [Cyberduck](https://cyberduck.io/) 
that is ported to a wide variety of platforms, including Linux, Mac, and Windows.
One of the most commonly used packages on Windows is called 
[PuTTY](https://www.putty.org/)
Finally, if you want to use your phone or tablet, there are SSH implementations
for both Android and iOS.

The bottom line is that I want you to come away from this lab being equally
knowledgable and equally comfortable with both a command-line way of doing
things and a GUI way of doing things. Only then will you be in a position to
make a reasoned judgement as to which approach will be most effective in any
given situation. Doing things in a particular way because it's the only way you
know how to do it isn't making a thoughtful and reasoned decision. Instead, it's
more a willful refusal to learn something new.

Does all the world look like a nail to you? Why or why not? Record your answer.

### Question 12 (5pts)

Include a link to your website here so the TAs can properly grade it.

### Question 13 - Discord (5pts)

In an attempt to make it easier for y'all to keep in contact with your TAs and
classmates to ask questions, we're using the new CCI Discord Server. You may
find other classes you're taking also using this server to commnicate.

[Discord Server Join Link](https://support.cci.drexel.edu/act/discord)

Your name will be automatically set to whatever it is on BlackBoard.
If you use a name that is not your legal name, contact a TA to talk about how
to set a preffered name in Blackboard.

To recieve credit for this question, post a quick bio in the #introductions
channel. Your quick bio should include your name, pronouns, major, and also give
us a fun fact about yourself NOT related to Drexel or your major. Pick something
wierd or unique or interesting. I'm tired of reading introductions that say
"I play video games and listen to music". What types of games? What types of
music. There are 300+ students in this class. You'll do better in college if you're
memorable.

It would also be nice if you sent a message to a TA to say hi.
We're nice people who want to help you in this course so it would be smart to
get used to messaging us.
The message can be anything!
Say hello!
Ask a question!
Send us a meme!
Start a conversation!
Grading tends to get boring so have fun with it.
Be creative!

### Question 14 - Feedback (5pts)

Were there any factual errors in this lab document? 
Please identify them.
Were any portions of this lab confusing for you? 
Can you suggest how to make it less confusing?

---

## Submission Conventions

##### Submit on BBLearn

questions1.txt : A plain text file with your answers to the questions

##### Webpage on tux

index.html : Your resulting webpage you link to in Question 12

