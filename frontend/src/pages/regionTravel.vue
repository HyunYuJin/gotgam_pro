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
        <region-tab></region-tab>
    </div>
</div>
</template>

<script>
import dataManager from '@/util/data-manager.js';
import RegionTab from '../components/regionTab.vue';

export default {
    components: {
        RegionTab
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
            ]
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
</style>
