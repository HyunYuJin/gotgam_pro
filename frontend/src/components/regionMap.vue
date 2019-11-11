<template>
  <div class="regioin_map_wrapper">
    <vue-daum-map
      :appKey="appKey"

      :center.sync="center"
      :level.sync="level"
      :mapTypeId="mapTypeId"
      :libraries="libraries"

      @load="onLoad"

      @center_changed="onMapEvent('center_changed', $event)"
      @zoom_start="onMapEvent('zoom_start', $event)"
      @zoom_changed="onMapEvent('zoom_changed', $event)"
      @bounds_changed="onMapEvent('bounds_changed', $event)"
      @click="onMapEvent('click', $event)"
      @dblclick="onMapEvent('dblclick', $event)"
      @rightclick="onMapEvent('rightclick', $event)"
      @mousemove="onMapEvent('mousemove', $event)"
      @dragstart="onMapEvent('dragstart', $event)"
      @drag="onMapEvent('drag', $event)"
      @dragend="onMapEvent('dragend', $event)"
      @idle="onMapEvent('idle', $event)"
      @tilesloaded="onMapEvent('tilesloaded', $event)"
      @maptypeid_changed="onMapEvent('maptypeid_changed', $event)"

      style="width:100%;height:500px;">
    </vue-daum-map>
  </div>
</template>

<script>
  import VueDaumMap from 'vue-daum-map';
  import config from '../js/config';
  export default {
    components: {VueDaumMap},
    data: () => ({
      appKey: config.appKey,
      center: {lat:33.450701, lng:127.570667},
      level: 3,
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