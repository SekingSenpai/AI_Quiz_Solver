# AI_Quiz_Solver
# 🤖 AI Browser Study Assistant (Gemini Powered)

An **agentic AI-powered browser assistant** that helps analyze quiz questions directly from webpages and provides **suggested answers with explanations** using the Google Gemini API.

---

## 🚀 Features

* 🔍 Highlight any question on a webpage and analyze it instantly
* 🧠 Uses **Google Gemini API** for reasoning
* 📊 Detects **multiple-choice options (A/B/C/D)** correctly
* 💡 Provides **answer + explanation**
* 🪟 Floating UI popup with close button (✖) and ESC support
* 🎯 Accurate **option-letter mapping** (fixes common AI mistakes)
* ⚡ Works in real-time on quiz platforms

---

## 🧠 How It Works

```
Webpage → Chrome Extension → Backend (Node.js) → Gemini API → AI Response → UI Popup
```

1. User highlights a question
2. Presses `CTRL + Q`
3. Extension extracts:

   * Question text
   * Options (A/B/C/D)
4. Sends data to backend
5. Gemini processes and returns answer
6. Result is displayed in a floating panel

---

## 📁 Project Structure

```
AI-Browser-Agent
│
├── backend
│   ├── server.js
│   ├── agent.js
│   ├── package.json
│
└── extension
    ├── manifest.json
    ├── content.js
    ├── ui.js
```

---

## 🛠️ Tech Stack

* **Frontend (Extension):** JavaScript (Chrome Extension API)
* **Backend:** Node.js + Express
* **AI Model:** Google Gemini (gemini-3.1-flash-lite)
* **Communication:** REST API

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```
git clone https://github.com/your-username/AI-Browser-Agent.git
cd AI-Browser-Agent
```

---

### 2️⃣ Setup Backend

```
cd backend
npm install
```

Add your Gemini API key in `agent.js`:

```javascript
const genAI = new GoogleGenerativeAI("YOUR_GEMINI_API_KEY");
```

Run the server:

```
node server.js
```

---

### 3️⃣ Load Chrome Extension

1. Open Chrome and go to:

   ```
   chrome://extensions/
   ```
2. Enable **Developer Mode**
3. Click **Load Unpacked**
4. Select the `extension` folder

---

## 🧪 Usage

1. Open any quiz webpage
2. Highlight the question text
3. Press:

```
CTRL + Q
```

4. View AI suggestion popup:

```
Answer: A
Explanation: ...
```

---

## ⚠️ Known Limitations

* Works best with **standard MCQ layouts**
* Option detection depends on webpage structure
* Requires manual text selection (highlighting)

---

## 🔮 Future Improvements

* ✅ Automatic question detection (no highlighting required)
* 🎯 Highlight correct answer directly on page
* 🧠 Memory of solved questions (vector DB)
* 🌐 Web search integration for better reasoning
* 📸 OCR support for image-based questions
* 🤖 Full autonomous browser agent (Playwright integration)

---

## 📸 Demo (Optional)

*Add screenshots or GIFs here*

---

## 🧑‍💻 Author

**Arghadip Sarkar**
B.Tech CSE (AIML)
Narula Institute of Technology

---

## 📜 License

This project is for educational purposes.

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and consider contributing!
