import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShowcaseNav: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="relative flex items-center gap-12 font-bold text-[16px] uppercase tracking-wider">
      {/* Bàn tay chỉ (Mặc định chỉ vào PROJECT cho các trang Showcase) */}
      <div
        className="absolute -top-[110px] h-[160px] w-[350px] pointer-events-none transition-all duration-500 ease-in-out left-1/2 -translate-x-1/2"
        style={{
          transform: 'translateX(-120px)', // Dịch sang phải để chỉ vào PROJECT
        }}
      >
        <div
          className="w-full h-full"
          style={{
            transform: `rotate(60deg) translate(23px, -20px)`,
            transformOrigin: 'center center'
          }}
        >
          <img
            src="/hand.png"
            alt="pointing hand"
            className="w-[210px] h-auto object-contain"
          />
        </div>
      </div>

      <button 
        onClick={() => navigate('/')} 
        className="text-black opacity-40 hover:opacity-100 transition-all cursor-pointer"
      >
        HOME
      </button>
      
      <span className="text-[#0360FF] opacity-100">
        PROJECT
      </span>
      
      <button 
        onClick={() => navigate('/?tab=cv')}
        className="text-black opacity-40 hover:opacity-100 transition-all cursor-pointer"
      >
        MY CV
      </button>
    </nav>
  );
};

export default ShowcaseNav;
