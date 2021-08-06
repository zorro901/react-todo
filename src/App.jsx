import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          <div>
            <li>
              aaaa
              <button>追加</button>
              <button>削除</button>
            </li>
          </div>
          <div>
            <li>
              aaaa
              <button>追加</button>
              <button>削除</button>
            </li>
          </div>
        </ul>
      </div>
      <div>
        <p>完了のTODO</p>
        <ul>
          <div>
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
