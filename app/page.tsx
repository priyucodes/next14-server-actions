import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import LoadMore from "../components/LoadMore";
// import { data } from "./_data"; fake dummy data
import { fetchAnime } from "./action";
import { data } from "./_data";
import Skeleton from "react-loading-skeleton";

async function Home() {
  const data = await fetchAnime(1);
  const title = "Explore Anime";

  return (
    <main className='sm:p-16 py-16 px-8 flex flex-col gap-10'>
      <h2 className='text-3xl text-white font-bold'>
        {"Explore Anime" || <Skeleton />}{" "}
      </h2>

      <section className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
        {data}
      </section>
      <LoadMore />
    </main>
  );
}

export default Home;
