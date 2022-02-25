import React from "react";
import { NavLink } from "react-router-dom";
import { Breadcrumbs } from "react-breadcrumbs-dynamic";

const Breadcrumb = () => {
  return (
    <div className="breadcrumb-area pt-10 pb-10 bg-gray-5">
      <div className="container">
        <div className="breadcrumb-content text-center">
          <Breadcrumbs
            separator={<span>/</span>}
            item={NavLink}
            finalItem={"span"}
          />
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
