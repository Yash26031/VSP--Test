/** @format */

import React from "react";

const SearchInput = ({ value, onChange, placeholder }) => {
  return (
    <div>
      <input
        className="w-60 rounded-md bg-gray-200 py-1 px-2 border-2 border-gray-200"
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchInput;
