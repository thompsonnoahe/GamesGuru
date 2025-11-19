import Header from "@/components/header";
import { useEffect, useState } from "react";
import Image from "next/image";

interface RecommendationProps {
  fields: string;
}

interface Game {
  id: number;
  cover: { image_id: string };
  name: string;
  summary: string;
  total_rating: number;
  websites: [{ id: number; url: string }];
}

const Recommendation = (props: RecommendationProps) => {
  const [gameData, setGameData] = useState<Game[]>([]);
  useEffect(() => {
    fetch(`http://${process.env.NEXT_PUBLIC_API_URL}/game`, {
      body: `fields *, cover.image_id, websites.url, websites.type; where ${props.fields} & total_rating >= 80; sort total_rating desc; limit 5;`,
      method: "POST",
    })
      .then((res) => res.json())
      .then((games) => {
        setGameData(games);
        console.log(games);
      });
  }, []);

  if (gameData.length === 0) {
    return (
      <div className="min-h-screen flex flex-col font-sans bg-background">
        <Header />
        <main className="flex flex-col flex-1 bg-linear-120 from-gg-red to-gg-yellow p-10">
          <div className="flex flex-col">
            <h1 className="text-5xl text-center">
              Oops! No recommendations 😭
            </h1>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background">
      <Header />
      <main className="flex flex-col flex-1 bg-linear-120 from-gg-red to-gg-yellow p-10">
        <h1 className="font-extrabold mb-10 text-5xl text-center">
          Your Recommendations 🎮
        </h1>
        <div className="flex flex-col">
          {gameData.map((game, index) => (
            <div key={game.id} className="flex mb-5">
              <h2 className="flex justify-center items-center text-3xl mr-7">
                {index + 1}
              </h2>
              <Image
                src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${gameData[index]?.cover.image_id}.jpg`}
                alt={game.name}
                width={300}
                height={200}
                quality={100}
                className="mr-7 w-1/3 h-full"
              />
              <div className="w-full">
                <h1 className="font-bold text-4xl">{game.name}</h1>
                <div className="p-5">
                  <p className="text-xl ">{game.summary}</p>
                  <p className="text-2xl mt-5">
                    User rating:{" "}
                    <span className="bg-purple-500 p-2 rounded-full">
                      {game.total_rating.toFixed(1)}
                    </span>
                  </p>
                  <p>Links: 🔗</p>
                  <div className="flex flex-col">
                    {game.websites?.map((website) => (
                      <a
                        className="underline mb-1"
                        key={website.id}
                        target="_blank"
                        href={website.url}
                      >
                        {website.url}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Recommendation;
