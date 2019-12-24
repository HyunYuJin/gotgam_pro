<template>
  <div>
	  <HomeHeader></HomeHeader>
	  <div class="wrap">
		<Section1></Section1>
		<Section2></Section2>
		<Section3></Section3>
		<Section4></Section4>
	  </div>	
  </div>
</template>

<script>
import HomeHeader from '../components/homeHeader.vue';
import Section1 from '../components/section1.vue';
import Section2 from '../components/section2.vue';
import Section3 from '../components/section3.vue';
import Section4 from '../components/section4.vue';

export default {
	components: {
		HomeHeader,
		Section1,
		Section2,
		Section3,
		Section4
	}
}
</script>

<style lang="less">
.wrap {
	width: 100%;
	margin: 0 auto;
}
</style>