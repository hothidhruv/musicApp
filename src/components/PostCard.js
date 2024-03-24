/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React from "react";

export default function PostCard({ posts }) {
  return (
    <div className="m-4">
      <div className="w-100 p-4 border border-solid rounded border-gray-500 max-w-3xl">
        <div className="grid justify-items-center"></div>

        <div className="text-gray-100">
          <h3 className="text-gray-100">Title: {posts.title}</h3>
          <p>Content: {posts.content}</p>
          <p className="text-gray-100">Author: {posts.author.name}</p>
        </div>
      </div>
    </div>
  );
}
