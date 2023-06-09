import React from "react";

function Navbar() {
  return (
    <nav className="font-sans flex flex-col text-center py-5 w-full my-3 z-50">
      <div className="mb-2 sm:mb-0">
        <a href="/" className="text-4xl no-underline font-semibold">
          {"PopFizz"}
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
