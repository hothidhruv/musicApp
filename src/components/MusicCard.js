/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Image from "next/image";

export default function MusicCard({ musicData }) {
  return (
    <div className="mb-2">
      <div className="grid justify-items-center">
        <img src={musicData.thumbnail} />
      </div>  
      <div className="text-gray-100 text-center">
        <h3 className="text-gray-100">{musicData.title}</h3>
        <p className="text-gray-100">{musicData.artist[0].name}</p>
      </div>
    </div>
  );
}
