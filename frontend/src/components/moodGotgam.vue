<template>
  <!-- mood_gotgam_wrap -->
  <div class="mood_gotgam_wrap">
      <!-- travel_gotgom_title -->
      <div class="mood_gotgam_title">
          <h2>곶감 여행기</h2>
      </div>
      <!-- mood_gotgam_title end -->

      <!-- mood_gotgam_body -->
      <div class="mood_gotgam_body">
          <!-- mood_gotgam_inner -->
          <div class="mood_gotgam_inner" v-for="(list, idx) in lists" v-bind:key="idx">

              <!-- mood_gotgam_list -->
              <router-link :to="{ name: 'GotgamDetail', params: { id: list.board_id }}">
                <div class="mood_gotgam_list">
                    <!-- mood_gotgam_list_inner -->
                    <div class="mood_gotgam_list_inner">

                        <!-- mood_gotgam_img -->
                        <div class="mood_gotgam_list_img">
                            <div class="mood_gotgam_img">
                                <img class="mood_gotgam_img" v-bind:src="list.reg_date">
                            </div>
                        </div>
                        
                        <!-- mood_gotgam_list_content -->
                        <div class="mood_gotgam_list_content">
                            <!-- list_content_title -->
                            <div class="list_content_title">
                                <p>{{ list.title }}</p>
                            </div>
                            <!-- list_content_title end -->

                            <!-- list_content_info -->
                            <div class="list_content_info">
                                <p>작성자: {{ list.user_id }}</p>
                            </div>
                            <!-- list_content_info end -->
                        </div>
                        <!-- mood_gotgam_list_content end -->

                    </div>
                    <!-- mood_gotgam_list_inner end -->
                </div>
              </router-link>
              <!-- mood_gotgam_list end -->

            </div>
            <!-- mood_gotgam_inner end -->
        </div>
        <!-- mood_gotgam_body end -->
  </div>
  <!-- mood_gotgam_wrap end -->
</template>

<script>
export default {
    created(){
        
        var id = '';
        if(this.$store.getters.mood[0] == undefined){
            console.log('und');
            // 지정한 지역정보가 없을 때
            id = 'expressionless';
        }else{
            console.log(this.$store.getters.mood[0])
            id = this.$store.getters.mood[0];
        }
        this.$http.get(`/api/mood/` + id)
        .then((res) => {
            // 곶감 여행기
            console.log(res.data)
            this.lists = res.data;

            var bytes, blob;
            for(var i = 0; i<this.lists.length; i++){
                var bytes, blob;
                console.log(this.lists[0])
                if(this.lists[i].picture != null){
                bytes = new Uint8Array(this.lists[i].picture.data);
                blob = new Blob([bytes], {type:'image/bmp'});
                console.log(URL.createObjectURL(blob));
                this.lists[i].reg_date = URL.createObjectURL(blob);
                }
            }
        });
    },
    data() {
    	return {
			GotgamDetail: {
                link: "/regiontravel"
            },
            lists: []
		};
	},
    
}
</script>

<style>
a {
    text-decoration: none;
    color: #2c3250;
}

a:hover {
    text-decoration: none;
    color: #2c3250;
}

.mood_gotgam_wrap {
    padding: 2.4rem 0;
    margin: 0 auto;
}

.mood_gotgam_title h2 {
    font-weight: 700;
    font-size: 1.9rem;
    line-height: 2.4rem;
    margin: 0;
    padding: 0;
}

.mood_gotgam_body {
    margin-top: 2.2rem;
}

.mood_gotgam_list {
    width: 100%;
    height: 16rem;
    flex: 1;
    display: flex;
    margin: 3rem 0;
}

.mood_gotgam_list_inner {
    width: 100%;
    height: 100%;
    display: flex;
    border: 1px solid #ddd;
    box-sizing: border-box;
    padding: 1.5rem;
}

.mood_gotgam_list_img {
    width: 35%;
    padding-right: 3rem;
    box-sizing: border-box;
}

.mood_gotgam_img {
    width: 100%;
    height: 100%;
    background: url(../assets/section3_img2.jpg) no-repeat;
    background-size: cover;
}

.mood_gotgam_list_content {
    width: 55%;
    box-sizing: border-box;
    padding-right: 3rem;
}

.mood_gotgam_list_content > div {
    margin: 1.2rem 0;
}

.list_content_title {
    font-size: 1.3rem;
    font-weight: 600;
}

.my_gotgam_wrap {
    width: 10%;
    box-sizing: border-box;
    border: 1px solid #ddd;
}
</style>