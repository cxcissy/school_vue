<template>
    <el-container class="app">
        <el-header>
            <Head/>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <el-footer>
            <Foot/>
        </el-footer>
    </el-container>
</template>

<script>
    import Head from "./components/Head";
    import Foot from "./components/Foot";
    export default {
        data() {
            return {
                pageW: this.$store.state.pageW,
            };
        },
        mounted() {
            this.$store.commit('extraData')
            // this.$store.dispatch('extraData')
        },
        components: {
            Head,
            Foot
        }
    }
</script>
<style lang="less">
    body{
        margin: 0;
        padding-top: 84px;
    }
    .el-header {
        padding: 0;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
    }
    .el-footer,.el-main{
        padding: 0;
        --el-footer-height: none;
    }
    div.container{
        width: 1224px;
        margin: 0 auto;
    }
    .el-menu--horizontal>.el-submenu .el-submenu__title,
    .el-menu--horizontal>.el-menu-item {
        height: 42px;
        line-height: 42px;
    }
    .el-menu--popup{
        min-width: 120px;
        text-align: center;
    }
    .el-menu.el-menu--horizontal{
        border-bottom: none;
    }
    .home .el-carousel__button{
        width: 10px;
        height: 10px;
        border: 1px solid darkblue;
        border-radius: 50%;
        padding: 0;
        margin: 0 2px;
    }
    .home .el-carousel__indicator.is-active button{
        background-color: darkblue;
    }
    .el-card__body{
        padding: 0 0 15px;
    }
    .el-card__header{
        padding: 10px 15px;
    }
    .detail .left .el-card__header{
        background-color: #0b3c70;
        span{
            color: white;
        }
    }
    .detail .left .el-card__body{
        padding-bottom: 0;
    }
    .detail .left .el-image{
        padding-top: 10px;
    }
    /*.search .ss .el-input__inner{*/
    /*    width: 80%;*/
    /*}*/
    .search .el-form--inline .el-form-item{
        display: flex;
        justify-content: space-between;
    }
</style>
