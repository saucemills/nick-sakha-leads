import Link from "next/link";
import React from "react";
import Header from "../components/Header";

function success() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center py-3">
        <p className="p-4">
          Your information was successfully submitted! You will be contacted by
          an Allstate representative shortly.
        </p>
        <br />
        <p className="font-bold">
          <Link href="https://www.nicksakha.com">Back to NickSakha.com</Link>
        </p>
      </div>
    </>
  );
}

export default success;
