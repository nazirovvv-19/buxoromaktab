import { useEffect, useState } from "react";
import type { Directors_all } from "@/types/all";
import { getDirectors_all } from "@/api/directors";
import { motion } from "framer-motion";

function Directors() {
  const [directors, setDirectors] = useState<Directors_all[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getDirectors_all()
      .then((data) => {
        setDirectors(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-lg text-gray-600 dark:text-gray-300">Yuklanmoqda...</p>;
  if (error) return <p className="text-center text-lg text-red-600 dark:text-red-400">Xatolik: {error}</p>;

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe] to-white dark:bg-gradient-to-br dark:from-[#001F3F] dark:via-[#2563eb] dark:to-[#1e3a8a] transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-12 lg:space-y-14">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-blue-500 dark:text-green-400"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Direktorlarimiz
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {directors.map((director, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-[#1E3A8A] shadow-lg rounded-xl p-4 sm:p-5 text-center space-y-4 border border-blue-100 dark:border-green-800 transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="relative p-2 bg-gradient-to-br from-blue-100 to-green-100 dark:from-[#1E40AF] dark:to-[#111827] rounded-xl shadow-md">
                <img
                  src={director.photo}
                  alt={director.full_name}
                  className="w-full h-auto max-h-[300px] sm:max-h-[350px] object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 border border-blue-100 dark:border-green-800"
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {director.full_name}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-300">{director.field}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Directors;