setInterval(()=>{
	console.log("Extension running");
	let skipButton = document.querySelector(".ytp-ad-skip-button");
	if (skipButton != undefined) {
		console.log("Ad removed");
		skipButton.click();
	}
}, 1000)