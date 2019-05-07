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


//
