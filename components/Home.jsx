"use client";

import React from "react";

const Home = ({ insertData }) => {
  const Hello = () => {
    insertData();
  };
  return <div onClick={Hello}>Home</div>;
};

export default Home;
