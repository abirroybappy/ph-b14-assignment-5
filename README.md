Project Name: Dev Stack - Build Your Perfect Tech Stack

Quick Overview: Discover modern web development technologies and build your perfect technology stack. This project provides an interactive interface for developers to explore and select the best tools for their upcoming projects, dynamically managing their choices in a custom stack.

Technologies Used:
*React.js
*JavaScript
*Tailwind CSS & DaisyUI
*Vite
*React-Toastify
*Json


React questions answer in below:

1.JSX is a syntax extension for JavaScript that looks very similar to HTML.React uses JSX to make creating and organizing user interfaces simpler, clearer, and more intuitive within JavaScript code.

2. Props are used to pass data down from a parent component to a child component, and they are read-only. State is local data managed inside a component; it can be updated and will cause the component to re-render when it changes.

3. The useState hook allows functional components to hold and update their own local data. In this project, it is used to manage the user's selected technology stack and keep track of UI states.

4. The useEffect hook lets you run side effects, like fetching data or setting up subscriptions, outside of the regular component rendering cycle. It is needed to load the JSON data so the fetch operation happens exactly once when the component first mounts, rather than infinitely triggering on every re-render.

5. React uses the unique key prop to identify exactly which items in a list have changed, been added, or been removed. This makes updating the UI highly efficient and prevents rendering bugs.

6. Conditional rendering means showing different UI elements based on a true/false condition. An example in this project is the empty stack message: