<template>
  <div class="registration_wrap">
      <div class="registration_inner_wrap">
          <!-- .container -->
          <div class="container">
            <!-- .stepwizard -->
            <div class="stepwizard col-md-offset-3">
                <div class="stepwizard-row setup-panel">
                <div class="stepwizard-step">
                    <a href="#step-1" type="button" class="btn btn-primary btn-circle">1</a>
                    <p>Step 1</p>
                </div>
                <div class="stepwizard-step">
                    <a href="#step-2" type="button" class="btn btn-default btn-circle" disabled="disabled">2</a>
                    <p>Step 2</p>
                </div>
                <div class="stepwizard-step">
                    <a href="#step-3" type="button" class="btn btn-default btn-circle" disabled="disabled">3</a>
                    <p>Step 3</p>
                </div>
                </div>
            </div>
            
            <form role="form" action="" method="post" class="step-1">
                <!-- step-1 -->
                <h3>곶감 등록</h3>
                <div class="row setup-content justify-content-end" id="step-1">
                    <!-- step-1-1 -->
                    <div class="col-xs-12 col-md-6 step-1-1">
                        <div class="col-md-12">
                            <div class="img_uploader_wrap">
                                <label for="fileInput" slot="upload-label">
                                    <!-- <figure>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                            <path class="path1" d="M9.5 19c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5-6.5 2.91-6.5 6.5zM30 8h-7c-0.5-2-1-4-3-4h-8c-2 0-2.5 2-3 4h-7c-1.1 0-2 0.9-2 2v18c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-18c0-1.1-0.9-2-2-2zM16 27.875c-4.902 0-8.875-3.973-8.875-8.875s3.973-8.875 8.875-8.875c4.902 0 8.875 3.973 8.875 8.875s-3.973 8.875-8.875 8.875zM30 14h-4v-2h4v2z"></path>
                                        </svg>
                                    </figure> -->
                                    <span class="upload-caption">{{ hasImage ? "Replace" : "Click to upload" }}</span>
                                </label>
                                <image-uploader
                                :preview="true"
                                :className="['fileinput', { 'fileinput--loaded': hasImage }]" capture="environment"
                                :debug="1"
                                doNotResize="gif"
                                :autoRotate="true"
                                outputFormat="verbose"
                                @input="setImage"
                                >
                                </image-uploader>
                            </div>
                            <div class="form-group">
                                <label class="control-label">곶감 제목</label>
                                <input maxlength="100" type="text" required="required" class="form-control" placeholder="제목을 입력해주세요...">
                            </div>
                            <div class="form-group">
                                <label class="control-label">곶감 스토리(내용)</label>
                                <textarea required="required" class="form-control gotgamStory" placeholder="회원들과 곶감을 공유해주세요..."></textarea>
                            </div>
                        </div>
                    </div>

                    <!-- step-1-2 -->
                    <div class="col-xs-12 col-md-6 step-1-2">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="control-label">인원수</label>
                                <input maxlength="100" type="text" required="required" class="form-control" placeholder="몇명이서 갔나요?">
                            </div>
                            <div class="form-group">
                                <label class="control-label">여행 일수</label>
                                <input maxlength="100" type="date" required="required" class="form-control">
                            </div>
                            <div class="form-group">
                                <label class="control-label">기분</label>
                                <input maxlength="100" type="date" required="required" class="form-control" placeholder="너의 기분은?">
                            </div>
                            <div class="form-group">
                                <label class="control-label">날씨 선택</label>
                                <div class="d_weather">
                                    <select name="" id="">
                                        <option value=""> -- 당시 날씨는? -- </option>
                                    </select>
                                </div>
                            </div>
                            <!-- <button class="btn btn-primary nextBtn btn-lg pull-right" type="button">Next</button> -->
                        </div>
                    </div>
                    <div class="col-xs-3 col-md-6 button_Wrap">
                        <div class="col-12">
                            <button @click.prevent="newTab" class="btn btn-primary nextBtn btn-lg pull-right w-100" type="button">Next</button>
                        </div>
                    </div>
                    
                </div>

                <div class="row setup-content" id="step-2">
                <div class="col-12 col-md-offset-3">
                    <div class="col-md-12">
                    <h3> Step 2 </h3>
                    <b-card no-body>
                        <b-tabs card>
                            <!-- Render Tabs, supply a unique `key` to each tab -->
                            <b-tab v-for="i in tabs" :key="'dyn-tab-' + i" :title="'DAY ' + i">
                                <p class="text-center">
                                    DAY {{ i }}
                                </p>
                                <div class="col-12 pt-2">
                                    <div class="form-group p-0 form-inline justify-content-between col-12">
                                        <label class="font-weight-bold" for="day1">제목</label>
                                        <input type="text" name="day1" id="" class="form-control col-8">
                                        <button class="btn btn-danger"> 등록완료 </button>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 col-lg-6 border text-center py-4 my-3 bg-secondary">img
                                        </div>
                                        <div class="col-12 col-lg-6">
                                            <textarea class="form-control mb-3 text-xsmall" name="" id="" rows="6"
                                                placeholder="이날의 곶감을 기록해주세요."></textarea>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="col-12 col-lg-6 p-0 form-group form-inline"
                                            id="display-traffic">
                                            <label class="control-label font-weight-bold" for="traffic">교통</label>
                                            <textarea class="form-control col-10 mx-auto " rows="3" name=""
                                                id="traffic"></textarea>
                                        </div>
                                        <div class="col-12 col-lg-6 p-0 form-group form-inline"
                                            id="display-restaurant">
                                            <label class="control-label font-weight-bold"
                                                for="restaurant">맛집</label>
                                            <textarea class="form-control col-10 mx-auto " rows="3" name=""
                                                id="restaurant"></textarea>
                                        </div>
                                        <div class="col-12 col-lg-6 p-0 form-group form-inline"
                                            id="display-location">
                                            <label class="control-label font-weight-bold" for="location">지도</label>
                                            <textarea class="form-control col-10 mx-auto " rows="3" name=""
                                                id="location"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </b-tab>

                            <!-- New Tab Button (Using tabs-end slot) -->
                            <template v-slot:tabs-start>
                                <b-nav-item @click.prevent="newTab" href="#"><b>+</b></b-nav-item>
                                <b-nav-item @click.prevent="closeTab" href="#"><b>-</b></b-nav-item>
                            </template>

                            <!-- Render this if no tabs -->
                            <template v-slot:empty>
                                <div class="text-center text-muted">
                                    <b>+</b> 버튼을 눌러 <br>
                                    당신의 곶감을 등록해주세요.
                                </div>
                            </template>
                        </b-tabs>
                    </b-card>
                    <div class="button_Wrap row">
                        <b-button class="prevBtn btn-lg pull-left col-5" type="button">Previous</b-button>
                        <div class="col-2"></div>
                        <b-button class="nextBtn btn-lg pull-right col-5" type="button">Next</b-button>
                    </div>
                    </div>
                </div>
                </div>
                <div class="row setup-content" id="step-3">
                <div class="col-xs-6 col-md-offset-3">
                    <div class="col-md-12">
                    <h3> Step 3</h3>
                    <b-button class="prevBtn btn-lg pull-left" type="button">Previous</b-button>
                    <b-button class="btn-lg pull-right" type="submit">Submit</b-button>
                    </div>
                </div>
                </div>
            </form>
            
            </div>
      </div>
  </div>
</template>

<script>
import Header from './header.vue';

export default {
    components: {
        Header
    },
    data() {
        return {
            link: "registration",
            hasImage: false,
            image: null,
            tabs: [],
            tabCounter: 1,
            show: false,
        }
    },

    methods: {
        setImage: function(output) {
            this.hasImage = true;
            this.image = output;
            console.log(this.image);
        },

        closeTab() {
            this.tabs.splice(this.tabs.length - 1, 1)
            if (this.tabCounter != 1) {
                this.tabCounter--;
            }
        },
        newTab() {
            this.tabs.push(this.tabCounter++)
        }
    }
}
</script>

<style>
.registration_wrap {
    padding: 3.4rem 0;
    margin: 0 auto;
}

.registration_inner_wrap {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
}

.container {
    margin: 0 auto;
}

/* Form */
.stepwizard-step p {
    margin-top: 10px;
}
.stepwizard-row {
    display: table-row;
}
.stepwizard {
    display: table;
    width: 100%;
    position: relative;
}
.stepwizard-step button[disabled] {
    opacity: 1 !important;
    filter: alpha(opacity=100) !important;
}
.stepwizard-row:before {
    top: 14px;
    bottom: 0;
    position: absolute;
    content: " ";
    width: 100%;
    height: 1px;
    background-color: #ccc;
    /* z-order: 0; */
}
.stepwizard-step {
    display: table-cell;
    text-align: center;
    position: relative;
}
.btn-circle {
    width: 30px;
    height: 30px;
    text-align: center;
    padding: 6px 0;
    font-size: 12px;
    line-height: 1.428571429;
    border-radius: 15px;
}

/* .step */
.step-1-1, .step-1-2 {
    padding-top: 2rem;
}

/* .step-1-1 */
.step-1-1 {
    border-right: 1.2px solid #ddd;
}

/* .step-1-2 */
.d_weather {
    width: 100%;
    height: 2.5rem;
}

.d_weather select {
    width: 100%;
    height: 100%;
    background: #fff;
    border: 1px solid #ced4da;
    color: #495057;
}

.button_Wrap {
    padding-top: 2rem;
}

/* form */
.form-group {
    margin-bottom: 1.5rem;
}
.gotgamStory {
    min-height: 10rem;
}

/* file-input */
#fileInput {
  display: none;
}

.img_uploader_wrap {
    height: 15rem;
    position: relative;
    border: 1px solid #ced4da;
    margin-bottom: 1.5rem;
}

.img_uploader_wrap > div {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.img_uploader_wrap label {
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 2rem;
}

label {
    font-size: 1.1rem;
}

.upload-caption {
    width: 100%;
    height: 100%;
    display: inline-block;
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    font-weight: 600;
    text-align: center;
    line-height: 2rem;
    cursor: pointer;
}

.img_uploader_wrap > div img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    margin: 0 auto;
}
</style>