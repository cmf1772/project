<template>
    <div>
        <div >
            <input type="text">
            <select  @change="changeValue" v-model="value">
              <option v-for="item in message" :key="item.value" @value="item.label">
                {{item.label}}
              </option>
            </select>
            <select >
                <option>
                  <p></p>
                </option>
            </select>
            <span @click="handleInputConfirm">x</span>
        </div>
          <div 
        
          >
        {{message}}
      </div>
    </div>
</template>

<style>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>

<script>
import Label from "./label";

export default {
  components: {
    Label: Label
  },
  props: {
    message: {
      type: Array
    }
  },
  data() {
    return {
      dynamicTags: ["标签一", "标签二", "标签三"],
      inputVisible: false,
      inputValue: "",
      dataChildren: '',
      childrenName: []
    };
  },
  mounted() {

  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
    changeValue() {
      this. dataChildren = this.value;
      this.message.forEach(item => {
        if(item.label === this.value) {
          console.log(item)
        }
      })
    }
  }
};
</script>