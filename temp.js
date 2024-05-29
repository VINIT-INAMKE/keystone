// Define the base URL and initial class name
var baseUrl = "./College Gallery Main page/";
var className = "galimage";

// Create a variable to store the generated HTML code
var htmlCode = "";

// Generate HTML code for images 1 to 62
for (var i = 1; i <= 62; i++) {
    var imageUrl = baseUrl + i + ".jpg";
    var currentClassName = className + " " + Math.ceil(i / 6);
    htmlCode += '<a href="' + imageUrl + '" class="' + currentClassName + '">\n';
    htmlCode += '  <img src="' + imageUrl + '" alt="" />\n';
    htmlCode += "</a>\n";
}

// Output the generated HTML code
console.log(htmlCode);
