import React from "react";
import "./styles.css";
import Comment from "./Comment";

const comments = [
  { name: "TS You", content: "My comment!" },
  { name: "JANE", content: "My comment123!" },
  { name: "ANGELA", content: "My comment32462412!" }
];

function App() {
  return (
    <div className="App" style={{ padding: 16, backgroundColor: "#282c34" }}>
      {comments.map((comment, index) => {
        return <Comment name={comment.name} content={comment.content} />;
      })}
    </div>
  );
}

export default App;
