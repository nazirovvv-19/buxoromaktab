import { useEffect, useState } from "react";
import { getTeachers_ofus } from "@/api/teachers";
import type { Teachers_ofus } from "@/types/all";
import { motion } from "framer-motion";

function Teachers() {
  const [teachers, setTeachers] = useState<Teachers_ofus[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getTeachers_ofus()
      .then((data) => {
        setTeachers(data);
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
      <div className="max-w-7xl mx-auto space-y-12 lg:space-y-16">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-blue-500 dark:text-green-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Bizning O‘qituvchilar
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-[#1E3A8A] rounded-lg shadow-lg p-4 sm:p-5 text-center space-y-4 border border-blue-100 dark:border-green-800 transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="relative p-2 bg-gradient-to-br from-blue-100 to-green-100 dark:from-[#1E40AF] dark:to-[#111827] rounded-sm shadow-md">
                <img
                  src={teacher.photo}
                  alt={teacher.full_name}
                  className="w-full h-auto max-w-[260px] sm:max-w-[300px] max-h-[400px] object-cover rounded-sm shadow-lg hover:scale-110 transition-transform duration-500 border border-blue-100 dark:border-green-800"
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {teacher.full_name}
                </h3>
                <p className="text-base text-blue-500 dark:text-green-400 font-medium">{teacher.field}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Teachers;