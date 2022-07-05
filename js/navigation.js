window.addEventListener("hashchange", navigator, false);
window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("scroll", navigator, false);

function navigator() {
	if (location.hash.startsWith("#index")) {
		indexActive();
		inIndex();
	} else if (location.hash.startsWith("#about")) {
		aboutActive();
		notIndex();
	} else if (location.hash.startsWith("#services")) {
		servicesActive();
		notIndex();
	} else if (location.hash.startsWith("#coverage")) {
		coverageActive();
		notIndex();
	} else if (location.hash.startsWith("#contact")) {
		contactActive();
		notIndex();
	}
}

function inIndex() {
	logoImage.src = "./images/logo-white.svg";
	navBar.classList.remove("nav-bar__white");

	groupCompanyPara.classList.remove("nav-bar__info-p__black");
}

function notIndex() {
	logoImage.src = "./images/logo-color.svg";
	navBar.classList.add("nav-bar__white");

	groupCompanyPara.classList.add("nav-bar__info-p__black");
}

function indexActive() {
	navIndex.classList.add("nav-active");

	navAbout.classList.remove("nav-active");
	navServices.classList.remove("nav-active");
	navCoverage.classList.remove("nav-active");
	navContact.classList.remove("nav-active");
}

function aboutActive() {
	navAbout.classList.add("nav-active");

	navIndex.classList.remove("nav-active");
	navServices.classList.remove("nav-active");
	navCoverage.classList.remove("nav-active");
	navContact.classList.remove("nav-active");
}

function servicesActive() {
	navServices.classList.add("nav-active");

	navIndex.classList.remove("nav-active");
	navAbout.classList.remove("nav-active");
	navCoverage.classList.remove("nav-active");
	navContact.classList.remove("nav-active");
}

function coverageActive() {
	navCoverage.classList.add("nav-active");

	navIndex.classList.remove("nav-active");
	navAbout.classList.remove("nav-active");
	navServices.classList.remove("nav-active");
	navContact.classList.remove("nav-active");
}

function contactActive() {
	navContact.classList.add("nav-active");

	navIndex.classList.remove("nav-active");
	navAbout.classList.remove("nav-active");
	navServices.classList.remove("nav-active");
	navCoverage.classList.remove("nav-active");
}
