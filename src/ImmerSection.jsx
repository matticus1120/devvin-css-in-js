import React from "react";
import produce from "immer";

// https://immerjs.github.io/immer/update-patterns

function ImmerSection() {
  let devIn = {
    one: "one",
    two: "two",
    three: {
      ay: "a",
      bee: "B",
      cee: "C",
    },
  };

  const nextState = produce(devIn, (draftState) => {
    draftState.two = "Two New";
    draftState.three = { huh: "huh" };
  });

  //   let devInTwo = devIn;
  //   devInTwo.two = "Two New";
  console.log("devIn", devIn);
  console.log("nextState", nextState);
  // console.log("devInTwo", devInTwo);
  return (
    <section id="immer">
      <hr />
      <h2>Immer!!</h2>
    </section>
  );
}

export default ImmerSection;
