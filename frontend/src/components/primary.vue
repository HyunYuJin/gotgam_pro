<template>
    <div class="primary content-area col-lg-8 col-md-8 col-sm-8 col-xs-12 pull-right">
        <div class="pri_main">
            <div class="content-wrapper">
                <div class="calousel_wrapper">
                    <carousel :autoplay="true" :nav="false">
                        <img src="https://placeimg.com/200/200/any?1">
                        <img src="https://placeimg.com/200/200/any?2">
                        <img src="https://placeimg.com/200/200/any?3">
                        <img src="https://placeimg.com/200/200/any?4">
                        <img src="https://placeimg.com/200/200/any?4">
                    </carousel>
                </div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat augue et urna laoreet, et
                    mattis leo commodo. Aenean egestas, velit in ultricies elementum, sapien augue rutrum nisl, nec
                    condimentum nisl lectus ut tortor.</p>
                <p>Sed tempus placerat iaculis. Proin porttitor turpis fermentum, gravida nisl vitae, maximus est.
                    Vivamus eget nulla at tortor hendrerit pellentesque. Vivamus dictum leo eu augue suscipit tincidunt.
                    Phasellus vel luctus ipsum. Phasellus maximus venenatis lorem ac facilisis. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                <p>Phasellus ac mi consectetur justo laoreet rhoncus. Etiam varius eget velit et hendrerit. Duis feugiat
                    at orci in hendrerit. Nulla nunc metus, euismod et pretium sed, scelerisque vitae lacus. Aenean
                    mattis
                    placerat pharetra.</p>

                <!-- accordion -->
                <div class="accordion" id="accordionExample">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                                <button class="btn btn-link accordion_title" type="button" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Day1
                                </button>
                            </h2>
                        </div>

                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                            data-parent="#accordionExample">
                            <div class="card-body">
                                <div class="schedule_box">
                                    <h2>1일차</h2>
                                    <p class="desc">수원 가볍게 둘러보기!</p>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <div class="thumb">
                                                    <img src="../assets/suwon_img1.jpeg">
                                                    <div class="border"></div>
                                                </div>

                                                <div class="info">
                                                    <strong class="info_title">수원화성</strong>
                                                    <p>서울을 지키는 버팀목이자 수원의 상징</p>
                                                </div>
                                            </a>

                                            <!-- accordion_info_detail -->
                                            <accordion-info-detail></accordion-info-detail>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <div class="thumb">
                                                    <img src="../assets/suwon_img1.jpeg">
                                                    <div class="border"></div>
                                                </div>

                                                <div class="info">
                                                    <strong class="info_title">행궁동 벽화마을</strong>
                                                    <p>수원의 숨겨진 명소</p>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingTwo">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed accordion_title" type="button"
                                    data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                                    aria-controls="collapseTwo">
                                    Day2
                                </button>
                            </h2>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                            data-parent="#accordionExample">
                            <div class="card-body">
                                <div class="schedule_box">
                                    <h2>2일차</h2>
                                    <p class="desc">수원 가볍게 둘러보기!</p>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <div class="thumb">
                                                    <img src="../assets/suwon_img1.jpeg">
                                                    <div class="border"></div>
                                                </div>

                                                <div class="info">
                                                    <strong class="info_title">수원화성</strong>
                                                    <p>서울을 지키는 버팀목이자 수원의 상징</p>
                                                </div>
                                            </a>

                                            <!-- accordion_info_detail -->
                                            <accordion-info-detail></accordion-info-detail>
                                        </li>
                                    </ul>
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
    import carousel from 'vue-owl-carousel';
    import AccordionInfoDetail from './accordionInfoDetail.vue';
    export default {
        components: {
            carousel,
            AccordionInfoDetail,

        }

    }
</script>

<style>
    .pri_main {
        display: block;
    }

    .primary {
        margin: 15px auto;
        float: left;
    }

    .calousel_wrapper {
        margin-bottom: 4rem;
    }

    .content-wrapper p {
        margin-bottom: 20px;
        margin: 0 0 10px;
    }

    /* carousel */
    .owl-stage {
        height: 170px;
        transition: all 800ms ease 0s !important;
    }

    .owl-carousel.owl-drag .owl-item {
        height: 100%;
    }

    .owl-carousel .owl-item img {
        height: 100%;
    }

    .owl-dots {
        display: none;
    }

    /* schedule_box */
    .schedule_box {
        padding: 40px 30px 0 30px;
    }

    .schedule_box h2 {
        font-size: 23px;
        line-height: 1;
        margin: 0 0 20px;
        font-weight: 500;
        color: #232323;
        display: block;
    }

    .schedule_box p.desc {
        display: block;
        font-size: 14px;
        color: #898989;
        line-height: 23px;
        margin: 0 0 30px;
    }

    .schedule_box ul {
        position: relative;
        display: block;
        padding-left: 53px;
    }

    .schedule_box ul::before {
        content: '';
        position: absolute;
        top: 45px;
        left: 26px;
        bottom: 55px;
        display: block;
        width: 4px;
        background: #ededed;
    }

    .schedule_box ul li {
        position: relative;
        padding: 0 142px 30px 0;
    }

    .schedule_box ul li>a {
        position: relative;
        display: block;
        height: 100px;
        padding-left: 128px;
        box-sizing: border-box;
    }

    .schedule_box ul li>a::before {
        content: '';
        position: absolute;
        top: 50%;
        left: -31px;
        display: block;
        width: 12px;
        height: 12px;
        margin: -16px 0;
        background: #fff;
        border: 2px solid #bababa;
        box-sizing: border-box;
        border-radius: 100%;
    }

    .schedule_box ul li a .thumb {
        width: 100px;
        height: 100px;
        position: absolute;
        top: 50%;
        left: 0;
        display: block;
        overflow: hidden;
        margin: -50px 0 0 0;
        background: #ebebeb;
    }

    .schedule_box ul li a .thumb img {
        width: auto;
        height: 100px;
        vertical-align: middle;
        transform: scale(1);
        transition: all 0.3s;
        border: 0 none;
    }

    .schedule_box ul li a .thumb .border {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        border: 1px solid #000;
        opacity: .1;
        transition: all 0.3s ease-in-out;
        box-sizing: border-box;
    }

    .schedule_box ul li a .info {
        height: 100%;
        padding: 20px 5px;
    }

    .schedule_box ul li a:hover {
        text-decoration: none;
    }

    .schedule_box ul li a .info .info_title {
        color: #232323;
        font-size: 1.1rem;
        font-weight: normal;
        display: block;
        line-height: 1;
        letter-spacing: -1px;
        margin: 0 0 10px;
    }

    .schedule_box ul li a .info p {
        display: block;
        font-size: 14px;
        color: #898989;
        margin: 0 0 7px;
    }

    /* accordion */
    .accordion {
        padding: 40px 0;
    }

    .accordion_title {
        width: 100%;
        text-align: left;
        font-size: 1.3rem;
        font-weight: 700;
        color: #232323;
        text-decoration: none;
    }

    .accordion_title:hover {
        text-decoration: none;
        color: #232323;
    }
</style>