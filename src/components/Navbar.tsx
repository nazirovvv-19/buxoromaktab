import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PencilLine } from "lucide-react";
import ApplicationT from "@/components/Application";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // const navLinks = [
  //   { href: "#", label: "Bosh sahifa" },
  //   { href: "#", label: "Kurslar" },
  //   { href: "#", label: "Biz haqimizda" },
  //   { href: "#", label: "Bog‘lanish" },
  // ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#1E3A8A]/90 backdrop-blur-md shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 dark:from-green-400 dark:to-blue-400 tracking-wide">
          Buxoro<span className="text-blue-600 dark:text-green-400">Maktabi</span>
        </h1>

        {/* Desktop Navigation */}
        {/* <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          {navLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              className="text-base lg:text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-green-400 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav> */}

        {/* Desktop Right Side: Auth buttons + Dark Mode Toggle */}
        <div className="hidden md:flex items-center gap-2 sm:gap-4">
          <ModeToggle />
          <Dialog>
            <DialogTrigger asChild>
              <motion.button
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-green-500 shadow-md hover:shadow-lg transition-all duration-200 focus:ring-4 focus:ring-blue-300 dark:focus:ring-green-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PencilLine className="w-4 h-4 mr-1 inline" />
                Ariza Topshirish
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

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 dark:text-gray-200 p-1" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white/90 dark:bg-[#1E3A8A]/90 backdrop-blur-md px-4 sm:px-6 pb-4 flex flex-col gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* <nav className="flex flex-col gap-4 text-gray-700 dark:text-gray-300 font-medium text-base">
            {navLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                className="hover:text-blue-500 dark:hover:text-green-400 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav> */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-start">
              <ModeToggle />
            </div>
            <motion.button
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-100 hover:text-blue-500 dark:hover:text-green-400 transition-all duration-200 text-left"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Kirish
            </motion.button>
            <Dialog>
              <DialogTrigger asChild>
                <motion.button
                  className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-green-500 shadow-md hover:shadow-lg transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <PencilLine className="w-4 h-4 mr-1 inline" />
                  Ariza Topshirish
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
      )}
    </header>
  );
};

export default Navbar;