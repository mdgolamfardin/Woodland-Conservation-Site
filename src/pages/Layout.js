// Import necessary components from "react-router-dom"
import { Outlet, Link } from "react-router-dom";
// Import the `useState` hook from React to manage component state
import { useState } from "react";

export default function Layout() {
  // Define a state variable `isNavOpen` to track whether the mobile menu is open
  // `setIsNavOpen` is used to update the value of `isNavOpen`
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex py-4"> {/* Container for the navigation and main content */}
      <nav>
        {/* MOBILE MENU SECTION */}
        <section className="MOBILE-MENU flex lg:hidden"> {/* Mobile menu visible only on small screens */}
          <div
            className="HAMBURGER-ICON space-y-2 pl-4"  // Hamburger menu icon styling
            onClick={() => setIsNavOpen((prev) => !prev)} // Toggles the menu open/close state when clicked
          >
            {/* Hamburger menu lines */}
            <span className="block h-0.5 w-8 bg-gray-900"></span>
            <span className="block h-0.5 w-8 bg-gray-900"></span>
            <span className="block h-0.5 w-8 bg-gray-900"></span>
          </div>

          {/* Conditional rendering: Show/hide the mobile menu based on `isNavOpen` */}
          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-4 py-4"
              onClick={() => setIsNavOpen(false)} // Close the menu when the cross (X) icon is clicked
            >
              {/* Cross (X) icon */}
              <svg
                className="h-8 w-8 text-red-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            {/* Mobile menu links */}
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col">
              <li className="my-4 uppercase">
                <Link to="/" onClick={() => setIsNavOpen(false)}>About</Link>
              </li>
              <li className="my-4 uppercase">
                <Link to="/gallery" onClick={() => setIsNavOpen(false)}>Gallery</Link>
              </li>
              <li className="my-4 uppercase">
                <Link to="/ecosystem" onClick={() => setIsNavOpen(false)}>Ecosystem</Link>
              </li>
              <li className="my-4 uppercase">
                <Link to="/sitemap" onClick={() => setIsNavOpen(false)}>Site Map</Link>
              </li>
              <li className="my-4 uppercase">
                <Link to="/contact" onClick={() => setIsNavOpen(false)}>Contact</Link>
              </li>
            </ul>
          </div>
        </section>

        {/* DESKTOP MENU SECTION */}
        <ul className="DESKTOP-MENU hidden space-x-16 lg:flex"> {/* Visible only on large screens */}
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/ecosystem">Ecosystem</Link>
          </li>
          <li>
            <Link to="/sitemap">Site Map</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Main content of the current route */}
      <div className="pt-4">
        <Outlet /> {/* Placeholder for the child route components */}
      </div>
    </div>
  );
}