<template>
    <div class="wrapper">
      <div>
        <el-select class="el-select" v-model="form.label" placeholder="全部" clearable
                  filterable 
            @change="getValue"
                  >
          <el-option
            v-for="item in addList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            >
          </el-option>
        </el-select>
        <span type="text" @click="deleteClick" class="delete">×</span>
      </div>
      <div v-for="(item, index) in form" :key="index" class="content">
        <input type="text" class="input">
        <el-select class="el-select el-select2" v-model="item.label" placeholder="全部" clearable filterable @change="getChildrenValue">
          <el-option
          v-for="item in addList"
          :key="item.value"
          :label="item.label"
          :value="item.value">
          </el-option>
        </el-select>
          <el-select class="el-select el-select1"  v-model="item.label1" placeholder="全部" clearable filterable>
          <el-option
          v-for="item in addList1"
          :key="item.value"
          :label="item.label"
          :value="item.value">
          </el-option>
          </el-select>
        <span type="text" @click="deleteItem(index)" class="delete">×</span>
      </div>
      <span @click="add" class="add"><span>＋</span> 添加设备</span>
    </div>
</template>

<script>
export default {
  // 项目管理
  name: "ProjectManageList",
  data() {
    return {
      formName: "空间",
      formNameChildren: "",
      form: [],
      addList: [
        {
          value: "温控器",
          label: "温控器"
        },
        {
          value: "照明",
          label: "照明"
        },
        {
          value: "窗帘",
          label: "窗帘"
        },
        {
          value: "安防",
          label: "安防"
        },
        {
          value: "可支队将",
          label: "可支队将"
        }
      ],
      addList1: [
        {
          value: "三合-温控器",
          label1: "三合-温控器"
        },
        {
          value: "步进窗帘遥控器",
          label1: "步进窗帘遥控器"
        },
        {
          value: "可视对讲我室内机",
          label1: "可视对讲我室内机"
        },
        {
          value: "可谓灯光",
          label1: "可谓灯光"
        },
        {
          value: "单开灯光",
          label1: "单开灯光"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    add() {
      this.form.push({});
    },
    deleteItem(index) {
      this.$confirm(`是否确认删除设备-${this.formNameChildren}？`, {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
            success: () => {
              console.log(1);
            }
          });
          this.form.splice(index, 1);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },

    deleteClick() {
      this.$confirm(
        `删除空间后，则该空间下的所有设备都将被修改，是否确认删除空间-${
          this.formName
        }`,
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      )
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
            success: () => {
              console.log(1);
            }
          });
          this.form = [];
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    getValue() {
      this.formName = this.form.label;
    },
    getChildrenValue() {
      console.log(this.formNameChildren);
      this.formNameChildren = this.form[0].label;
    }
  }
};
</script>

<style>
.input {
  width: 120px;
  height: 25px;
  border: 1px solid rgba(151, 151, 151, 1);
  border-radius: 0px;
}

.el-input__inner {
  width: 120px;
  height: 26px;
  border: 1px solid rgba(151, 151, 151, 1);
  font-size: 14px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  color: rgba(50, 50, 50, 1);
  line-height: 20px;
  line-height: 26px;
  border-radius: 0px;
}

.el-select1 .el-input__inner {
  margin-left: 15px;
  width: 200px;
  height: 26px;
  border: 1px solid rgba(151, 151, 151, 1);
  border-radius: 0px;
}

.el-select2 {
  margin-left: 15px;
}

.el-select .el-input.is-focus .el-input__inner {
  color: rgba(151, 151, 151, 1);
  border-color: rgba(151, 151, 151, 1);
}

.el-select .el-input__inner:focus {
  border-color: rgba(151, 151, 151, 1);
}

.el-input__icon {
  height: 100%;
  width: 25px;
  text-align: center;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  line-height: 25px;
}

.content {
  width: 100%;
  margin-top: 15px;
}

.delete {
  width: 16px;
  height: 16px;
  background: rgba(175, 124, 88, 1);
  display: inline-block;
  line-height: 16px;
  text-align: center;
  border-radius: 50%;
  color: #fff;
  margin-left: 10px;
}

.add {
  width: 86px;
  height: 28px;
  background: rgba(175, 124, 88, 1);
  border-radius: 2px;
  display: block;
  margin-top: 15px;
  line-height: 28px;
  font-size: 12px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #ffffff;
  line-height: 17px;
  line-height: 28px;
  text-align: center;
}

.add span {
  
}

el-input--suffix {
  width: 120px;
  height: 26px;
  border: 1px solid rgba(151, 151, 151, 1);
}
</style>

