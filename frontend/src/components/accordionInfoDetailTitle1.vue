<template>
  <div class="accordion_info_detail_title">
    <b-card>
      <b-media>
        <b-media-body>
          <h5 class="mt-0">이날의 곶감</h5>
          <p>
            {{myboard.content}}
          </p>
        </b-media-body>
      </b-media>
    </b-card>
  </div>
</template>

<script>
  export default {
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

<style>
  .accordion_info_detail_title {
    margin-bottom: 20px;
  }
</style>