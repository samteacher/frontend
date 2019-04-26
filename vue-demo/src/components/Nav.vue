<template>
  <div class="tab-bar tab-bottom" style="position:fixed; bottom:0; left:0; ">
    <router-link class="tab-button active" v-bind:to="{name: 'Index'}"><i class="tab-button-icon icon icon-home"></i><span class="tab-button-txt">首页</span></router-link>
    <router-link class="tab-button" v-bind:to="{name: 'Forum'}"><i class="tab-button-icon icon icon-exhibition" style="background-size:30px"></i><span class="tab-button-txt">论坛</span></router-link>

    <!--<router-link class="tab-button active" to="/index"><i class="tab-button-icon icon icon-home"></i><span class="tab-button-txt">首页</span></router-link>-->
    <!--<router-link class="tab-button" to="/forum"><i class="tab-button-icon icon icon-exhibition" style="background-size:30px"></i><span class="tab-button-txt">论坛</span></router-link>-->

    <!--<a class="tab-button active" href="#/index" ><i class="tab-button-icon icon icon-home"></i><span class="tab-button-txt">首页</span></a>-->
    <!--<a class="tab-button" href="#/forum" ><i class="tab-button-icon icon icon-exhibition" style="background-size:30px"></i><span class="tab-button-txt">论坛</span></a>-->

    <a class="tab-button" href="my-favorite.html"><i class="tab-button-icon icon icon-car"></i><span class="tab-button-txt">找车</span></a>
    <a class="tab-button" href="service-list.html"><i class="tab-button-icon icon icon-service"></i><span class="tab-button-txt">服务</span></a>
    <a class="tab-button" href="my.html"><i class="tab-button-icon icon icon-my"></i><span class="tab-button-txt">我的</span></a>
  </div>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>
