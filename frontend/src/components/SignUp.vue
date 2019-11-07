<template>
  <div class="join_wrapper">
    <table>
      <tr>
        <th>아이디 *</th>
        <td class="put"><input type="text" id="id" v-model="user.userid"></td>
      </tr>
      <tr>
        <th>비밀번호 *</th>
        <td class="put"><input type="password" id="password" v-model="user.password"></td>
      </tr>
      <tr>
        <th>비밀번호 확인 *</th>
        <td class="put"><input type="password" id="pwdcheked" name="pwdchecked"></td>
      </tr>
      <tr>
        <th>이름 *</th>
        <td class="put"><input type="text" id="name" v-model="user.name"></td>
      </tr>
      <tr>
        <th>나이 *</th>
        <td class="put"><input type="text" id="age" v-model="user.age"></td>
      </tr>
      <b-button class="joinBtn" v-on:click="signUp">가입하기</b-button>
    </table>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        // component의 data에 user라는 객체를 준비한다.
        // user 객체 안에는 아이디, 이름, 비밀번호를 저장할 수 있는 속성이 있다.
        user: {
          userid: '',
          password: '',
          name: '',
          age: ''
        }
      }
    },

    // axios로 /api/users/signUp을 호출하여 입력 받은 데이터(this.user)를 user 객체에 저장한다. 
    methods: {
      signUp: function (event) {
        this.$http.post('/api/users/signUp1',
            this.user
          )
          .then((res) => {
            // 성공시, /login 페이지로 이동
            if (res.data.success == true) {
              alert(res.data.message);
              this.$router.push('/login')
            }
            // 실패시, error 메세지
            else if (res.data.success == false) {
              alert(res.data.message);
            }
          })
          .catch(function (error) {
            alert(error)
          })
      }
    }
  }
</script>

<style>
  .join_wrapper {
    width: 100%;
    padding: 5.4rem 0;
    margin: 0 auto;
  }

  table {
    width: 60%;
    border: 0;
    border-spacing: 0;
    border-collapse: collapse;
    margin: 0 auto;
    position: relative;
  }

  tr {
    border: 1px solid #ccc;
    display: table-row;
    vertical-align: inherit;
    border-color: #cccccc;
    padding: 10px;
  }

  th {
    font-size: 9pt;
    background: #fbfafa;
    width: 120px;
  }

  td {
    padding: 10px 0 8px 10px;
    border-left: 1px solid #cccccc;
  }

  .put {
    width: 800px;
  }

  .put input {
      width: 95%;
      height: 100%;
      border: none;
  }

  .joinBtn {
    margin-top: 10px;
    position: absolute;
    right: 0;
  }
</style>