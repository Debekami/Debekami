var aboutme = function() {
	window.location.href = "../aboutme/index.html";
}
var projects = function() {
	window.location.href = "../projects/index.html";
}
var github = function() {
	window.location.href = "https://github.com/Debekami";
}
var contact = function() {
	window.location.href = "../contact/index.html";
}
document.getElementById("aboutme").onclick = aboutme;
document.getElementById("projects").onclick = projects;
document.getElementById("github").onclick = github;
document.getElementById("contact").onclick = contact;