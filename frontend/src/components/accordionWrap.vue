<template>
  <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-1 variant="info">Day1</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
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
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-2 variant="info">Day2</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
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
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-3 variant="info">Accordion 3</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
import AccordionInfoDetail from './accordionInfoDetail.vue';

export default {
    components: {
        AccordionInfoDetail,
    },

    data() {
        return {
        text: `
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
            richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
            brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
            tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
            assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
            wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
            vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
            synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `
        }
    }
}
</script>