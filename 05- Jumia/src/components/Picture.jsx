import React from "react";
import "../index.css";

export default function Pictures({ category, data }) {
  return (
    <div>
      <h2>{category}</h2>
      <div className="data">
        {data.map(({ name, pic }) => {
          return (
            <div key={name}>
              <img src={pic} alt={name} />
              <p>{name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
