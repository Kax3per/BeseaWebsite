export default function Buttons() {
  return (
    <div className="flex space-x-4">
      <button className="px-6  hover:animate-none py-3 rounded-full bg-white text-black font-semibold shadow-lg shadow-green-500/50 hover:bg-gray-200 transition">
        Button 1
      </button>
      <button className="px-6 py-3 rounded-full bg-gradient-to-r from-gray-800 to-black text-gray-200 hover:from-gray-700 hover:to-gray-900 transition">
        Button 2
      </button>
    </div>
  );
}