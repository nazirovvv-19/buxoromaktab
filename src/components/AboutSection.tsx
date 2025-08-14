import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { AboutData } from "@/types/all";
import { getAboutData } from "@/api/about";

function About() {
  const [about, setAbout] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAboutData()
      .then((data) => {
        setAbout(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Yuklanmoqda...</p>;
  if (error) return <p>Xatolik: {error}</p>;
  if (!about) return null;

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe] to-white dark:bg-gradient-to-br dark:from-[#0c4a6e] dark:via-[#2563eb] dark:to-[#1e3a8a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Title and Description */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-orange-700 dark:text-orange-400 leading-snug">
            {about.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            {about.description}
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-white dark:bg-gray-800 shadow-2xl rounded-3xl p-10 border border-orange-200 dark:border-gray-700"
        >
          {[
            { value: "1500+", label: "O'quvchilar soni" },
            { value: "7–8", label: "O’rtacha IELTS ballari" },
            { value: "1300–1560", label: "O’rtacha SAT ballari" },
            { value: "500+", label: "Milliy Sertifekat" },
          ].map((stat, index) => (
            <div key={index} className="text-center space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 dark:text-green-400">
                {stat.value}
              </h2>
              <p className="text-lg font-medium text-gray-700 dark:text-gray-200">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Text + Button */}
          <div className="space-y-6">
            <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white shadow-md rounded-xl px-6 py-3 text-base sm:text-lg">
              Biz haqimizda
            </Button>

            <h2 className="text-5xl font-extrabold text-gray-800 dark:text-white leading-tight">
              SODIQ SCHOOL <br />
              <span className="text-orange-600 dark:text-orange-400">MISSIYASI</span>
            </h2>

            <div className="bg-white dark:bg-gray-800 border-l-4 border-orange-600 dark:border-orange-400 p-6 rounded-xl shadow-md">
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Bizning vazifamiz — har bir o‘quvchiga eng yuqori sifatli ta’lim berish va
                ularning orzularini ro‘yobga chiqarish yo‘lida qo‘llab-quvvatlash.
              </p>
            </div>
          </div>

          {/* Image (dynamic) */}
          <motion.img
            src={about.image}
            alt="About us"
            className="w-full h-auto max-w-lg rounded-3xl shadow-2xl object-cover border-4 border-orange-200 dark:border-gray-700"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default About;