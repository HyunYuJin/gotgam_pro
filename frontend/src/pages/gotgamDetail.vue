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
          <Primary></Primary>
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

  import Primary from '../components/primary.vue';

  export default {
    components: {
      Primary
    },

    created() {
      var id = this.$route.params.id;

      this.$http.get(`/api/regist/board/${id}`)
        .then((response) => {
          this.myboard = response.data[0]
          this.ourboard = response.data[0];
          this.user_data = response.data[1];

          var bytes, blob;
          if(this.ourboard.picture.data != null){
            bytes = new Uint8Array(this.ourboard.picture.data);
            blob = new Blob([bytes], {type:'image/bmp'});
            console.log(URL.createObjectURL(blob));
            this.src = URL.createObjectURL(blob);
          }
          //console.log(response.data[1]);
          //console.log(response.data)
        })
    },

    data() {
      return {
        ourboard: {},
        user_data: {},
        myboard: {},
        src:''
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

.tour-details-sidebar li.side-title, .side-title {
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