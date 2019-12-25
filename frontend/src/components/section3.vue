<template>
<div class="section3_wrap">
    <div class="section3_inner_wrap">
        <div class="section3_title">
            <h2>Get Ready For A Unique Experience</h2>
        </div>
        <div class="section3_subtitle">
            <p>곶감 에디터들의 특별한 경험을 함께 공유해보아요!</p>
        </div>
        <div class="section3_body">
            <div class="body_container row">
                <div class="body_card col-12 col-lg-4">
                    <div class=" card-custom card-background1"></div>
                    <div class="overlay">&nbsp;</div>
                    <div class="card_text_wrap row">
                        <div class="card_text col-8">
                            <div class="card_author">
                                <p>
                                    <i>Suncheon, Korea</i>
                                    | Jeong Ji Hyurk
                                </p>
                            </div>
                            <div class="card_title2">
                                <h4 class="ct">순천 성벽의 매력</h4>
                            </div>
                        </div>
                        <div class="modal_button col-4">
                            <div>
                                <b-button class="w-100" id="show-btn" @click="showModal">곶감보기</b-button>

                                <b-modal ref="my-modal" hide-footer title="순천">
                                    <div class="d-block">
                                        <p>
                                            2019년 10월경 바쁘게 지내느라 여름휴가도 못가고 몸도 마음도 지쳐있던 찰나 중요한 프로젝트를 마무리하고 필을 받아 차를 끌고 남쪽으로 떠났습니다. <br>
                                            회사에는 일주일 휴가를 내고 기분은 싱숭생숭한 채로 무작정 들른 곳은 순천! <br>
                                            예전에 전국을 유람할 때 잠깐 들렸던 곳인데 많이 변해 있더군요. <br>
                                            처음 방문한 곳은 순천만 습지로 자연 생태공원이었습니다. 드넓은 습지로 희귀한 식물들과 철새들이 즐겨 찾는 곳이죠. <br>
                                            다만 순천에 도착한 시간이 아무래도 늦은 오후다 보니 정원만 구경하고 해가져서 제대로 둘러보지도 못했네요. <br>
                                            내일을 기약하며 인근 맛집을 검색해서 간 곳은 순천 꼬막 맛집! 언제와도 기분 좋은 순천이네요~!
                                        </p>
                                    </div>
                                    <b-button class="mt-3" variant="outline-danger" block @click="hideModal">다른 곶감보기</b-button>
                                </b-modal>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="body_card col-12 col-lg-4">
                    <div class="card-custom card-background2"></div>
                    <div class="overlay">&nbsp;</div>
                    <div class="card_text_wrap row">
                        <div class="card_text col-8">
                            <div class="card_author">
                                <p>
                                    <i>Busan, Korea</i>
                                    | Hyeon Yj Jin
                                </p>
                            </div>
                            <div class="card_title2">
                                <h4 class="ct">부산의 색깔!</h4>
                            </div>
                        </div>
                        <div class="modal_button col-4">
                            <div>
                                <b-button class="w-100" id="show-btn" @click="showModal">곶감보기</b-button>

                                <b-modal ref="my-modal" hide-footer title="부산">
                                    <div class="d-block">
                                        <p>
                                            엉망진창 나홀로 부산여행기 3일차에 접어들었다. <br>
                                            초코바 입에 물고 해운대 시외버스 터미널로 이동! <br>
                                            얼마전 인터넷 서핑을 하다 발견한 대룡마을에 가기 위해서이다. <br>
                                            동해선 광역전철을 타고 일광역에서 내려 마을버시를 타는 방법도 가능할 듯 한데, 운행 시간을 맞추기가 까다로워 보여 시외버스를 이용하기로 했다. <br>
                                            3400원을 내고 명례행 티켓을 구매한 후 시간이 되어 버스에 올라탔더니 총 40분이 소요됐다. <br>
                                            휴가를 내고 평일에 다녀와서 그런지 아무도 없어 모험하는듯한 기분도 들고. <br>
                                            주말에 왔으면 카페나 식당 정도는 열지 않았을까 하는 아쉬운 마음이. <br>
                                            이런 일을 겪게 되는 것이 비수기에 떠나는 여행의 단점이라고 할 수 있겠다.
                                        </p>
                                    </div>
                                    <b-button class="mt-3" variant="outline-danger" block @click="hideModal">다른 곶감보기</b-button>
                                </b-modal>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="body_card col-12 col-lg-4">
                    <div class=" card-custom card-background3"></div>
                    <div class="overlay">&nbsp;</div>
                    <div class="card_text_wrap row">
                        <div class="card_text col-8">
                            <div class="card_author">
                                <p>
                                    <i>Seoul, Korea</i>
                                    | Lee Da Bin
                                </p>
                            </div>
                            <div class="card_title2">
                                <h4 class="ct">Urban Compositions</h4>
                            </div>
                        </div>
                        <div class="modal_button col-4">
                            <div>
                                <b-button class="w-100" id="show-btn" @click="showModal">곶감보기</b-button>

                                <b-modal ref="my-modal" hide-footer title="서울">
                                    <div class="d-block">
                                        <p>
                                            지난주말 경복궁 나들이. 한참만에 다녀 온 것 같다. <br>
                                            가끔은 주말에 이렇게 걷고 싶지만 사람들이 너무 많아서 발 디딜틈이 별로 없었다. <br>
                                            경복궁 입장권은 1인당 3천원. 입구부터 관람객들로 북적거리는데 그 활기가 엄청나다. <br>
                                            기력이 없는 내가 따라갈 수 없을 정도. 경회루, 경복궁에 오면 꼭 들리는 장소인데 가을이다 보니 운치가 더 깊어진 것 같아 그 모습 보는 시간은 좋았다. <br>
                                            사진은 아쉽게도 사람들이 많았던 탓에 제대로 찍지는 못하고 크고 웅장한 은행나무 앞에서 하나 찰칵. <br>
                                            북적거리는 걸 좋아하는 사람이 있다면 주말에 꼭 경복궁에 들렀으면 좋겠다.
                                        </p>
                                    </div>
                                    <b-button class="mt-3" variant="outline-danger" block @click="hideModal">다른 곶감보기</b-button>
                                </b-modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        showModal() {
            this.$refs['my-modal'].show()
        },
        hideModal() {
            this.$refs['my-modal'].hide()
        },

    }
}
</script>

<style scoped>
.section3_wrap {
    padding: 3.4rem 0;
    display: flex;
    flex-direction: column;
}

.section3_inner_wrap {
    width: 100%;
    box-sizing: border-box;
}

.section3_body {
    display: flex;
    flex-wrap: wrap;
    margin: -6px;
}

.body_container {
    width: 100%;
    /* display: flex; */
    border: 6px solid transparent;
    box-sizing: border-box;
}

.body_card {
    /* width: 33.3%; */
    /* position: relative; */
    border: 6px solid transparent;
    height: 300px;
    margin-top: 20px;
    padding: 0;
}

.card-custom {
    display: flex;
    background-size: cover !important;
    background-position: center center !important;
    position: relative;
    width: 100%;
    height: inherit;
    overflow: hidden;
}

.card-background1 {
    background: url(../assets/section3_img1.jpg) no-repeat;

}

.card-background2 {
    background: url(../assets/section3_img2.jpg) no-repeat;

}

.card-background3 {
    background: url(../assets/section3_img3.jpg) no-repeat;

}

.overlay {
    background: linear-gradient(0deg, #000, 2%, transparent 80%);
    width: 100%;
    height: inherit;
    position: absolute;
    top: 0;
    left: 0;
}

.card_text_wrap {
    display: flex;
    width: 100%;
    position: absolute;
    padding: 0 !important;
    justify-content: space-between;
    align-items: center;
    bottom: 1.2rem;
    margin-left: 0 !important;
}

.card_author {
    display: flex;
}

.card_author p {
    font-weight: 400;
    font-size: .75rem;
    line-height: 1.25rem;
    color: #fff;
}

.card_author p i {
    color: #ff4401;
}

.card_title2 {
    display: flex;
    cursor: pointer;
}

.card_title2 .ct {
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.7rem;
    color: #fff;
}

.row {
    margin-left: 0px !important;
    margin-right: 0px !important;

}
</style>
