import React from "react";
import BasicTable from "./content/BasicTable";

function Main() {
  return (
    <div className="wrap">
      <h3>💻 테이블 만들기</h3>
      {/* <ul>
        <Link to="/content/1">
          <li>1번</li>
        </Link>
        <Link to="/content/2">
          <li>2번</li>
        </Link>
        
      </ul> */}
      <BasicTable />
    </div>
  );
}

export default Main;
