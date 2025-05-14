import { useState } from "react";
import { FiFilter, FiSearch } from "react-icons/fi";
import { HiOutlineInformationCircle } from "react-icons/hi2";

export default function IadeYonetimi() {
  const tabs = [
    "Tümü",
    "Aktif İadeler",
    "Aksiyon Alınacak",
    "İhtilaf",
    "Kabul Edilen",
    "Reddedilen",
    "Servis & Analiz",
    "İptal Edilen",
  ];

  const [activeTab, setActiveTab] = useState("Tümü");

  return (
    <div className="bg-[#f9fbff] min-h-screen p-6">
      {/* Başlık */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-gray-800">
          <span className="text-2xl font-bold">📦 İade Yönetimi</span>
          <HiOutlineInformationCircle className="text-blue-500 w-5 h-5 cursor-pointer" />
        </div>
      </div>

      {/* Sekmeler */}
      <div className="flex gap-2 mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-[#f2f5fc] text-gray-500 hover:text-blue-600"
            }`}
          >
            {activeTab === tab && tab === "Tümü" ? (
              <span className="flex items-center gap-1">
                <FiFilter className="text-white" /> {tab}
              </span>
            ) : (
              tab
            )}
          </button>
        ))}
      </div>

      {/* Filtre Alanı */}
      <div className="bg-white p-4 rounded shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Arama Inputu */}
        <div className="flex-1">
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            TALEP ARAMA
          </label>
          <input
            type="text"
            placeholder="Sipariş numarası, talep numarası, müşteri adı-soyadı veya e-posta"
            className="w-full border px-4 py-2 rounded text-sm text-gray-700"
          />
        </div>

        {/* Filtre Butonları */}
        <div className="flex flex-col items-end justify-center gap-2">
          <button className="bg-blue-600 text-white px-5 py-2 text-sm font-semibold rounded flex items-center gap-1">
            <FiSearch /> FİLTRELE
          </button>
          <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-blue-600">
            <span className="text-blue-500 text-lg">➤</span> Detaylı Filtrele
          </button>
        </div>
      </div>
    </div>
  );
}
