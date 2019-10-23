<template>
  <div class="selectbox_wrap">
      <div class="selectbox_inner_wrap">
          <div class="selectbox_title">
            <span>여행 지역</span>
          </div>
          <div class="selectbox">
            <select name="" id="">

            </select>
          </div>
      </div>
      <hr>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.selectbox_wrap {
  padding: 1rem 4rem;
}

.selectbox_inner_wrap {
  display: flex;
}

hr {
  border: 1px solid #ddd;
}

.selectbox_title {
  display: flex;
  flex-direction: column;
  width: 50%;
}

.selectbox_title span {
  font-size: 2rem;
}

.selectbox {
  display: flex;
  flex-direction: column;
  width: 50%;
}
</style>