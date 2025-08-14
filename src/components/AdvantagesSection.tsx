import { useEffect, useState } from "react";
import { getAdvantages } from "@/api/advantages";
import type { Advantage } from "@/types/all";
import { motion } from "framer-motion";

function AdvantagesSection() {
  const [advantages, setAdvantages] = useState<Advantage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAdvantages()
      .then((data) => {
        setAdvantages(data);
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
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe] to-white dark:bg-gradient-to-br dark:from-[#0c4a6e] dark:via-[#2563eb] dark:to-[#1e3a8a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center space-y-12 lg:space-y-16">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-500 dark:text-green-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Bizning Afzalliklarimiz
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {advantages.map((adv, idx) => (
            <motion.div
              key={idx}
              className="relative bg-white dark:bg-gradient-to-tl dark:from-[#0c4a6e] dark:via-[#2563eb] dark:to-[#1e3a8a] border border-blue-100 dark:border-green-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Decorative Icon */}
              <div className="absolute -top-5 left-5 w-10 h-10 flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-500 dark:from-green-400 dark:to-blue-400 text-white text-lg font-semibold rounded-full shadow-md">
                {idx + 1}
              </div>

              <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100">
                {adv.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                {adv.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdvantagesSection;