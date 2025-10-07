const yesBtn = document.getElementById("yesbtn");
const noBtn = document.getElementById("nobtn");
const ooVideo = document.getElementById("oo");
const hindiVideo = document.getElementById("hindi");

function hideVideos() {
  ooVideo.style.display = "none";
  hindiVideo.style.display = "none";
  ooVideo.pause();
  hindiVideo.pause();
}

yesBtn.addEventListener("click", () => {
  hideVideos();
  ooVideo.style.display = "block";
  ooVideo.play(); 
});

noBtn.addEventListener("click", () => {
  hideVideos();
  hindiVideo.style.display = "block";
  hindiVideo.play(); 
});
