/** @format */

import React, { useState } from "react";
import Button from "./Button";
import BasicSelect from "./BasicSelect";
import SearchInput from "./SearchInput";
import Projects from "./Projects";

const myData = [
  {
    title: "Remarkable Template",
    lastEdited: "Edited 3 hours ago",
    created: "Created on 25 January, 2023",
  },
  {
    title: "Onboarding Process Video",
    lastEdited: "Edited 4 hours ago",
    created: "Created on 23 January, 2023",
  },
  {
    title: "Interactive User Process",
    lastEdited: "Edited 5 hours ago",
    created: "Created on 27 January, 2023",
  },
];

const MyProjects = () => {
  const [search, setSearch] = useState("");
  const [dataFromChild, setDataFromChild] = useState(null);

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
    myData.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="px-16 grow pt-28">
      <h3 className="text-2xl font-bold">My Projects</h3>
      <div className="flex justify-between">
        <div className="mt-2 space-x-3">
          <span>Free plan</span>
          <span>|</span>
          <span>2 out of 3 projects used</span>
          <span>
            <a className="text-indigo-400" href="#">
              Upgrade
            </a>
          </span>
        </div>
        <div>
          <Button />
        </div>
      </div>
      <div className="flex items-center justify-between mt-8">
        <div>
          <SearchInput
            value={search}
            onChange={handleChange}
            placeholder="search projects..."
          />
        </div>
        <div>
          <BasicSelect sendData={handleDataFromChild} />
        </div>
      </div>
      <div className="mt-10 ">
        {myData.map((item) => {
          return (
            <Projects
              title={item.title}
              lastEdited={item.lastEdited}
              created={item.created}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyProjects;
