let selectedText = "";

// capture highlighted text
document.addEventListener("mouseup", () => {

  const selection = window.getSelection().toString().trim();

  if (selection.length > 5) {

    selectedText = selection;

    console.log("Selected question:", selectedText);

  }

});

function getOptionsFromQuestion() {

  const selection = window.getSelection();

  if (!selection.rangeCount) return [];

  const node = selection.anchorNode;

  if (!node) return [];

  const parentElement = node.parentElement;

  if (!parentElement) return [];

  // locate nearest container
  const container = parentElement.closest("div");

  if (!container) return [];

  const rawOptions = Array.from(
    container.querySelectorAll("label, li, button, span")
  )
  .map(el => el.innerText.trim())
  .filter(text =>
    text.length > 0 &&
    text.length < 120 &&
    text !== selectedText &&
    !text.includes("Question")
  );

  // attach A B C D labels
  const letters = ["A", "B", "C", "D"];

  const options = rawOptions
    .slice(0,4)
    .map((opt,i) => `${letters[i]}. ${opt}`);

  console.log("Detected options:", options);

  return options;
}

async function analyzePage() {

  if (!selectedText) {

    alert("Please highlight the question first.");

    return;

  }

  const options = getOptionsFromQuestion();

  const data = {
    question: selectedText,
    options: options
  };

  console.log("Sending to backend:", data);

  try {

    const response = await fetch(
      "http://localhost:5000/agent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    );

    const result = await response.json();

    window.postMessage({
      type: "AI_RESULT",
      data: result
    });

  } catch (error) {

    console.error("Backend error:", error);

    alert("Could not contact AI backend.");

  }

}

// trigger with CTRL + Q
document.addEventListener("keydown", e => {

  if (e.ctrlKey && e.key === "q") {

    analyzePage();

  }

});