<template>
<!-- travel_gotgam_wrap -->
<div class="travel_gotgam_wrap2">
    <!-- travel_gotgom_title -->
    <div class="travel_gotgam_title2">
        <my-info></my-info>
    </div>
    <!-- travel_gotgam_title end -->

    <div class="travel_gotgam_body2">
        <my-page-table></my-page-table>
    </div>
</div>
</template>

<script>
import MyInfo from '../components/myinfo.vue';
import MyPageTable from '../components/mypageTable.vue';

export default {
    components: {
        MyInfo,
        MyPageTable
    }
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

.travel_gotgam_wrap2 {
    width: 100%;
    height: 100%;
    padding: 2.4rem 0;
    margin: 0 auto;
}

.travel_gotgam_wrap2::after {
    content: '';
    display: table;
    clear: both;
}

.travel_gotgam_title2 {
    width: 30%;
    float: left;
}

.travel_gotgam_title2 h2 {
    font-weight: 700;
    font-size: 1.9rem;
    line-height: 2.4rem;
    margin: 0;
    padding: 0;
}

.travel_gotgam_body2 {
    width: 70%;
    height: 100%;
    min-height: 500px;
    margin: 0 auto;
    margin-top: 2.2rem;
    float: right;
    padding: 0 2rem;
    border-left: 1px solid #ddd;
}
</style>
