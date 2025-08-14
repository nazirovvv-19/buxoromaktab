import { useState } from "react";
import { sendRequest } from "@/api/request";
import { motion } from "framer-motion";

function RequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    question: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      await sendRequest(formData);
      setMessage("Arizangiz muvaffaqiyatli yuborildi!");
      setFormData({ name: "", number: "", question: "" });
    } catch (error: any) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe] to-white dark:bg-gradient-to-br dark:from-[#0c4a6e] dark:via-[#2563eb] dark:to-[#1e3a8a] transition-colors duration-300">
      <div className="max-w-xl mx-auto space-y-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-gray-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Savolingiz bormi?
        </motion.h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-[#1E3A8A] shadow-lg rounded-2xl p-6 sm:p-8 space-y-6 border border-blue-100 dark:border-green-800"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ismingiz"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-[#1E40AF] border border-blue-200 dark:border-green-800 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-green-300 shadow-sm transition-all duration-200"
          />

          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Telefon raqamingiz"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-[#1E40AF] border border-blue-200 dark:border-green-800 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-green-300 shadow-sm transition-all duration-200"
          />

          <textarea
            name="question"
            value={formData.question}
            onChange={handleChange}
            placeholder="Savolingizni yozing..."
            required
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-[#1E40AF] border border-blue-200 dark:border-green-800 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-green-300 shadow-sm transition-all duration-200"
          ></textarea>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 focus:ring-4 focus:ring-blue-300 dark:focus:ring-green-300"
          >
            {loading ? "Yuborilmoqda..." : "Yuborish"}
          </motion.button>

          {message && (
            <p
              className={`text-center text-base sm:text-lg font-medium ${message.includes("muvaffaqiyatli") ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default RequestForm;