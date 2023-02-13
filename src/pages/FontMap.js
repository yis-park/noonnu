import React from "react";
import { Link } from "react-router-dom";

function FontMap({ item }) {
  return (
    <div>
      <Link to={`appFont/${item.id}`}>
        <h2>{item.title}</h2>

        {item.des}
      </Link>
    </div>
  );
}

export default FontMap;
