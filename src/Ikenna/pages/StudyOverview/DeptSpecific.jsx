import React from "react";
import { useParams } from "react-router-dom";
import Data from "./Sample";

const DepartmentDetail = () => {
  const { id } = useParams();
  const department = Data.find((item) => item.id === parseInt(id));

  {
    console.log(id, "hal");
  }
  return (
    <div>
      <h1>{department.name}</h1>
      <p>{department.caption}</p>
    </div>
  );
};

export default DepartmentDetail;
