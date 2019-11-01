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
    padding: 3.4rem 0;
    width: 100%;
    float: left;
    pointer-events: none;
}

.info {
    width: 565px;
    height: auto;
    border-right: 1px solid #ddd;
    float: left;
}

.userId {
    width: 485px;
    pointer-events: none;
    position: relative;
    margin: 28px 0 -5px 0;
    left: 54px;
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
}

.mynav {
    width: 288px;
    position: relative;
    margin: 0 0 10px 0;
    left: 48px;
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
    font: italic normal normal 15px/1.4em;
    display: inline;
    white-space: nowrap;
    overflow: hidden;
}
</style>