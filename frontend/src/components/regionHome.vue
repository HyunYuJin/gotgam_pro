<template>
  <div class="best_card_wrap">
    <div class="best_card_title">
        <h2>Best 곶감</h2>
    </div>
    <div class="best_card_body">
        <div class="best_card_inner">

            <div class="card_col_wrap" v-for="(list, idx) in lists" v-bind:key="idx">
                
                <div class="card_col_cell">
                    <div class="card_inner_cell">
                        <div class="card_hover_cell">
                            <div class="card_image1">
                                <img v-bind:src="list.reg_date">
                            </div>
                            <div class="card_overlay">&nbsp;</div>
                            <div class="card_content">
                                <div class="card_text_wrap2">
                                    <!-- <img v-bind:src="list.reg_date"> -->
                                    <div class="card_text_subtitle">
                                        <p>{{list.user_id}}</p>
                                    </div>
                                    <div class="card_text_title">
                                        <h4>{{list.title}}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            lists: [],
            list3: []
        }
    },
    created() {
        var id = '';
        if(this.$store.getters.regionId[0] == undefined){
            console.log('und');
            // 지정한 지역정보가 없을 때
            // 1번 서울을 기본값으로 가져옴
            id = 1;
        }else{
            console.log(this.$store.getters.regionId[0]);
            id = this.$store.getters.regionId[0];
        }
        this.$http.get(`/api/region/search/desc/` + id)
        .then((res) => {
            //alert(response.data) 
            //dataManager.saveData('REGION_ID', res.data.region_id);

            // 홈
            // Best 곶감
            // rate 순서대로 가져오므로 앞에서 3개를 빼서 사용
            console.log(res.data);
            this.lists = res.data;
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
            console.log(this.lists)
            for(var i = 0; i<3; i++){
                this.list3[i] = this.lists[i];
            }
            console.log(this.list3);
        })
    },
}
</script>

<style>
.best_card_wrap {
    padding: 3.4rem 0;
    border-top: 1px solid #e4e5ec;
    margin: 0 auto;
    overflow-x: scroll;
}

.best_card_title h2 {
    font-weight: 700;
    font-size: 1.9rem;
    line-height: 2.4rem;
    margin: 0;
    padding: 0;
}

.best_card_body {
    margin-top: 2.2rem;
}

.best_card_inner {
    display: flex;
    margin: -6px;
}

.card_col_wrap {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.card_col_cell {
    display: flex;
    height: 100%;
}

.card_inner_cell {
    width: 100%;
    /* min-width: 100px;
    max-width: 100px; */
    height: 100%;
    display: flex;
    border: 6px solid transparent;
    box-sizing: border-box;
}

.card_hover_cell {
    cursor: pointer;
    position: relative;
    width: 100%;
}

.card_image1 {
    /* background: url(../assets/jaebudo.png) no-repeat; */
    /* padding-top: 130%; */
    display: flex;
    overflow: hidden;
    background-size: cover;
    background-position: 50%;
    position: relative;
    width: 200px;
    height: 100%;
}

.card_image1 img {
    display: inline-block;
    width: 100%;
    height: 100%;
}

.card_image2 {
    background: url(../assets/island.png) no-repeat;
    padding-top: 90%;
    display: flex;
    overflow: hidden;
    background-size: cover;
    background-position: 50%;
    position: relative;
    width: 100%;
    height: 100%;
}

.card_image3 {
    background: url(../assets/paju.jpg) no-repeat;
    padding-top: 80%;
    display: flex;
    overflow: hidden;
    background-size: cover;
    background-position: 50%;
    position: relative;
    width: 100%;
    height: 100%;
}

.card_overlay {
    /* background: linear-gradient(0deg, #000 2%, transparent 40%); */
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
}

.card_content {
    display: flex;
    width: 100%;
    position: absolute;
    padding: 0 1.2rem;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    bottom: 1.2rem;
}

.card_text_subtitle {
    display: flex;
}

.card_text_subtitle p {
    font-weight: 400;
    color: #fff;
    font-size: .75rem;
    line-height: 1.25rem;
}

.card_text_title {
    display: flex;
    cursor: pointer;
}

.card_text_title h4 {
    color: #fff;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.7rem;
}
</style>