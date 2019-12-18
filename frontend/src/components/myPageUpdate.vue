<template>
    <div class="userUpdate container">
        <b-card bg-variant="light">
            <b-form-group label-cols-lg="3" label="회원정보수정" label-size="lg" label-class="font-weight-bold pt-0"
                class="mb-0">
                <b-form-group label-cols-sm="3" label="아이디:" label-align-sm="right" label-for="id">
                    <b-form-input id="id" v-model="user_data.user_id" disabled/>
                </b-form-group>

                <b-form-group label-cols-sm="3" label="비밀번호:" label-align-sm="right" label-for="password">
                    <b-form-input id="password" v-model="password"/>
                </b-form-group>

                <b-form-group label-cols-sm="3" label="이름:" label-align-sm="right" label-for="name">
                    <b-form-input id="name" v-model="user_data.name"/>
                </b-form-group>

                <b-form-group label-cols-sm="3" label="나이:" label-align-sm="right" label-for="age">
                    <b-form-input id="age" v-model="user_data.age"/>
                </b-form-group>
                <b-button class="updateBtn" v-on:click="mypageUpdate">회원정보수정</b-button>
            </b-form-group>
        </b-card>
    </div>
</template>

<script>
export default {
    created(){
        if(this.$store.getters.userId.length != 0){
        const user = {
          user_id : this.$store.getters.userId[0].name
        };
        //const user_id = this.$store.getters.userId[0].name;
        //console.log(user_id);
        const fd = new FormData();
        fd.append('user_id', this.$store.getters.userId[0].name);
        this.$http.post('/api/mypage/info', fd)
        .then((response) => {
          this.user_data = response.data;
          console.log(this.user_data)
          //console.log(response.data)
          // var dom1 = document.getElementById('userid');
          // dom1.innerHTML = '<p class="userfont1">' + response.data.user_id + '</p>';

          // var dom2 = document.getElementById('username');
          // dom2.innerHTML = '<p class="userfont2">' + response.data.name + '</p>';
        })
      }
    },
    data() {
      return {
        user_data: {
            user_id: '',
            password: '',
            name: '',
            age: ''
        },
        password: ''
      }
    },
    methods: {
        mypageUpdate: function() {
            if(this.password == '' || this.user_data.name == '' || this.user_data.age == ''){
                alert('입력정보를 확인해주세요!')
            }else{
                console.log(this.password)
                const fd = new FormData();
                fd.append('user_id', this.user_data.user_id);
                fd.append('password', this.password);
                fd.append('name', this.user_data.name);
                fd.append('age', this.user_data.age);

                this.$http.post('/api/mypage/update', fd)
                .then((response) => {
                    alert('회원정보가 변경되었습니다.')
                    this.$router.push('/mypage')
                    console.log(response.data);
                })
            }
        }
    }
}
</script>

<style>
.userUpdate {
    padding: 5.4rem 0;
}

.updateBtn {
    float: right;
}
</style>