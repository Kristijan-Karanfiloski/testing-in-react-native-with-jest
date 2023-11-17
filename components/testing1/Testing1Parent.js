import React from "react";
import Testing1Child from "./Testing1Child";

const Testing1Parent = () => {
  const handleOnItemPress = (id) => console.log("Item id was pressed", id);
  // const handleOnItemPress = () => console.log("Item was pressed");

  return (
    <>
      <Testing1Child onItemPress={handleOnItemPress} />
    </>
  );
};

export default Testing1Parent;
