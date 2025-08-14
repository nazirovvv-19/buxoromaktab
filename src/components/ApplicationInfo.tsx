import { useEffect, useState } from "react";
import { getApplicationInfo } from "@/api/application-info";
import type { ApplicationForm } from "@/types/all";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PencilLine } from "lucide-react";
import ApplicationT from "@/components/Application";

function ApplicationInfo() {
  const [info, setInfo] = useState<ApplicationForm | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getApplicationInfo()
      .then((data) => {
        setInfo(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-lg text-gray-600 dark:text-gray-300">Yuklanmoqda...</p>;
  if (error) return <p className="text-center text-lg text-red-600 dark:text-red-400">Xatolik: {error}</p>;
  if (!info) return null;

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe] to-white dark:bg-gradient-to-br dark:from-[#0c4a6e] dark:via-[#2563eb] dark:to-[#1e3a8a] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="bg-white dark:bg-gradient-to-tr dark:from-[#0c4a6e] dark:via-[#2563eb] dark:to-[#1e3a8a] p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg space-y-8 lg:space-y-10 border border-blue-100 dark:border-green-800"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Title */}
          <motion.h1
            className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Qabul <span className="text-blue-500 dark:text-green-400">{info.year}</span>
          </motion.h1>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Text */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
                {info.title}
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {info.description}
              </p>
            </div>

            {/* Right - Image */}
            <motion.img
              src={info.image}
              alt="Qabul rasmi"
              className="w-full h-auto max-w-md mx-auto rounded-2xl object-cover shadow-lg hover:scale-105 transition-transform duration-300 border border-blue-100 dark:border-green-800"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>

          {/* Button */}
          <div className="text-center">
            <Dialog>
              <DialogTrigger asChild>
                <motion.button
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-5 py-3 sm:px-6 sm:py-3 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 focus:ring-4 focus:ring-blue-300 dark:focus:ring-green-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <PencilLine className="w-5 h-5" />
                  Ariza qoldirish
                </motion.button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-0 border-none bg-transparent shadow-2xl">
                <DialogHeader>
                  <DialogTitle className="sr-only">Ariza</DialogTitle>
                </DialogHeader>
                <ApplicationT />
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ApplicationInfo;