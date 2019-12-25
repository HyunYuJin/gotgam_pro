<template>
<div class="gotgam_detail_wrapper">
    <!-- gotgam_detail_inner -->
    <div class="gotgam_detail_inner">

        <!-- gotgam_info_header -->
        <div class="gotgam_info_header">
            <!-- gotgam_info_background -->
            <div class="gotgam_info_background">
                <div class="item-img">
                    <img v-bind:src="src">
                </div>
                <div class="item-desc item-desc-single-over" v-bind:key="ourboard.board_id">
                    <h1>{{ ourboard.title }}</h1>
                    <ul class="post-meta">
                        <li class="meta-author">
                            <span class="author-url">By</span>
                            <span>{{ user_data.name }}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- gotgam_info_background end -->

        </div>
        <!-- gotgam_info_header end -->

        <!-- gotgam_info_body -->
        <div class="gotgam_info_body container-fluid">
            <div class="row">
                <!-- primary -->
                <div class="primary content-area col-lg-8 col-md-8 col-12 pull-right">
                    <div class="pri_main">
                        <div class="content-wrapper">
                            <div class="calousel_wrapper">
                                <img v-bind:src="src">
                            </div>

                            <p>{{ myboard.content }}</p>

                            <!-- accordion -->
                            <accordion-wrap v-bind:prop_data="day" v-for="day in days" v-bind:key="day.day_seq"></accordion-wrap>
                        </div>
                    </div>
                </div>
                <!-- primary end -->

                <!-- secondary -->
                <div class="secondary tour-details-sidebar">
                    <div class="tour-side-details">
                        <ul>
                            <li class="side-title">Person</li>
                            <li>
                                <span>{{ myboard.peoples }}</span>
                            </li>
                        </ul>
                        <ul>
                            <li class="side-title">DAY</li>
                            <li>{{ myboard.dayn }}일</li>
                        </ul>
                        <ul>
                            <li class="side-title">Mood</li>
                            <li>기쁨</li>
                        </ul>
                        <ul>
                            <li class="side-title">WEATHER</li>
                            <li>맑음</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- gotgam_info_body end -->

    </div>
    <!-- gotgam_detail_inner end -->
</div>
</template>

<script>
import AccordionWrap from '../components/accordionWrap.vue';

export default {
    components: {
        AccordionWrap
    },

    created() {
        var id = this.$route.params.id;

        this.$http.get(`/api/regist/board/${id}`)
            .then((response) => {
                this.myboard = response.data[0]
                this.ourboard = response.data[0];
                this.user_data = response.data[1];

                var bytes, blob;
                if (this.ourboard.picture.data != null) {
                    bytes = new Uint8Array(this.ourboard.picture.data);
                    blob = new Blob([bytes], {
                        type: 'image/bmp'
                    });
                    console.log(URL.createObjectURL(blob));
                    this.src = URL.createObjectURL(blob);
                }
                //console.log(response.data[1]);
                //console.log(response.data)
            })
        this.$http.get(`/api/regist/day/${id}`)
            .then((response) => {
                this.days = response.data;

                //console.log(this.day)
                //console.log(response.data)
                //this.myboard = response.data
            })
    },

    data() {
        return {
            ourboard: {},
            user_data: {},
            myboard: {},
            days: [],
            src: ''
        }
    }
}
</script>

<style>
.gotgam_detail_wrapper {
    padding: 3.4rem 0;
    margin: 0 auto;
}

.gotgam_info_header {
    width: 100%;
    color: #fff;
}

.gotgam_info_background {
    height: 500px;
    height: 35rem;
    position: relative;
    overflow: hidden;
}

.item-img {
    width: 100%;
    height: 100%;
    /* background: url(../assets/suwon_park.jpg) no-repeat; */
    background-position: center center;
    background-size: cover;
    display: block;
    transform: scale(1);
    transition: all 3s cubic-bezier(0.25, 1, 0.35, 1) 0s;
}

.item-img img {
    display: inline-block;
    width: 100%;
}

.item-img:before {
    content: '';
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 3s cubic-bezier(0.25, 1, 0.35, 1) 0s;
}

.item-desc {
    position: absolute;
    z-index: 2;
    padding: 0 30px;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    text-align: center;
}

.gotgam_info_background h1 {
    color: #fff;
    font-size: 48px;
    font-weight: 600;
    line-height: 1.2;
    margin: 16px 0;
}

.post-meta {
    margin: 0;
    list-style: none;
}

.post-meta li {
    color: #fff;
    display: inline-block;
    margin-right: 16px;
    font-size: 14px;
    opacity: 0.7;
}

.meta-author {
    position: relative;
}

/* gotgam_info_body */
.gotgam_info_body {
    margin-top: 4rem;
}

.gotgam_info_body::after {
    content: '';
    display: table;
    clear: both;
}

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
    padding: 0 0 30px 0;
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

.secondary {
    float: left;
    margin: 15px auto;
    color: #323c46;
}

.tour-details-sidebar .tour-side-details {
    padding: 15px 30px;
}

.tour-side-details {
    border: 1px solid #eeeaea;
}

.secondary.tour-details-sidebar ul {
    padding: 15px 0;
    margin: 0;
    border-bottom: 1px solid #eeeaea;
}

.tour-details-sidebar ul:last-child {
    border-bottom: none;
}

.tour-details-sidebar li.side-title,
.side-title {
    margin-bottom: 10px;
    display: block;
    font-size: 1.3rem;
    font-weight: 700;
    color: #323c46;
}

.person-side {
    float: right;
    display: flex;
}
</style>
