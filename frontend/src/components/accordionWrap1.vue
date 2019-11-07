<template>
  <div role="tablist">
    <b-card no-body class="mb-1" v-for="(d, idx) in day" v-bind:key="idx">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle="'accordion-' + [idx + 1]" variant="info">Day{{ idx + 1 }}</b-button>
      </b-card-header>
      <b-collapse :id="'accordion-' + [idx + 1]" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <div class="schedule_box" v-bind:key="d.id">
              <h2>{{idx + 1}}일차</h2>
              <p class="desc">{{ d.daytitle }}</p>
              <ul>
                <li>
                  <a href="#">
                    <div class="thumb">
                      <img src="../assets/suwon_img1.jpeg">
                      <div class="border"></div>
                    </div>

                    <div class="info">
                      <strong class="info_title">{{ d.daytitle }}</strong>
                      <p>{{ d.daytitle }}</p>
                    </div>
                  </a>

                  <!-- accordion_info_detail -->
                  <accordion-info-detail1></accordion-info-detail1>
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
  import AccordionInfoDetail1 from './accordionInfoDetail1.vue';

  export default {
    components: {
      AccordionInfoDetail1,
    },

    created() {
      var id = this.$route.params.id;

      this.$http.get(`/api/mypage/${id}`)
        .then((response) => {
          this.myboard = response.data.board
          this.day = response.data.day
        })
    },

    data() {
      return {
        myboard: {},
        day:[]
      }
    }
  }
</script>