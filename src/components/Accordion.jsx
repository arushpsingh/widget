/** @format */

import React, { useState } from "react";

const Accordion = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClicked = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = props.items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      <div key={item.title}>
        <div className={`title${active}`} onClick={() => onTitleClicked(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content${active}`}>
          <p>{item.content}</p>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="ui styled accordion">{renderedItems}</div>
    </>
  );
};

export default Accordion;
