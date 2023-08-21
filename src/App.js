import React, { useState } from 'react';
import Header from './Header';
import Feed from './Feed';
import Board from './Board';
import Information from './Information';
import Comment from './Comment';
import KaKaoMap from './KaKaoMap';
import classNames from 'classnames';
import './asset/scss/App.scss';

  /* Feed List */
  const feedList = [
    {
      id: 'feed1',
      img : "invitation",
      title : "Invitation",
      subTitle: "초대합니다",
      imgList : [ 'wedding_pic.png' ],
      description: '유진이와 지혜의 결혼식을 초대합니다. <br> 오셔서 많이 축하해주세요.'
    },
    {
      id:'feed2',
      img : "invitation2",
      title : "Wedding day",
      subTitle: "유진 & 지혜 ",
      imgList : [ 'wedding_pic2.png'],
      description: `
          <div class='wedding-day-text'>
            <div class='top'>
              <h3>2023년 10월 7일 오후6시</h3>
              <strong>정정철 , 고현정의 장남 유진</strong><br>
              <strong><span>故 </span>김상철 , 박선원 장념 지혜</strong><br>
            </div>
          </div>
      `
    },
  ]

  /* Gallery  */
  const galleryList = {
    id:'feed3',
    img : "invitation2",
    title : "Gallery",
    subTitle: "신랑 신부 사진",
    imgList : [ 'wedding_pic.png', 'wedding_pic2.png', 'wedding_pic.png' /*'KakaoTalk_20221115_160916141.jpg'*/  ],
    description: '같이 이쁘게 찍은 모습들 - 15세미만 관람불가'
  }


  const location = {    
    img : "location",
    title : "location",
    subTitle: "오시는길",
    imgList : [ 'amor.jpg' ],
    description: `
    위치 : 아모르 하우스<br><br>
    
    지하철 2호선 역삼역 4번 출구로 나와 나오신 방향으로 직진, <br>
    한국지식재산센터와 강남N타워 사이 골목으로 우회전,  <br>
    정면방향으로 200m 직진하시면 됩니다. 
    <br> <br>
    주차(하객 2시간 무료)`,     
  }
 /* Address */
 const addressInfo =[
  {
      id : "info #1",
      title: "도로명 주소", 
      description: "서울 강남구 테헤란로13길 33"
  },
  {
      id : "info #2",
      title: "지번 주소", 
      description: "서울 강남구 역삼동 633-31"
  }
];

  const comment = {    
    img : "letter",
    title : "Comment",
    subTitle: "축하의 메시지",
    imgList : [ 'wedding_pic.png' ],
    description: "저희를 응원하는 축하의 메시지 많이 많이 남겨주세용!", 
    
  }

   /* Bank */
const moneyGift = 
{
  id: 'feed4',
  img : "gift",
  title : "Money gift",
  subTitle: "마음 보내실 분",
  imgList : [ 'moneygift.jpg' ],
  description: '직접 자리에 함께하지 못하지만, <br> 마음 표현하실 분들은 아래로 부탁드립니다.'
}
 const bankInfo =[
  {
      id : "bank #1",
      title: "신랑 최유진 : ", 
      description: "우리은행 33333"
  },
  {
      id : "bank #2",
      title: "신부 김지혜 : ", 
      description: "카카오 12222"
  }
];



function App() {
  const isBrowserDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  let initTheme = isBrowserDarkMode ? 'dark' : 'light';

  const localSettingTheme = localStorage.getItem('theme');
  if (localSettingTheme) {
    initTheme = localSettingTheme;
  } 

  const  [theme, setTheme] = useState(initTheme);  // <div className={`App ${theme}`}></div>
  return (
    <div className={classNames('App', theme)}>     
      <Header theme={theme} setTheme={setTheme}></Header>
      <main className="app-content">
        <Board list={feedList}></Board>
        <Feed img={location.img} title={location.title} 
              subTitle={location.subTitle} imgList={location.imgList} 
              description={location.description}
              key={location.id}></Feed>
        <Information list={addressInfo}/>
        <div className="map-wrap">
          <KaKaoMap x={37.5017532551423} y={127.031559753425}/>
        </div>

        <Feed img={galleryList.img} title={galleryList.title} 
              subTitle={galleryList.subTitle} imgList={galleryList.imgList} 
              description={galleryList.description}
              key={galleryList.id}></Feed>
        
        <Feed img={moneyGift.img} title={moneyGift.title} 
              subTitle={moneyGift.subTitle} imgList={moneyGift.imgList} 
              description={moneyGift.description}
              key={moneyGift.id}></Feed>

        <Information list={bankInfo}/>

        <Feed img={comment.img} title={comment.title} 
              subTitle={comment.subTitle} imgList={comment.imgList} 
              description={comment.description}
              key={comment.id}></Feed>
        <Comment></Comment>

        
        
      </main>
      <footer>
        Made By Jewdri 💜
      </footer>
    </div>
  );
}

export default App;
