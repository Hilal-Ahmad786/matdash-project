import React from "react";


import {
    FiHome,
    FiPlusCircle,
    FiShoppingCart,
    FiFileText,
    FiDownload,
    FiLayers,
    FiSend,
    FiPieChart,
    FiSettings,
    FiGrid,
  } from "react-icons/fi";
  import { useState } from "react";
  import { useRouter } from "next/router";
  
  const Sidebar = () => {
    const router = useRouter();
    const path = router.pathname;
  
    return (
      <div className="fixed top-0 left-0 h-screen bg-white border-r shadow-sm group transition-all z-50">
        <div className="flex flex-col h-full w-16 group-hover:w-64 transition-all duration-300 relative">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 border-b px-4">
            <p>Logo</p>
            <span className="ml-2 font-bold text-lg hidden group-hover:block">Demo</span>
          </div>
  
          {/* Menü Başlığı */}
          <div className="text-gray-400 uppercase text-xs font-semibold mt-6 px-4 hidden group-hover:block">
            İşlem Menüsü
          </div>
  
          {/* Menü */}
          <nav className="flex-1 mt-2 px-1">
            <SidebarItem icon={<FiPlusCircle />} label="Ekle" />
            <SidebarItem icon={<FiHome />} label="Yönetim Paneli" />
            <SidebarItem
              icon={<FiShoppingCart />}
              label="Siparişler"
              active={path === "/siparisler"}
              onClick={() => router.push("/siparisler")}
            />
            <SidebarDropdown icon={<FiFileText />} label="Faturalar" items={["Fatura Listesi", "Fatura Ayarları"]} />
            <SidebarItem
              icon={<FiDownload />}
              label="İade Yönetimi"
              active={path === "/iade-yonetimi"}
              onClick={() => router.push("/iade-yonetimi")}
            />
            <SidebarDropdown icon={<FiLayers />} label="Ürünler" items={["Ürün Listesi", "Yeni Ürün"]} />
            <SidebarDropdown icon={<FiSend />} label="Toplu İşlemler" items={["CSV Aktarım", "Yığın Güncelleme"]} />
            <SidebarDropdown icon={<FiPieChart />} label="Raporlar" items={["Satış Raporları", "Stok Raporları"]} />
            <SidebarDropdown icon={<FiSettings />} label="Ayarlar" items={["Genel", "Kullanıcılar"]} />
            <SidebarItem icon={<FiGrid />} label="Uygulamalar" />
          </nav>
        </div>
      </div>
    );
  };
  
  const SidebarItem = ({
    icon,
    label,
    onClick,
    active = false,
  }: {
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
    active?: boolean;
  }) => (
    <div
      onClick={onClick}
      className={`flex items-center p-3 cursor-pointer rounded-md transition-all ${
        active
          ? "bg-blue-50 text-blue-600 font-semibold"
          : "text-gray-700 hover:bg-blue-100"
      }`}
    >
      <div className={`text-xl ${active ? "text-blue-600" : ""}`}>{icon}</div>
      <span className="ml-4 hidden group-hover:block text-sm">{label}</span>
    </div>
  );
  
  const SidebarDropdown = ({
    icon,
    label,
    items,
  }: {
    icon: React.ReactNode;
    label: string;
    items: string[];
  }) => {
    const [open, setOpen] = useState(false);
  

    
    return (
      <div className="group w-full">
        <div
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between p-3 text-gray-700 hover:bg-blue-100 cursor-pointer rounded-md transition-all"
        >
          <div className="flex items-center">
            <div className="text-xl">{icon}</div>
            <span className="ml-4 hidden group-hover:block text-sm">{label}</span>
          </div>
          <span
            className={`hidden group-hover:block text-xs transition-transform ${
              open ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </div>
        {open && (
          <div className="ml-12 mt-1 hidden group-hover:block">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="text-gray-600 text-sm py-1 cursor-pointer hover:text-blue-600"
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default Sidebar;
  