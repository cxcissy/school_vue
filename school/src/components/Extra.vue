<template>
    <div class="extra">
        <el-card class="box-card">
            <template #header>
                <div class="card-header video">
                    <span>视频新闻</span>
                    <router-link to="/list/video">
                        more>>
                    </router-link>
                </div>
            </template>
            <el-carousel indicator-position="outside" height="280px" >
                <el-carousel-item v-for="el in videoArr" :key="el.id">
                    <router-link :to="`/detail/video/${el.id}`">
                        <el-image :src="`${Url}video/${el.src}`"></el-image>
                        <h3 class="title" v-html="el.title"></h3>
                    </router-link>
                </el-carousel-item>
            </el-carousel>
            <i class="el-icon-video-play"></i>
        </el-card>
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>图片新闻</span>
                    <router-link to="/list/image">
                        more>>
                    </router-link>
                </div>
            </template>
            <el-carousel indicator-position="outside" height="280px" >
                <el-carousel-item v-for="el in imageArr" :key="el.id">
                    <router-link :to="`/detail/image/${el.id}`">
                        <el-image :src="`${Url}photoes/${el.src}`"></el-image>
                        <h3 class="title" v-html="el.title"></h3>
                    </router-link>
                </el-carousel-item>
            </el-carousel>
        </el-card>
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>最新新闻</span>
                    <router-link to="/list/newest">
                        more>>
                    </router-link>
                </div>
            </template>
            <ul>
                <li v-for="el in newestArr" :key="el.id">
                    <router-link :to="`/detail/newest/${el.id}`">
                        <div class="date">
                            <div class="day" v-html="el.day"></div>
                            <div class="my" v-html="el.my"></div>
                        </div>
                        <div class="title" v-html="el.title" :title="el.title"></div>
                        <div class="times">
                            <i class="el-icon-view"></i>
                            {{el.times}}
                        </div>
                    </router-link>
                </li>
            </ul>
        </el-card>
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>热点新闻</span>
                    <router-link to="/list/newhot">
                        more>>
                    </router-link>
                </div>
            </template>
            <ul>
                <li v-for="el in newhotArr" :key="el.id">
                    <router-link :to="`/detail/newhot/${el.id}`">
                        <div class="date">
                            <div class="day" v-html="el.day"></div>
                            <div class="my" v-html="el.my"></div>
                        </div>
                        <div class="title" v-html="el.title" :title="el.title"></div>
                        <div class="times">
                            <i class="el-icon-view"></i>
                            {{el.times}}
                        </div>
                    </router-link>
                </li>
            </ul>
        </el-card>
    </div>
</template>

<script>
    import Axios from "axios";

    export default {
        name: "Extra",
        data(){
            return{
                Url:this.$store.state.Url,
                videoArr:[],
                imageArr:[],
                newestArr:[],
                newhotArr:[]
            }
        },
        mounted() {
            const arr=this.$store.state.extraData;
            if (arr.length===0){
                this.$axios.get('getMsgObj').then(rs=>{
                    this.videoArr=rs[3];
                    this.imageArr=rs[2];
                    this.newestArr=rs[0];
                    this.newestArr=this.newestArr.map(el=>{
                        const d=new Date(el.updatedAt);
                        el.day=d.getDate();
                        el.my=d.getMonth()+'-'+d.getFullYear();
                        el.times=800;
                        return el
                    })
                    this.newhotArr=rs[1];
                    this.newhotArr=this.newhotArr.map(el=>{
                        const d=new Date(el.updatedAt);
                        el.day=d.getDate();
                        el.my=d.getMonth()+'-'+d.getFullYear();
                        el.times=700;
                        return el
                    })
                })
            }else {
                this.videoArr=arr[3];
                this.imageArr=arr[2];
                this.newestArr=arr[0];
                this.newhotArr=arr[1];
            }

        }
    }
</script>

<style scoped lang="less">
    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 5px;
        font-weight: bold;
        color: whitesmoke;
    }
    .box-card{
        background-color: #0b3c70;
        position: relative;
        margin-bottom: 30px;
        a,a:visited{
            color: whitesmoke;
            text-decoration: none;
        }
        &.video i{
            position: absolute;
            font-size: 50px;
            color: whitesmoke;
            opacity: 0.6;
            left: calc(50% - 25px);
            top: calc(50% - 25px);
        }
    }
    .el-carousel__item h3{
        position: absolute;
        top: 0;
        color: lemonchiffon;
        padding: 0 10px;
        font-size: 15px;
        line-height: 1.4;
        text-shadow: 1px 1px rgba(0,0,0,0.5);
    }
    .extra{
        .el-carousel__item{
            a,a:visited{
                display: block;
                .el-image{
                    width: 100%;
                }
            }
        }
        ul{
            list-style-type: none;
            padding: 10px;
            margin: 5px;
            background-color: #eee;
            li{
                border-bottom: 1px dashed #CCCCCC;
                margin-top: 8px;
                &:last-child{
                    border-bottom: none;
                }
                a,a:visited{
                    display: flex;
                    color: black;
                    align-items: center;
                    div.date{
                        flex: 1;
                        background-color: #5a6989;
                        height: 50px;
                        border-radius: 5px;
                        line-height: 25px;
                        text-align: center;
                        font-size: 14px;
                        padding: 4px;
                        color: whitesmoke;
                        margin-right: 5px;
                        div.day{
                            font-size: 17px;
                            font-weight: bold;
                        }
                    }
                    div.title{
                        flex: 4;
                        overflow : hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                    div.times{
                        flex: 1;
                        font-size: 15px;
                        color: #999;
                        text-align: right;
                    }
                }
            }
        }
    }
</style>
