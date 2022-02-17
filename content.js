//Developed by Md Mahfuzur Rahman Arif
//Software Engineer, Agami Soft Ltd.

window.onload = () => {
	if (window.location.href.includes("presentation")) {
		const btn = document.createElement("button");
		btn.textContent = "toggle";
		btn.title = "Hide Sidebar";
		btn.style.fontFamily = "Ubuntu";
		btn.style.cursor = "pointer";
		btn.style.fontSize = "0.9rem";
		btn.style.background = "#FBBD3D";
		btn.style.borderColor = "white";
		btn.style.color = "#1c1d1e";
		btn.style.padding = "4px 5px";
		btn.style.textAlign = "center";
		btn.style.display = "inline-block";
		btn.style.border = "none";
		btn.style.borderRadius = "5px";
		btn.style.marginRight = "20px";

		let docs_toolbar = document.getElementById("docs-toolbar");
		let _filmstrip = document.getElementsByClassName("filmstrip");

		docs_toolbar.prepend(btn);
		_filmstrip[0].style.display = "block";

		btn.addEventListener("click", () => {
			let cur_state = _filmstrip[0].style.display;
			if (cur_state == "block") {
				btn.title = "Show Sidebar";
				_filmstrip[0].style.display = "none";
			} else {
				btn.title = "Hide Sidebar";
				_filmstrip[0].style.display = "block";
			}
		});
	}
};
