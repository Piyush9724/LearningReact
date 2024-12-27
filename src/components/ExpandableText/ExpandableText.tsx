import React, { useState } from "react";

interface ExpandableTextProps {
  text: string;
  characterCount: number;
}

const ExpandableText = ({ text, characterCount }: ExpandableTextProps) => {
  const [isExpanded, setExpanded] = useState(true);

  const toggleExpansion = () => {
    setExpanded((prev) => !prev);
  };

  const truncatedText = isExpanded ? text.substring(0, characterCount) : text;

  const buttonLabel = isExpanded ? "Read more..." : "Read less..";

  return (
    <>
      <p>
        {truncatedText} {" "}
        <button onClick={toggleExpansion}>
          <label>{buttonLabel}</label>
        </button>{" "}
      </p>
    </>
  );
};

export default ExpandableText;
