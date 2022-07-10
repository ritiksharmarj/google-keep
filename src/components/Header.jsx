import React from "react";

function Header() {
  const logo = (
    <img
      id="logo"
      src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
      alt="logo"
    />
  );

  return (
    <div className="header">
      <div className="container">
        <div className="header-elements">
          {logo}
          <span>Keep</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
