import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            {/* <logo /> */}
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/social">
                  <p>Social</p>
                </Link>
              </li>
              <li>
                <Link href="/favourite">
                  <p>Favourite</p>
                </Link>
              </li>
              <li>
                <input className="text-gray-900 p-2 bg-gray-50 rounded-lg border border-gray-300"/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
