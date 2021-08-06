import React, { useEffect, useState } from "react";
import ColorfulMessage from "./compornents/colorfulMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwithShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num % 3 === 0 && num > 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue"> おげんきですか</ColorfulMessage>
      <ColorfulMessage color="pink"> 元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickSwithShowFlag}>on/off</button>
      {faceShowFlag && <p>🤔</p>}
    </>
  );
};

export default App;
