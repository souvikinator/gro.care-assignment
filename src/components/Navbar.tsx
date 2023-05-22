import React from "react";

function Navbar() {
  return (
    <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 sm:items-baseline w-full mt-5">
      <div className="mb-2 sm:mb-0">
        <a
          href="/"
          className="text-4xl no-underline text-gray-900 font-semibold"
        >
          {"PopFizz"}
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
