<template>
  <!-- travel_gotgam_wrap -->
  <div class="travel_gotgam_wrap2">
    <!-- travel_gotgom_title -->
    <div class="travel_gotgam_title2">
       <my-info></my-info>
    </div>
    <!-- travel_gotgam_title end -->

    <div class="travel_gotgam_body2">
      <div class="travel_gotgam_inner">
        <table>
          <thead>
            <tr class="row">
              <th class="col-2">Index</th>
              <th class="col-6">게시물 제목</th>
              <th class="col-2">수정</th>
              <th class="col-2">삭제</th>
            </tr>
          </thead>
          <tbody>
            <tr class="row" v-for="(my, idx) in mys" v-bind:key="idx">
              <td class="col-2">{{ idx + 1 }}</td>
              <td class="col-6">
                <router-link :to="{ name: 'GotgamDetail', params: { id: my.board_id }}">
                  <b class="text-info">{{ my.title }}</b>
                </router-link>
              </td>
              <td class="col-2">
                <b-button class="upBtn">수정</b-button>
              </td>
              <td class="col-2">
                <b-button class="deBtn">삭제</b-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    
    <!-- <div class="travel_gotgam_body2">
      <div class="travel_gotgam_inner" v-for="(my, idx) in mys" v-bind:key="idx">
        <router-link :to="{ name: 'GotgamDetail', params: { id: my.board_id }}">
          <div class="travel_gotgam_list">
            <div class="travel_gotgam_list_inner">
              <div class="travel_gotgam_list_content">
                <div class="list_content_title">
                  <p>{{ my.title }}</p>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div> -->
  </div>
</template>

<script>
import MyInfo from './myinfo.vue';

  export default {
    components: {
      MyInfo
    },

    created() {
      if(this.$store.getters.userId.length != 0){
        const user = {
          user_id : this.$store.getters.userId[0].name
        }
        this.$http.post('/api/mypage/',
          user
        )
        .then((response) => {
          this.mys = response.data;
          // console.log('mys')
          // console.log(response.data)
        })
      }
      // this.$http.post('/api/mypage/')
      // .then((response) => {
      //   this.mys = response.data
      //   console.log(response.data)
      // })
    },

    data() {
      return {
        mys: '',

        gotgamdetail: {
          link: "/myPageDetail"
        }
      }
    }
  }
</script>

<style>
  a {
    text-decoration: none;
    color: #2c3250;
  }

  a:hover {
    text-decoration: none;
    color: #2c3250;
  }

  .travel_gotgam_wrap2 {
    width: 100%;
    height: 100%;
    padding: 2.4rem 0;
    margin: 0 auto;
  }

  .travel_gotgam_wrap2::after {
    content: '';
    display: table;
    clear: both;
  }

  .travel_gotgam_title2 {
    width: 30%;
    float: left;
  }

  .travel_gotgam_title2 h2 {
    font-weight: 700;
    font-size: 1.9rem;
    line-height: 2.4rem;
    margin: 0;
    padding: 0;
  }

  .travel_gotgam_body2 {
    width: 70%;
    height: 100%;
    min-height: 500px;
    margin: 0 auto;
    margin-top: 2.2rem;
    float: right;
    padding: 0 2rem;
    border-left: 1px solid #ddd;
  }

  .travel_gotgam_inner {
    width: 100%;
    margin: 2.5rem 0;
  }

  .travel_gotgam_inner table {
    width: 100%;
    border-top: 2px solid #aaa;
    border-bottom: 2px solid #aaa;
    font-size: 1.1rem;
    text-align: center;
  }

  .travel_gotgam_inner table thead tr {
    border-top: 1px solid #ddd;
  }

  .travel_gotgam_inner table thead tr th {
    padding: 1.2rem 0.5rem;
  }

  .travel_gotgam_inner table tbody tr {
    border-top: 1px solid #ddd;
  }

  .travel_gotgam_inner table tbody tr td {
    padding: 0.6rem 0.5rem;
  }

  .travel_gotgam_inner table thead tr.row {
    margin: 0;
    height: 50px !important;
  }

  .travel_gotgam_inner table tbody tr.row {
    margin: 0;
    height: 50px !important;
  }

  .upBtn, .deBtn {
    width: 48px !important;
    height: 34px !important;
  }

  /* .travel_gotgam_list {
    width: 100%;
    height: 16rem;
    flex: 1;
    display: flex;
    margin: 3rem 0;
  }

  .travel_gotgam_list_inner {
    width: 100%;
    height: 100%;
    display: flex;
    border: 1px solid #ddd;
    box-sizing: border-box;
    padding: 1.5rem;
  }

  .travel_gotgam_list_img {
    width: 35%;
    padding-right: 3rem;
    box-sizing: border-box;
  }

  .travel_gotgam_img {
    width: 100%;
    height: 100%;
    background: url(../assets/section3_img2.jpg) no-repeat;
    background-size: cover;
  }

  .travel_gotgam_list_content {
    width: 55%;
    box-sizing: border-box;
    padding-right: 3rem;
  }

  .travel_gotgam_list_content>div {
    margin: 1.2rem 0;
  }

  .list_content_title {
    font-size: 1.3rem;
    font-weight: 600;
  }

  .my_gotgam_wrap {
    width: 10%;
    box-sizing: border-box;
    border: 1px solid #ddd;
  } */
</style>