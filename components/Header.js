import Image from "next/image";
import React from "react";
import allstateLogo from "../public/allstate.png";

function Header() {
  return (
    <div className="bg-blue-900 flex w-full">
      <div className="max-w-6xl px-5 py-2">
        <Image width={200} height={44} src={allstateLogo} />
      </div>
    </div>
  );
}

export default Header;
