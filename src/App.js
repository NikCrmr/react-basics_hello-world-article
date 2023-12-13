import React from "react";
import "./styles.css";

function HelloWorldArticle() {
  return (
    <article>
      article<h1>Heading</h1>
      <p>paragraph</p>
    </article>
  );
  //HTML `article` tag containing a heading and a paragraph
}

export default function App() {
  return (
    <>
      <HelloWorldArticle />
    </>
  );
}
