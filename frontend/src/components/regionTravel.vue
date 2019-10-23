<template>
  <div class="wrap2">
      <select-wrap></select-wrap>
      <visual-wrap></visual-wrap>
      <div class="container2">
        <region-tab></region-tab>
      </div>
  </div>
</template>

<script>
import SelectWrap from './selectWrap.vue';
import VisualWrap from './visualWrap.vue';
import RegionTab from './regionTab.vue';

export default {
    components: {
        SelectWrap,
        VisualWrap,
        RegionTab
    }
}
</script>

<style>
.wrap2 {
    width: 100%;
}

.container2 {
    max-width: 1024px;
    min-width: 320px;
    margin: 0 auto;
}
</style>