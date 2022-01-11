import React from "react";
import { usePageContext } from "./PageContext";

function ButtonGroup() {
  const { increaseCount, decreaseCount, isMaxReached } = usePageContext();
  return (
    <div>
      <button
        onClick={() => {
          increaseCount();
        }}
        disabled={isMaxReached ? true : false}
      >
        Increase The Count
      </button>
      <button
        onClick={() => {
          decreaseCount();
        }}
        disabled={isMaxReached ? true : false}
      >
        Decrease The Count
      </button>
    </div>
  );
}

function PageSection() {
  const { count, isMaxReached } = usePageContext();
  return (
    <div>
      <h2>Page Counters!</h2>
      <ButtonGroup />
      <p>
        The total count is:{" "}
        <strong>{!isMaxReached ? count : "Complete!"}</strong>
      </p>
    </div>
  );
}

export default PageSection;
