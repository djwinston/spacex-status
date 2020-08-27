import React from "react";

export const createMarkup = (text) => {
  return { __html: `${text}` };
};

export const dangerousMarkup = (text) => (
  <div dangerouslySetInnerHTML={createMarkup(text)}></div>
);
