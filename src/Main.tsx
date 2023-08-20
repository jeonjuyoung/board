import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <h3>메인</h3>
      <ul>
        <Link to="/content/1">
          <li>1번</li>
        </Link>
        <Link to="/content/2">
          <li>2번</li>
        </Link>
      </ul>
    </>
  );
}

export default Main;
