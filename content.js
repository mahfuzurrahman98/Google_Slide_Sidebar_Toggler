window.onload = () => {
	console.log("global hello");
	if (window.location.href.includes("presentation")) {
		// console.log("inside hello");
		const btn = document.createElement("button");
		btn.textContent = "Toggle";
		btn.title = "show/hide sidebar";
		btn.style.cursor = "pointer";
		btn.style.fontSize = "1rem";
		btn.style.background = "#FBBD3D";
		btn.style.borderColor = "white";
		btn.style.color = "black";
		btn.style.padding = "3px 5px";
		btn.style.textAlign = "center";
		btn.style.display = "inline-block";
		btn.style.borderRadius = "7px";
		btn.style.marginLeft = "20px";

		let docs_toolbar = document.getElementById("docs-toolbar");
		let _filmstrip = document.getElementsByClassName("filmstrip");

		docs_toolbar.appendChild(btn);
		_filmstrip[0].style.display = "block";

		btn.addEventListener("click", () => {
			let cur_state = _filmstrip[0].style.display;
			if (cur_state == "block") {
				_filmstrip[0].style.display = "none";
			} else {
				_filmstrip[0].style.display = "block";
			}
		});
	}
};
