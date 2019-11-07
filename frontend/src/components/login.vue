<template>
  <div class="login_wrapper">
    <div class="login_inner_wrap">
      <h3>곶감 로그인</h3>

      <div class="login">
        <input v-model="user.userid" class="member_id" name="member_id" placeholder="ID" type="text">
        <br>
        <input v-model="user.password" class="member_password" name="member_password" placeholder="password"
          type="password">
        <button v-on:click="login" class="btn_login">
          <img src="../assets/btn_login.gif" />
        </button>
        <p>
          > 회원가입을 하시고 당신 지역의 <br> &nbsp; &nbsp;꿀팁을 공유해주세요.
          <router-link :to="signUp.link"><img src="../assets/btn_join.gif" /></router-link>
        </p>
      </div>
    </div>
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
        // this.$http.post('/api/users/login1',
        //   this.user
        // )
        // .then(
        //   (res) => { //no error
        //     if (res.data.success) {
        //       alert(res.data.name + " 님 " + res.data.message)
        //       this.$router.push('/')
        //     } else {
        //       alert(res.data.message);
        //     }
        //   },
        // )
        // .catch(err => {
        //   alert(err);
        // })
        // vuex 샘플
        // 스토어에 저장
        this.$store.commit("USER_ID", "user_id 테스트")
        // 스토어에서 불러오기
        console.log(this.$store.getters.userId);
      }
    }
  }
</script>

<style>
  .login_wrapper {
    padding: 2.4rem 0;
    margin: 0 auto;
  }

  .login_wrapper .login_inner_wrap h3 {
    text-align: center;
    margin-top: 50px;
    font-size: 25px;
    font-weight: bold;
  }

  .login {
    width: 380px;
    height: 245px;
    margin: 0 auto;
    padding: 10px 0;
    position: relative;
    top: 10px;
  }

  .member_id {
    width: 260px;
    height: 28px;
    line-height: 28px;
    display: block;
    margin: 0 0 2px;
    border-radius: 3px;
    overflow: hidden;
    border: 1px solid #d9d9d9;
    padding: 2px 2px 2px 3px;
    position: absolute;
    top: 50px;
  }

  .member_password {
    width: 260px;
    height: 28px;
    line-height: 28px;
    display: block;
    margin: 0 0 2px;
    border-radius: 3px;
    overflow: hidden;
    border: 1px solid #d9d9d9;
    padding: 2px 2px 2px 3px;
    position: absolute;
    top: 90px;
  }

  .btn_login {
    position: absolute;
    top: 50px;
    right: 7px;
    background: none;
    border: none;
  }

  .login_inner_wrap .login p {
    font-size: 10px;
    margin-top: 20px;
    border-top: 1px solid #cccccc;
    position: relative;
    top: 110px;
    padding-left: 10px;
    padding-top: 10px;
  }

  .login_inner_wrap .login p a {
    position: absolute;
    right: 12px;
  }
</style>