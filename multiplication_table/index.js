document.write("<table align='center'>");
for (var i=1;i<10;i++) {
	document.write("<tr>");
	for (var j=1;j<=i;j++) {
		document.write("<td>");
		document.write(i+"*"+j+"="+i*j);
		document.write("</td>");
	}
	document.write("</tr>");
}
document.write("</table>");