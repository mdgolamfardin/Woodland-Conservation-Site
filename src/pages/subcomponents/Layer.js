import React, { useState } from "react";
import ImageCard from "./ImageCard";

var link = "https://picsum.photos/400/300";

function createImageCard(imgInfo) {
  return (
    <ImageCard
      key={imgInfo.id} // Ensure each ImageCard has a unique key
      url={imgInfo.url}
      title={imgInfo.title}
      description={imgInfo.description}
    />
  );
}

function Layer(props) {
  const [showMore, setShowMore] = useState(false);

  // Function to handle button click
  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  // Limit the data displayed based on the button state
  const visibleData = showMore ? props.data : props.data.slice(0, 3);

  return (
    <div className="mb-12 mt-2">
      <h2 className="text-left text-4xl font-bold text-subClr mb-5 pl-4">
        {props.heading}
      </h2>
      <div className="grid grid-cols-3 gap-10 2xl:grid-cols-4 ">
        {visibleData.map((imgInfo) => createImageCard(imgInfo))}
      </div>
      <button
        onClick={toggleShowMore}
        className="mt-16 mb-4 bg-white text-xl text-gray-600 px-6 py-3 rounded-full hover:bg-gray-200"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}

export default Layer;