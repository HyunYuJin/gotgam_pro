<template>
  <div class="user_info_wrap">
    <p class="userfont1"> {{user_data.user_id}} </p>
    <p class="userName"> {{user_data.name}} </p>
    <!-- <div id="userid" class="userId"></div>
    <div id="username" class="userName"></div> -->
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
    data(){
      return{
        user_data: ''
      };
    },
    created() {
      if(this.$store.getters.userId.length != 0){
        const user = {
          user_id : this.$store.getters.userId[0].name
        };
        //const user_id = this.$store.getters.userId[0].name;
        //console.log(user_id);
        this.$http.post('/api/mypage/info',
          user
        )
        .then((response) => {
          this.user_data = response.data;
          //console.log(response.data)
          // var dom1 = document.getElementById('userid');
          // dom1.innerHTML = '<p class="userfont1">' + response.data.user_id + '</p>';

          // var dom2 = document.getElementById('username');
          // dom2.innerHTML = '<p class="userfont2">' + response.data.name + '</p>';
        })
      }
      
    }
  }
</script>

<style>
.user_info_wrap {
  padding-left: 4rem;
  margin-top: 3.7rem;
}

.userfont1 {
  font-size: 5em;
  font-weight: bold;
}

.userName {
  font-size: 3.5em;
  font-weight: bold;
}
</style>