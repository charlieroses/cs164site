var state, id, color

fun init() { # creates page to store everything
    html("<body>")
    state : 0
    statetable()
    html("<center>")
    id : makelabel("Nothing Yet")
    # input buttons
    button("Scan Order Barcode", orderButton)
    button("Scan Package Barcode", packageButton)
    button("Weigh Package", weighButton)
    html("</center>")
    html("</body>")
}
fun statetable() { # For reference
    html("<table style='padding: 5em; font-size: 30; margin: auto' cellspacing='20em'>")
    html("<thead>")
    html("<tr>")
    html("<td></td>")
    html("<td>0</td>")
    html("<td>1</td>")
    html("<td>2</td>")
    html("</tr>")
    html("</thead>")
    html("<tbody>")
    html("<tr>")
    html("<td>O</td>")
    html("<td>1/G</td>")
    html("<td>0/G</td>")
    html("<td>0/R</td>")
    html("</tr>")
    html("<tr>")
    html("<td>P</td>")
    html("<td>0/R</td>")
    html("<td>2/G</td>")
    html("<td>1/R</td>")
    html("</tr>")
    html("<tr>")
    html("<td>W</td>")
    html("<td>0/R</td>")
    html("<td>1/R</td>")
    html("<td>1/G</td>")
    html("</tr>")
    html("</tbody>")
    html("</labelle>")    
}
# the next three functions are inputs
fun orderButton() {
    # sprint("Got to pressing one of the buttons")
    if .state == 0 {
        state : 1
        nl()
        color : 1
    }
    else if .state == 1 {
        state : 0
        nl()
        color : 1
    }
    else {
        state : 0
        nl()
        color : 0
    }
    sprint("Order\n")
    output(color)
}
fun packageButton() {
    # sprint("Got to pressing one of the buttons")
    if .state == 0 {
        state : 0
        nl()
        color : 0
    }
    else if .state == 1 {
        state : 2
        nl()
        color : 1
    }
    else {
        state : 1
        nl()
        color : 0
    }     
    sprint("Order\n")
    output(color)
}
fun weighButton() {
    # sprint("Got to pressing one of the buttons")
    if .state == 0 {
        state : 0
        nl()
        color : 0
    }
    else if .state == 1 {
        state : 1
        nl()
        color : 1
    }
    else {
        state : 1
        nl()
        color : 1
    }
    sprint("Weight\n")
    output(color)
}
fun output(c) {
    # sprint("Got to output")
    iprint(.c)
    if .c == 0 {
        # sprint("Got to here RED")
        setlabel(.id, "Red")
    }
    else {
        # sprint("Got to here GRN")
        setlabel(.id, "Green")
    }
}
fun handler (r, c) {
}
