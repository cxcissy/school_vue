<template>
    <div class="home">
        <el-carousel indicator-position="outside" height="404px">
            <el-carousel-item v-for="item in 6" :key="item">
                <router-link to="##">
                    <el-image :src="`${Url}adv/adv${item}.jpg`"></el-image>
                </router-link>
            </el-carousel-item>
        </el-carousel>
        <aside class="line"></aside>
        <section class="one">
            <div class="container">
                <el-row class="headerTitle">
                    <el-col :span="10">
                        <span></span>
                    </el-col>
                    <el-col :span="4">
                        <router-link to="/list/headlines" class="center">
                            <img src="../assets/title01.png" alt="">
                            <i class="el-icon-loading"></i>
                        </router-link>
                    </el-col>
                    <el-col :span="10">
                        <span></span>
                    </el-col>
                </el-row>
                <el-row :gutter="20" class="body">
                    <el-col :span="6" v-for="el in headerTitleArr" :key="el.id">
                        <el-card class="box-card">
                            <template #header>
                                <div class="card-header">
                                    <span v-html="el.title" :title="el.title"></span>
                                </div>
                            </template>
                            <div class="card-body">
                                <div class="img" v-html="el.img"></div>
                                <router-link :to="`/detail/headlines/${el.id}`">
                                    <i class="el-icon-arrow-right"></i>
                                </router-link>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </section>
        <section class="one two">
            <div class="container">
                <el-row class="headerTitle">
                    <el-col :span="10">
                        <span></span>
                    </el-col>
                    <el-col :span="4">
                        <router-link to="/list/comprehensive" class="center">
                            <img src="../assets/title02.png" alt="">
                            <i class="el-icon-loading"></i>
                        </router-link>
                    </el-col>
                    <el-col :span="10">
                        <span></span>
                    </el-col>
                </el-row>
                <el-row :gutter="20" class="body">
                    <el-col :span="6" v-for="el in comprehensiveArr" :key="el.id">
                        <el-card class="box-card">
                            <template #header>
                                <div class="card-header">
                                    <span v-html="el.title" :title="el.title"></span>
                                </div>
                            </template>
                            <div class="card-body">
                                <div class="img" v-html="el.img"></div>
                                <div class="con" v-html="el.con"></div>
                                <router-link :to="`/detail/comprehensive/${el.id}`">
                                    <i class="el-icon-arrow-right"></i>
                                </router-link>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </section>
        <section class="one three">
            <div class="container">
                <el-row class="headerTitle">
                    <el-col :span="10">
                        <span></span>
                    </el-col>
                    <el-col :span="4">
                        <router-link to="/list/learning" class="center">
                            <img src="../assets/title03.png" alt="">
                            <i class="el-icon-loading"></i>
                        </router-link>
                    </el-col>
                    <el-col :span="10">
                        <span></span>
                    </el-col>
                </el-row>
                <el-row :gutter="20" class="body">
                    <el-col :span="6" v-for="el in learningArr" :key="el.id">
                        <el-card class="box-card" >
                            <template #header>
                                <div class="card-header">
                                    <span v-html="el.title" :title="el.title"></span>
                                </div>
                            </template>
                            <div class="card-body">
                                <div class="img" v-html="el.img"></div>
                                <div class="con" v-html="el.con"></div>
                                <router-link :to="`/detail/learning/${el.id}`">
                                    <i class="el-icon-arrow-right"></i>
                                </router-link>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </section>
        <section class="one four">
            <div class="container">
                <el-row class="headerTitle">
                    <el-col :span="10">
                        <span></span>
                    </el-col>
                    <el-col :span="4">
                        <router-link to="/list/story" class="center">
                            <img src="../assets/title04.png" alt="">
                            <i class="el-icon-loading"></i>
                        </router-link>
                    </el-col>
                    <el-col :span="10">
                        <span></span>
                    </el-col>
                </el-row>
                <el-row :gutter="20" class="body">
                    <el-col :span="6" v-for="el in storyArr" :key="el.id">
                        <el-card class="box-card" >
                            <router-link :to="`/detail/story/${el.id}`">
                                <div class="img" v-html="el.img"></div>
                            </router-link>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </section>
        <section class="five">
            <div class="container">
                <el-row :gutter="30">
                    <el-col :span="12">
                        <el-row class="headerTitle">
                            <el-col :span="9">
                                <span></span>
                            </el-col>
                            <el-col :span="6">
                                <router-link to="/list/notice" class="center">
                                    <img src="../assets/title05.png" alt="">
                                    <i class="el-icon-loading"></i>
                                </router-link>
                            </el-col>
                            <el-col :span="9">
                                <span></span>
                            </el-col>
                        </el-row>
                        <el-card class="box-card" @mouseenter="moveStop" @mouseleave="move">
                            <div class="scrollWin" :scrollTop="moveTop">
                                <article ref="artic">
                                    <router-link :to="`/detail/notice/${el.id}`" v-for="(el,i) in noticeArr" :key="el.id">
                                        <el-row>
                                            <el-col :span="20">
                                                <span v-html="el.no"></span>
                                                <span class="title" v-html="el.title"></span>
                                            </el-col>
                                            <el-col :span="4">
                                                <span class="date" v-html="el.date"></span>
                                            </el-col>
                                        </el-row>
                                    </router-link>
                                </article>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="12">
                        <el-row class="headerTitle">
                            <el-col :span="9">
                                <span></span>
                            </el-col>
                            <el-col :span="6">
                                <router-link to="##" class="center">
                                    <img src="../assets/title06.png" alt="">
                                    <i class="el-icon-loading"></i>
                                </router-link>
                            </el-col>
                            <el-col :span="9">
                                <span></span>
                            </el-col>
                        </el-row>
                        <el-row :gutter="30" class="fiveZt">
                            <el-col :span="12" style="padding-bottom: 26px">
                                <router-link to="##">
                                    <el-image :src="`${Url}img/a1.jpg`" style="height: 88px;width:100%"></el-image>
                                    <i class="el-icon-zoom-in"></i>
                                </router-link>
                            </el-col>
                            <el-col :span="12">
                                <router-link to="##">
                                    <el-image :src="`${Url}img/a2.jpg`" style="height: 88px;width:100%"></el-image>
                                    <i class="el-icon-zoom-in"></i>
                                </router-link>
                            </el-col>
                            <el-col :span="12" style="padding-bottom: 26px">
                                <router-link to="##">
                                    <el-image :src="`${Url}img/a3.jpg`" style="height: 88px;width:100%"></el-image>
                                    <i class="el-icon-zoom-in"></i>
                                </router-link>
                            </el-col>
                            <el-col :span="12">
                                <router-link to="##">
                                    <el-image :src="`${Url}img/a4.jpg`" style="height: 88px;width:100%"></el-image>
                                    <i class="el-icon-zoom-in"></i>
                                </router-link>
                            </el-col>
                            <el-col :span="12" style="padding-bottom: 26px">
                                <router-link to="##">
                                    <el-image :src="`${Url}img/a1.jpg`" style="height: 88px;width:100%"></el-image>
                                    <i class="el-icon-zoom-in"></i>
                                </router-link>
                            </el-col>
                            <el-col :span="12">
                                <router-link to="##">
                                    <el-image :src="`${Url}img/a2.jpg`" style="height: 88px;width:100%"></el-image>
                                    <i class="el-icon-zoom-in"></i>
                                </router-link>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </div>
        </section>
    </div>

</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                Url: this.$store.state.Url,
                headerTitleArr:[],
                comprehensiveArr:[],
                learningArr:[],
                storyArr:[],
                noticeArr:[],
                moveTop:0,
                timer: null,
                high:0
            }
        },
        mounted() {
            this.$axios.get('getData').then(arr=>{
                const arr1=arr[1];
                this.headerTitleArr=arr1.map(el=>{
                   let imgSrc=el.content.match(/<img[^>]+>/)[0];
                   el.img=imgSrc;
                   return el
                });
                const arr2=arr[2];
                this.comprehensiveArr=arr2.map(el=>{
                    let imgSrc=el.content.match(/<img[^>]+>/)[0];
                    el.con=el.content.match(/<p>[^>]+>/)[0];
                    el.img=imgSrc;
                    return el
                });
                const arr3=arr[3];
                this.learningArr=arr3.map(el=>{
                    let imgSrc=el.content.match(/<img[^>]+>/)[0];
                    el.con=el.content.match(/<p>[^>]+>/)[0];
                    el.img=imgSrc;
                    return el
                });
                const arr4=arr[4];
                this.storyArr=arr4.map(el=>{
                    let imgSrc=el.content.match(/<img[^>]+>/)[0];
                    el.img=imgSrc;
                    return el
                })
                const arr5=arr[5];
                this.noticeArr=arr5.map((el,i)=>{
                    el.no=`${i+1}、`
                    el.date=new Date(el.updatedAt).toLocaleDateString();
                    return el
                })
                this.noticeArr=[...this.noticeArr,...this.noticeArr];
                const oArt=this.$refs.artic;
                setTimeout(()=>{
                    this.high=parseInt( oArt.offsetHeight/2);
                    this.move()
                },50)
            })
        },
        methods:{
            moveStop(){
                clearInterval(this.timer)
            },
            restart(){
                this.move()
            },
            move(){
                this.timer=setInterval(()=>{
                    if (this.moveTop===this.high+13){
                        this.moveTop=0;
                    }else {
                        this.moveTop++;
                    }
                },30)
            }
        }
    }
</script>

<style scoped lang="less">
    .el-carousel {
        .el-image {
            height: 100%;
        }
    }
    aside.line {
        height: 60px;
        background: url("../assets/banner_bg01.png") no-repeat center top,
        url("../assets/line.png") no-repeat center top,
        url("../assets/gz_bg.png") no-repeat center bottom rgb(16, 56, 105);
        margin-top: -34px;
    }
    section.one {
        background-color: #103869;
        padding-bottom: 30px;
        .headerTitle{
            padding: 15px 0;
            span {
                display: block;
                height: 2px;
                background-color: #2A5487;
                margin-top: 16px;
            }
            .center {
                display: flex;
                justify-content: center;
                align-items: center;
                text-decoration: none;
                i {
                    margin-left: 10px;
                    color: white;
                }
            }
        }
        .body{
            .box-card{
                background-color: rgb(47, 140, 215);
                .card-header{
                    height: 50px;
                    line-height: 25px;
                    color: white;
                    overflow : hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    cursor: default;
                    font-family: simsun;
                    font-weight: bold;
                }
                .card-body{
                    text-align: right;
                    /deep/ img{
                        width: 100%;
                        height: 200px;
                        vertical-align: middle;
                        margin-bottom: 20px;
                    }
                    a{
                        display: inline-block;
                        width: 30px;
                        height: 30px;
                        text-align: center;
                        border: 2px solid #12437a;
                        border-radius: 50%;
                        margin-right: 10px;
                        i{
                            margin-top: 8px;
                            font-weight: bold;
                            margin-left: 3px;
                        }
                    }
                }

            }
        }
        &.two{
            background-color: #CCE1FA;
            .headerTitle{
                span{
                    background-color: #afc1d7;
                }
                i{
                    color: darkblue;
                }
            }
            .box-card{
                background-color: white;
                .card-header{
                    color: #024495;
                    font-weight: normal;
                    font-size: 16px;
                }
                .card-body{
                    /deep/ img{
                        margin-bottom: 0;
                    }
                    /deep/ p{
                        height: 80px;
                        line-height: 20px;
                        text-align: justify;
                        text-indent: 2em;
                        font-size: 15px;
                        padding: 0 10px;
                        overflow : hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 4;
                        -webkit-box-orient: vertical;
                    }
                }
            }
        }
        &.three{
            background-color: #EAEEF5;
            padding-bottom: 10px;
            .headerTitle{
                span{
                    background-color: #afc1d7;
                }
                i{
                    color: darkblue;
                }
            }
            .box-card{
                background-color: white;
                margin-bottom: 20px;
                .card-header{
                    color: #024495;
                    font-weight: normal;
                    font-size: 16px;
                }
                .card-body{
                    /deep/ img{
                        margin-bottom: 0;
                    }
                    /deep/ p{
                        height: 80px;
                        line-height: 20px;
                        text-align: justify;
                        text-indent: 2em;
                        font-size: 15px;
                        padding: 0 10px;
                        overflow : hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 4;
                        -webkit-box-orient: vertical;
                    }
                }
            }
        }
        &.four{
            background: url("../assets/mode04_bg.png") no-repeat top center;
            padding-bottom: 10px;
            .box-card{
                margin-bottom: 20px;
                padding-top: 20px;
                /deep/ img{
                    width: 100%;
                    height: 200px;
                }
            }
        }
    }
    .five{
        padding: 15px;
        background-color: #CCE1FA;
        .headerTitle{
            padding: 15px 0;
            span{
                display: block;
                height: 2px;
                background-color: #2A5487;
                margin-top: 16px;
            }
            .center {
                display: flex;
                justify-content: center;
                align-items: center;
                text-decoration: none;
                i {
                    margin-left: 10px;
                    color: darkblue;
                }
            }
        }
        .box-card{
            background-color: whitesmoke;
            padding: 15px;
            div.scrollWin{
                height: 280px;
                overflow: hidden;
                a,a:visited{
                    display: block;
                    color: #07133b;
                    line-height: 2;
                    &:not(:last-child){
                        border-bottom: 1px dashed #999;
                        margin-bottom: 15px;
                    }
                    span.date{
                        display: block;
                        text-align: right;
                        font-size: 14px;
                        color: #666666;
                    }
                }
            }
        }
        .fiveZt{
            a{
                display: block;
                height: 88px;
                position: relative;
                &::after{
                    content: '';
                    position:absolute;
                    width: 0;
                    height: 0;
                    left: 50%;
                    top: 50%;
                    border: 1px solid #ccc;
                    background-color: rgba(0,0,0,0.5);
                    opacity: 0;
                    transition: all 0.4s;
                }
                &:hover{
                    &::after{
                        width: 100%;
                        height: 100%;
                        left: 0;
                        top: 0;
                        opacity: 1;
                    }

                    i{
                        opacity: 1;
                    }
                }
                i{
                    position: absolute;
                    font-size: 30px;
                    color: white;
                    left: calc(50% - 15px);
                    top: calc(50% - 15px);
                    opacity: 0;
                    transition: all 0.4s;
                    z-index: 100;
                }
            }
        }
    }

</style>
