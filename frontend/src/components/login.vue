<template>
<form name="user" method="post" action="/regist">
  <div class="input-row">
    <label for="userid">아이디</label>
    <input id="userid" name="userid" type="text">
  </div>
  <div class="input-row">
    <label for="name">이름</label>
    <input id="name" name="name" type="text">
  </div>
  <div class="input-row">
    <label for="address">주소</label>
    <input id="address" name="address" type="text">
  </div>
  <button type="submit">전송</button>
</form>
</template>

<script>
export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          password: '',
          passwordchk: '',
          checked: []
        },

        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
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