<template>
    <div>
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
     <el-button type="text" @click="deleteClick" class="delete">×</el-button>
  </div>
  <div v-for="(item, index) in form" :key="index" class="content">
    <input type="text" class="input">
    <el-select class="el-select" v-model="item.label" placeholder="全部" clearable filterable @change="getChildrenValue">
      <el-option
      v-for="item in addList"
      :key="item.value"
      :label="item.label"
      :value="item.value">
      </el-option>
    </el-select>
      <el-select class="el-select"  v-model="item.label1" placeholder="全部" clearable filterable>
      <el-option
      v-for="item in addList1"
      :key="item.value"
      :label="item.label"
      :value="item.value">
      </el-option>
      </el-select>
    <el-button type="text" @click="deleteItem(index)" class="delete">×</el-button>
  </div>
  <span @click="add" class="add"><span>＋</span> 添加设备</span>
  <div>
    <span @click="changeClick('+')">+</span>
    <span>{{this.$store.state.app.num}}</span>
    <span @click="changeClick('-')">-</span>
  </div>
</div>
</template>

<script>
import Label from "../components/label";
import NewTag from "../components/new_tag";
import MessageBox from "../components/MessageBox";
import mock from "../mock/mock";

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
  mounted() {
    console.log('this.$store....',this.$store)
  },
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
    },
    changeClick(type) {
      this.$store.commit({
        type: 'app/changNum',
        payload: type
      })
    }
  }
};
</script>

<style>
.input {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.content {
  width: 100%;
  margin-top: 15px;
}

.delete {
  font-size: 20px;
}

.add {
  display: block;
  width: 150px;
  background: brown;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #ffffff;
  font-size: 15px;
  margin-top: 15px;
}

.add span {
  font-size: 20px;
}
</style>

