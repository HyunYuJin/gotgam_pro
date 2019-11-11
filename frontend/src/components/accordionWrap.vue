<template>
  <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle="'accordion-' + [prop_data.day_seq]" variant="info">Day{{prop_data.day_seq}}</b-button>
      </b-card-header>
      <b-collapse :id="'accordion-' + [prop_data.day_seq]" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
              <div class="schedule_box" v-bind:key="prop_data.board_id">
                <h2>{{prop_data.day_seq}}일차</h2>
                <!-- <p class="desc">{{ myboard.title }}</p> -->
                <ul>
                    <li>
                        <a href="#">
                            <div class="thumb">
                                <img src="../assets/suwon_img1.jpeg">
                                <div class="border"></div>
                            </div>

                            <div class="info">
                                <strong class="info_title">{{ prop_data.title }}</strong>
                                <!-- <strong class="info_title">{{ myboard.title }}</strong> -->
                                <!-- <p>{{ myboard.title }}</p> -->
                            </div>
                        </a>

                        <!-- accordion_info_detail -->
                        <accordion-info-detail v-bind:prop_data="prop_data"></accordion-info-detail>
                    </li>
                </ul>
            </div>
          </b-card-text>
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
    props: {
      prop_data: {}
    },
    created() {
      // console.log(this.test);
      // var id = this.$route.params.id;

      // this.$http.get(`/api/regist/${id}`)
      // .then((response) => {
      //   this.myboard = response.data
      //   //console.log(response.data)
      // })
    },

    data() {
        return {
          myboard: {}
    }
}
}
</script>