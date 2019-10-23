<template>
  <div>
    <div class="intro">
      <div class="container6">
        <h1 style="color: aliceblue">곶 감</h1>
        <p style="margin: 20px; color: aliceblue">나 의 발 자 취</p>
      </div>
    </div>

    <div class="timeline">
      <h1 style="text-align: center; margin-top: 30px;">ABOUT US</h1>
      <ul>
        <li>
          <div>
            <time><i class="fas fa-map-marker-alt" style="margin-right: 10px; font-size: xx-large"></i>곶감</time> 곧감과 유사한
            발음에서 비롯된 곶감. 언제든지 떠날 준비가 되어 있는 사람들을 위해 마련한 사이트입니다.
            한 번쯤 가벼운 마음으로 우리의 고장을 둘러보러 걸음을 옮겨보는 것은 어떨까요?
          </div>
        </li>
        <li>
          <div>
            <time><i class="fas fa-spa" style="margin-right: 10px; font-size: xx-large"></i>문화</time> 문화를 재발견 하는 일은 곶감이
            가장 잘하는 일입니다.
            곶감은 여러분의 가까이에 국내 여행지를 중점으로 우리 고유 문화를 알리기 위해 있습니다. 소중한 우리의 문화를 널리 알리기 위해 그 중심에 곶감이 있겠습니다.
          </div>
        </li>
        <li>
          <div>
            <time><i class="fas fa-lightbulb" style="margin-right: 10px; font-size: xx-large"></i>편의</time> 기존의 방향대로 많은
            사람들을 위해 편의를 가치로 둡니다.
            어려운 여행지의 선택에도 망설임 없이 곶감과 함께 뛰어들어보세요.
          </div>
        </li>
        <li>
          <div>
            <time><i class="fas fa-heart" style="margin-right: 10px; font-size: xx-large"></i>감정</time>여러분이 여행을 다니며 느낀
            감정을 함께 공유해주세요. 때로는 혼자서 때로는 많은 이들과 같이 여러분의 걸음이 헛되지 않도록 곶감이 함께 하겠습니다.
          </div>
        </li>
      </ul>
    </div>

    <h1 style="text-align: center; margin-top: 100px; margin-bottom: -150px;">CONTACT</h1>
    <div class="cont" style="margin-bottom: -200px">
      <b-container class="contentWrap_about">
        <b-card>
          <div class="content">
            <h2>Hyun</h2>
            <p>Web Designer</p>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-google-plus-g"></i></a>
          </div>
        </b-card>
        <b-card>
          <div class="content">
            <h2>Jung</h2>
            <p>Web Designer</p>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-google-plus-g"></i></a>
          </div>
        </b-card>
        <b-card>
          <div class="content">
            <h2>Lee</h2>
            <p>Web Designer</p>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-google-plus-g"></i></a>
          </div>
        </b-card>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.intro { 
  background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(255, 90, 89, 0.7)), url("https://picsum.photos/g/3000/2000");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding: 100px 0;
}

.container6 {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
}


/* TIMELINE
–––––––––––––––––––––––––––––––––––––––––––––––––– */

.timeline ul {
  background: white;
  padding: 50px 0;
}

.timeline ul li {
  list-style-type: none;
  position: relative;
  width: 6px;
  margin: 0 auto;
  padding-top: 50px;
  background: black;
    color: aliceblue;
}

.timeline ul li::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: inherit;
}

.timeline ul li div {
  position: relative;
  bottom: 0;
  width: 400px;
  padding: 15px;
  background: #F45B69;
}

.timeline ul li div::before {
  content: '';
  position: absolute;
  bottom: 7px;
  width: 0;
  height: 0;
  border-style: solid;
}

.timeline ul li:nth-child(odd) div {
  left: 45px;
}

.timeline ul li:nth-child(odd) div::before {
  left: -15px;
  border-width: 8px 16px 8px 0;
  border-color: transparent #F45B69 transparent transparent;
}

.timeline ul li:nth-child(even) div {
  left: -439px;
}

.timeline ul li:nth-child(even) div::before {
  right: -15px;
  border-width: 8px 0 8px 16px;
  border-color: transparent transparent transparent #F45B69;
}

time {
  display: block;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 8px;
}


/* EFFECTS
–––––––––––––––––––––––––––––––––––––––––––––––––– */

.timeline ul li::after {
  transition: background .5s ease-in-out;
}

.timeline ul li.in-view::after {
  background: #F45B69;
}

.timeline ul li div {
  visibility: hidden;
  opacity: 0;
  transition: all .5s ease-in-out;
}

.timeline ul li:nth-child(odd) div {
  transform: translate3d(200px, 0, 0);
}

.timeline ul li:nth-child(even) div {
  transform: translate3d(-200px, 0, 0);
}

.timeline ul li.in-view div {
  transform: none;
  visibility: visible;
  opacity: 1;
}

/* card introduct
--------------------------------*/

.cont{
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    
}

.contentWrap_about{
    max-width: 1000px;
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    transition: 0.5s;
}

.contentWrap_about .card{
    position:relative;
    width: 250px;
    height: 300px;
    background: #F45B69;
    color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    margin-left: 30px;
}

.contentWrap_about .card .content{
    text-align: center;
    z-index: 2;
    padding: 0 20px;
    transition: 0.5s;
}

.contentWrap_about .card .content h2{
    font-size: 3em;
}

.contentWrap_about .card .content p{
    font-size: 0.9em;
}

.contentWrap_about .card .content a{
    display: inline-block;
    margin-top: 15px;
    padding: 5px 10px;
    background: black;
    color: aliceblue;
    text-decoration: none;
}

.contentWrap_about .card .content a:hover{
    background: #fff;
  box-shadow: 0px 2px 10px 5px #F45B69;
  color: #000;
}

/* GENERAL MEDIA QUERIES
–––––––––––––––––––––––––––––––––––––––––––––––––– */

@media screen and (max-width: 900px) {
  .timeline ul li div {
    width: 250px;
  }
  .timeline ul li:nth-child(even) div {
    left: -289px;
    /*250+45-6*/
  }
}

@media screen and (max-width: 600px) {
  .timeline ul li {
    margin-left: 20px;
  }
  .timeline ul li div {
    width: calc(100vw - 91px);
  }
  .timeline ul li:nth-child(even) div {
    left: 45px;
  }
  .timeline ul li:nth-child(even) div::before {
    left: -15px;
    border-width: 8px 16px 8px 0;
    border-color: transparent #F45B69 transparent transparent;
  }
}
</style>