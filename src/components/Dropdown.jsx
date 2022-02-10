/** @format */

import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const DropDown = (props) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      // console.log(e.target);

      // if (ref?.current?.contains(event.target)) {
      //   return;
      // }

      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = props.options.map((option) => {
    if (option.value === props.selected.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          props.onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  // console.log(ref);

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{props.label}</label>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{props.selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>

        {/* <div className="ui segment" style={{ color: props.selected.value }}>
          <p style={{ color: props.selected.value }}>
            This text is {props.selected.value}
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default DropDown;
