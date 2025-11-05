# O-Analyzer 📊

O-Analyzer is a frontend web application designed to analyze the algorithmic complexity (Big O) of Python code.

This application is the user interface ("the face") of the project and works by consuming the **[Complexity-API](https://github.com/pablitogmnz/Complexity-API)** backend, which performs the actual static analysis.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🎯 Objective

To provide a simple, fast, and visual interface (the "gauge") for interacting with the complexity analysis service. The user can paste their code and get instant feedback on its theoretical performance ($\mathcal{O}(n)$, $\mathcal{O}(n^2)$, etc.).

## 🏗️ Technical Architecture

This project is a pure **static web client** (HTML/JS/CSS). It has no backend of its own; it is fully decoupled from the API it consumes.

1.  **Interface:** A single `index.html` page structured with **Bootstrap 5** for a clean, responsive design (dark theme).
2.  **Logic:** A `script.js` file handles all events:
    * Retrieves the code from the `<textarea>`.
    * Uses the `fetch()` API (with `async/await`) to send the code to the `Complexity-API` endpoint.
    * Handles the JSON response (both success and error) and dynamically updates the DOM to display Bootstrap alerts (green for success, red for errors).
3.  **API Connection:** The script is configured to call the backend API (the `Complexity-API` project) at its network address. 
