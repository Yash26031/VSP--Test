/** @format */

import React, { useState } from "react";

const Projects = ({ title, lastEdited, created }) => {
  return (
    <div className="relative my-2 hover:border-gray-300 hover:bg-gray-100 hover:border">
      <div className="flex items-center justify-between px-2 py-6 space-x-4">
        <div className="flex">
          <div className="w-12 h-12 bg-gray-200 rounded-md"></div>
          <div className="ml-4">
            <h4 className="text-sm font-semibold">{title}</h4>
            <div className="flex space-x-4 text-xs">
              <p>{lastEdited}</p>
              <p>{created}</p>
            </div>
          </div>
        </div>
        <div>
          <span className="relative mr-2 text-2xl font-bold rounded-full peer">
            ...
          </span>
          <div
            class="hidden absolute z-20 right-0 peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg"
          >
            <a class="px-5 py-3 hover:bg-gray-200" href="#">
              Project Details
            </a>
            <a class="px-5 py-3 hover:bg-gray-200" href="#">
              Project Campaigns
            </a>
            <a class="px-5 py-3 hover:bg-gray-200" href="#">
              Run Campaigns
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
