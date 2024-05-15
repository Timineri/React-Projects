// const h1 = document.createElement('h1');
// h1.textContent ='Introduction to React';
// h1.className = 'top-heading';

// const container = document.querySelector('#root');
// container.appendChild(h1);

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
