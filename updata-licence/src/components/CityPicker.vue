<template>
  <div>
    <ul>
      <li @click="cityClick">
        <span>当前驾照签发城市</span>
        <span>{{city.join(' ')}}</span>
      </li>
       <li @click="costClick">
        <span>可补换驾照签发城市</span>
        <span>{{cost.join(' ') | filterCity(/\(签发地\)/g)}}</span>
      </li>
    </ul>
    <section>
      <van-popup v-model="showCity" position="bottom">
        <van-picker :columns="cityColumns" show-toolbar title="选择签发城市"
          ref="cityPicker" @change="cityChange" @cancel="cityCancel" @confirm="cityConfirm"/>
      </van-popup>
      <van-popup v-model="showCost" position="bottom">
        <van-picker :columns="costColumns" show-toolbar title="选择补换城市"
          ref="costPicker" @change="costChange" @cancel="costCancel" @confirm="costConfirm"/>
      </van-popup>
    </section>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "CityPicker",
  data() {
    return {
      showCity: false,
      showCost: false,
      cityColumns: [],
      costColumns: [{ values: [] }, { values: [] }]
    };
  },
  created() {
    this.getCityList().then(res => {
      this.cityColumns = [
        {
          values: this.cityList.map(item => item.name)
        },
        {
          values: this.cityList[0].list.map(item => item.name)
        }
      ];
    });
  },
  computed: {
    ...mapState({
      cityList: state => state.cityPicker.cityList,
      costList: state => state.cityPicker.costList,
      city: state => state.cityPicker.city,
      cost: state => state.cityPicker.cost
    })
  },
  methods: {
    ...mapActions({
      getCityList: "cityPicker/getCityList",
      getCostList: "cityPicker/getCostList"
    }),
    ...mapMutations({
      updateState: "cityPicker/updateState"
    }),
    cityClick() {
      this.showCity = true;
    },
    cityChange(picker, values) {
      let index = this.cityList.findIndex(item => item.name == values[0]);
      this.$refs.cityPicker.setColumnValues(
        1,
        this.cityList[index].list.map(item => item.name)
      );
    },
    cityCancel() {
      this.showCity = false;
    },
    cityConfirm(values) {
      this.updateState({ city: values });
      this.cityCancel();
    },
    async costClick() {
      if (!this.city.length) {
        alert("请选择签发城市");
      } else {
        await this.getCostList();
        this.costColumns = [
          {
            values: this.costList.map(item => item.name)
          },
          {
            values: this.costList[0].list.map(item => item.name)
          }
        ];
        this.showCost = true;
        //  // 调用api更新城市数据
        //  console.log('this.$refs...', this, this.$refs)
        // this.$refs.costPicker.setColumnValues(0, this.costList.map(item=>item.name));
        // this.$refs.costPicker.setColumnValues(1, this.costList[0].list.map(item=>item.name));
      }
    },
    costCancel() {
      this.showCost = false;
    },
    costConfirm(values) {
      // 触发mutation更新城市数据
      this.updateState({ cost: values });
      this.costCancel();
    },
    costChange(picker, values) {
      // 获取当前省份的下标
      let index = this.costList.findIndex(item => item.name == values[0]);
      console.log("vaules...", values, index);
      // 调用api更新城市数据
      this.$refs.costPicker.setColumnValues(
        1,
        this.costList[index].list.map(item => item.name)
      );
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  ul {
    width: 100%;
    
  }
}
</style>
