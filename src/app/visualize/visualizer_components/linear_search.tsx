import React, { useState } from "react";

const LinearSearch = () => {
  const [array, setArray] = useState<number[]>([10, 20, 30, 40, 50, 60, 70, 80, 90]);
  const [target, setTarget] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [foundIndex, setFoundIndex] = useState<number | null>(null);

  const handleSearch = () => {
    setFoundIndex(null);
    setCurrentIndex(null);

    for (let i = 0; i < array.length; i++) {
      setTimeout(() => {
        setCurrentIndex(i);
        if (array[i] === target) {
          setFoundIndex(i);
        }
      }, i * 500);
    }
  };

  return (
    <div className="block max-w-sm mx-auto mt-10 p-6 bg-gray-100 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Linear Search Visualization
      </h1>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="targetInput">
          Target Value:
        </label>
        <input
          id="targetInput"
          type="number"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setTarget(Number(e.target.value))}
        />
      </div>

      <button
        onClick={handleSearch}
        className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-300 font-medium"
      >
        Start Search
      </button>

      <div className="flex justify-center mt-6 space-x-2">
        {array.map((num, index) => (
          <div
            key={index}
            className={`flex items-center justify-center w-10 h-10 rounded-md shadow-md font-bold ${
              currentIndex === index
                ? "bg-yellow-300 text-black"
                : foundIndex === index
                ? "bg-green-500 text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            {num}
          </div>
        ))}
      </div>

      {foundIndex !== null && (
        <div className="mt-6 text-center text-green-600 font-medium">
          Found at index: {foundIndex}
        </div>
      )}

      {foundIndex === null && currentIndex === array.length - 1 && (
        <div className="mt-6 text-center text-red-600 font-medium">
          Value not found in the array.
        </div>
      )}
    </div>
  );
};

export default LinearSearch;
