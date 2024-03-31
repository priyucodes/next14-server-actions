"use client";
import { fetchAnime } from "@/app/action";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AnimeCard, { AnimeProp } from "./AnimeCard";

let page = 2;

export type AnimeCard = JSX.Element;
// load more pages / infinite scroll, we paginate the data from the server but as we scroll down we load more data, instead of clicking next page button we trigger new page when u scroll down to specific point of screen i.e in end of our screen, we use react-intersection-observer
function LoadMore() {
  const { ref, inView } = useInView(); // useX is a hook that returns an object with ref and inView properties. ref is a reference to the element that you want to observe, and inView is a boolean that tells you whether the element is in the viewport or not.

  // You cant  use Hooks on server side, we convert the component to client side only the loader works as a client side rest in server

  const [data, setData] = useState<AnimeCard[]>([]);

  useEffect(() => {
    if (inView) {
      fetchAnime(page).then(res => {
        setData([...data, ...res]);
        page++;
      });
    }
  }, [inView, data]);
  return (
    <>
      {/* subsequent pages aside page 1 */}
      <section className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
        {data}
      </section>
      <section className='flex justify-center items-center w-full'>
        <div ref={ref}>
          <Image
            src='./spinner.svg'
            alt='spinner'
            width={56}
            height={56}
            className='object-contain'
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
