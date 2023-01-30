/** @format */

import React, { useEffect, useState } from "react";

const SubMenu = ({ image, title, classType }) => {
  const [myClass, setMyClass] = useState("");
  useEffect(() => {
    if (classType == "active") {
      setMyClass("bg-white border-l-8 border-gray-500");
    } else {
      setMyClass("");
    }
  }, []);

  return (
    <div
      className={`${"space-x-4 flex items-center pl-6 p-2 cursor-pointer"} ${myClass} `}
    >
      <span className="items-center w-8 h-8 text-2xl font-bold text-center text-white bg-gray-400 rounded-sm">
        {image}
      </span>
      <span>{title}</span>
    </div>
  );
};

export default SubMenu;
