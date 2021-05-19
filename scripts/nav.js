var aboutme = function() {
	window.location.href = "./index.html";
}
var projects = function() {
	window.location.href = "./projects.html"; 
}
var github = function() {
	window.location.href = "https://github.com/Debekami";
}
var contact = function() {
	window.location.href = "./contact.html";
}
var projects_drawings = function() {
	window.location.href = "./drawings.html";
}
var projects_games = function() {
	window.location.href = "./games.html";
}
document.getElementById("aboutme").onclick = aboutme;
document.getElementById("projects").onclick = projects;
document.getElementById("github").onclick = github;
document.getElementById("contact").onclick = contact;
document.getElementById("drawings").onclick = projects_drawings;
document.getElementById("games").onclick = projects_games;