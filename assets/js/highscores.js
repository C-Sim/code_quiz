// getScores from local storage

// clear button click event listener
document.getElementById("clear-scores-button").addEventListener("click", () => {
  localStorage.clear;
  console.log(localStorage);
});
