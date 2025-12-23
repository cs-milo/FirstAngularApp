## Overview
This project is a small Angular application created as a learning exercise/challenge to demonstrate core Angular REST concepts. The focus of this work was not visual design, but understanding how Angular components communicate and how data is retrieved from an external API.

The application consists of a parent component that retrieves JSON data from a public REST API, and a child component that receives and displays each individual record.

---

## What the Application Does
- Uses the Angular CLI to scaffold the application and components
- Retrieves JSON data from a free online REST API using Angular’s `HttpClient`
- Passes each record from the parent component to a child component using `@Input()`
- Displays the data in a simple, readable format

For clarity, I chose a quotes API so that the returned data would be short and coherent sentences instead of using placeholder text.

---

## Architecture and Design
- **Standalone Angular components** were used instead of traditional NgModules, which required explicitly importing components where they are used.
- During this process, I learned that the **parent component** is responsible for:
  - Making the REST call
  - Managing loading and error state
  - Iterating over the returned data
  - I learned the **child component** is responsible only for:
  - Receiving a single record
  - Rendering that record

This separation helped reinforce the idea of keeping components focused on a single responsibility, and makes sense in the metaphorical context for a parent/child relationship.

---

## Learning Process
This project was very much a learning experience for me. I ran into several issues along the way, including:
- Understanding how standalone components replace module declarations
- Resolving dependency and version mismatches
- Debugging TypeScript errors related to strict typing and understanding the parameters required by TypeScript interfaces
- Learning how Angular handles HTTP errors
- How using templates can sometimes overcomplicate simpler projects, with additional or unnecessary files

Working through these issues was difficult as I have never worked with Angular CLI before, but it helped me better understand how Angular applications are structured, and how REST data flows through a component-based architecture.
Overall, this project was a valuable learning exerience that truly challenged my understanding of Angular and REST concepts, as well as my ability to learn and debug independently.

---

## API Used
- DummyJSON Quotes API  
  https://dummyjson.com/quotes
---

## How to Run the App
From the client project directory:

```bash
npm install
ng serve --port 4201
```
Then, open your browser to http://localhost:4201
