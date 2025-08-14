import { useEffect, useState } from "react";
import { getContactForm } from "@/api/contactInfo";
import type { ContactForm } from "@/types/all";
import { motion } from "framer-motion";
import { FaTelegramPlane, FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function ContactInfo() {
  const [contact, setContact] = useState<ContactForm | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);



  const branchNames = [
    "5/2 filiali",
    "Oydin filiali",
    "Raduga filiali",
    "Intarnat filiali",
  ];
  const branches = [
    { latitude: 40.868551, longitude: 69.604499 },
    { latitude: 40.862194, longitude: 69.588756 },
    { latitude: 40.8498900, longitude: 69.6029883 },
    { latitude: 40.85920, longitude: 69.58202 },
  ];


  useEffect(() => {
    getContactForm()
      .then((data) => {
        setContact(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <p className="text-center text-lg text-gray-600 dark:text-gray-300 py-10">
        Yuklanmoqda...
      </p>
    );
  if (error)
    return (
      <p className="text-center text-lg text-red-600 dark:text-red-400 py-10">
        Xatolik: {error}
      </p>
    );
  if (!contact) return null;

  const locations = [contact.map1, contact.map2, contact.map3, contact.map4];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe] to-white dark:bg-gradient-to-br dark:from-[#001F3F] dark:via-[#2563eb] dark:to-[#1e3a8a] transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-10 lg:space-y-12">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 dark:from-green-400 dark:to-blue-400"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Biz bilan bog‘laning
        </motion.h2>

        {/* Contact Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {[
            {
              icon: <FaMapMarkerAlt className="text-white text-xl" />,
              title: "Manzil",
              desc: contact.address,
            },
            {
              icon: <FaPhoneAlt className="text-white text-xl" />,
              title: "Telefon",
              desc: contact.phone,
            },
            {
              icon: <FaTelegramPlane className="text-white text-xl" />,
              title: "Telegram",
              desc: (
                <a
                  href={contact.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-green-400 hover:underline cursor-pointer"
                >
                  Telegram kanalimiz
                </a>
              ),
            },
            {
              icon: <FaInstagram className="text-white text-xl" />,
              title: "Instagram",
              desc: (
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-green-400 hover:underline cursor-pointer"
                >
                  Instagram sahifamiz
                </a>
              ),
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="p-4 sm:p-6 bg-white dark:bg-[#1E3A8A] rounded-lg shadow-lg border border-blue-100 dark:border-green-800 transition-all duration-300 hover:shadow-xl hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-green-500 dark:from-green-400 dark:to-blue-400 shadow-md">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100 mt-3">
                {item.title}
              </h3>
              <div className="text-base text-gray-600 dark:text-gray-300">
                {item.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          {branches.map(({ latitude, longitude }, idx) => {
            const src = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
            return (
              <div key={idx} className="flex flex-col rounded-xl overflow-hidden shadow-lg border border-blue-100 dark:border-green-800">
                <iframe
                  title={`Filial ${idx + 1}`}
                  src={src}
                  loading="lazy"
                  className="w-full aspect-video rounded-t-xl border-0"
                  allowFullScreen
                />
                <div className="bg-gradient-to-r from-blue-500 to-green-500 dark:from-green-400 dark:to-blue-400 text-white text-center py-2 font-semibold text-sm sm:text-base rounded-b-xl">
                  {branchNames[idx]}
                </div>
              </div>
            );
          })}
        </div>
        
      </div>

    </section>
  );
}

export default ContactInfo;
