"use client";

import Link from "next/link";
import React from "react";

const Home = ({ insertData, updateData, deleteData }) => {
  const Hello = () => {
    insertData();
  };

  const onUpdate = () => {
    updateData();
  };
  const onDelete = () => {
    deleteData();
  };
  return (
    <>
      <div onClick={Hello}>Insert</div>
      <div onClick={onUpdate}>Update</div>
      <div onClick={onDelete}>Delete</div>
      <Link href="/">Home</Link>
    </>
  );
};

export default Home;
