import Menu_bar from "../components/Menu_bar";

function Questions() {
  return (
    <div style={{ marginTop: "65px", width: "100%", height: "100%" }}>
      <div className="fixed-menu">
        <Menu_bar />
      </div>
      <div className="post">
        <h2>Q & A</h2>
        <div className="post-wrap">
          <div className="post-header">
            <div className="post-num">
              <span>No.</span>
            </div>
            <div className="post-title">
              <span>Title</span>
            </div>
            <div className="post-writer-date">
              <span>Writer</span>
              <span>Write Date</span>
            </div>
          </div>
          <div className="post-list-row">
            <div className="post-list__index">
              <span>01</span>
            </div>
            <div className="post-list__title">
              <span>다음 짱구 극장판은 언제 나오나요?</span>
            </div>
            <div className="post-list__writer">
              <span>신짱구</span>
              <span>2022/10/17 13:20:33</span>
            </div>
          </div>
          <div className="post-list-row">
            <div className="post-list__index">
              <span>02</span>
            </div>
            <div className="post-list__title">
              <span>다른 등장인물 섭외</span>
            </div>
            <div className="post-list__writer">
              <span>신짱아</span>
              <span>2022/10/12 08:20:53</span>
            </div>
          </div>
          <div className="post-list-row">
            <div className="post-list__index">
              <span>03</span>
            </div>
            <div className="post-list__title">
              <span>훈발놈은 등장인물에서 빼주시면 안되나요?</span>
            </div>
            <div className="post-list__writer">
              <span>김철수</span>
              <span>2022/10/05 17:43:24</span>
            </div>
          </div>
          <div className="post-list-row">
            <div className="post-list__index">
              <span>04</span>
            </div>
            <div className="post-list__title">
              <span>단체 사진 추가 요청</span>
            </div>
            <div className="post-list__writer">
              <span>맹구</span>
              <span>2022/10/10 15:22:42</span>
            </div>
          </div>
          <div className="post-list-row">
            <div className="post-list__index">
              <span></span>
            </div>
            <div className="post-list__title">
              <span></span>
            </div>
            <div className="post-list__writer">
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="post-list-row">
            <div className="post-list__index">
              <span></span>
            </div>
            <div className="post-list__title">
              <span></span>
            </div>
            <div className="post-list__writer">
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="post-list-row">
            <div className="post-list__index">
              <span></span>
            </div>
            <div className="post-list__title">
              <span></span>
            </div>
            <div className="post-list__writer">
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="post-list-row">
            <div className="post-list__index">
              <span></span>
            </div>
            <div className="post-list__title">
              <span></span>
            </div>
            <div className="post-list__writer">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
