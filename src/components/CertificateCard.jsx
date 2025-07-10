import React from "react";

export default function CertificateCard({ title, date, issuer, link, image }) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 flex flex-col shadow-lg h-full">
      <div className="mb-4 w-full flex-1 flex items-center justify-center">
        {image && !image.endsWith(".pdf") ? (
          <a
            href={link || image}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-56 object-cover rounded mb-2 transition-transform duration-200 hover:scale-105"
            />
          </a>
        ) : (
          image && image.endsWith(".pdf") && (
            <a
              href={image}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FFCC00] text-black font-semibold px-4 py-2 rounded mb-2"
            >
              Lihat Sertifikat
            </a>
          )
        )}
      </div>
      <div className="flex-0 flex flex-col items-center">
        <h3 className="text-xl font-bold text-white mb-1 text-center">
          {title}
        </h3>
        {issuer && <p className="text-gray-400 mb-1 text-center">{issuer}</p>}
        <p className="text-gray-400 mb-3 text-center">{date}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 font-semibold transition-colors duration-200 hover:text-[#FFCC00]"
          >
            Lihat Halaman Sertifikat
          </a>
        )}
      </div>
    </div>
  );
}
