import React, { useState } from "react";
import Translate from "./Translate";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Route from "./Route";
import Header from "./Header";

const items = [
  {
    title: "Test 1",
    content: "1",
  },
  {
    title: "Test 2",
    content: "2",
  },
  {
    title: "Test 3",
    content: "3",
  },
];

const options = [
  {
    label: "Red",
    value: "Red",
  },
  {
    label: "Green",
    value: "Green",
  },
  {
    label: "Blue",
    value: "Blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={options}
          label="Select a color"
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
