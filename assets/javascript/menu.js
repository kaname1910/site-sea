function scrollToElement(element) {	
	windows.scrollTo({
		'behavior': 'smooth',
		'top': element.offsetTop
	});
}

document.querySelector(".menu")
.addEventListener("click", function() {
	document.querySelector(".menu-screen").classList.add("active");
});

document.querySelector(".close")
.addEventListener("click", function() {
	document.querySelector(".menu-screen").classList.remove("active");
});

let links = document.querySelectorAll(".menu-screen a");

links.forEach(link => {
	link.addEventListener('click',function(e){
		document.querySelector(".menu-screen").classList.remove("active");

		let paths = this.href.split("/");

		const selector = paths[paths.length - 1];

		if(windows.scrollTo) e.preventDefault();

		scrollToElement(document.querySelector(selector));

		return !!windows.scrollTo;
	})
});