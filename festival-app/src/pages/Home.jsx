import React, { useState } from "react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const initialNews = [
  {
    id: 1,
    title: "Nieuwe Line-up bekend!",
    content:
      "De volledige line-up voor het festival is nu bekend. Bekijk snel welke artiesten er komen!",
    image: "/news/lineup.jpg",
    link: "/pages/Music",
    date: "2025-06-02",
  },
  {
    id: 2,
    title: "Laatste tickets beschikbaar",
    content: "Wees er snel bij, de laatste tickets zijn nu in de verkoop.",
    image: "/news/tickets.jpg",
    link: "/pages/Info",
    date: "2025-06-01",
  },
  {
    id: 3,
    title: "Festival App Update",
    content:
      "Download de nieuwste versie van de festival-app voor de beste ervaring!",
    image: "/news/app.jpg",
    link: "/",
    date: "2025-05-30",
  },
];

export default function Home() {
  const [news, setNews] = useState(initialNews);
  const [loading, setLoading] = useState(false);

  // Simuleer een update-mechanisme (bijv. nieuws verversen)
  const refreshNews = () => {
    setLoading(true);
    setTimeout(() => {
      setNews((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          title: "Weerbericht: Zonnig!",
          content:
            "Het belooft een zonnige festivaldag te worden. Vergeet je zonnebrand niet!",
          image: "/news/weather.jpg",
          link: "/pages/Info",
          date: "2025-06-02",
        },
      ]);
      setLoading(false);
    }, 1200);
  };

  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: "tween",
        ease: "easeIn",
        duration: 1,
      }}
      className="flex flex-col items-center min-h-screen bg-gradient-to-b from-[#eaf6fb] to-[#f7fafc] dark:bg-black dark:text-white"
    >
      <div className="w-full max-w-3xl px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-12 mb-8">
          <h2 className="text-4xl text-[#247BA0] font-roboto font-bold mb-4 md:mb-0 text-center md:text-left">
            Festival Nieuws
          </h2>
          <button
            onClick={refreshNews}
            disabled={loading}
            className="bg-[#247BA0] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#16516b] transition disabled:opacity-50"
            aria-label="Ververs nieuws"
          >
            {loading ? "Verversen..." : "Ververs nieuws"}
          </button>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
          {news.map((item) => (
            <motion.article
              key={item.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg flex flex-col overflow-hidden transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
                loading="lazy"
              />
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[#247BA0] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-200 flex-1">
                  {item.content}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs text-gray-400">{item.date}</span>
                  <a
                    href={item.link}
                    className="text-sm text-[#247BA0] font-semibold hover:underline"
                  >
                    Meer info
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
