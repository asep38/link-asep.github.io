const audio = new Audio("room.mp3");
const shareButtons = document.querySelectorAll(".share-button");

window.addEventListener("load", function () {
  audio.play();
});

async function copyText(e) {
  //prevent button going to the site
  e.preventDefault();
  const link = this.getAttribute("link");
  console.log(link);
  try {
    await navigator.clipboard.writeText(link);
    alert("Copied the text: " + link);
  } catch (err) {
    console.error(err);
  }
}

shareButtons.forEach((shareButton) =>
  shareButton.addEventListener("click", copyText)
);
