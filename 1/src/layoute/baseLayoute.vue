<template>
    <div class="base">
        <div class="base-left">
            <el-row class="tac">
                <el-col :span="12">
                    <h5>StartAdmin</h5>
                    <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose">
                    <el-submenu index="1">
                        <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>导航一</span>
                        </template>
                        <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                    </el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </div>
        <div class="base-right">

        </div>
    </div>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="scss" scoped>
    .base{
        width: 100%;
        height: 100%;
        display: flex;
    }
    .base-left{
        width: 20%;
        height: 100%;
        background: #ccc;
    }
    .base-right{
        flex:1;
        background: #cfc;
    }
    .tac{
        width: 100%;
        height: 100%;
    }
    .el-col{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        h5{
            width: 100%;
            height: auto;
            padding: 20px 0;
            text-align: center;
            font-size:20px;
            background: #002140;
            color:#fff;
        }
        ul{
            flex:1;
            background: #001529;
            li{
                color:#fff;
            }
        }
    }
    .el-menu{
        background: #000C17;
        li{
            background: #000C17;
        }
    }
    .el-menu-item{
        min-width: 0;
    }
    .is-active{
        background: #fff;
        z-index: 9;
    }
</style>

