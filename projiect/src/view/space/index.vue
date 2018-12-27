<template>
    <div class="space">
        <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
        <el-dialog
            title="编辑设备信息"
            :visible.sync="dialogVisible"
            width="100%"
            :before-close="handleClose">
            <!-- 内容组件 -->
            <SpaceTitle></SpaceTitle>
            <span slot="footer" class="dialog-footer">
                <button @click="dialogVisible = false" class="del">取 消</button>
                <button type="primary" @click="dialogVisible = false" class="right">确 定</button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import SpaceTitle from "./child/spaceTitle";

export default {
  data() {
    return {
      dialogVisible: true
    };
  },
  components: {
    SpaceTitle
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>

<style>
.el-dialog__title {
  width: 96px;
  height: 22px;
  font-size: 16px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  color: rgba(50, 50, 50, 1);
  line-height: 22px;
}

.space {
  width: 100%;
  height: 100%;
}
.el-dialog__wrapper {
  width: 100%;
  height: 100%;
}
.el-dialog {
  width: 100%;
  height: 100%;
}
.el-dialog__body {
  padding: 20px 20px 10px;
}
.el-dialog {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.el-dialog__footer {
  text-align: center;
}
.el-button--default {
  width: 100px;
  margin-right: 5px;
  border: 1px solid rgb(119, 77, 8);
}
.el-button--primary {
  width: 100px;
  margin-left: 5px;
  border: 1px solid rgb(119, 77, 8);
  background: rgb(119, 77, 8);
}

.del {
  width: 88px;
  height: 28px;
  border-radius: 4px;
  border: 1px solid rgba(175, 124, 88, 1);
  font-size: 12px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(50, 50, 50, 1);
  line-height: 17px;
  background: #fff;
}

.right {
  width: 88px;
  height: 28px;
  background: rgba(175, 124, 88, 1);
  border-radius: 4px;
  font-size: 12px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 17px;
  border: 0;
  margin-left: 60px;
}
</style>
