import { useEffect, useState } from "react";
import type { News, News_ofus } from "@/types/all";
import { getNews_ofus } from "@/api/news";
import { motion } from "framer-motion";
import Modal from "./newsModal";

function News() {
  const [newsList, setNewsList] = useState<News_ofus[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newsModal, setNewsModal] = useState<News>()
  const [openModal, setOpenModal] = useState(false)
  console.log(newsList, 'news');

  useEffect(() => {
    getNews_ofus()
      .then((data) => {
        setNewsList(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-lg text-gray-600 dark:text-gray-300 py-10">Yuklanmoqda...</p>;
  if (error) return <p className="text-center text-lg text-red-600 dark:text-red-400 py-10">Xatolik: {error}</p>;

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe] to-white dark:bg-gradient-to-br dark:from-[#001F3F] dark:via-[#2563eb] dark:to-[#1e3a8a] transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-10 lg:space-y-14">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 dark:from-green-400 dark:to-blue-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Yangiliklar
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {newsList.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-[#1E3A8A] rounded-lg shadow-lg overflow-hidden border border-blue-100 dark:border-green-800 transition-all duration-300 hover:shadow-xl hover:scale-[1.03]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="relative p-2 bg-gradient-to-br from-blue-100 to-green-100 dark:from-[#1E40AF] dark:to-[#111827] rounded-md shadow-md mx-auto h-[260px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full max-h-[200px] sm:max-h-[250px] object-cover rounded-md shadow-lg hover:scale-110 transition-transform duration-500 border border-blue-100 dark:border-green-800"
                />
              </div>
              <div className="p-4 sm:p-5 space-y-3">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(item.date).toLocaleDateString("uz-UZ", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-base text-gray-600 dark:text-gray-300 line-clamp-3">
                  {item.content}
                </p>
                <button
                  className="w-full bg-blue-500 py-2 rounded-sm text-white transition-transform active:scale-95"
                  onClick={() => {
                    setNewsModal(item); // Har bir `item` bu `News` tipi
                    setOpenModal(true);
                  }}
                >
                  Read more
                </button>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {openModal && newsModal && (
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          news={newsModal}
        />
      )}

    </section>
  );
}

export default News;