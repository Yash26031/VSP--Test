/** @format */

import React from "react";

const LoggedInUser = ({ image, title }) => {
  return (
    <div className="flex items-center pt-16 pb-4 pl-6 space-x-4">
      <span className="items-center w-10 h-10 text-3xl font-bold text-center text-white bg-gray-400 rounded-full">
        {image}
      </span>
      <span>{title}</span>
    </div>
  );
};

export default LoggedInUser;
