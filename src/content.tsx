import React from "react";
import { useParams } from "react-router-dom";

function Content() {
  const { contentId } = useParams();
  return (
    <>
      <h3>{contentId}번 컨텐츠 입니다</h3>
    </>
  );
}

export default Content;
