import React from "react";

const Link = ({ route }) => {
  return (
    <div>
      <li className="text-purple-600 mr-12 hover:bg-purple-300" >
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

export default Link;
