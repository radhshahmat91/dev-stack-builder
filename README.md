\# 🚀 Dev Stack Builder



A responsive React web application that allows users to explore different web development technologies and build their own technology stack. Users can add technologies to their stack, remove individual technologies, and clear the entire stack.



\## 🛠️ Technologies Used



\- React

\- JavaScript

\- Vite

\- CSS

\- React-Toastify

\- JSON

\- HTML5



\## ✨ Features



\### 1. Explore Technologies

Users can browse different technologies with their names, categories, descriptions, and icons.



\### 2. Build Your Own Stack

Users can add technologies to their personal stack. Duplicate technologies are prevented.



\### 3. Manage Your Stack

Users can remove individual technologies or remove all technologies at once.



\## 🔔 Challenges Completed



\- React-Toastify notifications for:

&#x20; - Add to stack

&#x20; - Duplicate add attempt

&#x20; - Remove technology

&#x20; - Remove all technologies

\- Loading state while fetching technology data from the JSON file.



\---



\# 📚 React Questions \& Answers



\## 1. What is JSX, and why is it used in React?



JSX is a syntax that lets us write HTML-like code inside JavaScript. React uses JSX because it makes creating and understanding UI components easier.



\## 2. What is the difference between props and state?



\*\*Props\*\* are data passed from a parent component to a child component. Props are read-only.



\*\*State\*\* is data managed inside a component and can change when the user interacts with the application.



\## 3. What does the `useState` hook do, and where did you use it in this project?



`useState` lets a React component store and update data.



In this project, I used `useState` to manage the selected technologies in the stack and to manage the loading state.



\## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?



`useEffect` runs code after a component renders.



I used `useEffect` to fetch the technology data from the local `technologies.json` file when the application loads.



\## 5. Why does every item in a `.map()` list need a unique `key` prop?



React uses the `key` to identify each item in a list. A unique key helps React understand which items changed, were added, or were removed.



\## 6. What is conditional rendering? Show one place you used it.



Conditional rendering means showing different UI depending on a condition.



For example, when the stack is empty, the application shows an empty-stack message instead of technology items.



```jsx

{stack.length === 0 ? (

&#x20; <p>Your stack is empty.</p>

) : (

&#x20; stack.map((technology) => (

&#x20;   <div key={technology.id}>

&#x20;     {technology.name}

&#x20;   </div>

&#x20; ))

)}


7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?



A parent passes data to a child using props.



A child can send information back to the parent by calling a function that the parent passes to it as a prop.



For example:



<TechnologyCard

&#x20; technology={technology}

&#x20; onAdd={handleAdd}

/>



Here, technology is data passed to the child, while onAdd is a function that allows the child to communicate an action back to the parent.

