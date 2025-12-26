// alert used for testing purpose
// alert("js successfully loaded!");

fetch("header.html")
	.then(res => res.text())
	.then(html => {
		document.getElementById("header").innerHTML=html;
	});