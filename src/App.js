/** @format */

import React from "react";
import Accordion from "./components/Accordion";
import DropDown from "./components/Dropdown";
import Search from "./components/Search";
import { useState } from "react";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React",
    content: "React is a frontend javascript framework",
  },
  {
    title: "Why use React",
    content: "React is a favourite JS library",
  },
  {
    title: "How do you use React",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "Red",
  },
  {
    label: "The Color Green",
    value: "Green",
  },
  {
    label: "A Shade of Blue",
    value: "Blue",
  },
];

const showAccordion = () => {
  if (window.location.pathname === "/") {
    return <Accordion items={items} />;
  }
};

const showSearch = () => {
  if (window.location.pathname === "/search") {
    return <Search />;
  }
};

const showDropdown = () => {
  if (window.location.pathname === "/dropdown") {
    return <DropDown />;
  }
};

const showTranslate = () => {
  if (window.location.pathname === "/translate") {
    return <Translate />;
  }
};

{
  /* const showComponent = (route, component) => {
  return window.location.pathname === route ? component : null;
};
*/
}

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>

      <Route path="/search">
        <Search />
      </Route>

      <Route path="/dropdown">
        <DropDown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>
      {/* {showAccordion()}
      {showSearch()}
      {showDropdown()}
      {showTranslate()} */}
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Button
      </button>
      {showDropdown ? (
        <DropDown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      ) : null} */}
      {/* <Translate /> */}
    </div>
  );
};

export default App;
