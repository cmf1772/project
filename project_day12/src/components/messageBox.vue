<template>
  <div id="app">
    <div class="form-group">
      <label>name:</label>
      <input type="text" name="" v-model='newitems.name'>
    </div>
    <div class="form-group">
      <label>age:</label>
      <input type="text" name="" v-model='newitems.age'>
    </div>
    <div class="form-group">
      <label>sex:</label>
      <select v-model='newitems.sex'>
        <option value="男">男</option>
        <option value="女">女</option>
      </select>, 
      
 
    </div>
    <div class="form-group">
      <label></label>
      <button @click = 'addPerson'>Create</button>
    </div>
 
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Sex</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items"><!--v-for-->
          <td>{{item.name}}</td>
          <td>{{item.age}}</td>
          <td>{{item.sex}}</td>
          <td><button @click="deletePerson($index)">Delete</button></td>
        </tr>
      </tbody>
 
    </table>
  </div>
</template>

<script>
  export default {

    data() {
      return  {
        newitems:{
        name:'',
        age:'18',
        sex:'女'
      },//newitems默认的
      items:[{
        name:'lily',
        age:18,
        sex:'女'
      },{
        name:'lily',
        age:18,
        sex:'女'
      },{
        name:'lily',
        age:18,
        sex:'女'
      },{
        name:'lily',
        age:18,
        sex:'女'
      },{
        name:'lily',
        age:18,
        sex:'女'
      }]
      }
    },
    methods: {
      addPerson:function(){
        this.items.push(this.newitems)//往items中添加newitems
        this.newitems = {name:'',age:'18',sex:'女'}
      },//添加元素
      deletePerson: function(index){
        // 删一个数组元素
        this.items.splice(index,1);
      },
      open2() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    }
  }
</script>