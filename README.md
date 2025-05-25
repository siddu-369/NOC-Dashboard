# Welcome to the GCC Dashboard

## To setup this into local system, clone the repository using the following commands.

Frontend Setup

```bash
    git clone <URL>
```
```bash
    cd myapp

```
```bash
    npm i
```

```bash
    npm run dev

```

Backend Setup.

```bash
    cd backend

```
```bash
    npm i

```
```bash
    node server.js

```


# My Apps

This is a centralized application dashboard to open the apps so quickly , just a tap and it takes you to the work.

# BigPanda Condition Generator

**BigPanda Alert Suppression Condition Generator**

---

## 📌 Overview:

This project is a **React-based web application** developed to streamline the creation of BigPanda conditions for suppressing alerts during **planned change activities**. It is designed to assist the NOC (Network Operations Center) team in generating alert suppression conditions in **seconds**, replacing a previously **manual, error-prone, and time-consuming process**.

---

##Issue:

Previously, the team used a **manual method** to create suppression conditions for BigPanda by:

- Manually copying and pasting server names.
- Editing the condition strings by hand.
- Spending considerable time and effort on what should be a quick task.

This method was inefficient, especially when dealing with large numbers of servers or during critical change windows.

---

## Solution:

The **BigPanda Condition Generator** web app provides:

- A **user-friendly interface** to input multiple server names.
- Instant generation of BigPanda-compatible suppression condition strings.
- Ability to copy the generated condition for direct use in BigPanda's Planned Maintenance setup.

---

## 🛠️ Tech Stack:

- **Frontend**: React.js (JavaScript), React-Router-DOM, UUIDv4, Luxon
- **Styling**: CSS, Bootstrap, Tailwind
- **Hosting**: Render
- **Backend**: Node, Express, JWT, Bcrypt, Dotenv, Body-Parser, CORS

---

## 💡 Key Features:

- 📥 **Multi-server Input**: Paste or type multiple server names at once.
- ⚙️ **Auto-formatting**: Generates conditions easily separated by commas and get the entire string.  
  `(server1, server2, server3)`
- 🔁 **Copy to Clipboard**: One-click copy for ease of use.
- 🚀 **Speed**: Reduces a 5-10 minute task to just a few seconds.

---

## 👥 Impact:

- **Increased productivity** for the NOC team
- **Eliminated manual errors**
- **Standardized** the way conditions are created
- **Faster response time** during change implementations

---

## 🚀 Future Enhancements (Idea):

- Integration with **ServiceNow Change Requests**
- Saving common server groups for reuse
- Adding filters for tags or environments
- API-based push to BigPanda directly
