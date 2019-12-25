<template>
<div role="tablist">
    <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle="'accordion-' + [prop_data.day_seq]" variant="info">Day{{prop_data.day_seq}}</b-button>
        </b-card-header>
        <b-collapse :id="'accordion-' + [prop_data.day_seq]" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
                <b-card-text>
                    <div class="schedule_box" v-bind:key="prop_data.board_id">
                        <h2>{{prop_data.day_seq}}일차</h2>
                        <ul>
                            <li>
                                <a href="#">
                                    <div class="thumb">
                                        <img v-bind:src="src">
                                        <div class="border"></div>
                                    </div>

                                    <div class="info">
                                        <strong class="info_title">{{ prop_data.title }}</strong>
                                    </div>
                                </a>

                                <!-- accordion_info_detail -->
                                <div v-bind:prop_data="prop_data">
                                    <!-- accordion_info_detail -->
                                    <div class="accordion_info_detail">
                                        <div v-bind:prop_data="prop_data" class="accordion_info_detail_title">
                                            <b-card>
                                                <b-media>
                                                    <b-media-body>
                                                        <h5 class="mt-0">이날의 곶감</h5>
                                                        <p>
                                                            {{prop_data.content}}
                                                        </p>
                                                    </b-media-body>
                                                </b-media>
                                            </b-card>
                                        </div>

                                        <b-list-group>
                                            <b-list-group-item href="#">
                                                <div class="d-flex w-100 justify-content-between">
                                                    <h5 class="mb-1">교통수단</h5>
                                                </div>
                                                <p class="mb-1">
                                                    <ul>
                                                        <li>
                                                            <dl>
                                                                <dd>{{ prop_data.traffic }}</dd>
                                                            </dl>
                                                        </li>
                                                    </ul>
                                                </p>
                                                <small>자가용이 있으면 주차시설이 잘 되어있기 때문에 추천드립니다.</small>
                                            </b-list-group-item>
                                            <b-list-group-item href="#">
                                                <div class="d-flex w-100 justify-content-between">
                                                    <h5 class="mb-1">맛집</h5>
                                                </div>
                                            </b-list-group-item>
                                            <b-list-group-item href="#foobar">
                                                <div class="d-flex w-100 justify-content-between">
                                                    <h5 class="mb-1">비용</h5>
                                                    <small class="text-muted">₩23000</small>
                                                </div>
                                                <p class="mb-1">
                                                    <ul>
                                                        <li>
                                                            <dl>
                                                                <dt>교통비</dt>
                                                                <dd>₩5000</dd>
                                                            </dl>
                                                        </li>
                                                        <li>
                                                            <dl>
                                                                <dd>{{ prop_data.pay }}</dd>
                                                            </dl>
                                                        </li>
                                                    </ul>
                                                </p>
                                            </b-list-group-item>
                                        </b-list-group>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </b-card-text>
            </b-card-body>
        </b-collapse>
    </b-card>
</div>
</template>

<script>
export default {
    props: {
        prop_data: {}
    },
    
    created() {
        var id = this.$route.params.id;

        this.$http.get(`/api/regist/board/${id}`)
            .then((response) => {
                this.ourboard = response.data[0];

                var bytes, blob;
                if (this.ourboard.picture.data != null) {
                    bytes = new Uint8Array(this.ourboard.picture.data);
                    blob = new Blob([bytes], {
                        type: 'image/bmp'
                    });
                    console.log(URL.createObjectURL(blob));
                    this.src = URL.createObjectURL(blob);
                }
            })
    },

    data() {
        return {
            myboard: {},
            src: ''
        }
    }
}
</script>
