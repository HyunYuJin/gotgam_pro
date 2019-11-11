<template>
  <div class="orgininfo_wrap">
      <div class="orgininfo_inner_wrap">
          <!-- .city_name_wrap -->
          <div class="city_name_wrap">
              <h3>{{region_info.name}}</h3>
              <hr>
          </div>
          <!-- .city_name_wrap end -->

          <!-- .city_info_wrap -->
          <div class="city_info_wrap">
              <!-- .city_info_inner_wrap -->
              <div class="city_info_inner_wrap">
                <!-- .slogan -->
                <div class="slogan">
                    I SEOUL U
                </div>
                <!-- .slogan end -->

                <!-- .city_history -->
                <div class="city_history">
                    <p>{{region_info.content_title}}</p>
                    <p>
                        {{region_info.content}}
                    </p>
                </div>
                <!-- .city_history end -->

                <!-- .symbolMark -->
                <div class="symbolMark"></div>
              </div>
              <!-- .city_info_inner_wrap end -->

              <!-- .city_info_table_wrap -->
              <div class="city_info_table_wrap">
                  <table class="table table-borderless">
                    <tbody>
                        <tr>
                            <td style="width: 5%;"></td>
                            <td style="width: 20%;">위치</td>
                            <td style="width: 75%;">
                                <p>경기도 중부에 있는 특별시</p>
                                <p>
                                    <span>행정구역: </span>
                                    <span>종로구 · 중구 · 용산구 · 성동구 · 광진구 · 동대문구 · 중랑구 ·
                                    성북구 · 강북구 · 도봉구 · 노원구 · 은평구 · 서대문구 · 마포구 · 양천구 ·
                                    강서구 · 구로구 · 금천구 · 영등포구 · 동작구 · 관악구 · 서초구 · 강남구 ·
                                    송파구 · 강동구</span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>면적</td>
                            <td colspan="2">
                                <p>
                                    <span>605.2</span>
                                    <span> ㎢</span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>행정관청 소재지</td>
                            <td colspan="2">서울특별시청 04524 서울특별시 중구 세종대로 110</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>꽃</td>
                            <td colspan="2">
                                <dl>
                                    <dt>시의 꽃 '개나리'</dt>
                                
                                    <dd>서울특별시는 1971년 4월 3일 서울을 상징하는 꽃으로 개나리를 선정하였다.</dd>
                                    <dd>개나리는 서울의 기후와 풍토에 가장 적합한 꽃으로, 이른 봄 일제히 꽃이피며 서울시민의 협동정신을 표현한다.</dd>
                                </dl>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>나무</td>
                            <td colspan="2">
                                <dl>
                                    <dt>시의 나무 ‘은행나무’</dt>
                                    <dd>은행나무는 아름다울 뿐만 아니라 도시 공해와 병충해에 강해 수명이 긴 나무로 꼽힌다. </dd>
                                    <dd>서울특별시는 1971년 4월 3일 서울을 상징하는 나무로 은행나무를 지정하였다. 거목으로 성장하는 은행나무의 특성은 수도 서울의 무한한 발전을 보여준다.</dd>
                                </dl>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>새</td>
                            <td colspan="2">
                                <dl>
                                    <dt>시의 새 ‘까치’</dt>
                                    <dd>까치는 전래설화에서 사랑의 다리를 놓아주거나 좋은 소식을 전해주는 길조로 등장하며 많은 사랑을 받아왔다.</dd>
                                    <dd>까치는 1964년 나라새뽑기 공모에서 압도적 다수로 나라새에 뽑히기도 했다.</dd>
                                </dl>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>홈페이지</td>
                            <td colspan="2">
                                <a href="https://www.seoul.go.kr">https://www.seoul.go.kr</a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>인구(명)</td>
                            <td colspan="2">
                                <p>
                                    <span>977.6만</span>
                                    <span> 명</span>
                                </p>
                            </td>
                        </tr>
                    </tbody>
                  </table>
              </div>
              <!-- .city_info_table_wrap end -->
          </div>
          <!-- .city_info_wrap end -->
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            region_info : '',
            lists: [],
            //list: [{ url: "남산타워" }, { url: "광화문" }, { url: "url3" }]
        };
    },

    created () {
        var id = '';
        if(this.$store.getters.regionId[0] == undefined){
        console.log('und');
        // 지정한 지역정보가 없을 때
        // 1번 서울을 기본값으로 가져옴
        id = 1;
        }else{
        console.log(this.$store.getters.regionId[0]);
        id = this.$store.getters.regionId[0];
        }
        this.$http.get(`/api/region/` + id)
        .then((res) => {
        this.region_info = res.data;
        // console.log(res.data);
        // this.lists = res.data;
        });
    },
}
</script>

<style>
.orgininfo_wrap {
    padding: 3.4rem 0;
    position: relative;
}

.orgininfo_inner_wrap {
    position: relative; 
}

.slogan {
    font-style: italic;
    font-size: 1.2rem;
}

.city_history {
    font-size: 1.05rem;
    width: 45rem;
}

.city_history p:nth-of-type(1) {
    margin-bottom: 0;
    margin: 1.3rem 0 0.5rem;
    font-size: 1.15rem;
    font-weight: bold;
}

.symbolMark {
    display: inline-block;
    width: 20rem;
    height: 20rem;
    background: url(../assets/seoul.jpg) center center no-repeat;
    background-size: contain;
    background-color: #fff;
    border: 1px solid #ddd;
    position: absolute;
    top: 0;
    right: 1rem;
    transform: rotate(8deg);
    box-shadow: 0px 0px 20px -5px rgba(41, 41, 41, 0.6);
}

.city_info_table_wrap {
    margin: 3.4rem 0; 
}

table {
    border-collapse:separate; 
    border-spacing: 0 3rem;
    color: #0c0503 !important;
}
table td {
    padding: 0.1rem 1.2rem 0.5rem !important;
    font-size: 1.1rem;
}

table tr {
    margin-top: 2rem;
}

table td:nth-of-type(2) {
    border-right: 3px solid #0c0503;
    text-align: right;
    font-size: 1.3rem;
    font-weight: bold;
}
</style>