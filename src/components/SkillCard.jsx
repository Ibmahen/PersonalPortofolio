import React from "react";

export default function SkillCard({ name, iconPlaceholder, iconBgGradient }) {
  return (
    <div className="flex border-gray-900 flex-col p-4 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:border-[#FFCC00] hover:border-2 hover:bg-gray-700 ease-in-out">
      <div
        className={`w-full h-32 rounded-full flex items-center justify-center mb-3 ${iconBgGradient}`}
      >
        {iconPlaceholder ? (
          <img src={iconPlaceholder} alt={name} className="w-16 h-16 object-contain" />
        ) : (
          <span className="text-3xl font-bold text-white">{name[0]}</span>
        )}
      </div>
    </div>
  );
}