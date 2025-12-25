# LiveChart

**Turn raw data into charts using natural language.**

LiveChart is a browser-native app that converts CSV and JSON files into interactive charts in seconds.  
Upload a file, ask a question, and get a visual — no dashboards, no SQL, no spreadsheets.

---

## Why LiveChart

Most data tools are built for reporting teams, not people with questions.

LiveChart is different:
- Ask questions instead of building dashboards
- Switch chart views instantly without rework
- See exactly how every chart is calculated
- Handle large files that crash spreadsheets
- Export charts ready for decks and reports
- Keep your data private by default

---

## How It Works

1. **Upload a file**  
   CSV or JSON — no setup required.

2. **Ask a question**  
   Example:  
   > "Show monthly revenue by region as a bar chart"

3. **Explore visually**  
   Switch chart types, refine the view, and export instantly.

---

## Key Features

- **Question-First Analysis**  
  No dashboards. One question → one chart.

- **Chart Views**  
  Switch between bar, pie, donut, horizontal, and more.

- **Explain the Numbers**  
  Every chart includes a clear explanation of how it was calculated.

- **Large File Friendly**  
  Analyze data that breaks Excel and Google Sheets.

- **Export-Ready Charts**  
  One-click PNG exports for slides and reports.

- **Privacy-First**  
  Data is processed in the browser by default.

---

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Chart.js
- Hashbrown (structured AI output)

---

## Getting Started

```bash
npm install
npm run dev
```

Create a `.env.local` file:

```
OPENAI_API_KEY=your_key_here
```

Then visit:

- http://localhost:3000 — landing page
- http://localhost:3000/app — LiveChart app

---

## Philosophy

LiveChart is not a BI platform.  
It's a fast way to get answers from data.

No dashboards.  
No configuration.  
No friction.

---

## License

MIT
