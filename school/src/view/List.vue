<template>
    <div class="list">
        <div class="container">
            <el-row :gutter="30">
                <el-col :span="16">
                    <div class="panel">
                        <div class="head">
                            <router-link to="/home">
                                <i class="el-icon-s-home"></i>首页
                            </router-link>
                            <strong v-html="newType"></strong>
                        </div>
                        <div class="body">
                            <ul>
                                <li v-for="el in arr" :key="el.id">
                                    <router-link :to="`/detail/${attrName}/${el.id}`">
                                        <div class="st1" v-html="el.title"></div>
                                        <div class="st2">
                                            <div class="st21">
                                                <div class="st211" v-html="el.con"
                                                     :style="attrName!='notice'?'margin-right:20px':''"></div>
                                                <div class="st212">
                                                        <span class="date">
                                                            <i class="el-icon-time"></i>
                                                            {{el.date}}
                                                        </span>
                                                    <span class="times">
                                                            <i class="el-icon-view"></i>
                                                            {{el.times}}
                                                        </span>
                                                </div>
                                            </div>
                                            <div class="st23" v-if="attrName==='notice'"></div>
                                            <div class="st22" v-else-if="attrName==='video'|| attrName==='image'">
                                                <img :src="el.src" alt="">
                                            </div>
                                            <div class="st22" v-html="el.img" v-else></div>
                                        </div>
                                    </router-link>
                                </li>
                                <li class="pagination">
                                    <el-pagination background layout="prev,pager,next" :total="total"
                                                   @current-change="changePage">
                                    </el-pagination>
                                </li>
                            </ul>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <extra></extra>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import Extra from '../components/Extra.vue'

    export default {
        name: "List",
        data() {
            return {
                arr: [],
                newType: '',
                curPage: 0,
                attrName: '',
                total: 0,
                Url: this.$store.state.Url
            }
        },
        components: {
            Extra
        },
        mounted() {
            this.attrName = this.$route.params.newType;
            this.headmsg();
            this.getPageData();
            this.getTotal();
        },
        methods: {
            changePage(i) {
                this.curPage = i - 1;
                this.getPageData();
            },
            headmsg() {
                const obj = {
                    headlines: '关注头条', comprehensive: '综合新闻', learning: '学术动态',
                    story: '师大故事', notice: '公告通知', video: '视频新闻', image: '图片新闻',
                    newest:'最新新闻',newhot:'热点新闻'
                };
                this.newType = obj[this.attrName];
            },
            getTotal() {
                let clsType = '';
                switch (this.attrName) {
                    case 'notice':
                        clsType = 'Notice';
                        break
                    case "video":
                        clsType = 'Video';
                        break
                    case "image":
                        clsType = 'Images';
                        break
                    default:
                        clsType = 'news'
                }
                const params = {params: {type: this.newType, clsType}};
                this.$axios.get('getListTotal', params).then(total => {
                    this.total = total;
                });
            },
            getPageData() {
                let clsType = '';
                switch (this.attrName) {
                    case 'notice':
                        clsType = 'Notice';
                        break
                    case "video":
                        clsType = 'Video';
                        break
                    case "image":
                        clsType = 'Images';
                        break
                    default:
                        clsType = 'news'
                }
                const params = {params: {type: this.attrName, start: this.curPage * 10, clsType}}
                this.$axios.get('getListMsg', params).then(arr => {
                    arr = arr.map(el => {
                        if (this.attrName != 'video' && this.attrName != 'notice' && this.attrName != 'image') {
                            let con = el.content.match(/<p>[^>]+>/);
                            el.con = con[0];
                        } else {
                            el.con = el.content;
                        }
                        el.date = new Date(el.updatedAt).toLocaleDateString();
                        el.times = 200;
                        if (this.attrName === 'video' || this.attrName === 'image') {
                            this.attrName === 'video'? el.src=this.Url + 'video/' + el.src:el.src=this.Url + 'photoes/' + el.src;
                        } else if (this.attrName === 'notice') {
                        } else {
                            el.img = el.content.match(/<img[^>]+>/)[0];
                        }
                        return el;
                    })
                    this.arr = arr;
                })
            }
        },
        watch: {
            $route() {
                this.attrName = this.$route.path.substr(6);
                this.headmsg();
                this.getPageData();
                this.getTotal();
            }
        }
    }
</script>

<style scoped lang="less">
    div.list {
        background-color: #ecf2f6;
        padding-bottom: 30px;
        padding-top: 60px;

        div.panel {
            border: 1px solid #0b3c70;
            border-radius: 5px;

            div.head {
                background-color: #0b3c70;
                color: white;
                line-height: 45px;
                padding: 0 30px;
                display: flex;
                justify-content: space-between;

                a, a:visited {
                    color: white;
                    text-decoration: none;
                    font-size: 14px;
                }
            }

            div.body {
                ul {
                    margin: 0;
                    padding: 0;
                    list-style-type: none;

                    li {
                        background-color: white;
                        margin-top: 30px;
                        padding: 15px 0;

                        a, a:visited {
                            font-family: 'simsun';
                            text-decoration: none;

                            .st1 {
                                font-weight: bold;
                                text-indent: 2em;
                                line-height: 1.6;
                                color: black;
                            }

                            .st2 {
                                display: flex;

                                .st21 {
                                    flex: 7;
                                    margin-right: 20px;
                                    margin-left: 15px;

                                    .st211 {
                                        text-align: justify;
                                        font-size: 15px;
                                        color: #555555;
                                        font-weight: normal;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                        display: -webkit-box;
                                        -webkit-line-clamp: 4;
                                        -webkit-box-orient: vertical;
                                    }

                                    .st212 {
                                        font-size: 14px;
                                        margin-top: 15px;
                                        color: lightgray;

                                        span {
                                            margin-left: 15px;
                                        }
                                    }
                                }

                                .st22 {
                                    flex: 3;

                                    /deep/ img {
                                        display: block;
                                        width: 100%;
                                    }
                                }

                                .st23 {
                                    display: none;
                                }
                            }
                        }
                    }

                    li.pagination {
                        text-align: right;
                        padding: 20px 0;
                        margin-bottom: 30px;
                    }
                }
            }
        }
    }
</style>
