import type { NewsType } from "@/types/all"; // ✅ type-only import

type ModalProps = {
  open: boolean;
  onClose: () => void;
  news: NewsType;
};

const Modal = ({ open, onClose, news }: ModalProps) => {
  if (!open || !news) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
      <div className="bg-white dark:bg-[#1E3A8A] rounded-md shadow-lg w-full max-w-md sm:max-w-lg lg:max-w-3xl mx-4 sm:mx-0 overflow-hidden 
        max-h-[90vh] overflow-y-auto lg:max-h-none lg:overflow-y-visible">
        
        <div className="flex justify-between items-center px-4 py-3 border-b dark:border-gray-700">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-100">
            {news.title}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 dark:text-gray-300 hover:text-red-500 transition text-lg"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <div className="p-4 space-y-4 text-gray-700 dark:text-gray-200 text-sm sm:text-base">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-52 object-cover rounded"
          />
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            {new Date(news.date).toLocaleDateString("uz-UZ", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-sm sm:text-base whitespace-pre-line">
            {news.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
