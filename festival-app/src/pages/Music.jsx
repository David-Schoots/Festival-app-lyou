import artists from "./artistsData";
import { useLanguage } from "../App";

import t from "../pages/translation/MusicTranslation";

const Artists = () => {
  const { lang } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b dark:bg-none from-[#eaf6fb] to-[#f7fafc] p-4 dark:bg-black dark:text-white">
      <h1 className="text-4xl font-bold mb-4 text-[#247BA0] drop-shadow dark:text-white">
        {t.music[lang]}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl dark:bg-black">
        {artists.map((artist) => (
          <div
            className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-center dark:bg-neutral-900"
            key={artist.id}
          >
            <img
              src={artist.image}
              alt={artist.name[lang]}
              className="w-40 h-40 object-cover rounded-full border-4 border-[#247BA0] mb-4 shadow"
            />
            <h2 className="text-2xl font-semibold text-[#247BA0] mb-2 text-center dark:text-white">
              {artist.name[lang]}
            </h2>
            <p className="text-gray-700 mb-4 text-center dark:text-white">
              {artist.description[lang]}
            </p>
            <div className="w-full flex justify-center">
              <iframe
                className="rounded-lg shadow"
                width="320"
                height="180"
                src={artist.youtube}
                title={`YouTube video player for ${artist.name}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artists;
