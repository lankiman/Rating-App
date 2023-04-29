const ratingButtonContainer = document.getElementById(
  "js-rating-buttons-container"
);

const submitButton = document.getElementById("js-submit-button");

const resultMessage = document.getElementById("js-selected-rating");

let index = -1;

function clickEffect(event) {
  const ratingButtons = document.querySelectorAll(".js-rating-button");

  for (let i = 0; i < ratingButtons.length; i++) {
    ratingButtons[i].classList.remove("bg-orange");
  }
  const events = event.target.classList;
  events.add("bg-orange", "text-white");
  events.remove("hover:bg-DGrey");
  index = Array.prototype.indexOf.call(ratingButtons, event.target);
}

ratingButtonContainer.addEventListener("click", clickEffect);

function resultPage() {
  if (index == -1) {
    alert("You haven't selected any rating");
    alert("Please select a rating to continue");
  } else {
    localStorage.setItem("index", index);
    location.href = "../public/result.html";
  }
}

submitButton.addEventListener("click", resultPage);

function resultTest() {
  const ratingIndex = localStorage.getItem("index");
  if (ratingIndex != -1) {
    const selectedRating = parseInt(ratingIndex) + 1;
    resultMessage.textContent = "You selected " + selectedRating + " out of 5";
  }
  localStorage.removeItem("index");
}
if (window.location.pathname.includes("result.html")) {
  if (!localStorage.getItem("index")) {
    location.href = "../public/index.html";
  }
}
