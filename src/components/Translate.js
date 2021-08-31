import React, { useState, useEffect } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

const Translate = () => {
  const options = [
    {
      label: "Afrikaans",
      value: "af",
    },
    {
      label: "Arabic",
      value: "ar",
    },
    {
      label: "Hindi",
      value: "hi",
    },
    {
      label: "Greek",
      value: "el",
    },
  ];
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  useEffect(() => {}, []);

  return (
    <div>
      <div className="ui segment">
        <div className="ui form">
          <div className="field">
            <div className="label">
              <label>Enter text</label>
              <input onChange={(e) => setText(e.target.value)} value={text} />
            </div>
          </div>
        </div>
      </div>
      <Dropdown
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
        label="Select a Language"
      />
      <hr />
      <div className="ui segment">
        <h4 className="ui header">Output</h4>
        <Convert language={language} text={text} />
      </div>
    </div>
  );
};

export default Translate;
