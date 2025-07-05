export default function Card({ img, title, text }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
      <img src={img} alt={title} className="w-full h-52 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{text}</p>
        <button className="bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-900 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}