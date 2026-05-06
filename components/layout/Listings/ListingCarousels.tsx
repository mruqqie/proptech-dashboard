"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { LISTING_CAROUSELS } from "@/constants/listings.constants";

const ListingCard = ({
  tag,
  title,
  images,
}: {
  tag: string;
  title: string;
  images: string[];
}) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-70 rounded-2xl overflow-hidden cursor-pointer group">
      {images.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={title}
          fill
          className={`object-cover transition-opacity duration-700 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

      <div className="absolute bottom-8 left-4 right-4">
        <p className="text-[10px] font-semibold text-white/70 tracking-widest mb-1">
          {tag}
        </p>
        <p className="text-sm font-bold text-white leading-snug">{title}</p>
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`rounded-full w-1.5 h-1.5 transition-all duration-300 ${
              i === active
                ? "bg-white"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};


const ListingCarousels = () => (
  <div className="grid px-16 mb-16 grid-cols-3 gap-4">
    {LISTING_CAROUSELS.map((item) => (
      <ListingCard key={item.id} {...item} />
    ))}
  </div>
);

export default ListingCarousels;