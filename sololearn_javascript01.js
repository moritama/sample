// if statement
// Outputs "JavaScript Tutorial"
var course = 3;
if (course == 1) {
   document.write("<h1>HTML Tutorial</h1>");
} else if (course == 2) {
   document.write("<h1>CSS Tutorial</h1>");
} else {
   document.write("<h1>JavaScript Tutorial</h1>");
}


// switch stetament
// Outputs "Color not found."
var color ="yellow";
switch(color) {
   case "blue": 
     document.write("This is blue.");
     break;
   case "red": 
     document.write("This is red.");
     break;
   case "green": 
     document.write("This is green."); 
     break;
   case "orange": 
      document.write("This is orange."); 
      break;
   default: 
      document.write("Color not found.");
}


// for statement
for (i=1; i<=5; i++) {
   document.write(i + "<br />");
}


// while statement
var i=0;
while (i<=10) {
   document.write(i + "<br />");
   i++;
}


// do-while statement
var i=20;
do {  
  document.write(i + "<br />");
  i++;  
}
while (i<=25); 


// break statement
// **Once i reaches 5, it will break out of the loop.**
for (i = 0; i <= 10; i++) {
   if (i == 5) {
     break; 
   }
   document.write(i + "<br />");
}


// continue statement
// **The value 5 is not printed, because continue skips that iteration of the loop.**
for (i = 0; i <= 10; i++) {
   if (i == 5) {
      continue; 
   }
   document.write(i + "<br />");
}


// Changing Attributes (HTML)
var arr = document.
    getElementsByTagName("img");
for(var x=0; x<arr.length; x++) {
  arr[x].src = "demo.jpg";
}


// Create Element
//calling the function in window.onload to make sure the HTML is loaded
/*
<!DOCTYPE html>
<html>
	<head>
		<title>Page Title</title>
	</head>
	<body>
		<div id="demo">some content</div>
	</body>
</html>
*/
window.onload = function() {
    //creating a new paragraph
    var p = document.createElement("p");
    var node = document.createTextNode("Some new text");
    //adding the text to the paragraph
    p.appendChild(node);

    var div = document.getElementById("demo");
    //adding the paragraph to the div
    div.appendChild(p);
};


// Remove Element
//calling the function in window.onload to make sure the HTML is loaded
/*
<!DOCTYPE html>
<html>
	<head>
		<title>Page Title</title>
	</head>
	<body>
		<div id="demo">
            <p id="p1">This is a paragraph.</p>
            <p id="p2">This is another paragraph.</p>
        </div>
	</body>
</html>
*/
window.onload = function() {
    var parent = document.getElementById("demo");
    var child = document.getElementById("p1");
    parent.removeChild(child);
};


// Replace Element
//calling the function in window.onload to make sure the HTML is loaded
/*
<!DOCTYPE html>
<html>
	<head>
		<title>Page Title</title>
	</head>
	<body>
		<div id="demo">
            <p id="p1">This is a paragraph.</p>
            <p id="p2">This is another paragraph.</p>
        </div>
	</body>
</html>
*/
window.onload = function() {
    var p = document.createElement("p");
    var node = document.createTextNode("This is new");
    p.appendChild(node);

    var parent = document.getElementById("demo");
    var child = document.getElementById("p1");
    parent.replaceChild(p, child);
};


// Amimation
/*
<!DOCTYPE html>
<html>
	<head>
		<title>Page Title</title>
	</head>
	<body>
		<div id="container">
            <div id="box"> </div>
        </div>
	</body>
</html>
*/
/*
#container {
    width: 200px;
    height: 200px;
    background: green;
    position: relative;
}
#box {
    width: 50px;
    height: 50px;
    background: red;
    position: absolute;
}
*/
//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
     var pos = 0; 
    //our box element
    var box = document.getElementById('box');
    var t = setInterval(move, 10);
  
    function move() {
        if(pos >= 150) {
            clearInterval(t);
        }
        else {
            pos += 1;
            box.style.left = pos+'px';
        }
    }
};
