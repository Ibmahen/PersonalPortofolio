import CertificateCard from "../components/CertificateCard";
import beCertificate from "../assets/certificate/be.png";
import jsCertificate from "../assets/certificate/js.png";

const certificates = [
  {
    title: "Belajar Back End Pemula dengan JavaScript",
    link: "/files/BE-Certificate.pdf",
    image: beCertificate,
  },
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    link: "files/JS-Sertificate.pdf",
    image: jsCertificate,
  },
];

export default function CertificatePage() {
  return (
    <section
      id="certificates"
      className="min-h-screen flex flex-col md:flex-row bg-[#0a101e] px-6 py-16"
    >
      <div className="container mx-auto px-4 my-10">
        <h2 className="text-5xl font-bold text-[#FFCC00] text-center mb-10">
          Certificates
        </h2>
        {/* REMOVED fixed height 'h-[500px]' to allow dynamic content height */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, i) => (
            <CertificateCard key={i} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
}