<template>
  <el-card>
    <ul>
      <li v-for="item in items"> {{item.text}}</li>
    </ul>
  </el-card>
</template>
<script>
export default{
  data () {
    return {
      items: [{
        text: 'lorem'
      },{
        text: 'zhucc'
      },{
        text: 'ddddd'
      }]
    }
  }
}
</script>
<style>

</style>