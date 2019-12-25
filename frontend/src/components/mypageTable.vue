<template>
<div class="travel_gotgam_inner">
    <table>
        <thead>
            <tr class="row">
                <th class="col-2">Index</th>
                <th class="col-6">게시물 제목</th>
                <th class="col-2">수정</th>
                <th class="col-2">삭제</th>
            </tr>
        </thead>
        <tbody>
            <tr class="row" v-for="(my, idx) in mys" v-bind:key="idx">
                <td class="col-2">{{ idx + 1 }}</td>
                <td class="col-6">
                    <router-link :to="{ name: 'GotgamDetail', params: { id: my.board_id }}">
                        <b class="text-info">{{ my.title }}</b>
                    </router-link>
                </td>
                <td class="col-2">
                    <b-button class="upBtn">수정</b-button>
                </td>
                <td class="col-2">
                    <b-button class="deBtn">삭제</b-button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
export default {
    created() {
        if (this.$store.getters.userId.length != 0) {
            const user = {
                user_id: this.$store.getters.userId[0].name
            }
            const fd = new FormData();
            fd.append('user_id', this.$store.getters.userId[0].name);
            this.$http.post('/api/mypage/', fd)
                .then((response) => {
                    this.mys = response.data;
                    // console.log('mys')
                    // console.log(response.data)
                })
        }
        // this.$http.post('/api/mypage/')
        // .then((response) => {
        //   this.mys = response.data
        //   console.log(response.data)
        // })
    },

    data() {
        return {
            mys: '',

            gotgamdetail: {
                link: "/myPageDetail"
            }
        }
    }
}
</script>

<style>
.travel_gotgam_inner {
    width: 100%;
    margin: 2.5rem 0;
}

.travel_gotgam_inner table {
    width: 100%;
    border-top: 2px solid #aaa;
    border-bottom: 2px solid #aaa;
    font-size: 1.1rem;
    text-align: center;
}

.travel_gotgam_inner table thead tr {
    border-top: 1px solid #ddd;
}

.travel_gotgam_inner table thead tr th {
    padding: 1.2rem 0.5rem;
}

.travel_gotgam_inner table tbody tr {
    border-top: 1px solid #ddd;
}

.travel_gotgam_inner table tbody tr td {
    padding: 0.6rem 0.5rem;
}

.travel_gotgam_inner table thead tr.row {
    margin: 0;
    height: 50px !important;
}

.travel_gotgam_inner table tbody tr.row {
    margin: 0;
    height: 50px !important;
}

.upBtn,
.deBtn {
    width: 48px !important;
    height: 34px !important;
}
</style>
