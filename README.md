# 🚀 Dev Stack - Build Your Perfect Tech Stack

**Dev Stack** is an interactive web application that helps developers discover modern web development technologies and build their perfect technology stack for upcoming projects.

Users can explore different technologies, select the tools they prefer, and dynamically manage their customized stack through a simple and user-friendly interface.

---

## 🌐 Project Overview

The main goal of this project is to provide developers with an easy way to explore and select technologies for their projects.

The application allows users to:

* 🔍 Explore modern web development technologies
* 🛠️ Select technologies for their custom stack
* 📋 View selected technologies
* ❌ Remove technologies from the stack
* ⚡ Dynamically update the UI based on user actions
* 🔔 Get instant feedback using toast notifications

---

## 🧑‍💻 Technologies Used

* **React.js**
* **JavaScript**
* **Tailwind CSS**
* **DaisyUI**
* **Vite**
* **React-Toastify**
* **JSON**

---

## ✨ Key Features

* Interactive technology selection
* Custom technology stack management
* Responsive and modern UI
* Component-based React architecture
* JSON-based technology data
* Dynamic rendering using React state
* Toast notifications for user feedback
* Fast development environment with Vite

---

# ⚛️ React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax extension for JavaScript that looks very similar to HTML. React uses JSX to make creating and organizing user interfaces simpler, clearer, and more intuitive within JavaScript code.

For example:

```jsx
const title = <h1>Build Your Perfect Tech Stack</h1>;
```

JSX makes it easier to write UI components while keeping the markup and JavaScript logic together.

---

## 2. What is the difference between Props and State?

**Props** are used to pass data from a parent component to a child component, and they are read-only.

**State** is local data managed inside a component. It can be updated, and when the state changes, React re-renders the component.

### Example:

```jsx
function Technology({ name }) {
  return <h2>{name}</h2>;
}
```

Here, `name` is a **prop**.

For state:

```jsx
const [selectedStack, setSelectedStack] = useState([]);
```

Here, `selectedStack` is a **state** that can be updated using `setSelectedStack`.

---

## 3. What is the useState hook, and how is it used in this project?

The `useState` hook allows functional components to hold and update their own local data.

In this project, it is used to manage the user's selected technology stack and keep track of different UI states.

For example:

```jsx
const [selectedStack, setSelectedStack] = useState([]);
```

When a user selects or removes a technology, the state is updated and React automatically updates the UI.

---

## 4. What is the useEffect hook, and why is it needed?

The `useEffect` hook lets us run side effects, such as fetching data, setting up subscriptions, or interacting with external systems, outside of the regular component rendering cycle.

In this project, `useEffect` is used to load the technology data from a JSON file.

Example:

```jsx
useEffect(() => {
  fetch("/technologies.json")
    .then((res) => res.json())
    .then((data) => setTechnologies(data));
}, []);
```

The empty dependency array `[]` means the effect runs when the component first mounts, instead of running after every re-render.

---

## 5. Why are keys important in React lists?

React uses the unique `key` prop to identify exactly which items in a list have changed, been added, or been removed.

Keys help React update the UI efficiently and prevent rendering-related bugs.

Example:

```jsx
{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}
```

Here, `technology.id` provides a unique key for each item.

---

## 6. What is conditional rendering? Give an example from this project.

Conditional rendering means showing different UI elements based on a condition.

In this project, an example is displaying an empty-stack message when the user has not selected any technology.

For example:

```jsx
{selectedStack.length === 0 ? (
  <p>Your stack is empty. Please select a technology.</p>
) : (
  selectedStack.map((technology) => (
    <StackItem
      key={technology.id}
      technology={technology}
    />
  ))
)}
```

If the `selectedStack` array is empty, the user sees the empty stack message. Otherwise, the selected technologies are displayed.
