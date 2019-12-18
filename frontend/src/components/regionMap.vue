<template>
  <div class="regioin_map_wrapper">
      
  </div>
</template>

<script>
  import VueDaumMap from 'vue-daum-map';
  // import config from '../js/config';
  export default {
    components: {VueDaumMap},
    data: () => ({
      appKey: config.appKey,
      center: {lat:33.450701, lng:127.570667},
      level: 8,
      mapTypeId: VueDaumMap.MapTypeId.NORMAL,
      libraries: [],
      mapObject: null
    }),

    created () {
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

      this.$http.get(`/api/region/` + id)
      .then((res) => {
        this.center.lat = res.data.lat;
        this.center.lng = res.data.lng;
        
        console.log(res.data.lat);
        console.log(res.data.lng);
      });
    },

    methods: {
      onLoad (map) {
        // 지도의 현재 영역을 얻어옵니다
        var bounds = map.getBounds();
        // 영역정보를 문자열로 얻어옵니다. ((남,서), (북,동)) 형식입니다
        var boundsStr = bounds.toString();
        console.log('Daum Map Loaded', boundsStr);
        this.mapObject = map;
      },
      onMapEvent (event, params) {
        console.log(`Daum Map Event(${event})`, params);
      }
    }
  }
</script>

<style>

</style>