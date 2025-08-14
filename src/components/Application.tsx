import { useState } from "react";
import { sendApplication } from "@/api/application";
import type { Application } from "@/types/all";
import { motion } from "framer-motion";

function ApplicationT() {
  const [formData, setFormData] = useState<Application>({
    name: "",
    phone: ""
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await sendApplication(formData);
      setSuccess(true);
      setFormData({ name: "", phone: "" });
    } catch (err: any) {
      setError(err.message);
      setSuccess(false);
    }
  };

  return (
    <section className="w-full px-6 py-24 bg-gradient-to-br from-blue-50 via-white to-yellow-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 shadow-2xl rounded-3xl p-10 space-y-8">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ariza yuborish
        </motion.h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Ism Familiya"
              className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Telefon raqam"
              className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <motion.button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg font-semibold py-3 px-6 rounded-xl shadow-md transition-all"
            whileTap={{ scale: 0.98 }}
          >
            Yuborish
          </motion.button>
        </form>

        {/* Alerts */}
        {success && (
          <motion.div
            className="bg-green-100 text-green-800 text-center py-3 px-4 rounded-xl border border-green-300 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ✅ Ariza muvaffaqiyatli yuborildi!
          </motion.div>
        )}
        {error && (
          <motion.div
            className="bg-red-100 text-red-800 text-center py-3 px-4 rounded-xl border border-red-300 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ❌ Xatolik: {error}
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default ApplicationT;
