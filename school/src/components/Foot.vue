<template>
    <div class="outerBox">
        <div class="up">
            <el-row class="container">
                <el-col :span="4" class="left">
                    <el-space wrap>
                        <el-row>
                            <el-col :span="12">
                                <aside class="sina"></aside>
                            </el-col>
                            <el-col :span="12">
                                <aside class="ma01"></aside>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <aside class="weixin"></aside>
                            </el-col>
                            <el-col :span="12">
                                <aside class="ma02"></aside>
                            </el-col>
                        </el-row>
                    </el-space>

                </el-col>
                <el-col :span="10" class="com center">
                    <div class="title">
                        <span></span>
                        <router-link to="/home">
                            @ 北京师范大学
                        </router-link>
                    </div>
                    <p>
                        #百廿初心 红色基因##我的青春宣言# <br>
                        百余年引领时代，木铎金声传风采。<br>
                        献礼建党百年和建校120周年，<br>
                        北师大人唱响《青春恰时来》！
                    </p>
                </el-col>
                <el-col :span="10" class="com right">
                    <div class="title">
                        <span></span>
                        <router-link to="/home">
                            @ 北京师范大学
                        </router-link>
                    </div>
                    <p>
                        北京师范大学举办“庆华诞 学党史”主题晚会<br>
                        百年前，马克思主义来到中国，它就像一道光，点亮前方的路。<br>
                        百年征程，革命战场上的炮火、找寻真理的灯火、英雄化作的点点星光，这些光芒不断汇聚。<br>
                        信仰之光，代代传承，生生不息。
                    </p>
                </el-col>
            </el-row>
        </div>
        <div class="down">
            <el-row class="container">
                <el-col :span="4">
                    © 版权所有 北京师范大学
                </el-col>
                <el-col :span="7">
                    地址：北京市新街口外大街19号    邮编：100875
                </el-col>
                <el-col :span="8">
                    <router-link to="/home">
                        京ICP备10031106号-58 京公网安备110402430002号
                    </router-link>
                </el-col>
                <el-col :span="5" class="tel">
                    <span></span>
                    电话查号台：010-58806183
                </el-col>
            </el-row>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Foot"
    }
</script>

<style scoped lang="less">
    div.outerBox{
        div.up{
            background-color: #EAEEF5;
            div.container{
                padding: 10px 0 20px;
                div.left{
                    text-align: center;
                    aside{
                        width: 90px;
                        height: 90px;
                        margin: 0 auto;
                        background-size: 90px 90px;
                        &.sina{
                            background: #00aecd url("../assets/sina.png")no-repeat center center;
                        }
                        &.ma01{
                            background: url("../assets/ma01.png")no-repeat;
                        }
                        &.weixin{
                            background: #2a79a7 url("../assets/weixin.png")no-repeat center center;
                        }
                        &.ma02{
                            background: url("../assets/ma02.png")no-repeat;
                        }
                    }
                }
                div.com{
                    padding: 0 60px;
                    div.title{
                        display: flex;
                        text-align: center;
                        span{
                            display: inline-block;
                            width: 28px;
                            height: 24px;
                            padding-right: 8px;
                        }
                        a,a:visited{
                            font-weight: bold;
                            text-decoration: none;
                            color: #333;
                        }
                    }
                    p{
                        line-height: 2;
                        color: #555;
                    }
                    &.center{
                        span{
                            background: url("../assets/small_sina.png") no-repeat center;
                        }
                    }
                    &.right{
                        span{
                            background: url("../assets/small_weixin.png") no-repeat center;
                        }
                    }
                }

            }
        }
        div.down{
            height: 80px;
            line-height: 80px;
            background: url("../assets/footer_bg.jpg") no-repeat center center;
            color: white;
            font-size: 14px;
            a,a:visited{
                text-decoration: none;
                color: white;
            }
            div.tel{
                display: flex;
                align-items: center;
                span{
                    width: 28px;
                    height: 25px;
                    display: inline-block;
                    padding-right: 5px;
                    background: url("../assets/tel_bg.png") no-repeat;
                }
            }

        }
    }
</style>
