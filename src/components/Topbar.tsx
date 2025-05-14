// src/components/Topbar.tsx
import { FiGift, FiBell, FiMail, FiChevronDown } from "react-icons/fi";
import { FaVideo, FaUserPlus, FaUserFriends } from "react-icons/fa";

export default function Topbar() {
  return (
    <div className="flex items-center justify-between h-16 px-6 bg-white shadow-sm border-b w-full">
      
      {/* Sol Menü */}
      <div className="flex items-center gap-6 text-sm text-gray-800">
        <div className="flex items-center gap-2">
          <FaVideo className="text-[#007AFF]" />
          <span>Videolu Eğitim Merkezi</span>
        </div>
        <div className="flex items-center gap-2">
          <FaUserFriends className="text-[#007AFF]" />
          <span>Destek Merkezi</span>
        </div>
        <div className="flex items-center gap-2">
          <FaUserPlus className="text-[#007AFF]" />
          <span>Destek Talebi Oluştur</span>
        </div>
      </div>

      {/* Sağ Menü */}
      <div className="flex items-center gap-4 text-gray-600 text-xl">
        <IconButton icon={<FiGift />} />
        <IconButton icon={<FiBell />} />
        <IconButton icon={<FiMail />} />
        
        {/* Kullanıcı */}
        <div className="flex items-center gap-1 ml-2">
          <div className="w-8 h-8 rounded-full bg-gray-200" />
          <span className="text-sm text-gray-700 font-medium">khan</span>
          <FiChevronDown className="text-sm" />
        </div>
      </div>
    </div>
  );
}

function IconButton({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="bg-[#F1F5FF] p-2 rounded-full hover:bg-[#E1EDFF] transition cursor-pointer">
      <div className="text-[#007AFF] text-lg">{icon}</div>
    </div>
  );
}
