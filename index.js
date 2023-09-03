const slider = document.getElementById("quality");
const sliderValue = document.getElementById("qualityValue");

slider.addEventListener("input", () => {
	sliderValue.textContent = slider.value;
});
 
const generate = () => {
    console.log("hello")
} 