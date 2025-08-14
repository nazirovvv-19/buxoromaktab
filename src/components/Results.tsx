import { useEffect, useState } from "react";
import { getResults } from "@/api/results";
import type { Results_ofus } from "@/types/all";
import { motion } from "framer-motion";

function Results() {
  const [results, setResults] = useState<Results_ofus[]>([]);
  const [filter, setFilter] = useState<"sat" | "ielts">("sat");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getResults()
      .then((data) => {
        setResults(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-10">Yuklanmoqda...</p>;
  if (error) return <p className="text-center py-10 text-red-600">{error}</p>;

  const filteredResults =
    filter === "sat"
      ? results.filter((r) => r.sat_score)
      : results.filter((r) => r.ielts_score);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe] to-white dark:bg-gradient-to-br dark:from-[#001F3F] dark:via-[#2563eb] dark:to-[#1e3a8a] transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Natijalarimiz
        </motion.h2>

        {/* Filter buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setFilter("sat")}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              filter === "sat"
                ? "bg-indigo-600 text-white"
                : "bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white"
            }`}
          >
            SAT Natijalari
          </button>
          <button
            onClick={() => setFilter("ielts")}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
              filter === "ielts"
                ? "bg-emerald-600 text-white"
                : "bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white"
            }`}
          >
            IELTS Natijalari
          </button>
        </div>

        {/* Result Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredResults.map((student, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-3 text-center space-y-4 transition-transform hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-48 h-48 mx-auto overflow-hidden rounded-md border-4 bg-gradient-to-br from-blue-100 to-green-100 dark:from-[#1E40AF] dark:to-[#111827] transition-transform duration-300 hover:scale-105">
                <img
                  src={student.image}
                  alt={student.full_name}
                  className="w-full max-w-[200px] sm:max-w-[250px] max-h-[280px] object-cover rounded-sm shadow-lg hover:scale-110 transition-transform duration-500 border border-blue-100 dark:border-green-800"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100 truncate">
                {student.full_name}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {filter === "sat"
                  ? `SAT: ${student.sat_score}`
                  : `IELTS: ${student.ielts_score}`}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Results;
