const slider = document.getElementById("quality");
const sliderValue = document.getElementById("qualityValue");
const btn = document.getElementById("generatebtn");

slider.addEventListener("input", () => {
	sliderValue.textContent = slider.value;
});

const generate = (e) => {
	e.preventDefault();
	const qrdata = document.getElementById("content").value;
	const format = document.getElementById("format").value;
	const resolution = document.getElementById("quality").value;

	const url = `https://api.qrserver.com/v1/create-qr-code/?data=${qrdata}&size=${resolution}x${resolution}&format=${format}`;

	document.getElementById(
		"image"
	).innerHTML = `<img id="image-container" src="${url}"/>`;
};

btn.addEventListener("click", (e) => {
	generate(e);
});

if ("serviceWorker" in navigator) {
	window.addEventListener("load", function () {
		navigator.serviceWorker.register("/service-worker.js").then(
			function (registration) {
				console.log(
					"ServiceWorker registration successful with scope: ",
					registration.scope
				);
			},
			function (err) {
				console.log("ServiceWorker registration failed: ", err);
			}
		);
	});
}
