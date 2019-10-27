<template>
  <div>
    <div class="input_row">
      <label for="id">아이디</label>
      <input type="text" id="id" v-model="user.userid">
    </div>
    <div class="input_row">
      <label for="password">비밀번호</label>
      <input type="password" id="password" v-model="user.password">
    </div>
    <button v-on:click="login">로그인</button>
    <router-link :to="signUp.link">가입하기</router-link>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      signUp: {
        link: "/signUp"
      },
      user: {
        userid: '',
        password: ''
      }
    }
  },
  
  methods: {
    login: function (event) {
      this.$http.post('/api/users/login', {
        user: this.user
      })
      .then(
        (res) => {  //로그인 성공
          alert(res.data.message);
        },
        (err) => { // error 를 보여줌
          alert('Login failed! please check your id or password');
      })
      .catch(err => {
        alert(err);
      })
    }
  }
}
</script>

<style>
  .wrap4 {
    /* max-width: 800px; */
    width: 100%;
    margin: 0 auto;
    padding: 3.4rem 0;
    box-sizing: border-box;
    position: relative;
  }

  .login_inner_wrap {
    height: 40rem;
    position: relative;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 30px;
    padding: 0 !important;
  }

  .login_inner_wrap::after { 
    content: ''; 
    display: table; 
    clear: both; 
  }

  .login_inner_wrap .half {
    width: 60%;
    height: 100%;
    float: left;
  }

  .content2 {
    padding: 2rem 7rem 1.5rem;
  }

  .login_inner_wrap .half.bg {
    width: 40%;
    padding: 0;
    float: left;
  }
  
  .login_inner_wrap .half.bg img {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  .login_inner_wrap h4 {
    font-weight: 700;
    padding-top: 2rem;
    text-align: center;
    color: #263238;
  }

  .login_inner_wrap .tabs .tab {
    display: inline-block;
    margin-bottom: -1px;
    padding: 20px 15px 10px;
    cursor: pointer;
    letter-spacing: 0;
    border-bottom: 1px solid #d9d9d9;
    transition: all 0.1s ease-in-out;
  }

  .cont2 {
    padding-top: 3rem;
  }

  .login_inner_wrap .content2 form {
    position: relative;
  }

  .login_inner_wrap .content2 label:first-of-type,
  .login_inner_wrap .content2 input:first-of-type{
    animation: slideIn 0.4s cubic-bezier(0.37, 0.82, 0.2, 1);
  }

  .login_inner_wrap .content2 label:nth-of-type(2),
  .login_inner_wrap .content2 input:nth-of-type(2){
    animation: slideIn 0.5s cubic-bezier(0.37, 0.82, 0.2, 1);
  }

  .login_inner_wrap .content2 label:nth-of-type(3),
  .login_inner_wrap .content2 input:nth-of-type(3) {
    animation: slideIn 0.6s cubic-bezier(0.37, 0.82, 0.2, 1);
  }

  .login_inner_wrap .content2 label:nth-of-type(4),
  .login_inner_wrap .content2 input:nth-of-type(4) {
    animation: slideIn 0.7s cubic-bezier(0.37, 0.82, 0.2, 1);
  }

  @keyframes slideIn {
    0% {
      filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
      opacity: 0;
      margin-left: -320px;
    }

    100% {
      filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
      opacity: 1;
      margin-left: 0px;
    }
  }

  @-webkit-keyframes slideIn {
    0% {
      filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
      opacity: 0;
      margin-left: -320px;
    }

    100% {
      filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
      opacity: 1;
      margin-left: 0px;
    }
  }
</style>