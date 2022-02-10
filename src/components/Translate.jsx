/** @format */

import React from "react";
import DropDown from "./Dropdown";
import { useState } from "react";
import Convert from "./Convert";

const options = [
  {
    label: "French",
    value: "fr",
  },

  {
    label: "German",
    value: "de",
  },

  {
    label: "Hindi",
    value: "hi",
  },

  {
    label: "Japanese",
    value: "ja",
  },

  {
    label: "Korean",
    value: "ko",
  },

  {
    label: "Punjabi",
    value: "pa",
  },

  {
    label: "Russian",
    value: "ru",
  },

  {
    label: "Spanish",
    value: "es",
  },

  {
    label: "Turkish",
    value: "tr",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState([options[0]]);
  const [text, setText] = useState("");

  return (
    <>
      <div>Translate</div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <DropDown
        label="Select a language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </>
  );
};

export default Translate;
