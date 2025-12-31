// alert used for testing purpose
// alert("js successfully loaded!");

/*
fetch("header.html")
	.then(res => res.text())
	.then(html => {
		document.getElementById("header").innerHTML=html;
	});
*/

//=============================================================
// loading header partial (compatible with a static website)
async function loadHeader(){
	const page = await fetch("partials/header.html");
	const res = await page.text();
	document.getElementById("header").innerHTML=res;
}
loadHeader();
//=============================================================


//=============================================================
// loading footer partial (compatible with a static website)
async function loadFooter(){
	const page = await fetch("partials/footer.html");
	const res = await page.text();
	document.getElementById("footer").innerHTML=res;
}
loadFooter();
//=============================================================

