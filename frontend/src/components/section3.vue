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
            <div class="body_container">
                <div class="body_card">
                    <div class="card-background1"></div>
                    <div class="overlay">&nbsp;</div>
                    <div class="card_text_wrap">
                        <div class="card_text">
                            <div class="card_author">
                                <p>
                                    <i>Suncheon, Korea</i>
                                    | Jeong Ji Hyurk
                                </p>
                            </div>
                            <div class="card_title">
                                <h4>순천 성벽의 매력</h4>
                            </div>
                        </div>
                        <div class="modal_button">
                            <modal-btn></modal-btn>
                        </div>
                    </div>
                </div>

                <div class="body_card">
                    <div class="card-background2"></div>
                    <div class="overlay">&nbsp;</div>
                    <div class="card_text_wrap">
                        <div class="card_text">
                            <div class="card_author">
                                <p>
                                    <i>Busan, Korea</i>
                                    | Hyeon Yj Jin
                                </p>
                            </div>
                            <div class="card_title">
                                <h4>부산의 색깔!</h4>
                            </div>
                        </div>
                        <div class="modal_button">
                            <modal-btn></modal-btn>
                        </div>
                    </div>
                </div>

                <div class="body_card">
                    <div class="card-background3"></div>
                    <div class="overlay">&nbsp;</div>
                    <div class="card_text_wrap">
                        <div class="card_text">
                            <div class="card_author">
                                <p>
                                    <i>Seoul, Korea</i>
                                    | Lee Da Bin
                                </p>
                            </div>
                            <div class="card_title">
                                <h4>Urban Compositions</h4>
                            </div>
                        </div>
                        <div class="modal_button">
                            <modal-btn></modal-btn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import ModalBtn from './modal.vue';

export default {
    components: {
        ModalBtn
    },

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

<style>
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
    display: flex;
    border: 6px solid transparent;
    box-sizing: border-box;
}

.body_card {
    width: 33.3%;
    position: relative;
    border: 6px solid transparent;
}

.card-background1 {
    background: url(../assets/section3_img1.jpg) no-repeat;
    padding-top: 145%;
    display: flex;
    overflow: hidden;
    background-size: cover;
    background-position: 50%;
    position: relative;
    width: 100%;
}

.card-background2 {
    background: url(../assets/section3_img2.jpg) no-repeat;
    padding-top: 145%;
    display: flex;
    overflow: hidden;
    background-size: cover;
    background-position: 50%;
    position: relative;
    width: 100%;
}

.card-background3 {
    background: url(../assets/section3_img3.jpg) no-repeat;
    padding-top: 145%;
    display: flex;
    overflow: hidden;
    background-size: cover;
    background-position: 50%;
    position: relative;
    width: 100%;
}

.overlay {
    background: linear-gradient(0deg, #000, 2%, transparent 40%);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.card_text_wrap {
    display: flex;
    width: 100%;
    position: absolute;
    padding: 0 1.2rem;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    bottom: 1.2rem;
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

.card_title {
    display: flex;
    cursor: pointer;
}

.card_title h4 {
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.7rem;
    color: #fff;
}
</style>
