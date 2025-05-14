import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";

export default function Siparisler() {
  const [activeTab, setActiveTab] = useState("Tüm");

  const tabs = [
    "Tüm İşlem Görmemiş Siparişler",
    "Onay Bekleyen Siparişler",
    "Onaylanan Siparişler",
    "Kargolanan Siparişler",
    "İptal Siparişler",
    "Fatura Listesi",
  ];

  return (
    <div className="p-6 bg-[#f9fbff] min-h-screen">
      {/* Başlık */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">
          Tüm İşlem Görmemiş Siparişler<span className="text-sm text-gray-500"> (0 adet)</span>
        </h1>
        <button className="px-4 py-2 border rounded text-sm text-gray-600 hover:bg-gray-100">
          📤 Toplu Fatura Listesine Aktar
        </button>
      </div>

      {/* Sekmeler */}
      <div className="flex flex-wrap gap-6 text-sm border-b mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 transition font-medium ${
              activeTab === tab ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600 hover:text-blue-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Filtre Alanı */}
      <div className="bg-white p-4 rounded shadow-sm mb-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <select className="border px-3 py-2 rounded text-sm text-gray-700">
            <option>Tüm Platformlar</option>
          </select>
          <input
            type="text"
            placeholder="Müşteri Adı"
            className="border px-3 py-2 rounded text-sm text-gray-700"
          />
          <input
            type="text"
            placeholder="Sipariş Numarası"
            className="border px-3 py-2 rounded text-sm text-gray-700"
          />
          <select className="border px-3 py-2 rounded text-sm text-gray-700">
            <option>Tüm Durumlar</option>
          </select>
        </div>

        {/* Alt Filtre */}
        <div className="flex items-center justify-between mt-4">
          <div className="text-blue-600 text-sm cursor-pointer flex items-center gap-1">
            <span>Detaylı Filtrele</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.293l3.71-4.06a.75.75 0 1 1 1.12 1L10.53 13a.75.75 0 0 1-1.06 0L5.21 8.23a.75.75 0 0 1 .02-1.02z" />
            </svg>
          </div>
          <div className="flex gap-2">
            <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded flex items-center gap-1">
              <FiSearch /> FİLTRELE
            </button>
            <button className="text-blue-600 text-sm flex items-center gap-1">
              <FiX /> Filtreyi Temizle
            </button>
          </div>
        </div>
      </div>

      {/* Tablo Başlıkları */}
      <div className="grid grid-cols-6 bg-[#eff4fc] p-3 text-sm font-medium text-gray-700 rounded-t">
        <div>
          <input type="checkbox" />
        </div>
        <div>Pazaryeri</div>
        <div>Müşteri ve Fatura Tarihi</div>
        <div>Sipariş No ve Tutarı</div>
        <div>Durum</div>
        <div>İşlem</div>
      </div>
    </div>
  );
}
