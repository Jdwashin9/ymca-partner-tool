# YMCA of Greater Charlotte — Partner Outreach Suite
### Powered by Claude AI

An AI-powered community partner research and outreach tool built for the YMCA of Greater Charlotte. This project demonstrates how Claude can help nonprofit staff identify, research, and reach out to potential community partners — faster and more effectively than manual research alone.

---

## 🎯 Why I Built This

During my internship at Bloomfield-Garfield Corporation in Pittsburgh, I manually researched 40+ organizations for their "First Friday" community event — identifying contacts, cataloging partner nonprofits, and drafting professional outreach emails. It was valuable work, but time-consuming.

This project reimagines that workflow using Claude AI. What once took hours of manual research can now be done in seconds — giving nonprofit staff more time to focus on building relationships rather than finding them.

I built this as part of my application for the **Anthropic Claude Corps Fellowship**, targeting the YMCA of Greater Charlotte placement. The YMCA serves nearly 300,000 kids, families, and seniors across 14 centers in Charlotte, NC — with programs ranging from afterschool care and summer camps to New American Welcome Centers for immigrants. At that scale, community partnership coordination is a real operational challenge that AI can meaningfully improve.

---

## ✨ Features

### 🔍 Organization Research Tab
Type any nonprofit or community organization name and Claude instantly returns:
- A summary of their mission and work
- The right contact roles to reach out to
- A concrete analysis of why they'd be a strong YMCA partner, referencing specific YMCA programs
- A partnership strength rating (Strong / Moderate / Exploratory)

### 📧 Outreach Email Generator Tab
Fill in a few fields and Claude drafts a professional, warm partnership outreach email tailored to:
- The organization type (food bank, faith community, healthcare org, etc.)
- The partnership purpose (afterschool referrals, summer camp scholarships, event co-sponsorship, etc.)
- Any additional context you provide
- One-click copy to clipboard

### 📋 Partner Catalog Tab
Save researched organizations to a running catalog with their type, recommended contact, and partnership strength — building a structured partner pipeline as you work.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript (vanilla) |
| Backend | Node.js (proxy server) |
| AI | Anthropic Claude API (claude-sonnet-4-6) |
| Hosting | Render.com |

---

## 🚀 Running Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- An [Anthropic API key](https://console.anthropic.com/)

### Setup

**1. Clone the repository**
```bash
git clone https://github.com/Jdwashin9/ymca-partner-tool.git
cd ymca-partner-tool
```

**2. Create a `.env` file** in the project root and add your API key:
```
ANTHROPIC_API_KEY=your-api-key-here
```

**3. Start the server**
```bash
node server.js
```

**4. Open the app**

Visit `http://localhost:3000` in your browser.

> ⚠️ **Security note:** Never commit your `.env` file. It is listed in `.gitignore` and will not be pushed to GitHub.

---

## 💡 How It Works

The app uses a local Node.js proxy server (`server.js`) to forward requests to the Anthropic API. This pattern is necessary because browsers block direct API calls for security reasons (CORS policy). The proxy:

1. Receives requests from the frontend
2. Attaches the API key from the environment variable
3. Forwards the request to Anthropic
4. Returns the response to the browser

This is the standard professional pattern for building web apps that call third-party APIs securely.

---

## 🔗 Relevance to Claude Corps

This project directly reflects the kind of work a Claude Corps Fellow would do embedded at the YMCA of Greater Charlotte:

- **Understanding nonprofit operations** — built around real YMCA programs and strategic priorities
- **Practical AI deployment** — solving an actual coordination challenge nonprofits face at scale
- **Responsible AI use** — secure API key handling, clear attribution of AI-generated content, human review before sending any outreach
- **Transferable workflow** — the same tool could be adapted for volunteer coordination, donor research, or program referrals

---

## 👤 About the Developer

**Joshua D. Washington**
B.S. Information Systems, Carnegie Mellon University, May 2026
[LinkedIn](https://linkedin.com/in/joshuadwashington) · [GitHub](https://github.com/Jdwashin9)

Generative AI certified (IBM). Experienced in Python, SQL, database design, and Excel automation through internships at Arcfield, AgFirst, and L3Harris Technologies.
