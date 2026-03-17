window.addEventListener("message", event => {

  if (event.data.type !== "AI_RESULT")
    return;

  const { answer, explanation } = event.data.data;

  // remove old popup
  const oldPanel = document.getElementById("ai-helper-panel");

  if (oldPanel) oldPanel.remove();

  const panel = document.createElement("div");

  panel.id = "ai-helper-panel";

  panel.style.position = "fixed";
  panel.style.bottom = "20px";
  panel.style.right = "20px";
  panel.style.width = "350px";
  panel.style.maxHeight = "400px";
  panel.style.overflowY = "auto";
  panel.style.background = "#111";
  panel.style.color = "white";
  panel.style.padding = "15px";
  panel.style.borderRadius = "10px";
  panel.style.zIndex = "999999";
  panel.style.fontFamily = "Arial";
  panel.style.fontSize = "14px";
  panel.style.boxShadow = "0 0 15px rgba(0,0,0,0.5)";

  panel.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;">
      <b>AI Suggestion</b>
      <span id="ai-close-btn" style="cursor:pointer;font-size:18px;">✖</span>
    </div>

    <hr>

    <b>Answer:</b> ${answer}

    <br><br>

    ${explanation}
  `;

  document.body.appendChild(panel);

  // close button
  document.getElementById("ai-close-btn").onclick = () => {
    panel.remove();
  };

});

// ESC key closes popup
document.addEventListener("keydown", e => {

  if (e.key === "Escape") {

    const panel = document.getElementById("ai-helper-panel");

    if (panel) panel.remove();

  }

});