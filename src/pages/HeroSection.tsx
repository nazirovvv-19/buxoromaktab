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
import buxoro_m from "@/images/buxorom.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe] to-white dark:bg-gradient-to-br dark:from-[#0c4a6e] dark:via-[#2563eb] dark:to-[#1e3a8a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left space-y-6"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-gray-100">
            Buxoro <span className="text-blue-500 dark:text-green-400">maktabi xalq</span> tanlovi
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-lg mx-auto md:mx-0">
            Maktabimizda zamonaviy ta’lim, tajribali o‘qituvchilar va bilimga chanqoqlik uyg‘onadi.
          </p>

          {/* Dialog Trigger */}
          <Dialog>
            <DialogTrigger asChild>
              <motion.button
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-green-500 dark:from-green-400 dark:to-red-500 hover:from-blue-600 hover:to-green-600 dark:hover:from-green-500 dark:hover:to-red-600 text-white px-5 py-3 sm:px-6 sm:py-3 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 focus:ring-4 focus:ring-blue-300 dark:focus:ring-green-300"
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
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="relative w-full max-w-md sm:max-w-lg mx-auto"
        >
          <div className="relative p-3 bg-gradient-to-br from-blue-100 via-white to-green-100 dark:from-[#166534] dark:to-[#7F1D1D] rounded-[1.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.15)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
            <img
              src={buxoro_m}
              alt="Maktab Illyustratsiyasi"
              className="w-full h-auto max-h-[400px] sm:max-h-[500px] object-contain rounded-[1rem] shadow-lg"
            />
          </div>

          {/* Dekorativ blur effektlari */}
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-300 dark:bg-green-400 opacity-20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-green-300 dark:bg-red-400 opacity-20 rounded-full blur-2xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;