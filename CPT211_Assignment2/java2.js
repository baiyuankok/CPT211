//first section button arrow function
var circle1 = document.getElementById("circle1");
var up1 = document.getElementById("up1");
var down1 = document.getElementById("down1");
var explain1 = document.getElementById("explain1");
var word1 = document.getElementById("word1");
var img1 = document.createElement("img");
img1.src = "images/html_example.png";
img1.style.height = '300px';
img1.style.width = '300px';
		
var rotateValue1 = circle1.style.transform;
var rotateSum1;
		
up1.onclick = function(){
	rotateSum1 = rotateValue1 + "rotate(-90deg)";
	circle1.style.transform = rotateSum1;
	rotateValue1 = rotateSum1;
			
	if (word1.innerHTML == "Web browsers receive HTML documents from a web server and render the documents into multimedia web pages.")
	{
		word1.innerHTML = "Specifies the structure and content of documents that are displayed in web browsers.";
	}
	else if (word1.innerHTML == "A type of HTML component which add semantics and formatting to HTML documents.")
	{
		word1.innerHTML = "Web browsers receive HTML documents from a web server and render the documents into multimedia web pages.";
	}
	else if (word1.innerHTML == "Specifies the structure and content of documents that are displayed in web browsers." )
	{
		word1.innerHTML = "";
		explain1.appendChild(img1);
	}
	else if (explain1.appendChild(img1))
	{
		explain1.removeChild(img1);
		word1.innerHTML = "A type of HTML component which add semantics and formatting to HTML documents.";
	}

}
		
down1.onclick = function(){
	rotateSum1 = rotateValue1 + "rotate(90deg)";
	circle1.style.transform = rotateSum1;
	rotateValue1 = rotateSum1;
			
	if (word1.innerHTML == "Specifies the structure and content of documents that are displayed in web browsers." )
	{
		word1.innerHTML = "Web browsers receive HTML documents from a web server and render the documents into multimedia web pages.";
	}
	else if (word1.innerHTML == "Web browsers receive HTML documents from a web server and render the documents into multimedia web pages.")
	{
		word1.innerHTML = "A type of HTML component which add semantics and formatting to HTML documents.";
	}
	else if (word1.innerHTML == "A type of HTML component which add semantics and formatting to HTML documents.")
	{
		word1.innerHTML = "";
		explain1.appendChild(img1);
	}
	else if (explain1.appendChild(img1))
	{
		explain1.removeChild(img1);
		word1.innerHTML = "Specifies the structure and content of documents that are displayed in web browsers.";
	}
}

//second section button arrow function	
var circle2 = document.getElementById("circle2");
var up2 = document.getElementById("up2");
var down2 = document.getElementById("down2");
var explain2 = document.getElementById("explain2");
var word2 = document.getElementById("word2");
var img2 = document.createElement("img");
img2.src = "images/css_example.png";
img2.style.height = '300px';
img2.style.width = '300px';

var rotateValue2 = circle2.style.transform;
var rotateSum2;


up2.onclick = function(){
	rotateSum2 = rotateValue2 + "rotate(-90deg)";
	circle2.style.transform = rotateSum2;
	rotateValue2 = rotateSum2;
	
	if (word2.innerHTML == "The rgb() function to provide a color value, the attr() function to retrieve the value of an HTML attribute, the rotate() function can be used to rotate an element, the scale() function can be used to change the size of an element.")
	{
		word2.innerHTML = "Used for describing the presentation of a document written in a markup language like HTML.";
	}
	else if (word2.innerHTML == "The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons. Each declaration includes a CSS property name and a value, separated by a colon.")
	{
		word2.innerHTML = "The rgb() function to provide a color value, the attr() function to retrieve the value of an HTML attribute, the rotate() function can be used to rotate an element, the scale() function can be used to change the size of an element.";
	}
	else if (word2.innerHTML == "Used for describing the presentation of a document written in a markup language like HTML." ){
		word2.innerHTML = "";
		explain2.appendChild(img2);
	}
	else if (explain2.appendChild(img2)){
		explain2.removeChild(img2);
		word2.innerHTML = "The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons. Each declaration includes a CSS property name and a value, separated by a colon.";
	}

}

down2.onclick = function(){
	rotateSum2 = rotateValue2 + "rotate(90deg)";
	circle2.style.transform = rotateSum2;
	rotateValue2 = rotateSum2;
	
	if (word2.innerHTML == "Used for describing the presentation of a document written in a markup language like HTML." ){
		word2.innerHTML = "The rgb() function to provide a color value, the attr() function to retrieve the value of an HTML attribute, the rotate() function can be used to rotate an element, the scale() function can be used to change the size of an element.";
	}
	else if (word2.innerHTML == "The rgb() function to provide a color value, the attr() function to retrieve the value of an HTML attribute, the rotate() function can be used to rotate an element, the scale() function can be used to change the size of an element.")
	{
		word2.innerHTML = "The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons. Each declaration includes a CSS property name and a value, separated by a colon.";
	}
	else if (word2.innerHTML == "The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons. Each declaration includes a CSS property name and a value, separated by a colon."){
		word2.innerHTML = "";
		explain2.appendChild(img2);
	}
	else if (explain2.appendChild(img2)){
		explain2.removeChild(img2);
		word2.innerHTML = "Used for describing the presentation of a document written in a markup language like HTML.";
	}
}

//third section button arrow function	
var circle3 = document.getElementById("circle3");
var up3 = document.getElementById("up3");
var down3 = document.getElementById("down3");
var explain3 = document.getElementById("explain3");
var word3 = document.getElementById("word3");
var img3 = document.createElement("img");
img3.src = "images/js_example.png";
img3.style.height = '100px';
img3.style.width = '400px';


var rotateValue3 = circle3.style.transform;
var rotateSum3;


up3.onclick = function(){
	rotateSum3 = rotateValue3 + "rotate(-90deg)";
	circle3.style.transform = rotateSum3;
	rotateValue3 = rotateSum3;
	
	if (word3.innerHTML == "HTML events can be something the browser or the user does. For example, an HTML web page has finished loading or an HTML button was clicked. JavaScript enables code execution when events are detected. With JavaScript code, HTML allows event handler attributes to be added to HTML elements.")
	{
		word3.innerHTML = "The Programming Language for the web that enables interactive web pages.";
	}
	else if (word3.innerHTML == "Many data types can be held by JavaScript variables. Example of data types are numbers, strings and objects. Data types in JavaScript are dynamic because the same variable can be used to hold different data types. ")
	{
		word3.innerHTML = "HTML events can be something the browser or the user does. For example, an HTML web page has finished loading or an HTML button was clicked. JavaScript enables code execution when events are detected. With JavaScript code, HTML allows event handler attributes to be added to HTML elements.";
	}
	else if (word3.innerHTML == "The Programming Language for the web that enables interactive web pages." ){
		word3.innerHTML = "";
		explain3.appendChild(img3);
	}
	else if (explain3.appendChild(img3)){
		explain3.removeChild(img3);
		word3.innerHTML = "Many data types can be held by JavaScript variables. Example of data types are numbers, strings and objects. Data types in JavaScript are dynamic because the same variable can be used to hold different data types. ";
	}

}

down3.onclick = function(){
	rotateSum3 = rotateValue3 + "rotate(90deg)";
	circle3.style.transform = rotateSum3;
	rotateValue3 = rotateSum3;
	
	if (word3.innerHTML == "The Programming Language for the web that enables interactive web pages." ){
		word3.innerHTML = "HTML events can be something the browser or the user does. For example, an HTML web page has finished loading or an HTML button was clicked. JavaScript enables code execution when events are detected. With JavaScript code, HTML allows event handler attributes to be added to HTML elements.";
	}
	else if (word3.innerHTML == "HTML events can be something the browser or the user does. For example, an HTML web page has finished loading or an HTML button was clicked. JavaScript enables code execution when events are detected. With JavaScript code, HTML allows event handler attributes to be added to HTML elements.")
	{
		word3.innerHTML = "Many data types can be held by JavaScript variables. Example of data types are numbers, strings and objects. Data types in JavaScript are dynamic because the same variable can be used to hold different data types. ";
	}
	else if (word3.innerHTML == "Many data types can be held by JavaScript variables. Example of data types are numbers, strings and objects. Data types in JavaScript are dynamic because the same variable can be used to hold different data types. "){
		word3.innerHTML = "";
		explain3.appendChild(img3);
	}
	else if (explain3.appendChild(img3)){
		explain3.removeChild(img3);
		word3.innerHTML = "The Programming Language for the web that enables interactive web pages.";
	}
}



/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
  
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("nav").style.top = "0";
	} else {
		document.getElementById("nav").style.top = "-50px";
	}
	prevScrollpos = currentScrollPos;
}		
		
/*Add smooth scrolling effect*/
$(document).ready(function(){
	/*Add smooth scrolling to all links*/
	$("a").on('click', function(event) {

		/*Make sure this.hash has a value before overriding default behavior*/
		if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();

		// Store hash
		var hash = this.hash;

		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 800, function(){

			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		});
		} // End if
	});
});	