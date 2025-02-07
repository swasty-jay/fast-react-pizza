import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setquery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setquery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="search order #"
        value={query}
        onChange={(e) => setquery(e.target.value)}
        className="rounded-full py-2 px-4 text-sm
         bg-yellow-200
         placeholder:text-stone-400 w-28 sm:w-64 sm:focus:w-72
          transition-all duration-400 focus:outline-none focus:ring focus:ring-yellow-500 
          focus:ring-opacity-50 "
      />
    </form>
  );
}

export default SearchOrder;
