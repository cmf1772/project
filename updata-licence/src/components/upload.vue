<template>
<div>
    <ul>
        <li v-for="(item, index) in list" :key="index" @click="click(index)">
            <img v-if="item.src" :src="item.src">
            <img v-else class="add" :src="addImg">
            <p>{{item.desc}}</p>
        </li>
        <div v-show="showMask" class="mask">
             <img :src="current.demo">
             <div>
                <button>拍照</button>
                <button>相册</button>
                <button @click="cancel">取消</button>
            </div>
        </div>
    </ul>
</div>
</template>

<script>
import { mapState } from "vuex";
import add from "@/assets/add.png";

export default {
  name: "uploda",
  computed: {
    ...mapState({
      list: state => state.upload.list
    })
  },
  data() {
    return {
      addImg: add,
      showMask: false,
      current: {}
    };
  },
  mounted() {
    console.log(this.list);
  },
  methods: {
    click(ind) {
      this.showMask = !this.showMask;
      this.current = this.list[ind];
    },
    cancel() {
        this.showMask = !this.showMask;
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 0.15rem;
}
li {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    border-radius: 0.15rem;
    width: 0.9rem;
    height: 0.7rem;
    border: 1px solid #c0c0c0;
  }
  p {
    font-size: 0.26rem;
    padding: 0.1rem 0.3rem;
    text-align: center;
  }
}
.add {
  width: 0.5rem;
  height: 0.5rem;
  padding: 0.1rem 0.2rem;
}
.mask {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  img {
    width: 90%;
    margin-top: 20%;
  }
  div {
    display: flex;
    width: 90%;
    flex-direction: column;
    align-items: center;
    button {
      width: 100%;
      height: 0.9rem;
      font-size: 0.4rem;
      letter-spacing: 0.1rem;
      border-radius: 0.15rem;
      color: #3aafc0;
      border: 0;
    }
    button:first-child {
      border-radius: 0.15rem 0.15rem 0 0;
    }
    button:nth-child(2) {
      border-radius: 0 0 0.15rem 0.15rem;
    }
    button:last-child {
      margin-top: 0.15rem;
    }
  }
}
</style>
