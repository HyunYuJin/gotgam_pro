<template>
    <div class="wrap3">
      <select-mood-wrap></select-mood-wrap>
      <div class="container2">
        <tabs
          :tabs="tabs"
          :currentTab="currentTab"
          :wrapper-class="'default-tabs'"
          :tab-class="'default-tabs__item'"
          :tab-active-class="'default-tabs__item_active'"
          :line-class="'default-tabs__active-line'"
          @onClick="handleClick"
        />
        <div v-if="currentTab === 'tab1'">
          <p>기분 소개</p>
        </div>

        <div v-if="currentTab === 'tab2'">
          <mood-gotgam></mood-gotgam>
        </div>
      </div>
    </div>
</template>

<script>
import SelectMoodWrap from './selectMoodWrap.vue';
import Tabs from "vue-tabs-with-active-line";
import MoodGotgam from './moodGotgam.vue';

export default {
  components: {
    SelectMoodWrap,
    Tabs,
    MoodGotgam
  },

  data() {
    return {
      tabs: [
        { title: "곶감 기분", value: "tab1" },
        { title: "곶감 여행기", value: "tab2" }
      ],

      currentTab: "tab1"
    }
  },

  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    }
  }

}
</script>

<style>
.wrap3 {
  /* max-width: 800px; */
	width: 100%;
	margin: 0 auto;
  padding: 3.4rem 0;
  box-sizing: border-box;
}

.container2 {
    max-width: 1024px;
    min-width: 320px;
    margin: 0 auto;
}

.container2 > nav {
  text-align: center;
}

/* tab */
button {
  width: 25%;
  box-sizing: border-box;
}

.tabs__item {
  display: inline-block;
  margin: 0;
  padding: 10px;
  padding-bottom: 8px;
  font-size: 16px;
  letter-spacing: 0.8px;
  color: gray;
  text-decoration: none;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: all 0.25s;
}

.tabs__item_active {
  color: #ff4401;
}

.tabs__item:hover {
  border-bottom: 2px solid #ffb195;
  color: #ffb195;
}

.tabs__item:focus {
  outline: none;
  border-bottom: 2px solid #ff4401;
  color: #ff4401;
}

.tabs__item:first-child {
  margin-left: 0;
}

.tabs__item:last-child {
  margin-right: 0;
}

.tabs__active-line {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background-color: #ff4401;
  transition: transform 0.4s ease, width 0.4s ease;
}
</style>