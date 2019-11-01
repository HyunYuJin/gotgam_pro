<template>
  <div>
    <div class="content">
      <!-- <h2>{{ post.title }}</h2> -->
      <p>마이페이지</p>
    </div>
  </div>
</template>

<script>
export default {
    created () {
        this.$http.post('/api/mypage/me')
        .then((response) => {
            console.log("보내기")
        })
    }
}
</script>

<style>

</style>