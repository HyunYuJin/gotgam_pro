<template>
  <div class="mood_intro_wrap">
      <div class="mood_intro_inner">
          <div class="mood_intro">
              <p class="mood_title">ABOUT</p>
              <p class="mood_title">GOTGAM</p>
              <p class="mood_content">
                  곶감은 2019년, 광고성 여행지 추천이 아닌 현지인들이 직접 추천해주어 믿음직한 여행 정보를 제공해줍니다. <br>
                  곶감만의 특별한 기능. <span class="hign">기분별 여행지 추천</span>은 당신의 기분에 따라 적절한 여행지를 추천해줍니다.
              </p>
          </div>

          <div class="mood_icon_wrap">
              <div class="mood_icon1">
                  <div class="mood_card">
                      <div class="m_icon_wrap">
                          <i class="em1 em-angry"></i>
                      </div>
                      <div class="m_intro_wrap">
                          <p>ANGRY</p>
                          <p>
                            다들 삶에 <span class="hign">불만</span>이 있을 때 있잖아요.
                            기분도 풀어줄겸 여행을 떠나고 싶은 당신을 위해 준비했습니다.
                          </p>
                      </div>
                  </div>
                  <div class="mood_card">
                      <div class="m_icon_wrap">
                          <i class="em1 em-expressionless"></i>
                      </div>
                      <div class="m_intro_wrap">
                          <p>EXPRESSIONLESS</p>
                          <p>
                              같은 일상의 반복으로 지치고 아무것도 하기 싫은 <br>
                               <span class="hign">무기력한 상태</span>를 극복하기 위해서
                              여행은 어떨까요? 당신의 무기력함을 해결해주기 위해 이런 힐링여행은 어떨까요?
                          </p>
                      </div>
                  </div>
                  <div class="mood_card">
                      <div class="m_icon_wrap">
                          <i class="em1 em-astonished"></i>
                      </div>
                      <div class="m_intro_wrap">
                          <p>ASTONISHED</p>
                          <p>
                              매일 비슷한 여행은 지겨우시다고요? 마음을 쿵쿵 울리고
                              때로는 스펙타클한 여행을 즐기고 싶으시다고요? <span class="hign">놀라움</span>을 선사할 여행 여기 준비되어 있습니다.
                          </p>
                      </div>
                  </div>
              </div>
              <div class="mood_icon2">
                  <div class="mood_card">
                      <div class="m_icon_wrap">
                          <i class="em1 em-confounded"></i>
                      </div>
                      <div class="m_intro_wrap">
                          <p>CONFOUNDED</p>
                          <p>
                              일이 뜻대로 풀리지 않고 안절부절하고 <span class="hign">혼란스러운</span> 요새,
                              마음의 진정이 필요하지는 않으세요? 곶감과 함께 안정을 찾아봐요!
                          </p>
                      </div>
                  </div>
                  <div class="mood_card">
                      <div class="m_icon_wrap">
                          <i class="em1 em-face_with_raised_eyebrow"></i>
                      </div>
                      <div class="m_intro_wrap">
                          <p>OKEY?</p>
                          <p>
                              무엇이든 좋으시다고요? 그런데 어디를 가야할지 모르는 당신.
                              다른 사람들은 <span class="hign">보통</span> 어느 여행지를 많이가는지 탐색해봐요!
                          </p>
                      </div>
                  </div>
                  <div class="mood_card">
                      <div class="m_icon_wrap">
                          <i class="em1 em-blush"></i>
                      </div>
                      <div class="m_intro_wrap">
                          <p>BLUSH</p>
                          <p>
                              이제는 솔로는 지겹다. 혹은 연인 및 친구들과  <span class="hign">두근거리고 설레이는</span> 여행을 원한다!
                              아니면 부끄러워서 어디론가 도망가고 싶다면 여기는 어때요?
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.mood_intro_wrap {
    width: 100%;
    padding: 3.4rem 0;
    margin: 0 auto;
}

.mood_intro_inner {
    width: 100%;
    margin: 0 auto;
    padding: 2rem 0;
}

.mood_intro_inner p {
    text-align: center;
}

.mood_intro_inner p.mood_title {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 0 !important;
}

.mood_intro_inner p.mood_content {
    width: 80%;
    margin: 0 auto;
    padding: 2rem;
    font-size: 1.2rem;
}

.mood_icon_wrap {
    width: 100%;
    background: rgb(255, 253, 242);
    padding: 3.5rem;
    margin-top: 2rem;
}

.mood_icon1, .mood_icon2 {
    width: 100%;
}

.mood_icon1:after, .mood_icon2:after {
    content: '';
    display: table;
    clear: both;
}

.mood_card {
    width: 33.3%;
    float: left;
}

.mood_card .m_icon_wrap {
    width: 100%;
    text-align: center;
}

.mood_card .m_intro_wrap {
    width: 100%;
    padding: 1.5rem 0.8rem;
}

.mood_card .m_intro_wrap p:nth-of-type(1){
    font-size: 1.2rem;
    font-weight: bold;
}

.hign {
    font-size: 1.1rem;
    font-weight: bold;
    color: red;
}
/* em */
.em1 {
    width: 8rem;
    height: 8rem;
}
.em1.em-angry {
  background: url('../assets/em-angry.png') center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.em1.em-expressionless {
  background: url('../assets/em-expressionless.png') center;
  background-repeat: no-repeat;
  background-size: cover;
}
.em1.em-astonished {
  background: url('../assets/em-astonished.png') center;
  background-repeat: no-repeat;
  background-size: cover;
}
.em1.em-confounded {
  background: url('../assets/em-confounded.png') center;
  background-repeat: no-repeat;
  background-size: cover;
}
.em1.em-face_with_raised_eyebrow {
  background: url('../assets/em-face_with_raised_eyebrow.png') center;
  background-repeat: no-repeat;
  background-size: cover;
}
.em1.em-blush {background: url('../assets/em-blush.png') center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>