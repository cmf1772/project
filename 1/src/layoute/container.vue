<template>
    <el-container style="border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <h5>我在啊</h5>
            <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>导航一</template>
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
                <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                <el-menu-item index="2-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                <el-menu-item index="3-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="3-4">
                <template slot="title">选项4</template>
                <el-menu-item index="3-4-1">选项4-1</el-menu-item>
                </el-submenu>
            </el-submenu>
            </el-menu>
        </el-aside>
        
        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>查看</el-dropdown-item>
                    <el-dropdown-item>新增</el-dropdown-item>
                    <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>王小虎</span>
            </el-header>
            <div class="el-header-list">
                <p>首页 / 商品管理 / 商品列表</p>
                <h5>商品列表</h5>
            </div>
            <el-main>
                <div>
                    商品名称 : <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
                <el-table :data="tableData">
                    <el-table-column prop="date" label="日期" width="140">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="120">
                    </el-table-column>
                    <el-table-column prop="address" label="地址">
                    </el-table-column>
                </el-table>
            </el-main>
        </el-container>
    </el-container> 
</template>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item),
        input : ''
      }
    }
  };
</script>

<style lang="scss" scoped>
    .el-container{
        width: 100%;
        height: 100%;
    }
    .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    }

    .el-aside {
    color: #333;
    }
    .el-aside{
        h5{
            width: 100%;
            padding: 20px 0;
            text-align: center;
            font-size:20px;
        }
    }
    .el-header-list{
        width:100%;
        height: auto;
        padding: 10px 0;
        border-bottom: 1px solid #ccc;
        background: #fff;
        p{
            margin-left:20px;
            color:#999;
            font-size:13px;
        }
        h5{
            font-size:18px;
            margin-top:10px;
            margin-left:20px;
        }
    }
    .el-main{
        background: rgb(178, 186, 196);
    }
    .el-table--enable-row-transition{
        height: 500px;
        overflow-y:auto;
    }
</style>
