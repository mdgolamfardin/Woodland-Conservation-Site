// Import the Subcomponent component from the specified folder
import React, { useState } from "react";
import Subcomponent from "./subcomponents/SubExample";

// Define the Ecosystem component as a functional component
const Ecosystem = () => {
// State for dark mode
const [darkMode, setDarkMode] = useState(false);

// Function to scroll to the top of the page
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Function to toggle dark mode
const toggleDarkMode = () => {
  setDarkMode(!darkMode);
};

return (
  <div
    className={`min-h-screen transition-colors duration-300 ${
      darkMode ? "bg-gray-900 text-gray-100" : "bg-transparent text-gray-900"
    }`}
  >
    {/* Dark Mode Toggle Button */}
    <button
      onClick={toggleDarkMode}
      className={`fixed top-4 right-4 px-4 py-2 rounded-full shadow ${
        darkMode
          ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
          : "bg-gray-900 text-gray-100 hover:bg-gray-800"
      }`}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>

    {/* Main Title Section */}
    <div className="text-center py-8">
      <h1 className="text-2xl italic mt-2">EcoSystem:A Living Testament to Nature and History</h1>
    </div>

    {/* Content Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8" > 
      {/* Left Content Block */}
      <div>
        <p className="text-lg mb-4" style={{ fontSize: "20px" }} >
        This woodland conservation site is home to an extraordinary array
            of natural and historical treasures. The towering Yellow Birch trees
            provide shade and shelter for countless species, playing a key role
            in the forest's ecosystem. The site also includes wetlands, a
            critical habitat that supports biodiversity, regulates water flow,
            and filters pollutants. The wetland area is a serene reminder of
            nature’s resilience and its importance to the environment. Together,
            these features make the site a haven for both wildlife and
            eco-conscious visitors.
        </p>
        <div className="relative">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Woodland"
            className="rounded-lg"
          />
          <button className="absolute bottom-2 left-2 bg-black text-white px-2 py-1 text-sm rounded">
            Click on image for more details
          </button>
        </div>
      </div>

      {/* Right Content Block */}
      <div>
        <div className="relative mb-4">
          <img
            src="https://via.placeholder.com/400x300"
            alt="EcoSystem Detail"
            className="rounded-lg"
          />
          <button className="absolute bottom-2 left-2 bg-black text-white px-2 py-1 text-sm rounded">
            Click on image for more details
          </button>
        </div>
        <p className="text-lg mb-4" style={{ fontSize: "20px" }}>
          Beyond its natural beauty, this conservation site also holds
            historical significance. Evidence of a farmhouse and ancient wells
            provides a glimpse into the lives of those who lived here
            generations ago. These artifacts are a testament to the human
            connection with the land and serve as a reminder of the importance
            of preserving history alongside nature. Visitors can explore these
            relics, marveling at how the site weaves together past and present
            in a truly unique way. Whether drawn by the Yellow Birch, wetlands,
            or historical artifacts, there is something here for everyone.
        </p>
      </div>
    </div>

    {/* Footer Section */}
    <footer className="relative text-center mt-8">
  {/* Scroll to Top Button */}
  <button
    onClick={scrollToTop}
    className={`fixed bottom-4 right-4 px-4 py-2 rounded-full shadow ${
      darkMode
        ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
        : "bg-gray-900 text-gray-100 hover:bg-gray-800"
    }`}
  >
    ↑ Go to Top
  </button>
</footer>
  </div>
);
};

// Export the Ecosystem component so it can be used in other parts of the app
export default Ecosystem;