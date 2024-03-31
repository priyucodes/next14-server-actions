"use client";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useState } from "react";

const SkeletonCards = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <SkeletonTheme baseColor='#202020' highlightColor='#444'>
      <Skeleton height={320} className='rounded-xl relative' />
    </SkeletonTheme>
  );
};

export default SkeletonCards;
