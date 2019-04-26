<template>
  <div class="view-container" style="overflow:auto">
    <div class="my-car-thumbnail"><img src="../assets/img/banner-car.jpg" /></div>
    <div class="car-title">
      <div class="car-logo"><span class="car-v">雪佛兰 2017款 2.0T 四驱至尊版 7座</span></div>

    </div>
    <div class="grids-contant3" >
      <div class="grids-grid3">
        <div class="grids-grid3-cont">
          <div class="grids-grid-icon"><img src="../assets/images/icon-png/icon-ax-1.png" alt=""></div>
          <p class="grids-grid-label">违章查询</p>
          <p class="grids-grid-num">6次</p>
        </div>
      </div>
      <div class="grids-grid3">
        <div class="grids-grid3-cont">
          <div class="grids-grid-icon"><img src="../assets/images/icon-png/icon-ax-2.png" alt=""></div>
          <p class="grids-grid-label">保险到期</p>
          <p class="grids-grid-num">299天</p>
        </div>
      </div>
      <div class="grids-grid3">
        <div class="grids-grid3-cont">
          <div class="grids-grid-icon"><img src="../assets/images/icon-png/icon-ax-3.png" alt=""></div>
          <p class="grids-grid-label">保养到期</p>
          <p class="grids-grid-num">188天</p>
        </div>
      </div>
    </div>
    <div class="devider b-line"></div>
    <div class="item-phone b-line">
      <a href="news-list.html" class="item-phone-lin ">
        <p class="item-phone-title">首付20%轻松把车开回家</p>
        <p class="item-phone-sub">雪佛兰亲情礼包庆祝2017新车上市</p>
      </a>
    </div>
    <div class="item-lodge" style="padding-bottom:45px">
      <a href="#" class="item-lodge-click r-line">
        <div class="item-lodge-title">
          <p  class="item-lodge-yellow">车主抵押贷款</p>
          <p class="item-lodge-nta">给钱就开车轻松</p>
        </div>
        <div class="item-lodge-img"><img src="../assets/images/icon-png/icon-ax-4.png"></div>
      </a>
      <a href="#" class="item-lodge-click r-line">
        <div class="item-lodge-title">
          <p  class="item-lodge-yellow">给爱车投保</p>
          <p class="item-lodge-nta">选择靠谱的保险公司</p>
        </div>
        <div class="item-lodge-img"><img src="../assets/images/icon-png/icon-ax-5.png"></div>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "index.vue",
      data(){
          return{
            title:" 这是我的首页!!!!"
        }
      },
      methods: {
        clickMy:function(){
          alert(111);
        }
      }
    }
</script>
