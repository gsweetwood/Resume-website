import React, { useEffect } from "react";

//* Controls the automatic scroll that happens after the initial animation

const ToTopButton = () => {
  //   useEffect(() => {
  //
  //   }, []);
  useEffect(() => {
    console.log(`hello`);
  }, []);
  //* Return a stick element to allow user to return to the top easily
  return <div className="to-top-button">TOP</div>;
};

export default ToTopButton;
