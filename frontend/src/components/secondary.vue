<template>
  <div class="secondary col-lg-4 col-md-4 col-12 tour-details-sidebar">
      <div class="tour-side-details">
          <ul>
              <li class="side-title">Person</li>
              <li>
                  <span>성인</span>
                  <span class="person-side">2명</span>
              </li>
              <li>
                  <span>어린이</span>
                  <span class="person-side">0명</span>
              </li>
          </ul>
          <ul>
              <li class="side-title">DATE</li>
              <li>10 Oct - 12 Oct, 2019</li>
          </ul>
          <ul>
              <li class="side-title">Mood</li>
              <li>기쁨</li>
          </ul>
          <ul>
              <li class="side-title">WEATHER</li>
              <li>맑음</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.secondary {
    float: left;
    margin: 15px auto;
    color: #323c46;
}

.tour-details-sidebar .tour-side-details {
    padding: 15px 30px;
}

.tour-side-details {
    border: 1px solid #eeeaea;
}

.secondary.tour-details-sidebar ul {
    padding: 15px 0;
    margin: 0;
    border-bottom: 1px solid #eeeaea;
}

.tour-details-sidebar ul:last-child {
    border-bottom: none;
}

.tour-details-sidebar li.side-title, .side-title {
    margin-bottom: 10px;
    display: block;
    font-size: 1.3rem;
    font-weight: 700;
    color: #323c46;
}

.person-side {
    float: right;
    display: flex;
}
</style>