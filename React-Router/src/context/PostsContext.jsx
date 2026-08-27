import React, { createContext } from 'react'
export const posts = [
  {
    id: 1,
    title: "Getting Started with React",

    description:
      "Learn the basics of React and build your first interactive web application.",

    content: `
React is one of the most popular JavaScript libraries for building modern user interfaces. It was developed by Meta and is used by millions of developers around the world.

One of the biggest advantages of React is its component-based architecture. Instead of writing one huge HTML page, you divide your application into small reusable components. This makes your code cleaner, easier to maintain, and much more scalable.

React also uses a Virtual DOM, which updates only the parts of the page that actually change. This results in better performance and a smoother user experience.

As you continue learning React, you'll discover concepts such as JSX, Props, State, Hooks, Context API, and React Router. Together, these features allow you to build professional applications such as dashboards, blogs, e-commerce websites, and social media platforms.

If you're new to React, start by understanding components and useState before moving on to routing and API integration. Once you master these concepts, you'll be ready to build real-world projects.
`,

    author: "Ahmed Ramadan",
    date: "Aug 2, 2026",
  },

  {
  id: 2,
  title: "Understanding useState",

  description:
    "Learn how useState manages data and updates your React components.",

  content: `
The useState hook is one of the first and most important hooks in React. It allows functional components to store and update data without using class components.

Whenever the state changes, React automatically re-renders the component to display the latest information. This makes it easy to build interactive applications such as counters, forms, shopping carts, and todo lists.

The useState hook returns an array containing the current state and a function used to update that state. By calling the update function, React knows that the component needs to render again.

As you practice React, you'll find yourself using useState in almost every project. Understanding how state works is the foundation for learning more advanced concepts like Context API, Reducers, and state management libraries.
`,

  author: "John Smith",
  date: "Aug 1, 2026",
},

{
  id: 3,
  title: "React Router Guide",

  description:
    "Learn how to navigate between pages using React Router.",

  content: `
React Router is the official routing library for React applications. It allows users to move between pages without refreshing the browser, creating a smooth Single Page Application experience.

Using BrowserRouter, Routes, Route, and Link, developers can organize applications into multiple pages while keeping everything inside one React project.

React Router also supports dynamic routes. For example, instead of creating a separate page for every blog post, you can create one route like /posts/:id and display different content depending on the ID.

Learning React Router is essential because almost every real-world React application requires navigation between multiple pages and dynamic content.
`,

  author: "Sarah Johnson",
  date: "Jul 30, 2026",
},

{
  id: 4,
  title: "CSS Tips for Beginners",

  description:
    "Simple CSS techniques to create clean and responsive websites.",

  content: `
CSS is responsible for styling web pages and improving the overall user experience. Good design makes websites more attractive and easier to use.

Beginners should focus on learning Flexbox and CSS Grid because they make creating responsive layouts much simpler. Understanding spacing, typography, colors, and positioning is also important.

Animations and transitions can make interfaces feel more interactive, but they should be used carefully to avoid distracting users.

By practicing CSS every day and recreating existing website designs, you'll quickly improve your styling skills and become more confident as a Front-End Developer.
`,

  author: "Emily Davis",
  date: "Jul 28, 2026",
},

{
  id: 5,
  title: "JavaScript ES6 Features",

  description:
    "Explore the modern JavaScript features introduced in ES6.",

  content: `
ES6 introduced many powerful features that changed how developers write JavaScript. Features like let and const provide better variable management, while arrow functions make code shorter and easier to read.

Other useful additions include template literals, destructuring, default parameters, spread operators, rest parameters, and modules. These features help developers write cleaner and more maintainable code.

Modern frameworks such as React rely heavily on ES6 syntax, making it an essential skill for every Front-End Developer.

By mastering ES6 features, you'll improve your coding style, reduce repetitive code, and prepare yourself for building modern web applications.
`,

  author: "Michael Brown",
  date: "Jul 25, 2026",
}
];

export const PostsContext =createContext()

