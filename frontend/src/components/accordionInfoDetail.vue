<template>
  <div>
    <!-- accordion_info_detail -->
    <div class="accordion_info_detail">
        <AccordionInfoDetailTitle></AccordionInfoDetailTitle>

        <b-list-group>
          <b-list-group-item href="#" active>
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">교통수단</h5>
            </div>
            <p class="mb-1">
              <ul>
                <li>
                  <dl>
                    <dt>출발지: 신나무실 아파트</dt>
                    <dd>3번버스이용 (약 30분 소요)</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>도착지: 광교호수공원입구</dt>
                    <dd>도보 5분</dd>
                  </dl>
                </li>
              </ul>
            </p>
            <small>자가용이 있으면 주차시설이 잘 되어있기 때문에 추천드립니다.</small>
          </b-list-group-item>
          <b-list-group-item href="#">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">맛집</h5>
              <strong class="text-muted">존앤진피자</strong>
            </div>
            <p class="mb-1">광교호수공원 상가 1층</p>
            <small class="text-muted">묻지도 따지지도 말고 수제맥주는 꼭 시켜드세요.</small>
          </b-list-group-item>
          <b-list-group-item href="#">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">위치</h5>
              <small class="text-muted">경기 수원시 영통구 광교호수로 57</small>
            </div>
            <p class="mb-1">지도 넣기</p>
          </b-list-group-item>
          <b-list-group-item href="#foobar" disabled>
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">비용</h5>
              <small class="text-muted">₩23000</small>
            </div>
            <p class="mb-1">
              <ul>
                <li>
                  <dl>
                    <dt>교통비</dt>
                    <dd>₩5000</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>저녁: 존앤진피자</dt>
                    <dd>₩18000</dd>
                  </dl>
                </li>
              </ul>
            </p>
          </b-list-group-item>
        </b-list-group>
    </div>
  </div>
</template>

<script>
  import AccordionInfoDetailTitle from './accordionInfoDetailTitle.vue';
  export default {
    components: {
      AccordionInfoDetailTitle
    }
  }
</script>

<style>
  .accordion_info_detail {
    margin-top: 20px;
  }

  .list-group-item.active {
    background: #25333c;
    border-color: #25333c;
  }
</style>