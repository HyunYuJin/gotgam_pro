<template>
    <div class="userUpdate container">
        <b-card bg-variant="light">
            <b-form-group label-cols-lg="3" label="회원정보수정" label-size="lg" label-class="font-weight-bold pt-0"
                class="mb-0">
                <b-form-group label-cols-sm="3" label="아이디:" label-align-sm="right" label-for="id">
                    <b-form-input id="id"></b-form-input>
                </b-form-group>

                <b-form-group label-cols-sm="3" label="비밀번호:" label-align-sm="right" label-for="password">
                    <b-form-input id="password"></b-form-input>
                </b-form-group>

                <b-form-group label-cols-sm="3" label="이름:" label-align-sm="right" label-for="name">
                    <b-form-input id="name"></b-form-input>
                </b-form-group>

                <b-form-group label-cols-sm="3" label="나이:" label-align-sm="right" label-for="age">
                    <b-form-input id="age"></b-form-input>
                </b-form-group>
                <b-button class="updateBtn" v-on:click="mypageUpdate">회원정보수정</b-button>
            </b-form-group>
        </b-card>
    </div>
</template>

<script>
export default {
    methods: {
        mypageUpdate: function() {

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