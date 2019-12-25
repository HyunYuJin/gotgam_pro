<template>
<div class="wrap2">
    <div class="selectbox_wrap">
        <div class="selectbox_inner_wrap">
            <div class="selectbox_title">
                <span>여행 지역</span>
            </div>
            <div class="selectdiv">
                <form name="form">
                    <select id="make" v-model="make">
                        <option :value="null" disabled selected>지역을 선택하세요</option>
                        <option v-for="option in makes_options" v-bind:value="option.id" v-bind:key="option.id">{{option.text}}</option>
                    </select>
                    <button v-on:click="searchReg">지역 이동</button>
                </form>

            </div>
        </div>
        <hr>
    </div>
    <div class="visualWrap">
        <span class="cover"></span>
        <div class="in">
            <h1>{{"" + region}}</h1>
            <div class="city_time">
                <span class="time">{{ setTime() }}</span>
                <ul>
                    <li class="local_time_wrap">
                        <svg></svg>
                        <span class="localTimeArea">
                            <span class="time"></span>
                        </span>
                    </li>
                </ul>
            </div>

            <div class="key_info">
                <ul>
                    <li class="weather cover">
                        <span class="icon">
                            <span class="fas" :class="setPhase()"></span>
                        </span>
                        <strong>날씨</strong>
                        <p>
                            <span class="weather-value di">{{ temp }}</span>&deg;
                            <span class="weather-format di">{{ format }}</span>
                        </p>
                    </li>
                    <li class="graph cover">
                        <span class="icon">
                            <svg></svg>
                        </span>
                        <strong>기분그래프</strong>
                        <div class="graph_wrap"></div>
                    </li>
                </ul>
                <span class="shadow"></span>
            </div>
        </div>
    </div>
    <div class="container2">
        <!-- <region-tab></region-tab> -->
        <div>
            <tabs :tabs="tabs" :currentTab="currentTab" :wrapper-class="'default-tabs'" :tab-class="'default-tabs__item'" :tab-active-class="'default-tabs__item_active'" :line-class="'default-tabs__active-line'" @onClick="handleClick" />

            <!-- .content7 -->
            <div class="content7">
                <!-- tab1 -->
                <div v-if="currentTab === 'tab1'">

                    <!-- carousel -->
                    <carousel :auto="3000" :watch-items="lists">
                        <carousel-item v-for="item in lists" :key="item.seq">
                            <img v-bind:src="item.reg_date">
                            <p>
                                {{item.seq}} {{item.name}}
                            </p>
                        </carousel-item>
                    </carousel>
                    <!-- carousel end -->

                    <!-- .best_card_wrap -->
                    <div class="best_card_wrap">
                        <div class="best_card_title">
                            <h2>Best 곶감</h2>
                        </div>
                        <div class="best_card_body">
                            <div class="best_card_inner">

                                <div class="card_col_wrap" v-for="(list, idx) in lists" v-bind:key="idx">

                                    <div class="card_col_cell">
                                        <div class="card_inner_cell">
                                            <div class="card_hover_cell">
                                                <div class="card_image1">
                                                    <img v-bind:src="list.reg_date">
                                                </div>
                                                <div class="card_overlay">&nbsp;</div>
                                                <div class="card_content">
                                                    <div class="card_text_wrap2">
                                                        <!-- <img v-bind:src="list.reg_date"> -->
                                                        <div class="card_text_subtitle">
                                                            <p>{{list.user_id}}</p>
                                                        </div>
                                                        <div class="card_text_title">
                                                            <h4>{{list.title}}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <!-- .best_food_wrap -->
                    <div class="best_food_wrap">
                        <!-- .best_food_title -->
                        <div class="best_food_title">
                            <h2>곶감 검증 맛집</h2>
                        </div>
                        <!-- .best_food_title END -->

                        <!-- .best_food_subtitle -->
                        <div class="best_food_subtitle">
                            <p>광고성 추천글이 아닌 현지인들이 직접 추천해주는 곶감 검증 맛집!</p>
                        </div>
                        <!-- .best_food_subtitle END -->

                        <!-- .best_food_body -->
                        <div class="best_food_body">
                            <div class="best_food_inner">

                                <!-- .food_card -->
                                <div class="food_card">
                                    <!-- .food_card_inner -->
                                    <div class="food_card_inner">

                                        <div class="food_image1"></div>

                                        <!-- .food_card_content -->
                                        <div class="food_card_content">
                                            <div class="food_types">
                                                <p><span>서울</span> 마포구 양화로18길 3</p>
                                                <p>일식</p>
                                            </div>

                                            <!-- .food_card_store -->
                                            <div class="food_card_store">
                                                <h4>스시메이진</h4>
                                            </div>
                                            <!-- .food_card_store END -->

                                            <!-- .food_card_foot -->
                                            <div class="food_card_foot">
                                                <!-- .food_card_foot_inner -->
                                                <div class="food_card_foot_inner">
                                                    <!-- .food_card_foot_wrap -->
                                                    <div class="food_card_foot_wrap">
                                                        <p class="store_time">11:30 - 22:00</p>
                                                        <p class="store_tel">02-3144-7072</p>
                                                    </div>
                                                    <!-- .food_card_foot_wrap END -->
                                                </div>
                                                <!-- .food_card_foot_inner END -->
                                            </div>
                                            <!-- .food_card_foot END -->

                                        </div>
                                        <!-- .food_card_content END -->

                                    </div>
                                    <!-- .food_card_inner END -->
                                </div>
                                <!-- .food_card END -->

                            </div>
                        </div>
                        <!-- .best_food_body END -->
                    </div>
                </div>
                <!-- tab1 end -->

                <!-- tab2 -->
                <div v-if="currentTab === 'tab2'">
                    <region-map></region-map>
                </div>
                <!-- tab2 end -->

                <!-- tab3 -->
                <div v-if="currentTab === 'tab3'">
                    <travel-gotgam></travel-gotgam>
                </div>
                <!-- tab3 end -->
            </div>

            <!-- .content7 end -->
        </div>
    </div>
</div>
</template>

<script>
import dataManager from '@/util/data-manager.js';
import Tabs from "vue-tabs-with-active-line";
import {
    Carousel,
    CarouselItem
} from "vue-l-carousel";
import RegionMap from '../components/regionMap.vue';
import TravelGotgam from '../components/travelGotgam.vue';

export default {
    components: {
        Tabs,
        carousel: Carousel,
        "carousel-item": CarouselItem,
        RegionMap,
        TravelGotgam
    },

    data() {
        return {
            temp: 0,
            format: 'C',
            time: new Date(),
            phase: 'fa-adjust',
            region: '',
            make: null,
            model: null,
            attraction: '',
            special: '',
            makes_options: [{
                    text: "서울",
                    id: 1
                },
                {
                    text: "경기",
                    id: 2
                },
                {
                    text: "인천",
                    id: 3
                }
            ],

            tabs: [{
                    title: "홈",
                    value: "tab1"
                },
                {
                    title: "지도 보기",
                    value: "tab2"
                },
                {
                    title: "곶감 여행기",
                    value: "tab3"
                }
            ],
            currentTab: "tab3",

            auto: 3000,
            lists: [],
            list3: []
        }
    },

    created() {
        var id = '';
        if (this.$store.getters.regionId[0] == undefined) {
            console.log('und');
            // 지정한 지역정보가 없을 때
            // 1번 서울을 기본값으로 가져옴
            id = 1;
        } else {
            console.log(this.$store.getters.regionId[0]);
            id = this.$store.getters.regionId[0];
        }
        this.$http.get(`/api/region/` + id)
            .then((res) => {
                //alert(response.data) 
                //dataManager.saveData('REGION_ID', res.data.region_id);
                console.log(res.data);
                this.region = res.data.name;
                this.attraction = res.data.attraction;
                this.special = res.data.special_product;
                //res.data

            })
        this.$http.get(`/api/region/search/region_board/` + id)
            .then((res) => {
                // 홈
                // 보드
                // console.log(res.data);
                this.lists = res.data;
                for (var i = 0; i < this.lists.length; i++) {
                    var bytes, blob;
                    console.log(this.lists[0])
                    if (this.lists[i].picture != null) {
                        bytes = new Uint8Array(this.lists[i].picture.data);
                        blob = new Blob([bytes], {
                            type: 'image/bmp'
                        });
                        console.log(URL.createObjectURL(blob));
                        this.lists[i].reg_date = URL.createObjectURL(blob);
                    }
                }
                console.log(this.lists)
            });

        this.$http.get(`/api/region/search/desc/` + id)
            .then((res) => {
                //alert(response.data) 
                //dataManager.saveData('REGION_ID', res.data.region_id);

                // 홈
                // Best 곶감
                // rate 순서대로 가져오므로 앞에서 3개를 빼서 사용
                console.log(res.data);
                this.lists = res.data;
                for (var i = 0; i < this.lists.length; i++) {
                    var bytes, blob;
                    console.log(this.lists[0])
                    if (this.lists[i].picture != null) {
                        bytes = new Uint8Array(this.lists[i].picture.data);
                        blob = new Blob([bytes], {
                            type: 'image/bmp'
                        });
                        console.log(URL.createObjectURL(blob));
                        this.lists[i].reg_date = URL.createObjectURL(blob);
                    }
                }
                console.log(this.lists)
                for (var i = 0; i < 3; i++) {
                    this.list3[i] = this.lists[i];
                }
                console.log(this.list3);
            });
    },

    methods: {
        searchReg: function () {
            dataManager.saveData('REGION_ID', this.make);
            // this.$http.get(`/api/region/` + this.make)
            //   .then((res) => {
            //     //alert(response.data) 
            //     dataManager.saveData('REGION_ID', res.data.region_id);
            //     //console.log(res.data)

            //   })

            //alert(event);
            //alert(this.make);
            //this.region = 'asd';
            // this.$http.get('/api/region/search',
            //   console.log('지역 검색')
            // )
        },
        // 날씨 기온 function
        setCelsius: function () {
            if (this.format = 'F') {
                this.format = 'C';
                this.temp = (this.temp - 32) * 5 / 9;
            } else {
                this.temp = this.temp;
            }
        },
        setFahrenheit: function () {
            this.format = 'F';
            this.temp = (this.temp * 9 / 5) + 32;
        },

        // 지역 시간
        setTime: function () {
            var timeAtLoad = this.time;
            return timeAtLoad.toLocaleTimeString([], {
                timeZone: 'Asia/Seoul',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            })

        },
        setPhase: function () {
            var timeOfDayUTC = new Date().getUTCHours();
            var timeOfDay = timeOfDayUTC + 8;

            if (timeOfDay > 6 && timeOfDay < 18) {
                return 'fa-sun'
            } else {
                return 'fa-moon'
            }
        },

        getWeather: function () {
            var request = new XMLHttpRequest();
            request.open('GET', 'http://www.bom.gov.au/fwo/IDW60801/IDW60801.95307.json', true);
            request.onload = function () {
                if (request.status >= 200 && request.status < 400) {
                    // Success!
                    var weatherData = JSON.parse(request.responseText);
                    console.log('Data retrieved');
                } else {
                    // We reached our target server, but it returned an error
                    console.log('There was a problem retrieving the data')
                }
            };
            request.onerror = function () {
                // There was a connection error of some sort
                console.log('There was a connection error');
            };
            request.send();
        },

        handleClick(newTab) {
            this.currentTab = newTab;
        }
    }

}
</script>

<style>
.wrap2 {
    width: 100%;
    margin: 0 auto;
    padding: 3.4rem 0;
    box-sizing: border-box;
}

.selectbox_wrap {
    padding: 1rem 4rem;
}

.selectbox_inner_wrap {
    display: flex;
}

hr {
    border: 1px solid #ddd;
}

.selectbox_title {
    display: flex;
    flex-direction: column;
    width: 50%;
}

.selectbox_title span {
    font-size: 2rem;
}

.selectdiv {
    display: flex;
    width: 50%;
}

.selectdiv>form {
    width: 100%;
}

.selectdiv select {
    display: block;
    width: 40%;
    height: 50px;
    float: left;
    padding: 0px 20px;
    font-size: 16px;
    color: #333;
    background-color: #ffffff;
    border: 1px solid #cccccc;
    word-break: normal;
}

.selectdiv button {
    display: block;
    width: 20%;
    height: 50px;
    float: left;
    background-color: #fff;
    border: 1px solid #ccc;
    font-size: 16px;
    border-radius: 5px;
}

.selectdiv>form::after {
    content: '';
    display: table;
    clear: both;
}

.regionSelectWrap,
.citySelectWrap {
    width: 100%;
    box-sizing: border-box;
}

.visualWrap {
    position: relative;
    width: 100%;
    height: 506px;
    background: url(../assets/seoulKey.jpg) center center no-repeat;
    overflow: hidden;
    margin: 3rem 0;
}

.cover {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.5;
    z-index: 1;
}

.in {
    width: 80%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    color: #fff;
    margin-left: -40%;
    z-index: 2;
}

.in h1 {
    display: block;
    line-height: 1;
    font-size: 5rem;
    letter-spacing: -1px;
    margin: 120px 0 15px 0;
}

.weather-details {
    clear: both;
}

.key_info ul li .icon {
    display: inline-block;
    width: 50px;
    height: 50px;
    margin: 16px 0;
}

.icon svg {
    display: inline-block;
    width: 50px;
}

.key_info {
    position: absolute;
    width: 100%;
    height: 195px;
    left: 0;
    bottom: 60px;
    overflow: hidden;
}

.key_info ul {
    position: relative;
    z-index: 2;
    height: 100%;
}

.key_info ul li {
    position: relative;
    float: left;
    display: inline-block;
    width: 25%;
    height: 100%;
    box-sizing: border-box;
    padding: 20px 10px 0 30px;
    margin: 5px;
}

.key_info ul li span {
    display: inline-block;
    width: 100%;
    height: 46px;
    margin: 0 0 16px;
}

.key_info ul li .di {
    display: inline;
}

.key_info ul li strong {
    display: block;
    line-height: 1;
    font-size: 22px;
    letter-spacing: -1px;
    margin: 0 0 10px;
}

.key_info ul li p {
    display: inline-block;
    font-size: 16px;
    line-height: 24px;
    opacity: 0.7;
}

.container2 {
    max-width: 1024px;
    min-width: 320px;
    margin: 0 auto;
}

/* tab */
button {
    width: 33%;
    box-sizing: border-box;
}

.tabs__item {
    display: inline-block;
    margin: 0;
    padding: 10px;
    padding-bottom: 8px;
    font-size: 16px;
    letter-spacing: 0.8px;
    color: gray;
    text-decoration: none;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: all 0.25s;
}

.tabs__item_active {
    color: #ff4401;
}

.tabs__item:hover {
    border-bottom: 2px solid #ffb195;
    color: #ffb195;
}

.tabs__item:focus {
    outline: none;
    border-bottom: 2px solid #ff4401;
    color: #ff4401;
}

.tabs__item:first-child {
    margin-left: 0;
}

.tabs__item:last-child {
    margin-right: 0;
}

/* content7 */

.content7 {
    padding-top: 50px;
}

/* v-carousel */

.v-carousel {
    width: 100%;
    height: 15rem;
    overflow: hidden;
    position: relative;
    margin-bottom: 3.4rem;
}

.v-carousel-items {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.v-carousel-item {
    width: 100%;
    height: 100%;
    color: #fff;
}

.v-carousel-item:nth-of-type(1) {
    background: url('../assets/seoul1.jpg') center center;
    background-size: cover;
}

.v-carousel-item:nth-of-type(2) {
    background: url('../assets/seoul2.jpg') center center;
    background-size: cover;
}

.v-carousel-item:nth-of-type(3) {
    background: url('../assets/seoul3.jpg') center center;
    background-size: cover;
}

.v-carousel-item p {
    text-align: center;
    line-height: 15rem;
    font-size: 1.5rem;
    font-weight: 700;
}

.v-carousel-dots {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    text-align: center;
}

.v-carousel-dot {
    cursor: pointer;
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 5px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.5);
}

.v-carousel-dot.active {
    background: #ff4401;
    cursor: default;
}

.v-carousel-nav {
    cursor: pointer;
    position: absolute;
    line-height: 30px;
    color: #ff4401;
    padding: 0 5px;
    background: rgba(225, 225, 225, 0.5);
    top: 50%;
    margin-top: -15px;
}

.v-carousel-nav.prev {
    left: 0;
}

.v-carousel-nav.next {
    right: 0;
}

.v-carousel-item {
    width: 100%;
    float: left;
}

.best_card_wrap {
    padding: 3.4rem 0;
    border-top: 1px solid #e4e5ec;
    margin: 0 auto;
    overflow-x: scroll;
}

.best_card_title h2 {
    font-weight: 700;
    font-size: 1.9rem;
    line-height: 2.4rem;
    margin: 0;
    padding: 0;
}

.best_card_body {
    margin-top: 2.2rem;
}

.best_card_inner {
    display: flex;
    margin: -6px;
}

.card_col_wrap {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.card_col_cell {
    display: flex;
    height: 100%;
}

.card_inner_cell {
    width: 100%;
    /* min-width: 100px;
    max-width: 100px; */
    height: 100%;
    display: flex;
    border: 6px solid transparent;
    box-sizing: border-box;
}

.card_hover_cell {
    cursor: pointer;
    position: relative;
    width: 100%;
}

.card_image1 {
    /* background: url(../assets/jaebudo.png) no-repeat; */
    /* padding-top: 130%; */
    display: flex;
    overflow: hidden;
    background-size: cover;
    background-position: 50%;
    position: relative;
    width: 200px;
    height: 100%;
}

.card_image1 img {
    display: inline-block;
    width: 100%;
    height: 100%;
}

.card_image2 {
    background: url(../assets/island.png) no-repeat;
    padding-top: 90%;
    display: flex;
    overflow: hidden;
    background-size: cover;
    background-position: 50%;
    position: relative;
    width: 100%;
    height: 100%;
}

.card_image3 {
    background: url(../assets/paju.jpg) no-repeat;
    padding-top: 80%;
    display: flex;
    overflow: hidden;
    background-size: cover;
    background-position: 50%;
    position: relative;
    width: 100%;
    height: 100%;
}

.card_overlay {
    /* background: linear-gradient(0deg, #000 2%, transparent 40%); */
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
}

.card_content {
    display: flex;
    width: 100%;
    position: absolute;
    padding: 0 1.2rem;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    bottom: 1.2rem;
}

.card_text_subtitle {
    display: flex;
}

.card_text_subtitle p {
    font-weight: 400;
    color: #fff;
    font-size: .75rem;
    line-height: 1.25rem;
}

.card_text_title {
    display: flex;
    cursor: pointer;
}

.card_text_title h4 {
    color: #fff;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.7rem;
}

/* Food */
.best_food_wrap {
    padding: 3.4rem 0;
    border-top: 1px solid #e4e5ec;
    margin: 0 auto;
}

.best_food_wrap h2 {
    font-weight: 700;
    font-size: 1.9rem;
    line-height: 2.4rem;
    margin: 0;
    padding: 0;
}

.best_food_subtitle {
    margin-top: .6rem;
}

.best_food_subtitle p {
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 1.4rem;
}

.best_food_body {
    margin-top: 2.2rem;
}

.best_food_inner {
    display: flex;
    flex-wrap: wrap;
    margin: -6px;
}

.food_card {
    width: 33.3%;
    display: flex;
    border: 1px solid transparent;
    box-sizing: border-box;
    /* min-width: 286px;
    max-width: 430px; */
}

.food_card_inner {
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid #e4e5ec;
    cursor: pointer;
}

.food_image1 {
    background: url(../assets/food1.jpeg) no-repeat;
    display: flex;
    overflow: hidden;
    background-size: cover;
    background-position: 50%;
    position: relative;
    width: 100%;
    padding-top: 70%;
}

.food_image2 {
    background: url(../assets/food2.jpeg) no-repeat;
    display: flex;
    overflow: hidden;
    background-size: cover;
    background-position: 50%;
    position: relative;
    width: 100%;
    padding-top: 70%;
}

.food_image3 {
    background: url(../assets/food3.jpeg) no-repeat;
    display: flex;
    overflow: hidden;
    background-size: cover;
    background-position: 50%;
    position: relative;
    width: 100%;
    padding-top: 70%;
}

.food_card_content {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 1rem;
    text-align: left;
}

.food_types {
    display: flex;
}

.food_types p {
    font-weight: 600;
    font-size: .65rem;
    line-height: 1.15rem;
    color: #898ea2;
    text-transform: uppercase;
}

.food_types p span {
    color: #ff4401;
}

.food_types p:nth-of-type(2)::before {
    margin-left: 0.3rem;
    content: "| ";
}

.food_card_store {
    display: flex;
    height: 46px;
    overflow: hidden;
}

.food_card_store h4 {
    font-weight: 600;
    font-size: 1.3rem;
    line-height: 2.2rem;
    margin: 0;
}

.food_card_foot {
    display: flex;
    align-items: center;
    margin-bottom: -.6rem;
}

.food_card_foot_inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.food_card_foot_wrap {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.food_card_foot_wrap p {
    font-weight: 400;
    color: #898ea2;
    font-size: .8rem;
    line-height: 1.15rem;
}

.food_card_foot_wrap p:nth-of-type(1)::before {
    content: "Time. ";
}

.food_card_foot_wrap p:nth-of-type(2)::before {
    content: "| Tel. ";
    margin-left: 0.3rem;
}
</style>
