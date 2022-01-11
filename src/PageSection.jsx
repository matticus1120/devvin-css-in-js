import React from "react";
import { usePageContext } from "./PageContext";

function Page() {
  const { increaseCount, decreaseCount, count } = usePageContext();
  return (
    <div>
      <h2>Page Counters!</h2>
      <hr />
      <button
        onClick={() => {
          increaseCount();
        }}
      >
        Increase The Count
      </button>
      <hr />
      <button
        onClick={() => {
          decreaseCount();
        }}
      >
        Decrease The Count
      </button>
      <br />
      <h3>
        The total count is: <strong>{count}</strong>
      </h3>
    </div>
  );
}

export default Page;
