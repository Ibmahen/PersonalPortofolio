import React from "react";

export default function SkillCard({ name, iconPlaceholder, iconBgGradient }) {
  return (
    // Card untuk menampilkan satu skill
    <div className="flex border-gray-900 flex-col p-4 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:border-[#FFCC00] hover:border-2 hover:bg-gray-700 ease-in-out">
      {/* Lingkaran dengan gradien sebagai latar belakang ikon */}
      <div
        className={`w-full h-32 rounded-full flex items-center justify-center mb-3 ${iconBgGradient}`}
      >
        {/* Placeholder untuk ikon. Dalam aplikasi nyata, ini akan menjadi komponen ikon SVG/Font Awesome */}
        <span className="text-3xl font-bold text-white">{iconPlaceholder}</span>
      </div>
      {/* Nama skill */}
      <p className="text-white text-lg font-medium">{name}</p>
    </div>
  );
}
