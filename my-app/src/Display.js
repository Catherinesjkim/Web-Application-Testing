import React from "react";

const Display = ({ balls, strikes }) => {
  return (
    <section>
      <div>
        <h4>Balls</h4>
        <span>{balls}</span>
      </div>
      <div>
        <h4>Strikes</h4>
        <span>{strikes}</span>
      </div>
    </section>
  );
};

export default Display;