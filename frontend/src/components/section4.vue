<template>
<div class="section4_wrap">
    <div class="section4_inner_wrap">
        <div class="section4_title">
            <h2>Gotgam's Stories</h2>
        </div>
        <div class="section4_body">
            <div class="content">
                <div v-if="activetab === 1" class="tabcontent">
                    <div class="section4_contents row">
                        <div class="s4_contents_wrap col-12 col-md-6">
                            <svg data-v-9004fbdc="" xmlns="http://www.w3.org/2000/svg" width="150px" height="50px" viewBox="0 0 50 50" data-v-701be175="">
                                <g fill="#ff4401">
                                    <path d="M23.7324679 8.07453187C27.2220325 8.27548472 29.9997014 11.1777038 29.9997014 14.7166729 29.9997014 18.3852035 27.0150769 21.3693595 23.3465928 21.3693595 19.7719055 21.3693595 16.9744992 18.5856879 16.695267 14.7505635 16.218735 8.21918789 19.5118904 2.88809409 22.4768275.308141156 22.655375.152469281 22.9227018.155234672 23.0993753.314047359 23.3639842.553953516 23.5447812.737937844 23.9407825 1.14171938 24.2419517 1.44795347 24.6713269 1.88557866 25.3648442 2.57909419 25.5246395 2.73884433 25.5479836 2.99014097 25.4193109 3.17646909 23.7182647 5.64565659 23.6720467 7.42132903 23.7324679 8.07453187zM7.08453164 8.07453188C10.5745161 8.27459423 13.352235 11.1772817 13.352235 14.7166725 13.352235 18.3852031 10.3676095 21.3693591 6.69907852 21.3693591 3.12439106 21.3693591.326562891 18.5856875.0463910156 14.7510316L.0463910156 14.7505631C-.429202641 8.21782847 2.86442241 2.88762558 5.82935972.307672219 6.00785981.152937797 6.27518798.155234672 6.45190669.314047359 6.71646905.554375531 6.89778145.738875297 7.29509395 1.14354731 7.59584423 1.44978183 8.02475006 1.88693808 8.71690659 2.57909419 8.87665627 2.73884433 8.89957842 2.99014097 8.77137511 3.17646909 7.06850053 5.64884395 7.02364102 7.4231565 7.08453164 8.07453188z">
                                    </path>
                                </g>
                            </svg>
                            <div class="s4_contents">
                                <p class="s4_normal">
                                    <span class="qu">Q. 곶감을 선택하게 된 이유?</span> <br> <br>
                                    현재 슬럼프와 잦은 몸살로 인해 의욕을 잃어가던 중 문득 힐링을 받고 싶어 방문하게 됐다. 곶감의 기분에 따른 여행지 선택은 탁월했으며 그 와중에도 소소하게나마 내 감정을 남들과 공유한다는 사실은 무척이나 색다른 경험으로 다가왔다. 사람들이 자신의 기분 따라 가는 지역과 활동 역시 다 제각각이었지만 누군가가 나보다 먼저 이곳에 와서 나와 같은 기분을 느끼고 힐링을 받아갔다는 사실만으로도 큰 위안이 되었던 것 같다.
                                </p>
                                <p class="s4_bold">
                                    Yu Jin In Suwon
                                </p>
                            </div>
                        </div>
                        <div class="s4_contnets_photo col-12 col-md-6">
                            <div class="s4_background1"></div>
                        </div>
                    </div>
                </div>
                <div v-if="activetab === 2" class="tabcontent">
                    <div class="section4_contents row">
                        <div class="s4_contents_wrap col-12 col-md-6">
                            <svg data-v-9004fbdc="" xmlns="http://www.w3.org/2000/svg" width="150px" height="50px" viewBox="0 0 50 50" data-v-701be175="">
                                <g fill="#ff4401">
                                    <path d="M23.7324679 8.07453187C27.2220325 8.27548472 29.9997014 11.1777038 29.9997014 14.7166729 29.9997014 18.3852035 27.0150769 21.3693595 23.3465928 21.3693595 19.7719055 21.3693595 16.9744992 18.5856879 16.695267 14.7505635 16.218735 8.21918789 19.5118904 2.88809409 22.4768275.308141156 22.655375.152469281 22.9227018.155234672 23.0993753.314047359 23.3639842.553953516 23.5447812.737937844 23.9407825 1.14171938 24.2419517 1.44795347 24.6713269 1.88557866 25.3648442 2.57909419 25.5246395 2.73884433 25.5479836 2.99014097 25.4193109 3.17646909 23.7182647 5.64565659 23.6720467 7.42132903 23.7324679 8.07453187zM7.08453164 8.07453188C10.5745161 8.27459423 13.352235 11.1772817 13.352235 14.7166725 13.352235 18.3852031 10.3676095 21.3693591 6.69907852 21.3693591 3.12439106 21.3693591.326562891 18.5856875.0463910156 14.7510316L.0463910156 14.7505631C-.429202641 8.21782847 2.86442241 2.88762558 5.82935972.307672219 6.00785981.152937797 6.27518798.155234672 6.45190669.314047359 6.71646905.554375531 6.89778145.738875297 7.29509395 1.14354731 7.59584423 1.44978183 8.02475006 1.88693808 8.71690659 2.57909419 8.87665627 2.73884433 8.89957842 2.99014097 8.77137511 3.17646909 7.06850053 5.64884395 7.02364102 7.4231565 7.08453164 8.07453188z">
                                    </path>
                                </g>
                            </svg>
                            <div class="s4_contents">
                                <p class="s4_normal">
                                    <span class="qu">Q. 곶감을 이용해 여행중 극복한 점?</span> <br> <br>
                                    위로 역시 받았지만 그 와중에도 여행지를 찾아 떠나는 계획에 큰 시간이 들지 않아 무척이나 좋았던 것 같다. 여행 중 잦은 소비가 걱정이었다면 곶감에 따른 여행지 선택 및 사용후기를 본 결과 좀 더 현명하게 소비를 할 수 있었다. 또한 현지인의 추천대로 여행을 가보는 것도 무척 훌륭한 선택이었다고 생각한다.
                                </p>
                                <p class="s4_bold">
                                    Minseong In Seoul
                                </p>
                            </div>
                        </div>
                        <div class="s4_contnets_photo col-12 col-md-6">
                            <div class="s4_background2"></div>
                        </div>
                    </div>
                </div>
                <div v-if="activetab === 3" class="tabcontent">
                    <div class="section4_contents row">
                        <div class="s4_contents_wrap col-12 col-md-6">
                            <svg data-v-9004fbdc="" xmlns="http://www.w3.org/2000/svg" width="150px" height="50px" viewBox="0 0 50 50" data-v-701be175="">
                                <g fill="#ff4401">
                                    <path d="M23.7324679 8.07453187C27.2220325 8.27548472 29.9997014 11.1777038 29.9997014 14.7166729 29.9997014 18.3852035 27.0150769 21.3693595 23.3465928 21.3693595 19.7719055 21.3693595 16.9744992 18.5856879 16.695267 14.7505635 16.218735 8.21918789 19.5118904 2.88809409 22.4768275.308141156 22.655375.152469281 22.9227018.155234672 23.0993753.314047359 23.3639842.553953516 23.5447812.737937844 23.9407825 1.14171938 24.2419517 1.44795347 24.6713269 1.88557866 25.3648442 2.57909419 25.5246395 2.73884433 25.5479836 2.99014097 25.4193109 3.17646909 23.7182647 5.64565659 23.6720467 7.42132903 23.7324679 8.07453187zM7.08453164 8.07453188C10.5745161 8.27459423 13.352235 11.1772817 13.352235 14.7166725 13.352235 18.3852031 10.3676095 21.3693591 6.69907852 21.3693591 3.12439106 21.3693591.326562891 18.5856875.0463910156 14.7510316L.0463910156 14.7505631C-.429202641 8.21782847 2.86442241 2.88762558 5.82935972.307672219 6.00785981.152937797 6.27518798.155234672 6.45190669.314047359 6.71646905.554375531 6.89778145.738875297 7.29509395 1.14354731 7.59584423 1.44978183 8.02475006 1.88693808 8.71690659 2.57909419 8.87665627 2.73884433 8.89957842 2.99014097 8.77137511 3.17646909 7.06850053 5.64884395 7.02364102 7.4231565 7.08453164 8.07453188z">
                                    </path>
                                </g>
                            </svg>
                            <div class="s4_contents">
                                <p class="s4_normal">
                                    <span class="qu">Q. 곶감의 훌륭한 점과 더불어 더 추가했으면 하는 점</span> <br> <br>
                                    기분에 따라 상이하게 변하는 여행지 추천 목록은 무척이나 특색있고 재밌는 부분이다. 누군가는 그 지역에 갔을 때 우울한 채로 다녀왔다 후기를 작성했으며 또 누군가는 같은 지역이지만 밝은 기분으로 다녀왔다 후기를 작성했다는 것 역시 의미가 깊다고 생각한다. 조금씩 다른 부분은 있었지만 통계로 나오는 기분 수치로 인해 망설임 없이 여행지 선택에 대해 신뢰할 수 있었다.
                                </p>
                                <p class="s4_bold">
                                    Da Bin In Incheon
                                </p>
                            </div>
                        </div>
                        <div class="s4_contnets_photo col-12 col-md-6">
                            <div class="s4_background3"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section4_person tabs">
                <!-- person1 -->
                <div class="s4_person_wrap" v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]">
                    <div class="s4_person_inner">
                        <div class="s4_person_profile1"></div>
                    </div>
                    <p class="person_name">Hyeon Yu Jin
                        <span class="person_text">Suwon, Korea</span>
                    </p>
                </div>

                <!-- person2 -->
                <div class="s4_person_wrap" v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]">
                    <div class="s4_person_inner">
                        <div class="s4_person_profile2"></div>
                    </div>
                    <p class="person_name">Minseong Kang
                        <span class="person_text">Seoul, Korea</span>
                    </p>
                </div>

                <!-- person3 -->
                <div class="s4_person_wrap" v-on:click="activetab=3" v-bind:class="[ activetab === 3 ? 'active' : '' ]">
                    <div class="s4_person_inner">
                        <div class="s4_person_profile3"></div>
                    </div>
                    <p class="person_name">Lee Da Bin
                        <span class="person_text">Incheon, Korea</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            activetab: 1
        }
    }

}
</script>

<style>
.section4_wrap {
    padding: 3.4rem 0;
    display: flex;
    flex-direction: column;
}

.section4_inner_wrap {
    width: 100%;
    box-sizing: border-box;
}

.section4_title h2 {
    font-weight: 700;
    font-size: 1.9rem;
    line-height: 2.4rem;
}

.section4_body {
    margin-top: 2.2rem;
}

.content {
    width: 100%;
}

.section4_person {
    display: flex;
    justify-content: space-around;
    padding-top: 3.4rem;
    max-width: 700px;
    margin: auto;
}

.s4_person_wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    opacity: 0.6;
}

.s4_person_wrap.active {
    opacity: 1;
}

.s4_person_inner {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    overflow: hidden;
}

.s4_person_profile1 {
    background: url(../assets/yj.jpg) no-repeat;
    padding-top: 100%;
    display: flex;
    overflow: hidden;
    background-size: cover;
    background-position: 50%;
    position: relative;
    widows: 100%;
}

.s4_person_profile2 {
    background: url(../assets/jh.jpg) no-repeat;
    padding-top: 100%;
    display: flex;
    overflow: hidden;
    background-size: cover;
    background-position: 50%;
    position: relative;
    widows: 100%;
}

.s4_person_profile3 {
    background: url(../assets/db.jpg) no-repeat;
    padding-top: 100%;
    display: flex;
    overflow: hidden;
    background-size: cover;
    background-position: 50%;
    position: relative;
    width: 100%;
}

.person_name {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 8px;
    margin-top: 1rem;
}

.person_text {
    font-size: .75rem;
    line-height: 1.25rem;
    color: #8982a2;
    font-weight: 600;
}

.qu {
    font-size: 1.15rem;
    font-weight: bold;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.section4_contents {
    display: flex;
    animation: fadeIn 0.5s;
}

.s4_contents_wrap {
    /* flex: 1; */
    display: flex;
}

.s4_contents {
    /* flex: 1; */
    display: flex;
    flex-direction: column;
    padding: 1.2rem 2.2rem 0 0;
}

.s4_contents .s4_normal {
    margin-bottom: 1rem;
    font-weight: 400;
    font-size: .9rem;
    line-height: 1.4rem;
}

.s4_contents .s4_bold {
    font-weight: 700;
    font-size: .9rem;
    line-height: 1.4rem;
}

.s4_contnets_photo {
    /* flex: 1; */
    display: flex;
}

.s4_background1 {
    background: url(../assets/story1.jpg) no-repeat;
    padding-top: 60%;
    background-size: cover;
    background-position: 50%;
    position: relative;
    width: 100%;
    display: flex;
    border-radius: 13px;
}

.qu {
    font-size: 1.15rem;
    font-weight: bold;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.s4_background2 {
    background: url(../assets/story2.jpg) no-repeat;
    padding-top: 60%;
    background-size: cover;
    background-position: 50%;
    position: relative;
    width: 100%;
    display: flex;
    border-radius: 13px;
}

.qu {
    font-size: 1.15rem;
    font-weight: bold;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.s4_background3 {
    background: url(../assets/story3.jpg) no-repeat;
    padding-top: 60%;
    background-size: cover;
    background-position: 50%;
    position: relative;
    width: 100%;
    display: flex;
    border-radius: 13px;
}
</style>
