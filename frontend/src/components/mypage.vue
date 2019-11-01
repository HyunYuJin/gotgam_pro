<template>
  <div class="mypage_wrap">
    <div class="info">
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
    <div>
        <h2>여기에 게시물이 저장</h2>
    </div>
  </div>
</template>

<script>
export default {
    created () {
        this.$http.post('/api/mypage/me')
        .then((response) => {
            var dom1 = document.getElementById('userid');
            dom1.innerHTML = '<p class="userfont1">' + response.data.userid + '</p>';

            var dom2 = document.getElementById('username');
            dom2.innerHTML = '<p class="userfont2">' + response.data.name + '</p>'
        })
    },

    data() {
        return {
            
        }
    }
}
</script>

<style>
.mypage_wrap {
    width: 100%;
    height: calc(100% - 0px);
    position: relative;
    /* top: 0;
    left: 0; */
    margin-top: 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    pointer-events: none;
}

.info {
    padding: 3.45rem 0;
    width: 565px;
    position: static;
    display: grid;
    height: auto;
    min-height: 1000px;
    grid-template-rows: min-content min-content min-content 1fr;
    grid-template-columns: 100%;
    border-right: 1px solid #ddd;
    z-index: 2;
}

.userId {
    width: 485px;
    pointer-events: none;
    position: relative;
    margin: 28px 0 -5px 0;
    left: 54px;
    grid-area: 1 / 1 / 2 / 2;
    justify-self: start;
    align-self: start;
}

.userfont1 {
    letter-spacing: normal;
    line-height: 1em;
    font: normal normal bold 87px / 1.4em 'times new roman', times, serif;
}

.userfont2 {
    letter-spacing: normal;
    line-height: 1em;
    font: normal normal bold 70px / 1.4em 'times new roman', times, serif;
}

.userName {
    width: 485px;
    pointer-events: none;
    position: relative;
    margin: 0 0 20px 0;
    left: 54px;
    grid-area: 2 / 1 / 3 / 2;
    justify-self: start;
    align-self: start;
}

.mynav {
    width: 288px;
    position: relative;
    margin: 0 0 10px 0;
    left: 48px;
    grid-area: 4 / 1 / 5 / 2;
    justify-self: start;
    align-self: start;
    pointer-events: auto;
}

.mynav ul {
    display: table;
    width: 100%;
    box-sizing: border-box;
}

.mynav ul li {
    height: 25px;
    text-align: left;
    display: table;
    width: calc(100% - (2 * 0px));
}

.mynav ul li a {
    line-height: 25px;
    font: italic normal normal 15px/1.4em nanumgothic-regular,sans-serif;
    display: inline;
    white-space: nowrap;
    overflow: hidden;
}
</style>