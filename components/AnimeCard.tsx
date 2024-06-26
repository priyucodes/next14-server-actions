// "use client";
import Image from "next/image";
import { MotionDiv } from "./MotionDiv";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonCards from "./SkeletonCards";
export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

interface Prop {
  anime: AnimeProp;
  index: number;
  loading: boolean;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function AnimeCard({ anime, index, loading }: Prop) {
  return (
    // Now only the parent is client side rendered, the child component is server side rendered, we make a new component MotionDiv.tsx and import it here to make the child component server side rendered
    <>
      {loading ? (
        <SkeletonCards />
      ) : (
        <MotionDiv
          initial='hidden'
          animate='visible'
          variants={variants}
          // Stagger animation to make the animation more smooth
          // The staggerChildren prop allows you to stagger the animations of children of a container. It can be used with any layout, including flexbox, grid, and more.
          // stagger effect is used to animate the children of a container one after the other with a delay between each child.
          // https://www.framer.com/motion/stagger/
          transition={{ duration: index * 0.25, ease: "easeInOut", delay: 0.5 }}
          viewport={{ amount: 0.1 }}
          className='max-w-sm rounded relative w-full'
        >
          <div className='relative w-full h-[37vh]'>
            <Image
              src={`https://shikimori.one${anime.image.original}`}
              alt={anime.name}
              fill
              className='rounded-xl'
            />
          </div>
          <div className='py-4 flex flex-col gap-3'>
            <div className='flex justify-between items-center gap-1'>
              <h2 className='font-bold text-white text-xl line-clamp-1 w-full'>
                {anime.name}
              </h2>
              <div className='py-1 px-2 bg-[#161921] rounded-sm'>
                <p className='text-white text-sm font-bold capitalize'>
                  {anime.kind}
                </p>
              </div>
            </div>
            <div className='flex gap-4 items-center'>
              <div className='flex flex-row gap-2 items-center'>
                <Image
                  src='./episodes.svg'
                  alt='episodes'
                  width={20}
                  height={20}
                  className='object-contain'
                />
                <p className='text-base text-white font-bold'>
                  {anime.episodes || anime.episodes_aired}
                </p>
              </div>
              <div className='flex flex-row gap-2 items-center'>
                <Image
                  src='./star.svg'
                  alt='star'
                  width={18}
                  height={18}
                  className='object-contain'
                />
                <p className='text-base font-bold text-[#FFAD49]'>
                  {anime.score}
                </p>
              </div>
            </div>
          </div>
        </MotionDiv>
      )}
    </>
  );
}

export default AnimeCard;
