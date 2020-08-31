<template>
  <div class="admink">
    <span v-if="xian">{{id}}</span>
    <br />加法：
    <span>组件这个东西怎么用的呢</span>
    <br />
    <div>
      <input v-model="qian" type="number" />
      +
      <input v-model="hou" type="number" />
    </div>
    <button class="btn" @click="jiafa">加以</button>
    {{i}}
    
  </div>
</template>

<script>
export default {
  name: "admin",
  data() {
    return {
      id: "我是白小羽",
      xian: true,
      qian: 1,
      hou: 0,
      i:0
    };
  },
  methods:{
      jiafa:function(){
          return this.i++
      }
  }
};
</script>

<style>
.admink {
  background-color: red;
  color: white;
}
</style>