
//import { useState} from "react";

export const NFTsection = () => {
  const imageIds = Array.from({ length: 30 }, (_, i) => i + 1);

  return (

    <div id='NFTscene' className='relative flex flex-wrap 
      justify-start items-start content-center
      h-full w-full dark:bg-primary bg-primary 
      overflow-hidden'>
      {imageIds.map((id) => (
        <div key={id} className='w-1/4 sm:w-1/3 md:w-1/5 lg:w-1/6 xl:w-1/6 flex-shrink-0'>
          <img
            src={`/Pictures/rosenft/${id}-min.png`}
            alt={`NFT ${id}`}
            className='w-full h-auto object-contain hover:filter-none grayscale brightness-30  blur-sm'
          />
        </div>
      ))}
      <h1
        className="text-xl sm:text-sm md:text-xl lg:text-xl
        p-md text-center
        rounded-full 
         z-10 absolute w-fit h-fit
        top-1/2 left-1/2 text-primary bg-tertiary 
        transform -translate-x-1/2 -translate-y-1/2">
        Adquiere uno de los 5555 NFT!
      </h1>
    </div>
  );
};


