
// file:    formattext.tsx    

import React from "react";

export const formatTextToElements = (strtxt: string): React.ReactNode[] => {
  const lines = strtxt.split("\n");

  return lines.map((line, index) => {
    const trimmed = line.trim();

    if (!trimmed) return <br key={index} />;

    // Main Title (ends with #)
    if (trimmedEndsWithHashtag(trimmed)) {
        return (
            <h2 key={index} style={{ color: "blue" }}>
            {trimmed.replace("#", "").trim()}
            </h2>
        );
    }

    // Highlighted line (ends with !)
    if (trimmed.endsWith("!")) {
      return (
        <p key={index}>
          <strong>{trimmed.replace("!", "")}</strong>
        </p>
      );
    }

    // Normal paragraph
    return <p key={index} style={{ paddingLeft: "15px" }}>{trimmed}</p>;
  });
};

const trimmedEndsWithHashtag = (text: string) => text.endsWith("#");
