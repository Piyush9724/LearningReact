import React, { useState } from "react";

interface ExpandableTextProps {
  text: string;
  characterCount: number;
}

const ExpandableText = ({ text, characterCount }: ExpandableTextProps) => {
  const [expand, setExpanded] = useState(true);

  const handleClick = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <>
      <p>
        {expand ? text.substring(0, characterCount):text}{" "}
        <button onClick={handleClick}>
          {expand ? <label>Read more..</label> : <label>Read less..</label>}
        </button>{" "}
      </p>
    </>
  );
};

export default ExpandableText;
