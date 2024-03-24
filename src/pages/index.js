/* eslint-disable react/jsx-key */
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import MusicCard from "@/components/MusicCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [musicData, setMusicData] = useState([]);

  useEffect(() => {
    const fetchMusicData = async (url) => {
      const response = await fetch(url, {
        method: "GET",
        headers: { projectID: "l8xp41a6r6rq" },
      });
      const json = await response.json();
      console.log(json?.data);
      setMusicData(json?.data);
    };
    fetchMusicData("https://academics.newtonschool.co/api/v1/music/song");
  }, []);
  if (!musicData) {
    return <h2>Loading</h2>;
  }
  return (
    <main>
      <Navbar />
      <div className="bg-gray-900">
        <div className="mx-auto px-10">
          <div className="grid grid-cols-6 gap-1 pt-3 ">
            {(musicData || []).map((data) => (
              <MusicCard musicData={data} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
