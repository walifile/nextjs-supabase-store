"use client";

import React from "react";

const Home = ({ insertData, updateData }) => {
  const Hello = () => {
    insertData();
  };

  const onUpdate = () => {
    updateData();
  };
  return (
    <>
      <div onClick={Hello}>Insert</div>
      <div onClick={onUpdate}>Update</div>
    </>
  );
};

export default Home;
