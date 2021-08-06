import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="complete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>
              aaaa
              <button>追加</button>
              <button>削除</button>
            </li>
          </div>
          <div className="list-row">
            <li>
              aaaa
              <button>追加</button>
              <button>削除</button>
            </li>
          </div>
        </ul>
      </div>
      <div className="incomplete-area">
        <p className="title">完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>
              aaaa
              <button>戻す</button>
              <button>削除</button>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};
