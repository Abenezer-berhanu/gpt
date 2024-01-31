'use client'
import React from "react";
import { MagnifyingGlass } from "react-loader-spinner";

function Spinner() {
  return (
    <div className="mx-auto my-5 scale-95">
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </div>
  );
}

export default Spinner;
