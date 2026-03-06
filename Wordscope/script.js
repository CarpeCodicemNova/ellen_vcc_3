const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");
const charNoSpaces = document.getElementById("charNoSpaces");

textInput.addEventListener("input", updateCounts);

function updateCounts() {

  const text = textInput.value;

  const words = text.trim().split(/\s+/).filter(word => word.length > 0);

  wordCount.textContent = text.trim() === "" ? 0 : words.length;

  charCount.textContent = text.length;

  charNoSpaces.textContent = text.replace(/\s/g, "").length;
}

function clearText() {
  textInput.value = "";
  updateCounts();
}