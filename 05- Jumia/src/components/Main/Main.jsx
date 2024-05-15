import React from "react";
import Pictures from "../Picture";
import { allPictures } from "../../data";

export default function Main() {
  return (
    <div>
      {allPictures.map(({ id, category, data }) => {
        return <Pictures key={id} category={category} data={data} />;
      })}
    </div>
  );
}
