<template>
  <div class="gotgam_detail_wrapper">
    <!-- gotgam_detail_inner -->
    <div class="gotgam_detail_inner">

      <!-- gotgam_info_header -->
      <div class="gotgam_info_header">
        <!-- gotgam_info_background -->
        <div class="gotgam_info_background">
          <div class="item-img">
            <!-- <img v-bind:src="movie.poster"> -->
          </div>
          <div class="item-desc item-desc-single-over" v-bind:key="myboard.board_id">
            <h1>{{ myboard.title }}</h1>
            <ul class="post-meta">
              <li class="meta-author">
                <span class="author-url">By</span>
                {{ myboard.user_id }}
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
          <Primary1></Primary1>
          <!-- primary end -->

          <!-- secondary -->
          <Secondary1></Secondary1>
        </div>
      </div>
      <!-- gotgam_info_body end -->

    </div>
    <!-- gotgam_detail_inner end -->
  </div>
</template>

<script>
  import Primary1 from './primary1.vue';
  import Secondary1 from './secondary1.vue';

  export default {
    components: {
      Primary1,
      Secondary1
    },

    created() {
      var id = this.$route.params.id;

      this.$http.get(`/api/mypage/${id}`)
        .then((response) => {
          this.myboard = response.data.board
          this.day = response.data.day
          console.log(response)
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
</style>