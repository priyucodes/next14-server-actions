"use client";
// ONLY MADE CLIENT TO TEST SKELETON LOADING, DONT MAKE IT CLIENT SIDE RENDERED CUZ OF SEO
import Image from "next/image";
import { PropsWithChildren, useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function Hero() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <SkeletonTheme baseColor='#202020' highlightColor='#444'>
      <header className='bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0'>
        <div className='flex-1 flex flex-col gap-10'>
          <Image
            src='./logo.svg'
            alt='logo'
            width={101}
            height={96}
            className='object-contain'
          />

          <h1 className='sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]'>
            Explore The <span className='red-gradient'>Diverse Realms</span> of
            Anime Magic
          </h1>
        </div>
        {loading ? (
          <Skeleton height={410} width={466} />
        ) : (
          <div className='lg:flex-1 relative w-full h-[50vh] justify-center'>
            <Image
              src='/anime.png'
              alt='anime'
              fill
              className='object-contain'
            />
          </div>
        )}
      </header>
    </SkeletonTheme>
  );
}

export default Hero;
