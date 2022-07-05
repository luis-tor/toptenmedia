window.addEventListener("load", () => {
	const headings = document.querySelectorAll("section");

	document.addEventListener("scroll", (e) => {
		headings.forEach((ha) => {
			const rect = ha.getBoundingClientRect();
			if (rect.top > 0 && rect.top < 150) {
				const location = window.location.toString().split("#")[0];
				history.replaceState(null, null, location + "#" + ha.id);
			}
		});
	});
});
