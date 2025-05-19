import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className=" flex justify-between items-center h-14 md:h-16">
          <div>
            <div className=" uppercase text-sm md:text-[16px] font-bold tracking-tighter">Transmissions</div>
          </div>
          <div className=" flex items-center gap-2">
            <button className=" uppercase text-sm md:text-[16px] font-bold tracking-tighter">Menu</button>
            <div className=" bg-black w-2.5 h-2.5 rounded-full"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
