import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    <>
      <h1>こんにちは</h1>
      <p>おげんきですか</p>
    </>
  );
};

// Appをコンポーネントとしてレンダリングする
// 描画する位置を指定する
ReactDom.render(<App />, document.getElementById("root"));
