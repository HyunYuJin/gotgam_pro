<template>
  <div>
    <div id="userid" class="userId"></div>
    <div id="username" class="userName"></div>
    <nav class="mynav">
      <ul>
        <li>
          <a href="">내가 작성한 게시물</a>
        </li>
      </ul>
    </nav>
</div>
</template>

<script>
  export default {
    created() {
      this.$http.post('/api/mypage/info')
        .then((response) => {
          var dom1 = document.getElementById('userid');
          dom1.innerHTML = '<p class="userfont1">' + response.data.userid + '</p>';

          var dom2 = document.getElementById('username');
          dom2.innerHTML = '<p class="userfont2">' + response.data.name + '</p>';
        })
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

  .travel_gotgam_wrap {
    padding: 2.4rem 0;
    margin: 0 auto;
  }

  .travel_gotgam_title h2 {
    font-weight: 700;
    font-size: 1.9rem;
    line-height: 2.4rem;
    margin: 0;
    padding: 0;
  }

  .travel_gotgam_body {
    width: 1024px;
    margin: 0 auto;
    margin-top: 2.2rem;
  }

  .travel_gotgam_list {
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
    /* background: url(../assets/section3_img2.jpg) no-repeat; */
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
  }
</style>