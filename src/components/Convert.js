import React, { useState, useEffect } from "react";
import googleTranslate from "../apis/google-translate";
const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await googleTranslate.post(
        "/",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    if (debouncedText.length > 0) doTranslation();
  }, [language, debouncedText]);
  return <div>{translated}</div>;
};

export default Convert;
