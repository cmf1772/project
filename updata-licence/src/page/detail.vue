<template>
  <div>
    <div>
     <div class="newFlow">
         <div class="flow-current">订单提交</div>
         <div class="flow-no">填写收货地址</div>
         <div class="flow-no">正在办理</div>
         <div class="flow-no">办理完成</div>
    </div>
    <div class="banner">
        <div class="swiper-container">
            <div id="banner" class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../assets/banner.png">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
    <div class="newBanner">
        <p>已有<span></span>个用户在车轮补换驾照成功</p>
    </div>
   
    <div id="upload">
        <Upload />
    </div>
    <div class="info">
        <div class="rSelect">
            <TypePicker/>
        </div>
        <van-popup v-model="showCity" position="bottom" :overlay="true">
            <van-picker :columns="cityArray" @change="cityChange" ref="cityPicker" @cancel="onCancel" show-toolbar title="请选择签发城市" @confirm="cityConfirm"/>
        </van-popup>
        <div>
            <CityPicker />
        </div>
        
            <div>
                <span>服务费</span>
                <div>
                    <p class="tag">江苏限时放血价<span>￥999</span></p>
                    <span class="price">￥399</span>
                </div>
            </div>
        </div>
        <div class="info">
            <div class="toMember">
                <div class="left">
                    <span class="top">成为会员，本单减5元</span> 
                    <span class="btm">涵盖所有车主服务，每年省300元是的方式发送的的幅度幅度</span>
                </div>
                <div class="right">
                    <span class="l">¥<i id="li">199</i></span> 
                    <span class="c">¥ <i id="ci">0.01</i></span><div class="r">
                </div>
            </div>
        </div>
        <div class="rSelect">
            优惠
            <div style="display: flex; align-items: center;">
                <img id="couponKindImg" style="display: none;" src="" alt=""> 
                <span id="disValue"></span> 
                <select name="" id="discount"></select>
            </div></div></div><p class="faq">
                <a href="faq.html">常见问题?</a>
                </p><div id="popup">
        </div>
        <div class="pay">
            <span>
                实付: 
            </span>
            <span>￥</span>
            <span id="deposit">399</span> 
            <button id="payBtn">立即支付</button>
        </div>
        <div id="licence" class="licence">
        </div>
        <div class="masks">
        </div>
    </div>
    <section>
       
    </section>
    <section>
      <van-popup v-model="showCity" position="bottom" :overlay="true">
        <van-picker :columns="cityArray" @change="cityChange" ref="cityPicker" @cancel="onCancel" show-toolbar title="请选择签发城市" @confirm="cityConfirm"/>
      </van-popup>
    </section>
  </div>
</template>

<script>
import Upload from "@/components/Upload";
import TypePicker from "@/components/TypePicker";
import { cityList, costList } from "@/api/index";
import CityPicker from '@/components/CityPicker'
export default {
  data() {
    return {
      showType: false,
      showCity: false,
      typeArray: ["补驾照", "换驾照"],
      // 签发城市
      cityList: [],
      cityArray: [],
      info: {
        type: "",
        city: []
      }
    };
  },
  created() {
    this.getCityList();
  },
  components: {
    Upload,
    TypePicker,
    CityPicker
  },
  methods: {
    async getCityList() {
      let res = await cityList();
      //   res.data.forEach(item => {
      //     item.list.forEach(value => {
      //       delete value.list;
      //     });
      //   });
      //   this.cityList = res.data;s
      //   this.cityArray = [
      //     {
      //       values: this.cityList.map(item => item.name)
      //     },
      //     {
      //       values: this.cityList[0].list.map(item => item.name)
      //     }
      //   ];
    },
    cityChange(picker, values) {
      let index = this.cityList.findIndex(item => item.name == values[0]);
      this.cityArray[1].values = this.cityList[index].list.map(
        item => item.name
      );
      this.$refs.cityPicker.setColumnValues(
        1,
        this.cityList[index].list.map(item => item.name)
      );
    },
    cityConfirm(values) {
      this.info.city = values;
      this.showCity = false;
    },
    onCancel(e) {
      this.showType = false;
    },
    onConfirm(value) {
      console.log("value...", value);
      this.info.type = value;
      this.onCancel();
    },
    clickType() {
      this.showType = true;
    },
    clickCity() {
      this.showCity = true;
    }
  }
};
</script>

<style>
@import url("../css/detail.css");
</style>
