import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './layouts/RootLayout.jsx';

import Portfolio from './pages/Portfolio.jsx';
import Service from './pages/Service.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "portfolio", Component: Portfolio },
      { path: "service", Component: Service },
      { path: "contact", Component: Contact },
     
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
