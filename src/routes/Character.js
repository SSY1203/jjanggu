import React, { useEffect, useState } from "react";
import Menu_bar from "../components/Menu_bar";

function Character() {
  let src = "img\\jjanggu\\char-1.png";
  const repeatCharacter = () => {
    setInterval(() => {
      let imgNum = Math.round(Math.random() * 5);
      document.getElementById("char-img").src =
        "img\\jjanggu\\char-" + (imgNum + 1) + ".png";
    }, 3000);
  };

  useEffect(() => {
    repeatCharacter();
  }, []);
  return (
    <div style={{ marginTop: "65px" }}>
      <div className="fixed-menu">
        <Menu_bar />
      </div>
      <div className="char-box">
        <div className="char-info">
          <img id="char-img"></img>
          <div className="char-text">
            <div className="char-title">
              <span>Name : 짱구</span>
              <span>(5살)</span>
            </div>
            <div className="char-feature">
              <span className="feature-title">Family</span>
              <span className="feature-text">
                신형만(부), 봉미선(모), 신짱아, 흰둥이
              </span>
              <span className="feature-title">Belong</span>
              <span className="feature-text">
                떡잎 유치원 해바라기반 / 떡잎마을 방범대
              </span>
              <span className="feature-title">Fav</span>
              <span className="feature-text">
                예쁜 누나들, 이슬이 누나, 액션가면, 건담 로봇, 초코비 ...
              </span>
              <span className="feature-title">Hate</span>
              <span className="feature-text">
                피망, 잔소리, 아빠 발냄새, 리얼 소꿉놀이...
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* 짱구 */}
      <div className="char-box">
        <div className="char-info">
          <img className="char-img__etc" src="img\\mom.png"></img>
          <div className="char-text">
            <div className="char-title">
              <span>Name : 봉미선</span>
              <span>(29살)</span>
            </div>
            <div className="char-feature">
              <span className="feature-title">Family</span>
              <span className="feature-text">
                신형만(배우자), 신짱구, 신짱아, 흰둥이
              </span>
              <span className="feature-title">Nickname</span>
              <span className="feature-text">
                삼겹살 배 아줌마, 구두쇠 아줌마, 짠순이...
              </span>
              <span className="feature-title">Fav</span>
              <span className="feature-text">
                미남, 공짜, 세일, 최고급 명품, 낮잠 ...
              </span>
              <span className="feature-title">Hate</span>
              <span className="feature-text">
                삼겹살 배, 신형만이 미녀에게 관심 갖는 것, 신형만이 비상금
                숨기는 것 ...
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* 봉미선 */}
      <div className="char-box">
        <div className="char-info">
          <img className="char-img__etc" src="img\\dad.png"></img>
          <div className="char-text">
            <div className="char-title">
              <span>Name : 신형만</span>
              <span>(35살)</span>
            </div>
            <div className="char-feature">
              <span className="feature-title">Family</span>
              <span className="feature-text">
                봉미선(배우자), 신짱구, 신짱아, 흰둥이
              </span>
              <span className="feature-title">Nickname</span>
              <span className="feature-text">썩은발 영감, 발냄새 과장 ...</span>
              <span className="feature-title">Fav</span>
              <span className="feature-text">
                낮잠 자기, 쉬는 날 빈둥거리기, 골프, 미녀, 맥주 ...
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* 신형만 */}
      <div className="char-box">
        <div className="char-info">
          <img className="char-img__etc" src="img\\sister.png"></img>
          <div className="char-text">
            <div className="char-title">
              <span>Name : 신짱아</span>
              <span>(1살)</span>
            </div>
            <div className="char-feature">
              <span className="feature-title">Family</span>
              <span className="feature-text">
                신형만(부), 봉미선(모), 신짱아, 흰둥이
              </span>
              <span className="feature-title">Feature</span>
              <span className="feature-text">
                울음 공격, 미남이나 반짝이는 것에 눈독들이기, 짱구 간식 몰래
                훔쳐먹기, 박치기 ...
              </span>
              <span className="feature-title">Fav</span>
              <span className="feature-text">
                미남, 반짝이는 것, 분유, 화장품, 푸딩, 액션가면, 오빠 엉덩이
                춤...
              </span>
              <span className="feature-title">Hate</span>
              <span className="feature-text">
                신형만과 짱구가 미녀 앞에서 오버하는 것, 물건 빼앗기, 미남과
                떨어지는 것 ...
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* 신짱아 */}
      <div className="char-box">
        <div className="char-info">
          <img className="char-img__etc" src="img\\puppy.png"></img>
          <div className="char-text">
            <div className="char-title">
              <span>Name : 흰둥이</span>
              <span>(불명확)</span>
            </div>
            <div className="char-feature">
              <span className="feature-title">Family</span>
              <span className="feature-text">
                신형만(부), 봉미선(모), 신짱구, 신짱아
              </span>
              <span className="feature-title">Feature</span>
              <span className="feature-text">
                솜사탕 변신, 배꼽 긁기, 훌라 댄스 ...
              </span>
              <span className="feature-title">Fav</span>
              <span className="feature-text">
                산책, 예쁜 암컷 강아지, 가족 ...
              </span>
              <span className="feature-title">Hate</span>
              <span className="feature-text">
                동물 병원, 주사, 약, 벌레, 짱구가 괴롭히는 것 ...
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* 흰둥이 */}
      <div className="char-box">
        <div className="char-info">
          <img className="char-img__etc" src="img\\chulsu.png"></img>
          <div className="char-text">
            <div className="char-title">
              <span>Name : 김철수</span>
              <span>(5살)</span>
            </div>
            <div className="char-feature">
              <span className="feature-title">Belong</span>
              <span className="feature-text">
                떡잎 유치원 해바라기반 / 떡잎 마을 방범대
              </span>
              <span className="feature-title">Feature</span>
              <span className="feature-text">
                만화 몰래 보기, 잘난 척 하기, 짱구 잔소리하기, 마마보이 ...
              </span>
              <span className="feature-title">Fav</span>
              <span className="feature-text">
                마법소녀 프린세스, 엄마, 신짱아 ...
              </span>
              <span className="feature-title">Hate</span>
              <span className="feature-text">
                귀에 바람 부는 것, 자신의 비밀이 들통나느 것, 짱구의 나쁜짓 ...
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* 철수 */}
      <div className="char-box">
        <div className="char-info">
          <img className="char-img__etc" src="img\\yuri.png"></img>
          <div className="char-text">
            <div className="char-title">
              <span>Name : 한유리</span>
              <span>(5살)</span>
            </div>
            <div className="char-feature">
              <span className="feature-title">Belong</span>
              <span className="feature-text">
                떡잎 유치원 해바라기반 / 떡잎 마을 방범대
              </span>
              <span className="feature-title">Feature</span>
              <span className="feature-text">
                토끼 인형 구타하기, 연애 코치하기, 소꿉놀이 요구하기, 자기
                멋대로 하기, 이기주의 ...
              </span>
              <span className="feature-title">Fav</span>
              <span className="feature-text">
                리얼 소꿉놀이, 친구들, 토끼 인형 구타, 스테이크, 미남 ...
              </span>
              <span className="feature-title">Hate</span>
              <span className="feature-text">
                엄마의 난폭한 행동, 리얼 소꿉놀이 안해주는 것, 까마귀 ...
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* 유리 */}
      <div className="char-box">
        <div className="char-info">
          <img className="char-img__etc" src="img\\manggu.png"></img>
          <div className="char-text">
            <div className="char-title">
              <span>Name : 맹구</span>
              <span>(5살)</span>
            </div>
            <div className="char-feature">
              <span className="feature-title">Belong</span>
              <span className="feature-text">
                떡잎 유치원 해바라기반 / 떡잎 마을 방범대
              </span>
              <span className="feature-title">Feature</span>
              <span className="feature-text">
                콧물 개인기, 콧물 공격, 돌 줍기 ...
              </span>
              <span className="feature-title">Fav</span>
              <span className="feature-text">
                특이한 모양의 돌 수집하기, 곤충, 친구들 ...
              </span>
              <span className="feature-title">Hate</span>
              <span className="feature-text">
                돌이나 콧물 비하 발언, 주운 돌이 별거 아닐 때, 리얼 소꿉놀이 ...
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* 맹구 */}
      <div className="char-box">
        <div className="char-info">
          <img className="char-img__etc" src="img\\hoone.png"></img>
          <div className="char-text">
            <div className="char-title">
              <span>Name : 이훈이</span>
              <span>(5살)</span>
            </div>
            <div className="char-feature">
              <span className="feature-title">Belong</span>
              <span className="feature-text">
                떡잎 유치원 해바라기반 / 떡잎 마을 방범대
              </span>
              <span className="feature-title">Nickname</span>
              <span className="feature-text">주먹밥 머리, 훈발놈...</span>
              <span className="feature-title">Fav</span>
              <span className="feature-text">
                친구들, 수지, 액션가면, 만두 ...
              </span>
              <span className="feature-title">Hate</span>
              <span className="feature-text">
                유리가 화내는 것, 리얼 소꿉놀이, 소심하다 놀림 받는 것, 수지가
                관심 주지 않는 것 ...
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* 훈이 */}
      <div className="char-box">
        <div className="char-info">
          <img className="char-img__etc" src="img\\suzy.png"></img>
          <div className="char-text">
            <div className="char-title">
              <span>Name : 한수지</span>
              <span>(5살)</span>
            </div>
            <div className="char-feature">
              <span className="feature-title">Belong</span>
              <span className="feature-text">
                떡잎 유치원 해바라기반 / 떡잎 마을 방범대 예비 멤버
              </span>
              <span className="feature-title">Fav</span>
              <span className="feature-text">짱구, 젤리, 영화 감상 ...</span>
              <span className="feature-title">Hate</span>
              <span className="feature-text">
                훈이가 귀찮게 하는 것, 레슨, 벌레, 짱구가 관심 없어하는 것 ...
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* 수지 */}
    </div>
  );
}

export default Character;
