'use client';
import { useEffect, useState } from 'react';
import { VolumeMute } from "@styled-icons/ionicons-sharp/VolumeMute";
import { VolumeHigh } from '@styled-icons/ionicons-sharp/VolumeHigh';

export default function Sound() {
  const [state, setState] = useState(false); //music state

  useEffect(() => {
    // Update the document title using the browser API
    let track = document.getElementById("track") as HTMLAudioElement;
    if (state) {
      track.play();
    } else {
      track.pause();
    }
  });

  return (
    <>
      <nav className='flex justify-start 
      md:m-md sm:m-sm lg:m-lg 
      z-20 absolute w-full'>
        <audio loop id="track">
          <source src="./sounds/arcade.mp3" type="audio/mpeg" />
        </audio>

        <div>
          <div className='sm:w-icons-sm md:w-icons-sm w-icons text-secundary' onClick={() => setState(!state)}> {
            state ? <VolumeHigh /> : <VolumeMute />
          }</div>
        </div>
      </nav>
    </>
  )
}