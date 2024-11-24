import React, { useState, useEffect } from "react";

function ImageCard(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageClass, setImageClass] = useState(""); // Dynamically apply `w-full` or `h-full`

  const handleImageClick = () => {
    setIsModalOpen(true); // Open the modal when the image is clicked
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal when clicking outside
  };

  useEffect(() => {
    // Dynamically check dimensions of the image
    const imgElement = document.querySelector(".big-img");
    if (imgElement) {
      if (imgElement.complete) {
        updateImageClass(imgElement);
      } else {
        imgElement.onload = () => updateImageClass(imgElement);
      }
    }
  }, [isModalOpen]);

  const updateImageClass = (imgElement) => {
    if (imgElement.naturalWidth > imgElement.naturalHeight) {
      setImageClass("w-full"); // Take full width
    } else {
      setImageClass("h-full"); // Take full height
    }
  };

  return (
    <div className="relative flex-row space-y-4 bg-white smshadow rounded-xl my-2">
      {/* Main Image Container */}
      <div
        className="h-52 overflow-hidden rounded-xl transition-transform duration-300
                    custom-scale hover:cursor-pointer hover:border-white hover:border-2"
        onClick={handleImageClick} // Open modal on click
      >
        <img
          className="w-full h-full object-cover object-[50%_50%] rounded-md"
          src={props.url}
          alt="img"
        />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed bottom-0 left-0 w-full h-full bg-black bg-opacity-60 backdrop-blur-md flex items-center justify-center z-50"
          onClick={handleCloseModal} // Close modal on clicking outside
        >
          <div
            className="bg-white w-[1100px] h-[670px] rounded-xl flex flex-row items-stretch"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Black Section */}
            <div className="bg-black basis-2/3 rounded-l-xl border-2 border-black flex items-center justify-center">
              <img
                className={`big-img ${imageClass} object-contain`}
                src={props.url}
                alt="modal-img"
              />
            </div>

            {/* Red Section */}
            <div className="bg-white basis-1/3 h-full rounded-r-xl"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageCard;