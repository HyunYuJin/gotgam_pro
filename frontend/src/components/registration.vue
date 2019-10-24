<template>
  <div class="registration_wrap">
      <div class="registration_inner_wrap">
          <!-- .container -->
          <b-container>
            <!-- .stepwizard -->
            <b-col offset-md="12" class="stepwizard">
                <div class="stepwizard-row setup-panel">
                <div class="stepwizard-step">
                    <b-button href="#step-1">1</b-button>
                    <p>Step 1</p>
                </div>
                <div class="stepwizard-step">
                    <b-button href="#step-2">2</b-button>
                    <p>Step 2</p>
                </div>
                <div class="stepwizard-step">
                    <b-button href="#step-3">3</b-button>
                    <p>Step 3</p>
                </div>
                </div>
            </b-col>
            
            <form role="form" action="" method="post" class="step-1">
                <!-- step-1 -->
                <h3>곶감 등록</h3>
                <b-row class="setup-content justify-content-end" id="step-1">
                    <!-- step-1-1 -->
                    <b-col sm="12" md="6" class="step-1-1">
                        <b-col md="12">
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

                            <b-row class="my-1">
                                <b-col cols="3">
                                <label for="input-default">곶감 제목:</label>
                                </b-col>
                                <b-col cols="9">
                                <b-form-input id="input-default" required="required" maxlength="100" placeholder="제목을 입력해주세요..."></b-form-input>
                                </b-col>
                            </b-row>

                            <b-row class="mt-2">
                                <b-col cols="12">
                                    <label for="textarea-default">곶감 스토리(내용):</label>
                                </b-col>
                                <b-col cols="12">
                                    <b-form-textarea required="required" id="textarea-default" class="gotgamStory" placeholder="회원들과 곶감을 공유해주세요..."></b-form-textarea>
                                </b-col>
                            </b-row>
                        </b-col>
                    </b-col>

                    <!-- step-1-2 -->
                    <b-col sm="12" md="6" class="step-1-2">
                        <b-col md="12">
                            <b-row class="my-3">
                                <b-col cols="12">
                                <label for="input-default">인원수</label>
                                </b-col>
                                <b-col cols="12">
                                <b-form-input id="input-default" required="required" maxlength="100" placeholder="몇명이서 갔나요?"></b-form-input>
                                </b-col>
                            </b-row>
                            <b-row class="my-3">
                                <b-col cols="12">
                                <label for="input-default">여행 일수</label>
                                </b-col>
                                <b-col cols="12">
                                <b-form-input type="date" id="input-default" required="required" maxlength="100" placeholder="몇명이서 갔나요?"></b-form-input>
                                </b-col>
                            </b-row>
                            <b-row class="my-3">
                                <b-col cols="12">
                                <label for="input-default">기분</label>
                                </b-col>
                                <b-col cols="12">
                                <b-form-input id="input-default" required="required" maxlength="100" placeholder="너의 기분은?"></b-form-input>
                                </b-col>
                            </b-row>
                            <b-row class="my-3">
                                <b-col cols="12">
                                    <label for="input-default">날씨 선택</label>
                                </b-col>
                                <b-col cols="12">
                                    <b-form-select v-model="selected" :options="options"></b-form-select>
                                </b-col>
                            </b-row>
                            <!-- <button class="btn btn-primary nextBtn btn-lg pull-right" type="button">Next</button> -->
                        </b-col>
                    </b-col>
                    <div class="col-xs-3 col-md-6 button_Wrap">
                        <div class="col-12">
                            <button @click.prevent="newTab" class="btn btn-primary nextBtn btn-lg pull-right w-100" type="button">Next</button>
                        </div>
                    </div>
                    
                </b-row>

                <b-row class="setup-content" id="step-2">
                <b-col cols="12" offset-md="12">
                    <b-col md="12">
                    <h3> Step 2 </h3>
                    <b-card no-body>
                      <b-tabs card>
                        <!-- Render Tabs, supply a unique `key` to each tab -->
                        <b-tab v-for="i in tabs" :key="'dyn-tab-' + i" :title="'DAY ' + i">
                          <p class="text-center">
                            DAY {{ i }}
                          </p>
                          <b-col cols="12" class="pt-2">
                            <div class="form-group p-0 form-inline justify-content-between col-12">
                              <label class="font-weight-bold" for="day1">제목</label>
                              <input type="text" name="day1" id="" class="form-control col-8">
                              <button class="btn btn-danger"> 등록완료 </button>
                            </div>
                            <b-row>
                              <b-col cols="12" lg="6">
                                <div class="img_uploader_wrap">
                                  <label for="fileInput" slot="upload-label">
                                    <span class="upload-caption">{{ hasImage ? "Replace" : "Click to upload" }}</span>
                                  </label>
                                  <image-uploader :preview="true" :className="['fileinput', { 'fileinput--loaded': hasImage }]"
                                    capture="environment" :debug="1" doNotResize="gif" :autoRotate="true" outputFormat="verbose"
                                    @input="setImage">
                                  </image-uploader>
                                </div>
                              </b-col>
                              <b-col cols="12" lg="6">
                                <textarea class="form-control mb-3 text-xsmall" name="" id="" rows="6"
                                  placeholder="이날의 곶감을 기록해주세요."></textarea>
                              </b-col>
                            </b-row>
                            <hr>
                            <b-row>
                              <b-col cols="12" lg="6" class="form-group form-inline" id="display-traffic">
                                <label class="control-label font-weight-bold" for="traffic">교통</label>
                                <textarea class="form-control col-10 mx-auto " rows="3" name="" id="traffic"></textarea>
                              </b-col>
                              <b-col cols="12" lg="6" class="p-0 form-group form-inline" id="display-restaurant">
                                <label class="control-label font-weight-bold" for="restaurant">맛집</label>
                                <textarea class="form-control col-10 mx-auto " rows="3" name=""
                                  id="restaurant"></textarea>
                              </b-col>
                              <b-col cols="12" lg="6" class="p-0 form-group form-inline" id="display-location">
                                <label class="control-label font-weight-bold" for="location">지도</label>
                                <textarea class="form-control col-10 mx-auto " rows="3" name=""
                                  id="location"></textarea>
                              </b-col>
                            </b-row>
                          </b-col>
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
                    <b-row class="button_Wrap">
                        <b-col cols="5" size="lg" class="pull-left">
                            <b-button>Previous</b-button>
                        </b-col>
                        <b-col cols="2"></b-col>
                        <b-col cols="5" size="lg" class="pull-right">
                            <b-button>Next</b-button>
                        </b-col>
                    </b-row>
                    </b-col>
                </b-col>
              </b-row>
            </form>
          </b-tab>
        </b-tabs>
      </b-container>
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

            selected: null,
            options: [
                { value: null, text: '날씨를 선택해주세요.', disabled: true },
                { value: 'sunny', text: '맑음' },
                { value: 'rainy', text: '비' },
                { value: 'cloud', text: '흐림' },
                { value: 'wind', text: '바람', },
                { value: 'cold', text: '추움', },
                { value: 'hot', text: '더움', }
            ]
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