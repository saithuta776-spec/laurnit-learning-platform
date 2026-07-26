import { useState } from "react";

interface PType {
  // id: number;
  name: string;
  image: string;
}

export default function PCard({ name, image }: PType) {
  const [load, setLoad] = useState(false);
  const imageLoader = () => {
    setLoad(true);
  };
  return (
    <div className="mt-2 flex flex-col rounded-[2rem] bg-white p-4 shadow-md">
      <div className="relative flex h-48 w-full items-center justify-center sm:h-40">
        {!load && (
          <div className="absolute inset-0 animate-pulse rounded-md bg-gray-200"></div>
        )}
        <img
          src={image}
          alt=""
          className={`h-full w-full object-contain ${load ? "opacity-100" : "opacity-0"} transition-transform duration-300`}
          onLoad={imageLoader}
        />
      </div>

      <div className="">
        <p className="mt-2 text-center font-normal tracking-tight hover:underline">
          {name}
        </p>
      </div>
    </div>
  );
}
