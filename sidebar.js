function setupSidebar()
{
	document.getElementById("sideBar").innerHTML = "<br><a href=\"index.html\"><b>Introduction</b></a>" +
      "<a href=\"about.html\"><b>About Me</b></a>";
	document.getElementById("sideBar").innerHTML += "<a href=\"answers.html\"><b>Practice Problem Answers</b></a><hr>";
    document.getElementById("sideBar").innerHTML += "<a href=\"numSec/\"><b>Chapter 1 :</b> Number Bases</a>" +
      "<a href=\"numSec/baseTen.html\"><b>1.1 :</b> Base-10</a>" +
      "<a href=\"numSec/baseTwo.html\"><b>1.2 :</b> Base-2</a>" +
      "<a href=\"numSec/baseSixteen.html\"><b>1.3 :</b> Base-16</a><hr>";
//    document.getElementById("sideBar").innerHTML += "<a href=\"numSec/float.html\"><b>1.4 :</b> Floating Point</a>";
    
    document.getElementById("sideBar").innerHTML += "<a href=\"binarySec/\"><b>Chapter 2 :</b> Binary</a>" +
      "<a href=\"binarySec/convertBin.html\"><b> 2.1 :</b> Converting Between Bases</a>" +
      "<a href=\"binarySec/negativebin.html\"><b> 2.2 :</b> Negative Numbers</a>" +
      "<a href=\"binarySec/fracBinary.html\"><b> 2.3 :</b> Fractional Binary</a>" +
      "<a href=\"binarySec/addSubBin.html\"><b> 2.4 :</b> Addition and Subtraction</a><hr>";

    document.getElementById("sideBar").innerHTML += "<a href=\"asciiSec/\"><b>Chapter 3 :</b> Character Sets</a>" +
      "<a href=\"asciiSec/ascii.html\"><b>3.1 :</b> ASCII</a>" +
      "<a href=\"asciiSec/unicode.html\"><b>3.2 :</b> Unicode</a><hr>";

    document.getElementById("sideBar").innerHTML += "<a href=\"boolSec/\"><b>Chapter 4 :</b> Boolean Algebra</a>" +
      "<a href=\"boolSec/boolEng.html\"><b>4.1 :</b> An Overview</a>" +
      "<a href=\"boolSec/ttIntro.html\"><b>4.2 :</b> Basic Operators</a>" +
      "<a href=\"boolSec/not.html\"><b>4.2.1 :</b> Not</a>" +
      "<a href=\"boolSec/or.html\"><b>4.2.2 :</b> Or</a>" +
      "<a href=\"boolSec/and.html\"><b>4.2.3 :</b> And</a>" +
      "<a href=\"boolSec/nor.html\"><b>4.2.4 :</b> Nor</a>" +
      "<a href=\"boolSec/nand.html\"><b>4.2.5 :</b> Nand</a>" +
      "<a href=\"boolSec/xor.html\"><b>4.2.6 :</b> Xor</a>" +
      "<a href=\"boolSec/boolExpr.html\"><b>4.3 :</b> Complex Expressions</a>" +
      "<a href=\"boolSec/halfAdder.html\"><b>4.4 :</b> Half Adder</a>" +
      "<a href=\"boolSec/fullAdder.html\"><b>4.5 :</b> Full Adder</a>" +
      "<a href=\"boolSec/alu.html\"><b>4.6 :</b> Arithmetic Logic Unit - ALU</a>" +
      "<a href=\"boolSec/circuit.html\"><b>4.7 :</b> Digital Logic Workbench</a>" +
	  "<a href=\"boolSec/minecraft.html\"><b>4.8 :</b> Minecraft</a><hr>";

    document.getElementById("sideBar").innerHTML += "<a href=\"cardSec/\"><b>Chapter 5 :</b> The CARDIAC</a>" +
      "<a href=\"cardSec/hardware.html\"><b>5.1 :</b> The Hardware</a>" +
      "<a href=\"cardSec/program.html\"><b>5.2 :</b> Programming the CARDIAC</a>" +
      "<a href=\"cardSec/assMach.html\"><b>5.3 :</b> Assembly and Machine Language</a><hr>";

    document.getElementById("sideBar").innerHTML += "<a href=\"langSec/\"><b>Chapter 6 :</b> Languages</a>" +
      "<a href=\"langSec/langInfo.html\"><b>6.1 :</b> Processing Language</a>" +
      "<a href=\"langSec/markup.html\"><b>6.2 :</b> Markup Languages</a>" +
      "<a href=\"langSec/program.html\"><b>6.3 :</b> Programming Languages</a>" +
      "<a href=\"langSec/tranq.html\"><b>6.4 :</b> Tranquility</a>" +
      "<a href=\"langSec/state.html\"><b>6.5 :</b> State and State Machines</a><br>";


}
