import React from "react";
import Menu_bar from "../components/Menu_bar";
import img from "./img/everyone.png";
import img1 from "./img/everyone-1.png";
import img2 from "./img/everyone-2.png";
import img3 from "./img/everyone-3.png";
import img4 from "./img/everyone-4.png";
import img5 from "./img/everyone-5.png";
import img6 from "./img/everyone-6.png";
import img7 from "./img/everyone-7.png";
import img8 from "./img/everyone-8.png";
import img9 from "./img/everyone-9.png";
import img10 from "./img/everyone-10.png";
function Home() {
  return (
    <div style={{ marginTop: "65px" }} className="fixed-menu">
      <Menu_bar />
      <div className="img-box__title">JJANGGU PHOTO</div>
      <div className="img-boxes">
        <div className="img-box">
          <img src={img} />
        </div>
        <div className="img-box">
          <img src={img1} />
        </div>
        <div className="img-box">
          <img src={img2} />
        </div>
        <div className="img-box">
          <img src={img3} />
        </div>
        <div className="img-box">
          <img src={img4} />
        </div>
        <div className="img-box">
          <img src={img5} />
        </div>
        <div className="img-box">
          <img src={img7} />
        </div>
        <div className="img-box">
          <img src={img8} />
        </div>
        <div className="img-box">
          <img src={img9} />
        </div>
        <div className="img-box">
          <img src={img10} />
        </div>
      </div>
    </div>
  );
}

export default Home;
