import React from "react";
import Menu_bar from "../components/Menu_bar";
import char1 from "../routes/char-img/char-1.png";
import char2 from "../routes/char-img/char-2.png";
import char3 from "../routes/char-img/char-3.png";
import char4 from "../routes/char-img/char-4.png";
import char5 from "../routes/char-img/char-5.png";
import char6 from "../routes/char-img/char-6.png";

// function changeImage() {
//   let imgCnt = Math.round(Math.random() * imgArray.length);
//   const charImg = document.getElementById("char-img");
//   charImg.src = imgArray[imgCnt];
//   setTimeout(changeImage, 1000);
// }

function Character() {
  const imgArray = [char1, char2, char3, char4, char5, char6];
  return (
    <div style={{ marginTop: "65px" }}>
      <div className="fixed-menu">
        <Menu_bar />
      </div>
      <div>
        <img src={imgArray[Math.round(Math.random() * imgArray.length)]}></img>
        <div>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Character;
