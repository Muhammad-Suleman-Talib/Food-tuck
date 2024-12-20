"use client";
import { useEffect, useState } from "react";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Show the popup after 2 seconds
    }, 2000); // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []); // Run on every page load/reload

  const closePopup = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-50">
          {/* Popup Container */}
          <div className="relative bg-[#8f8d8d] p-4 md:p-6 rounded-lg shadow-lg w-[90%] md:w-[450px] lg:w-[600px] max-h-[90%] overflow-auto">
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              <i className="bx bx-x text-2xl"></i>
            </button>

            {/* Title */}
            <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold mb-4">
              <span className="text-yellow-500">Fully Responsive</span>{" "}
              <span className="text-gray-800">iPhone 13 View of My Website</span>
            </h2>

            {/* Video Content */}
            <div className="w-full h-[200px] md:h-[300px] lg:h-[350px] mb-4">
              <video
                className="w-full h-full rounded-lg"
                controls
                autoPlay
                loop
              >
                <source
                  src="/images/iphone.webm" // Replace this path with your video file location
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Description */}
            <p className="text-black text-center text-sm md:text-base lg:text-lg">
              Watch how my website looks on an iPhone 13. It’s fully responsive
              and optimized for all devices.
            </p>

            {/* Close Button */}
            <div className="text-center mt-4">
              <button
                onClick={closePopup}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              >
                Close!
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
