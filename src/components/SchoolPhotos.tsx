import { useEffect, useState } from "react";
import { getSchoolPhoto } from "@/api/schoolPhotos";
import type { SchoolPhoto } from "@/types/all";
import { motion } from "framer-motion";

function SchoolPhotos() {
  const [photos, setPhotos] = useState<SchoolPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getSchoolPhoto()
      .then((data) => {
        setPhotos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-10">Yuklanmoqda...</p>;
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe] to-white dark:bg-gradient-to-br dark:from-[#001F3F] dark:via-[#2563eb] dark:to-[#1e3a8a] transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 dark:from-green-400 dark:to-blue-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Maktabimizdan Lavhalar
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo, idx) => (
            <motion.div
              key={idx}
              className="overflow-hidden rounded-xl shadow-lg bg-white dark:bg-gray-800 hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={photo.image}
                alt={`School Photo ${idx + 1}`}
                className="w-full h-64 sm:h-72 md:h-80 object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SchoolPhotos;
