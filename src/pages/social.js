/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";

export default function Social() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPostsData = async (url) => {
      const response = await fetch(url, {
        method: "GET",
        headers: { projectID: "l8xp41a6r6rq" },
      });
      const json = await response.json();
      console.log(json?.data);
      setPosts(json?.data);
    };
    fetchPostsData(
      "https://academics.newtonschool.co/api/v1/quora/post?limit=100"
    );
  }, []);
  if (!posts) {
    return <h2>Loading</h2>;
  }

  return (
    <div>
      <Navbar />
      <div className="bg-gray-900">
        <div className="mx-auto px-10">
          <div class="grid grid-cols-1 gap-1 pt-3 ">
            {(posts || []).map((post) => (
              <PostCard posts={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
